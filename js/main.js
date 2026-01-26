// Main Application JavaScript
class PortfolioApp {
    constructor() {
        this.currentView = 'web';
        this.isLoading = true;

        // Listen for data loaded event
        window.addEventListener('portfolioDataLoaded', () => {
            console.log('Data loaded event received');
            this.initializeInterfaces();
        });

        this.init();
    }

    init() {
        this.setupViewToggle();
        this.setupLoadingScreen();
        this.setupKeyboardShortcuts();
        this.setupThemeSystem();
        this.setupPerformanceOptimizations();
        this.setupResponsiveHandling();
        this.setupHamburgerMenu();
        this.setupSmoothScrolling();
        this.setupActiveNavigation();
    }

    setupLoadingScreen() {
        // Check if loading screen has already been shown in this session
        // But always show on manual page refresh (when performance.navigation.type === 1)
        const hasShownLoading = sessionStorage.getItem('loadingShown');
        const isPageRefresh = performance.navigation && performance.navigation.type === 1;
        const loadingScreen = document.getElementById('loading-screen');

        if (hasShownLoading === 'true' && !isPageRefresh) {
            // Skip loading animation - hide immediately
            if (loadingScreen) {
                loadingScreen.classList.add('hidden');
                this.isLoading = false;
                // Initialize interfaces immediately
                setTimeout(() => this.initializeInterfaces(), 100);
            }
            return;
        }

        // Show loading animation for first time/reload
        const minLoadTime = 1500; // Reduced to 1.5 seconds
        const startTime = Date.now();

        const hideLoading = () => {
            const elapsed = Date.now() - startTime;
            const remainingTime = Math.max(0, minLoadTime - elapsed);

            setTimeout(() => {
                if (loadingScreen) {
                    loadingScreen.classList.add('hidden');
                    this.isLoading = false;

                    // Mark loading as shown for this session
                    sessionStorage.setItem('loadingShown', 'true');

                    // Initialize interfaces after loading
                    setTimeout(() => this.initializeInterfaces(), 100);
                }
            }, remainingTime);
        };

        // Hide loading screen when everything is loaded
        if (document.readyState === 'complete') {
            hideLoading();
        } else {
            window.addEventListener('load', hideLoading);
        }
    }

    initializeInterfaces() {
        // Ensure data is loaded before initializing
        const data = window.portfolioData;

        if (!data) {
            console.warn('Portfolio data not available, retrying in 100ms...');
            setTimeout(() => this.initializeInterfaces(), 100);
            return;
        }

        console.log('Initializing interfaces with data:', data);

        // Initialize web interface
        if (!window.webInterface) {
            try {
                window.webInterface = new WebInterface();
            } catch (error) {
                console.error('Error initializing WebInterface:', error);
            }
        }

        // Initialize CLI interface
        if (!window.cliInterface) {
            try {
                window.cliInterface = new CLIInterface();
                if (typeof window.cliInterface.setupEasterEggs === 'function') {
                    window.cliInterface.setupEasterEggs();
                }
            } catch (error) {
                console.error('Error initializing CLIInterface:', error);
            }
        }

        // Setup additional features
        this.setupSmoothAnimations();
        this.setupParallaxEffects();
    }

    setupViewToggle() {
        const toggleBtn = document.getElementById('toggle-view');
        const webInterface = document.getElementById('web-interface');
        const cliInterface = document.getElementById('cli-interface');

        if (!toggleBtn || !webInterface || !cliInterface) return;

        toggleBtn.addEventListener('click', () => {
            this.toggleView();
        });
    }

    toggleView() {
        const toggleBtn = document.getElementById('toggle-view');
        const webInterface = document.getElementById('web-interface');
        const cliInterface = document.getElementById('cli-interface');

        // Close mobile menu when switching views
        this.closeMobileMenu();

        if (this.currentView === 'web') {
            // Switch to CLI
            this.currentView = 'cli';
            webInterface.classList.remove('active');
            cliInterface.classList.add('active');

            toggleBtn.innerHTML = '<i class="fas fa-globe"></i><span>Web Mode</span>';
            toggleBtn.title = 'Switch to Web Mode';

            // Update mobile toggle button
            const mobileToggle = document.getElementById('toggle-view-mobile');
            if (mobileToggle) {
                mobileToggle.innerHTML = '<i class="fas fa-globe"></i><span>Web Mode</span>';
                mobileToggle.title = 'Switch to Web Mode';
            }

            // Activate CLI interface
            if (window.cliInterface) {
                window.cliInterface.activate();
            }

            // Add transition effects
            this.addViewTransition('cli');

        } else {
            // Switch to Web
            this.currentView = 'web';
            cliInterface.classList.remove('active');
            webInterface.classList.add('active');

            toggleBtn.innerHTML = '<i class="fas fa-terminal"></i><span>Dev Mode</span>';
            toggleBtn.title = 'Switch to DEV Mode';

            // Update mobile toggle button
            const mobileToggle = document.getElementById('toggle-view-mobile');
            if (mobileToggle) {
                mobileToggle.innerHTML = '<i class="fas fa-terminal"></i><span>Dev Mode</span>';
                mobileToggle.title = 'Switch to DEV Mode';
            }

            // Deactivate CLI interface
            if (window.cliInterface) {
                window.cliInterface.deactivate();
            }

            // Add transition effects
            this.addViewTransition('web');
        }

        // Save user preference
        localStorage.setItem('preferredView', this.currentView);
    }

    addViewTransition(newView) {
        // Add a subtle transition effect
        document.body.classList.add('view-transitioning');

        // Play a subtle sound effect (optional)
        this.playTransitionSound();

        setTimeout(() => {
            document.body.classList.remove('view-transitioning');
        }, 500);
    }

    playTransitionSound() {
        // Create a subtle beep sound using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.value = this.currentView === 'cli' ? 800 : 600;
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } catch (e) {
            // Silently fail if Web Audio API is not supported
        }
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Don't interfere when user is typing in inputs
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }

            // Ctrl/Cmd + K to toggle views
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.toggleView();
            }

            // Escape key to switch to web view
            if (e.key === 'Escape' && this.currentView === 'cli') {
                this.toggleView();
            }

            // Alt + H for help in CLI mode
            if (e.altKey && e.key === 'h' && this.currentView === 'cli') {
                e.preventDefault();
                if (window.cliInterface && window.cliInterface.terminalInput) {
                    window.cliInterface.terminalInput.value = 'help';
                    window.cliInterface.processCommand();
                }
            }

            // Debug: Ctrl + Alt + L to reset loading screen state (for testing)
            if (e.ctrlKey && e.altKey && e.key === 'l') {
                e.preventDefault();
                sessionStorage.removeItem('loadingShown');
                console.log('Loading screen state reset - refresh page to see loading animation again');
            }
        });
    }

    setupThemeSystem() {
        // Initialize theme system (currently dark only, but prepared for future themes)
        const theme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', theme);

        // Listen for system theme changes
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', (e) => {
                if (!localStorage.getItem('theme')) {
                    document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
                }
            });
        }
    }

    setupSmoothAnimations() {
        // Add intersection observer for smooth animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe all sections for animation
        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });
    }

    setupParallaxEffects() {
        // Subtle parallax effect for hero section
        const hero = document.querySelector('.hero');
        if (!hero) return;

        let ticking = false;

        const updateParallax = () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = hero.querySelectorAll('.neural-network');

            parallaxElements.forEach(element => {
                const speed = 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });

            ticking = false;
        };

        const requestParallaxTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestParallaxTick);
    }

    setupPerformanceOptimizations() {
        // Lazy load images when they come into view
        const lazyImages = document.querySelectorAll('img[data-src]');

        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            lazyImages.forEach(img => imageObserver.observe(img));
        }

        // Preload critical resources
        this.preloadCriticalResources();

        // Setup service worker for caching (optional)
        this.setupServiceWorker();
    }

    preloadCriticalResources() {
        // Preload fonts
        const fontUrls = [
            'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap'
        ];

        fontUrls.forEach(url => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = url;
            document.head.appendChild(link);
        });
    }

    setupServiceWorker() {
        // Register service worker for offline functionality
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('SW registered: ', registration);
                    })
                    .catch(registrationError => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    }

    // Utility methods
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Error handling
    setupErrorHandling() {
        window.addEventListener('error', (e) => {
            console.error('Global error:', e.error);
            // Optionally send error to analytics service
        });

        window.addEventListener('unhandledrejection', (e) => {
            console.error('Unhandled promise rejection:', e.reason);
            // Optionally send error to analytics service
        });
    }

    // Analytics and tracking (optional)
    setupAnalytics() {
        // Track view switches
        const originalToggle = this.toggleView.bind(this);
        this.toggleView = () => {
            originalToggle();

            // Track the event
            if (typeof gtag !== 'undefined') {
                gtag('event', 'view_toggle', {
                    'custom_parameter': this.currentView
                });
            }
        };
    }

    setupResponsiveHandling() {
        // Handle orientation changes
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                this.handleViewportChange();
                this.closeMobileMenu();
            }, 100);
        });

        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleViewportChange();
                // Close mobile menu on resize to desktop
                if (window.innerWidth > 768) {
                    this.closeMobileMenu();
                }
            }, 250);
        });

        // Initial viewport setup
        this.handleViewportChange();
    }

    handleViewportChange() {
        const isMobile = window.innerWidth <= 768;
        const isTablet = window.innerWidth <= 1500 && window.innerWidth > 768;

        // Update body classes for responsive styling
        document.body.classList.toggle('mobile-view', isMobile);
        document.body.classList.toggle('tablet-view', isTablet);
        document.body.classList.toggle('desktop-view', !isMobile && !isTablet);

        // Adjust CLI height on mobile
        if (this.currentView === 'cli' && isMobile) {
            const terminal = document.querySelector('.terminal');
            if (terminal) {
                terminal.style.height = `${window.innerHeight - 20}px`;
            }
        }

        // Trigger interface updates
        if (window.webInterface && typeof window.webInterface.handleResize === 'function') {
            window.webInterface.handleResize();
        }
        if (window.cliInterface && typeof window.cliInterface.handleResize === 'function') {
            window.cliInterface.handleResize();
        }
    }

    setupHamburgerMenu() {
        const hamburger = document.getElementById('hamburger-menu');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        const mobileToggle = document.getElementById('toggle-view-mobile');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');

                // Prevent body scroll when menu is open
                if (navMenu.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            });

            // Close menu when clicking on nav links
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMobileMenu();
                });
            });

            // Setup mobile toggle button
            if (mobileToggle) {
                mobileToggle.addEventListener('click', () => {
                    this.toggleView();
                    this.closeMobileMenu(); // Close menu after switching views
                });
            }

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                    this.closeMobileMenu();
                }
            });
        }
    }

    closeMobileMenu() {
        const hamburger = document.getElementById('hamburger-menu');
        const navMenu = document.getElementById('nav-menu');

        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = target.offsetTop - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-100px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Remove active class from all nav links
                    navLinks.forEach(link => link.classList.remove('active'));

                    // Add active class to current section's nav link
                    const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }
}

// === Neural Network Animated Connections ===
function drawNeuralConnections() {
    const network = document.querySelector('.neural-network');
    const svg = network ? network.querySelector('svg.connections') : null;
    if (!network || !svg) return;

    svg.innerHTML = '';

    const layers = Array.from(network.querySelectorAll('.layer'));
    const layerNodes = layers.map(layer => Array.from(layer.querySelectorAll('.node')));
    const networkRect = network.getBoundingClientRect();

    svg.setAttribute('width', network.offsetWidth);
    svg.setAttribute('height', network.offsetHeight);

    for (let l = 0; l < layerNodes.length - 1; l++) {
        const currentLayer = layerNodes[l];
        const nextLayer = layerNodes[l + 1];

        currentLayer.forEach(nodeA => {
            const rectA = nodeA.getBoundingClientRect();
            const x1 = rectA.left + rectA.width / 2 - networkRect.left;
            const y1 = rectA.top + rectA.height / 2 - networkRect.top;
            const isActiveA = nodeA.classList.contains('active');

            nextLayer.forEach(nodeB => {
                const rectB = nodeB.getBoundingClientRect();
                const x2 = rectB.left + rectB.width / 2 - networkRect.left;
                const y2 = rectB.top + rectB.height / 2 - networkRect.top;
                const isActiveB = nodeB.classList.contains('active');

                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', x1);
                line.setAttribute('y1', y1);
                line.setAttribute('x2', x2);
                line.setAttribute('y2', y2);

                // Add active class if both nodes are active
                if (isActiveA && isActiveB) {
                    line.setAttribute('class', 'connection-line active');
                } else {
                    line.setAttribute('class', 'connection-line');
                }

                svg.appendChild(line);
            });
        });
    }
}

// === Neural Network Node Activation Animation ===
(function animateNeuralNetworkActivation() {
    const network = document.querySelector('.neural-network');
    if (!network) return;
    const layers = Array.from(network.querySelectorAll('.layer'));
    if (layers.length < 2) return;

    // Helper to activate nodes (add to current active set)
    function setLayerActivation(layerIdx, activeIndices) {
        const nodes = Array.from(layers[layerIdx].querySelectorAll('.node'));
        nodes.forEach((node, idx) => {
            if (activeIndices.includes(idx)) {
                node.classList.add('active');
                node.classList.remove('inactive');
            }
            // Do not deactivate here; keep previously activated nodes active
        });
    }

    // Input layer always active
    function activateInputLayer() {
        const nodes = Array.from(layers[0].querySelectorAll('.node'));
        nodes.forEach(node => {
            node.classList.add('active');
            node.classList.remove('inactive');
        });
    }

    // Deactivate all except input (at start of cycle)
    function resetAllExceptInput() {
        for (let l = 1; l < layers.length; l++) {
            const nodes = Array.from(layers[l].querySelectorAll('.node'));
            nodes.forEach(node => {
                node.classList.remove('active');
                node.classList.add('inactive');
            });
        }
    }

    // Randomly select n indices from 0..max-1
    function randomIndices(max, n) {
        const arr = Array.from({ length: max }, (_, i) => i);
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr.slice(0, n);
    }

    // Animation cycle
    function runCycle() {
        activateInputLayer();
        resetAllExceptInput();
        drawNeuralConnections(); // Draw initial state
        let currentLayer = 1;
        function activateNextLayer() {
            if (currentLayer >= layers.length) {
                // End of cycle, restart after longer delay
                setTimeout(runCycle, 1500);
                return;
            }
            const nodes = Array.from(layers[currentLayer].querySelectorAll('.node'));
            let numToActivate;
            if (currentLayer === layers.length - 1) {
                // Output layer: only one node active
                numToActivate = 1;
            } else {
                // Hidden layers: randomly activate 2-5 nodes (or up to all nodes if fewer than 5)
                const maxToActivate = Math.min(6, nodes.length);
                const minToActivate = Math.min(2, nodes.length);
                numToActivate = Math.floor(Math.random() * (maxToActivate - minToActivate + 1)) + minToActivate;
            }
            const indices = randomIndices(nodes.length, numToActivate);
            setLayerActivation(currentLayer, indices);
            drawNeuralConnections(); // Redraw lines after activation
            currentLayer++;
            setTimeout(activateNextLayer, 900);
        }
        setTimeout(activateNextLayer, 900);
    }

    runCycle();
})();

// === JARVIS-style Particle System ===
(function initParticleSystem() {
    const canvas = document.querySelector('.particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const network = document.querySelector('.neural-network');

    function resizeCanvas() {
        canvas.width = network.offsetWidth;
        canvas.height = network.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const particleCount = 50;

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 0.5;
            this.opacity = Math.random() * 0.5 + 0.3;
            this.life = Math.random() * 100 + 100;
            this.maxLife = this.life;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.life--;

            if (this.life <= 0 || this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
            gradient.addColorStop(0, `rgba(255, 140, 66, ${this.opacity * (this.life / this.maxLife)})`);
            gradient.addColorStop(1, 'rgba(255, 140, 66, 0)');
            ctx.fillStyle = gradient;
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Draw connecting lines between nearby particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(255, 140, 66, ${0.15 * (1 - distance / 100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
})();

// === Hero-Wide Particle System ===
(function initHeroParticles() {
    const canvas = document.querySelector('.hero-particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const hero = document.querySelector('.hero');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = hero.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const particleCount = 200; // More particles for the whole hero section

    class HeroParticle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.8;
            this.vy = (Math.random() - 0.5) * 0.8;
            this.size = Math.random() * 2.5 + 0.8;
            this.opacity = Math.random() * 0.6 + 0.2;
            this.life = Math.random() * 200 + 150;
            this.maxLife = this.life;
            this.hue = Math.random() > 0.7 ? 0 : 25; // Mix of red and orange
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.life--;

            // Wrap around edges
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;

            if (this.life <= 0) {
                this.reset();
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
            const alpha = this.opacity * (this.life / this.maxLife);

            if (this.hue === 0) {
                gradient.addColorStop(0, `rgba(255, 71, 87, ${alpha})`);
                gradient.addColorStop(0.5, `rgba(255, 71, 87, ${alpha * 0.5})`);
                gradient.addColorStop(1, 'rgba(255, 71, 87, 0)');
            } else {
                gradient.addColorStop(0, `rgba(255, 140, 66, ${alpha})`);
                gradient.addColorStop(0.5, `rgba(255, 140, 66, ${alpha * 0.5})`);
                gradient.addColorStop(1, 'rgba(255, 140, 66, 0)');
            }

            ctx.fillStyle = gradient;
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new HeroParticle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Draw connecting lines between nearby particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < Math.min(i + 5, particles.length); j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    const alpha = 0.2 * (1 - distance / 150);
                    ctx.strokeStyle = `rgba(255, 140, 66, ${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
})();

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioApp = new PortfolioApp();
    drawNeuralConnections(); // Call on DOMContentLoaded
});

window.addEventListener('resize', () => {
    setTimeout(drawNeuralConnections, 100); // Call on resize
});

// Add CSS for view transitions
const style = document.createElement('style');
style.textContent = `
    .view-transitioning {
        transition: all 0.3s ease;
    }
    
    .animate-in {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Lazy loading styles */
    img.lazy {
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    img.lazy.loaded {
        opacity: 1;
    }
    
    /* Additional responsive improvements */
    @media (max-width: 768px) {
        .toggle-btn span {
            display: none;
        }
        
        .terminal {
            margin: 10px;
            height: calc(100vh - 20px);
        }
    }
`;
document.head.appendChild(style);
