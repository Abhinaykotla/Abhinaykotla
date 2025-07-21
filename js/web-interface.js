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
        this.setupProjectFilters();
        this.setupCounters();
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
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.skill-category, .timeline-item, .project-card, .blog-card').forEach(el => {
            observer.observe(el);
        });

        // Typing animation for hero title
        this.setupTypingAnimation();
    }

    setupTypingAnimation() {
        const typingElement = document.querySelector('.typing-text');
        if (!typingElement) return;

        const text = typingElement.textContent;
        typingElement.textContent = '';

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        // Start typing animation after a delay
        setTimeout(typeWriter, 1000);
    }

    setupCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                }
            });
        }, observerOptions);

        counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };

        updateCounter();
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
    }

    loadAboutContent() {
        const aboutSummary = document.getElementById('about-summary');
        const educationList = document.getElementById('education-list');
        const certificationsList = document.getElementById('certifications-list');

        const data = window.portfolioData || portfolioData;

        if (aboutSummary && data?.personal?.summary) {
            aboutSummary.textContent = data.personal.summary;
        }

        if (educationList && data?.education) {
            educationList.innerHTML = data.education.map(edu => `
                <div class="education-item">
                    <div class="degree">${edu.degree}</div>
                    <div class="institution">${edu.institution}</div>
                    <div class="period">${edu.period} | GPA: ${edu.gpa}</div>
                </div>
            `).join('');
        }

        if (certificationsList && data?.certifications) {
            certificationsList.innerHTML = `
                <ul class="certification-list">
                    ${data.certifications.map(cert => `
                        <li>${cert}</li>
                    `).join('')}
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
                <div class="project-image"></div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-technologies">
                        ${project.technologies.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" class="project-link" target="_blank">
                            <i class="fab fa-github"></i>
                            GitHub
                        </a>
                        <a href="${project.demo}" class="project-link" target="_blank">
                            <i class="fas fa-external-link-alt"></i>
                            Live Demo
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
            <article class="blog-card">
                <div class="blog-image"></div>
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
}

// Export for use in main.js
if (typeof window !== 'undefined') {
    window.WebInterface = WebInterface;
}
