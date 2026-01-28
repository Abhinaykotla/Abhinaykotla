// Web Interface JavaScript
class WebInterface {
    constructor() {
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupSmoothScrolling();
        this.setupAnimations();
        this.loadContent();
        this.setupContactForm();
        this.setupMobileOptimizations();
        this.setupResumeDownload();
    }

    setupMobileOptimizations() {
        this.setupTouchGestures();
        this.setupViewportHandling();
        this.setupMobileMenuAutoClose();
        this.setupResponsiveImages();
    }

    setupTouchGestures() {
        // Add touch feedback for interactive elements
        const interactiveElements = document.querySelectorAll('.btn, .project-link, .filter-btn, .nav-link');

        interactiveElements.forEach(element => {
            element.addEventListener('touchstart', () => {
                element.style.transform = 'scale(0.95)';
            });

            element.addEventListener('touchend', () => {
                setTimeout(() => {
                    element.style.transform = '';
                }, 100);
            });
        });
    }

    setupViewportHandling() {
        // Handle viewport changes and orientation
        const handleViewportChange = () => {
            // Close mobile menu on orientation change
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');

            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }

            // Adjust terminal height on mobile
            if (window.innerWidth <= 768) {
                const terminal = document.querySelector('.terminal');
                if (terminal) {
                    terminal.style.height = `${window.innerHeight - 40}px`;
                }
            }
        };

        window.addEventListener('orientationchange', handleViewportChange);
        window.addEventListener('resize', handleViewportChange);
    }

    setupMobileMenuAutoClose() {
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');

            if (navMenu && navMenu.classList.contains('active')) {
                if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        });
    }

    setupResponsiveImages() {
        // Handle responsive project images (if they exist)
        const projectImages = document.querySelectorAll('.project-image');
        projectImages.forEach(img => {
            img.style.backgroundSize = 'cover';
            img.style.backgroundPosition = 'center';
        });
    }

    setupNavigation() {
        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close menu when clicking on a link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }

        // Active navigation highlighting
        this.setupActiveNavigation();
    }

    setupActiveNavigation() {
        const sections = document.querySelectorAll('.section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-100px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');

                    // Remove active class from all links
                    navLinks.forEach(link => link.classList.remove('active'));

                    // Add active class to current link
                    const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupAnimations() {
        // Enhanced Intersection Observer for scroll-reveal animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -80px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    entry.target.classList.add('revealed');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.skill-category, .timeline-item, .project-card, .blog-card').forEach(el => {
            observer.observe(el);
        });

        // Setup additional reveal animations
        this.setupContactReveal();
        this.setupAboutReveal();

        // Typing animation for hero title
        this.setupTypingAnimation();
    }

    setupContactReveal() {
        const contactInfo = document.querySelector('.contact-info');
        const contactForm = document.querySelector('.contact-form');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.2 });

        if (contactInfo) observer.observe(contactInfo);
        if (contactForm) observer.observe(contactForm);
    }

    setupAboutReveal() {
        const aboutContent = document.querySelector('.about-content');
        const education = document.querySelector('.education');
        const certifications = document.querySelector('.certifications');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.2 });

        if (aboutContent) observer.observe(aboutContent);
        if (education) observer.observe(education);
        if (certifications) observer.observe(certifications);
    }

    setupTypingAnimation() {
        const typingElements = document.querySelectorAll('.typing-text');
        if (!typingElements.length) return;

        let elementIndex = 0;

        const typeElement = (element) => {
            const text = element.textContent;
            element.textContent = '';
            let i = 0;

            const typeWriter = () => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    // Move to next element after finishing current one
                    elementIndex++;
                    if (elementIndex < typingElements.length) {
                        setTimeout(() => typeElement(typingElements[elementIndex]), 200);
                    }
                }
            };

            typeWriter();
        };

        // Start typing animation after a delay
        setTimeout(() => typeElement(typingElements[0]), 1000);
    }

    loadContent() {
        // Try multiple ways to access the data
        let data = portfolioData;
        if (typeof data === 'undefined') {
            data = window.portfolioData;
        }

        if (typeof data === 'undefined') {
            setTimeout(() => this.loadContent(), 200);
            return;
        }

        window.portfolioData = data; // Ensure it's globally available

        this.loadAboutContent();
        this.loadSkillsContent();
        this.loadExperienceContent();
        this.loadProjectsContent();
        this.loadBlogContent();

        // Setup project filters after content is loaded
        setTimeout(() => this.setupProjectFilters(), 100);
    }

    loadAboutContent() {
        const aboutSummary = document.getElementById('about-summary');
        const educationList = document.getElementById('education-list');
        const certificationsList = document.getElementById('certifications-list');

        const data = window.portfolioData || portfolioData;
        console.log('loadAboutContent called with data:', data);

        if (aboutSummary && data?.summary) {
            console.log('Setting about summary:', data.summary);
            aboutSummary.textContent = data.summary;
        } else {
            console.warn('About summary not loaded:', { aboutSummary, summary: data?.summary });
        }

        if (educationList && data?.education) {
            educationList.innerHTML = data.education.map(edu => `
                <div class="education-item">
                    <div class="degree">${edu.degree}</div>
                    <div class="institution">${edu.institution}</div>
                </div>
            `).join('');
        }

        if (certificationsList && data?.certifications) {
            certificationsList.innerHTML = `
                <ul class="certification-list">
                    ${data.certifications.map(cert => {
                // Handle both old string format and new object format
                if (typeof cert === 'string') {
                    return `<li>${cert}</li>`;
                } else if (cert.name && cert.link) {
                    return `<li><a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="certification-link">${cert.name}</a></li>`;
                } else {
                    return `<li>${cert.name || cert}</li>`;
                }
            }).join('')}
                </ul>
            `;
        }
    }

    loadSkillsContent() {
        const skillsContent = document.getElementById('skills-content');
        if (!skillsContent) return;

        const skillsHTML = Object.entries(portfolioData.skills).map(([category, data]) => {
            const icon = this.getSkillIcon(category);
            return `
                <div class="skill-category">
                    <h3>
                        <i class="${icon}"></i>
                        ${category}
                    </h3>
                    <div class="skill-tags">
                        ${data.items.map(skill => `
                            <span class="skill-tag">${skill}</span>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');

        skillsContent.innerHTML = skillsHTML;
    }

    getSkillIcon(category) {
        const icons = {
            'Programming Languages': 'fas fa-code',
            'Machine Learning & AI': 'fas fa-brain',
            'Frameworks & Libraries': 'fas fa-layer-group',
            'Big Data & Cloud': 'fas fa-cloud',
            'DevOps & Deployment': 'fas fa-cogs',
            'Soft Skills': 'fas fa-users'
        };
        return icons[category] || 'fas fa-star';
    }

    loadExperienceContent() {
        const timeline = document.getElementById('timeline');
        if (!timeline) return;

        const experienceHTML = portfolioData.experience.map(exp => `
            <div class="timeline-item">
                <div class="timeline-content">
                    <h3 class="experience-title">${exp.title}</h3>
                    <div class="experience-company">${exp.company}</div>
                    <div class="experience-period">${exp.period} | ${exp.location}</div>
                    <p class="experience-description">${exp.description}</p>
                    <div class="experience-technologies">
                        ${exp.technologies.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        timeline.innerHTML = experienceHTML;
    }

    loadProjectsContent() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) return;

        const projectsHTML = portfolioData.projects.map(project => `
            <div class="project-card" data-category="${project.category}">
                <div class="project-image" style="background-image: url('${project.image || 'images/projects/placeholder.svg'}')" role="img" aria-label="${project.title} project preview"></div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-technologies">
                        ${project.technologies.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" class="project-link" target="_blank" aria-label="View ${project.title} on GitHub">
                            <i class="fab fa-github" aria-hidden="true"></i>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        `).join('');

        projectsGrid.innerHTML = projectsHTML;
    }

    loadBlogContent() {
        const blogGrid = document.getElementById('blog-grid');
        if (!blogGrid) return;

        const blogHTML = portfolioData.blogPosts.map(post => `
            <article class="blog-card" onclick="window.location.href='blog-post.html?slug=${post.slug}'" style="cursor: pointer;" tabindex="0" role="button" aria-label="Read article: ${post.title}">
                <div class="blog-image" style="background-image: url('${post.image || 'images/blog/placeholder.svg'}')" role="img" aria-label="${post.title} article preview"></div>
                <div class="blog-content">
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <div class="blog-meta">
                        <span class="blog-date">${this.formatDate(post.date)}</span>
                        <span class="blog-read-time">${post.readTime}</span>
                    </div>
                    <div class="blog-tags">
                        ${post.tags.map(tag => `
                            <span class="blog-tag">${tag}</span>
                        `).join('')}
                    </div>
                </div>
            </article>
        `).join('');

        blogGrid.innerHTML = blogHTML;
    }

    setupProjectFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');

                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Filter projects
                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    setupContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            };

            // Here you would typically send the data to a server
            // For now, we'll just show a success message
            this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: type === 'success' ? 'var(--accent-success)' : 'var(--accent-primary)',
            color: 'var(--bg-primary)',
            padding: '12px 24px',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-lg)',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease'
        });

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    setupResumeDownload() {
        // Enhanced resume download with fallback options
        const resumeLinks = document.querySelectorAll('.nav-download, .btn[href*="CV.pdf"]');

        resumeLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.downloadResume(link);
            });
        });
    }

    async downloadResume(element) {
        const resumePath = './js/data/Abhinay\'s_CV.pdf';
        const resumePagePath = './resume.html';
        const filename = 'Abhinay_Kotla_Resume.pdf';

        try {
            // Method 1: Try direct download with fetch
            const response = await fetch(resumePath);

            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);

                this.showNotification('Resume downloaded successfully!', 'success');
            } else {
                throw new Error('File not found');
            }
        } catch (error) {
            console.error('Download failed:', error);

            // Method 2: Fallback to dedicated resume page
            try {
                window.open(resumePagePath, '_blank');
                this.showNotification('Opened dedicated resume page with download options.', 'info');
            } catch (fallbackError) {
                console.error('Fallback failed:', fallbackError);

                // Method 3: Final fallback - direct navigation
                this.showNotification('Redirecting to resume page...', 'info');
                window.location.href = resumePagePath;
            }
        }
    }
}

// Export for use in main.js
if (typeof window !== 'undefined') {
    window.WebInterface = WebInterface;
}
