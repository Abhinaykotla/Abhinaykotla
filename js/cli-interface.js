// CLI Interface JavaScript
class CLIInterface {
    constructor() {
        this.commands = null;
        this.commandHistory = [];
        this.historyIndex = -1;
        this.terminalContent = null;
        this.terminalInput = null;
        this.isActive = false;

        this.init();
    }

    init() {
        this.terminalContent = document.getElementById('terminal-content');
        this.terminalInput = document.getElementById('terminal-input');

        if (this.terminalInput) {
            this.setupInputHandlers();
            this.setupTabCompletion();
        }

        this.setupTerminalButtons();
        this.setupMobileOptimizations();
        this.addWelcomeMessage();
    }

    // Safely get data with fallback
    getData() {
        if (!this.commands && window.portfolioData) {
            this.commands = window.portfolioData.cliCommands;
        }
        return window.portfolioData;
    }

    // Get CLI commands safely
    getCommands() {
        if (!this.commands) {
            const data = this.getData();
            this.commands = data?.cliCommands || {};
        }
        return this.commands;
    }

    setupMobileOptimizations() {
        this.setupMobileKeyboard();
        this.setupTouchScrolling();
        this.setupMobileCommandShortcuts();
        this.adjustForMobile();
    }

    setupMobileKeyboard() {
        // Prevent zoom on input focus for iOS
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            const meta = document.querySelector('meta[name="viewport"]');
            if (meta) {
                const originalContent = meta.content;

                this.terminalInput.addEventListener('focus', () => {
                    meta.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
                });

                this.terminalInput.addEventListener('blur', () => {
                    meta.content = originalContent;
                });
            }
        }

        // Show mobile keyboard helper
        if (window.innerWidth <= 768) {
            this.addMobileHelperMessage();
        }
    }

    setupTouchScrolling() {
        // Ensure smooth scrolling on mobile
        if (this.terminalContent) {
            this.terminalContent.style.webkitOverflowScrolling = 'touch';
            this.terminalContent.style.overflowY = 'auto';

            // Auto-scroll to bottom when new content is added
            const observer = new MutationObserver(() => {
                this.scrollToBottom();
            });

            observer.observe(this.terminalContent, {
                childList: true,
                subtree: true
            });
        }
    }

    setupMobileCommandShortcuts() {
        // Add touch-friendly command buttons for mobile
        if (window.innerWidth <= 768) {
            this.addMobileCommandBar();
        }
    }

    adjustForMobile() {
        // Adjust terminal height for mobile viewports
        const adjustHeight = () => {
            if (window.innerWidth <= 768) {
                const terminal = document.querySelector('.terminal');
                const availableHeight = window.innerHeight - 20; // Account for padding
                if (terminal) {
                    terminal.style.height = `${availableHeight}px`;
                }
            }
        };

        adjustHeight();
        window.addEventListener('resize', adjustHeight);
        window.addEventListener('orientationchange', () => {
            setTimeout(adjustHeight, 100); // Delay for orientation change
        });
    }

    addMobileHelperMessage() {
        if (this.terminalContent) {
            const helperLine = document.createElement('div');
            helperLine.className = 'terminal-line mobile-helper';
            helperLine.innerHTML = `
                <span class="prompt">📱</span>
                <span class="terminal-text" style="color: var(--accent-secondary);">
                    Mobile tip: Type 'help' for commands, or use the shortcuts below
                </span>
            `;
            this.terminalContent.appendChild(helperLine);
        }
    }

    addMobileCommandBar() {
        const commandBar = document.createElement('div');
        commandBar.className = 'mobile-command-bar';

        const commands = ['help', 'about', 'skills', 'projects', 'resume', 'contact', 'clear'];

        commands.forEach(cmd => {
            const btn = document.createElement('button');
            btn.textContent = cmd;
            btn.className = 'mobile-cmd-btn';

            btn.addEventListener('click', () => {
                this.terminalInput.value = cmd;
                this.processCommand(cmd);
                this.terminalInput.value = '';
            });

            btn.addEventListener('touchstart', () => {
                btn.style.transform = 'scale(0.95)';
            });

            btn.addEventListener('touchend', () => {
                btn.style.transform = 'scale(1)';
            });

            commandBar.appendChild(btn);
        });

        // Add the command bar to the terminal
        const terminal = document.querySelector('.terminal');
        if (terminal) {
            terminal.appendChild(commandBar);
        }
    }

    scrollToBottom() {
        if (this.terminalContent) {
            this.terminalContent.scrollTop = this.terminalContent.scrollHeight;
        }
    }

    setupTerminalButtons() {
        // Close button - switch back to web view
        const closeBtn = document.querySelector('.btn-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                // Use the portfolio app's view toggle functionality
                if (window.portfolioApp && typeof window.portfolioApp.toggleView === 'function') {
                    window.portfolioApp.toggleView();
                } else if (window.app && typeof window.app.toggleView === 'function') {
                    window.app.toggleView();
                } else {
                    // Fallback: manually toggle views
                    const webInterface = document.getElementById('web-interface');
                    const cliInterface = document.getElementById('cli-interface');

                    if (webInterface && cliInterface) {
                        webInterface.classList.add('active');
                        cliInterface.classList.remove('active');

                        // Update current view state
                        if (window.portfolioApp) {
                            window.portfolioApp.currentView = 'web';
                        }
                    }
                }
            });
        }
    }

    setupInputHandlers() {
        this.terminalInput.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'Enter':
                    e.preventDefault();
                    this.processCommand();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    this.navigateHistory('up');
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    this.navigateHistory('down');
                    break;
                case 'Tab':
                    e.preventDefault();
                    this.handleTabCompletion();
                    break;
                case 'c':
                    if (e.ctrlKey) {
                        e.preventDefault();
                        this.interruptCommand();
                    }
                    break;
            }
        });

        // Focus input when terminal is clicked
        document.addEventListener('click', (e) => {
            if (this.isActive && e.target.closest('.terminal')) {
                this.terminalInput.focus();
            }
        });
    }

    setupTabCompletion() {
        const commands = this.getCommands();
        this.availableCommands = Object.keys(commands);

        const data = this.getData();
        this.projectNames = data?.projects?.map(p =>
            p.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim()
        ) || [];
    }

    addWelcomeMessage() {
        if (!this.terminalContent) return;

        const welcomeLines = [
            '',
            '╔══════════════════════════════════════════════════════════════╗',
            '║              Welcome to Abhinay Kotla\'s Portfolio            ║',
            '║                     Interactive Terminal                      ║',
            '╚══════════════════════════════════════════════════════════════╝',
            '',
            'System initialized successfully.',
            'Type \'help\' to see available commands.',
            ''
        ];

        welcomeLines.forEach(line => {
            this.addTerminalLine('', line, 'cli-welcome');
        });
    }

    processCommand() {
        const input = this.terminalInput.value.trim();
        if (!input) return;

        // Add command to history
        this.commandHistory.push(input);
        this.historyIndex = this.commandHistory.length;

        // Display the command
        this.addTerminalLine('abhinay@portfolio:~$', input, 'cli-command');

        // Process the command
        this.executeCommand(input);

        // Clear input
        this.terminalInput.value = '';

        // Scroll to bottom
        this.scrollToBottom();
    }

    executeCommand(input) {
        const args = input.split(' ');
        const command = args[0].toLowerCase();
        const params = args.slice(1);

        // Handle special commands
        if (command === 'clear') {
            this.clearTerminal();
            return;
        }

        if (command === 'resume') {
            this.handleResumeDownload();
            return;
        }

        if (command === 'project' && params.length > 0) {
            this.handleProjectCommand(params.join(' '));
            return;
        }

        // Handle standard commands
        const commands = this.getCommands();
        if (commands[command]) {
            this.addResponse(commands[command].response);
        } else {
            this.addError(`Command not found: ${command}. Type 'help' for available commands.`);
        }
    }

    handleProjectCommand(projectName) {
        const normalizedName = projectName.toLowerCase();
        const data = this.getData();
        const project = data?.projects?.find(p =>
            p.title.toLowerCase().includes(normalizedName) ||
            normalizedName.includes(p.title.toLowerCase().split(' ')[0])
        );

        if (project) {
            const response = `
Project: ${project.title}

Description: ${project.description}

Technologies: ${project.technologies.join(', ')}

Category: ${project.category.toUpperCase()}

Status: ${project.featured ? 'Featured Project' : 'Portfolio Project'}

${project.details ? '\nDetails: ' + project.details : ''}

Links:
• GitHub: ${project.github}

Type 'projects' to see all projects.`;

            this.addResponse(response);
        } else {
            this.addError(`Project "${projectName}" not found. Type 'projects' to see available projects.`);

            // Suggest similar projects
            const suggestions = this.findSimilarProjects(projectName);
            if (suggestions.length > 0) {
                this.addResponse(`\nDid you mean: ${suggestions.join(', ')}?`);
            }
        }
    }

    handleResumeDownload() {
        // Show the CLI response first
        const commands = this.getCommands();
        if (commands.resume) {
            this.addResponse(commands.resume.response);
        }

        // Trigger the actual download
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = 'js/data/Abhinay_s_CV.pdf';
            link.download = 'Abhinay_Kotla_Resume.pdf';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            this.addSuccess('✅ Resume download initiated successfully!');
        }, 1000);
    }

    findSimilarProjects(input) {
        const inputLower = input.toLowerCase();
        const data = this.getData();
        if (!data?.projects) return [];

        return data.projects
            .filter(p => {
                const titleWords = p.title.toLowerCase().split(' ');
                return titleWords.some(word =>
                    word.includes(inputLower) || inputLower.includes(word)
                );
            })
            .map(p => `"${p.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim()}"`)
            .slice(0, 3);
    }

    handleTabCompletion() {
        const input = this.terminalInput.value;
        const words = input.split(' ');
        const currentWord = words[words.length - 1];

        if (words.length === 1) {
            // Complete command
            const matches = this.availableCommands.filter(cmd =>
                cmd.startsWith(currentWord.toLowerCase())
            );

            if (matches.length === 1) {
                this.terminalInput.value = matches[0];
            } else if (matches.length > 1) {
                this.addResponse(`\nAvailable commands: ${matches.join(', ')}`);
            }
        } else if (words[0] === 'project') {
            // Complete project name
            const matches = this.projectNames.filter(name =>
                name.includes(currentWord.toLowerCase())
            );

            if (matches.length === 1) {
                words[words.length - 1] = matches[0];
                this.terminalInput.value = words.join(' ');
            } else if (matches.length > 1) {
                this.addResponse(`\nAvailable projects: ${matches.join(', ')}`);
            }
        }
    }

    navigateHistory(direction) {
        if (this.commandHistory.length === 0) return;

        if (direction === 'up') {
            if (this.historyIndex > 0) {
                this.historyIndex--;
            }
        } else if (direction === 'down') {
            if (this.historyIndex < this.commandHistory.length - 1) {
                this.historyIndex++;
            } else {
                this.historyIndex = this.commandHistory.length;
                this.terminalInput.value = '';
                return;
            }
        }

        this.terminalInput.value = this.commandHistory[this.historyIndex] || '';
    }

    addTerminalLine(prompt, text, className = '') {
        const line = document.createElement('div');
        line.className = `terminal-line ${className}`;

        if (prompt) {
            const promptSpan = document.createElement('span');
            promptSpan.className = 'prompt';
            promptSpan.textContent = prompt;
            line.appendChild(promptSpan);
        }

        const textSpan = document.createElement('span');
        textSpan.className = 'terminal-text';
        textSpan.textContent = text;
        line.appendChild(textSpan);

        this.terminalContent.appendChild(line);
    }

    addResponse(text) {
        const lines = text.split('\n');
        lines.forEach(line => {
            this.addTerminalLine('', line, 'cli-response');
        });
        this.addTerminalLine('', '', ''); // Empty line for spacing
    }

    addError(text) {
        this.addTerminalLine('', text, 'cli-error');
        this.addTerminalLine('', '', ''); // Empty line for spacing
    }

    addSuccess(text) {
        this.addTerminalLine('', text, 'cli-success');
        this.addTerminalLine('', '', ''); // Empty line for spacing
    }

    interruptCommand() {
        this.addTerminalLine('', '^C', 'cli-error');
        this.terminalInput.value = '';
    }

    clearTerminal() {
        this.terminalContent.innerHTML = '';
        this.addWelcomeMessage();
    }

    scrollToBottom() {
        this.terminalContent.scrollTop = this.terminalContent.scrollHeight;
    }

    activate() {
        this.isActive = true;
        if (this.terminalInput) {
            setTimeout(() => {
                this.terminalInput.focus();
            }, 100);
        }
    }

    deactivate() {
        this.isActive = false;
    }

    // Easter eggs and special features
    setupEasterEggs() {
        const originalExecute = this.executeCommand.bind(this);

        this.executeCommand = (input) => {
            const command = input.toLowerCase().trim();

            // Easter eggs
            if (command === 'whoami') {
                this.addResponse('abhinay - AI/ML Engineer & Researcher');
                return;
            }

            if (command === 'pwd') {
                this.addResponse('/home/abhinay/portfolio');
                return;
            }

            if (command === 'ls' || command === 'ls -la') {
                this.addResponse(`total 42
drwxr-xr-x  8 abhinay abhinay  256 Dec 20 2024 .
drwxr-xr-x  3 root    root     96  Dec 20 2024 ..
-rw-r--r--  1 abhinay abhinay 1337 Dec 20 2024 about.txt
-rw-r--r--  1 abhinay abhinay 2048 Dec 20 2024 projects.json
-rw-r--r--  1 abhinay abhinay  512 Dec 20 2024 skills.md
-rw-r--r--  1 abhinay abhinay  256 Dec 20 2024 contact.txt
drwxr-xr-x  2 abhinay abhinay  128 Dec 20 2024 experience/
drwxr-xr-x  2 abhinay abhinay   64 Dec 20 2024 blog/`);
                return;
            }

            if (command.startsWith('echo ')) {
                this.addResponse(command.substring(5));
                return;
            }

            if (command === 'date') {
                this.addResponse(new Date().toString());
                return;
            }

            if (command === 'uptime') {
                const uptime = Math.floor(performance.now() / 1000);
                this.addResponse(`up ${Math.floor(uptime / 60)} minutes`);
                return;
            }

            if (command === 'fortune' || command === 'quote') {
                const quotes = [
                    "The best way to predict the future is to invent it. - Alan Kay",
                    "Machine learning is the new electricity. - Andrew Ng",
                    "AI is the new UI. - Mustafa Suleyman",
                    "The future belongs to those who learn more skills and combine them in creative ways. - Robert Greene"
                ];
                const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
                this.addResponse(randomQuote);
                return;
            }

            if (command === 'sudo make coffee') {
                this.addResponse('☕ Coffee is brewing... Please wait.');
                setTimeout(() => {
                    this.addSuccess('☕ Your coffee is ready! Enjoy coding!');
                }, 2000);
                return;
            }

            if (command === 'exit' || command === 'quit') {
                this.addResponse('Goodbye! Thanks for visiting my portfolio.');
                setTimeout(() => {
                    document.getElementById('toggle-view').click();
                }, 1000);
                return;
            }

            // If no easter egg matched, use original function
            originalExecute(input);
        };
    }
}

// Export for use in main.js
if (typeof window !== 'undefined') {
    window.CLIInterface = CLIInterface;
}
