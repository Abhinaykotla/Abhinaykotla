// Main Application JavaScript
class PortfolioApp {
    constructor() {
        this.currentView = 'web';
        this.isLoading = true;

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
        // Simulate loading time for a more polished experience
        const loadingScreen = document.getElementById('loading-screen');
        const minLoadTime = 1500; // Reduced to 1.5 seconds
        const startTime = Date.now();

        const hideLoading = () => {
            const elapsed = Date.now() - startTime;
            const remainingTime = Math.max(0, minLoadTime - elapsed);

            setTimeout(() => {
                if (loadingScreen) {
                    loadingScreen.classList.add('hidden');
                    this.isLoading = false;

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
        // Verify data is available before initializing
        if (typeof portfolioData === 'undefined' || !window.portfolioData) {
            return;
        }

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
        const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;

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

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioApp = new PortfolioApp();
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
