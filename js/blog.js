// Blog page JavaScript
class BlogInterface {
    constructor() {
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupNewsletterForm();
        this.setupSearchFunctionality();
        this.setupCategoryFiltering();
        this.setupReadingProgress();
    }

    setupNavigation() {
        // Mobile menu toggle (reuse from main interface)
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }
    }

    setupNewsletterForm() {
        const form = document.querySelector('.newsletter-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('.newsletter-input').value;

            if (this.validateEmail(email)) {
                this.showNotification('Thank you for subscribing! You\'ll receive updates on new posts.', 'success');
                form.reset();
            } else {
                this.showNotification('Please enter a valid email address.', 'error');
            }
        });
    }

    setupSearchFunctionality() {
        // Add search functionality (can be expanded)
        const posts = document.querySelectorAll('.blog-post');

        // This can be expanded to include a search input
        this.posts = Array.from(posts).map(post => ({
            element: post,
            title: post.querySelector('.post-title').textContent.toLowerCase(),
            excerpt: post.querySelector('.post-excerpt').textContent.toLowerCase(),
            tags: Array.from(post.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase())
        }));
    }

    setupCategoryFiltering() {
        const categoryLinks = document.querySelectorAll('.category-link');
        const tagCloudItems = document.querySelectorAll('.tag-cloud-item');

        // Category filtering
        categoryLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const category = link.textContent.split('(')[0].trim().toLowerCase();
                this.filterPosts(category, 'category');
            });
        });

        // Tag filtering
        tagCloudItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const tag = item.textContent.toLowerCase();
                this.filterPosts(tag, 'tag');
            });
        });
    }

    filterPosts(filterValue, filterType) {
        const posts = document.querySelectorAll('.blog-post');

        posts.forEach(post => {
            let shouldShow = false;

            if (filterType === 'tag') {
                const tags = post.querySelectorAll('.tag');
                shouldShow = Array.from(tags).some(tag =>
                    tag.textContent.toLowerCase().includes(filterValue)
                );
            } else if (filterType === 'category') {
                // For category filtering, you might need to add data attributes to posts
                shouldShow = true; // Placeholder - implement based on your categorization
            }

            if (shouldShow) {
                post.style.display = 'block';
                post.style.opacity = '1';
            } else {
                post.style.opacity = '0';
                setTimeout(() => {
                    post.style.display = 'none';
                }, 300);
            }
        });
    }

    setupReadingProgress() {
        // Add reading progress indicators for individual posts
        const posts = document.querySelectorAll('.blog-post:not(.coming-soon)');

        posts.forEach(post => {
            const readTime = post.querySelector('.post-read-time').textContent;
            const minutes = parseInt(readTime.match(/\d+/)[0]);

            // Add estimated reading time based on content length
            this.addReadingTimeIndicator(post, minutes);
        });
    }

    addReadingTimeIndicator(post, minutes) {
        const readTime = post.querySelector('.post-read-time');
        const wordsPerMinute = 200;
        const totalWords = minutes * wordsPerMinute;

        readTime.title = `Approximately ${totalWords} words`;
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: type === 'success' ? 'var(--accent-success)' :
                type === 'error' ? 'var(--accent-danger)' : 'var(--accent-primary)',
            color: 'var(--bg-primary)',
            padding: '12px 24px',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-lg)',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease'
        });

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);

        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize blog interface
document.addEventListener('DOMContentLoaded', () => {
    new BlogInterface();
});

// Add blog-specific CSS
const blogStyles = document.createElement('style');
blogStyles.textContent = `
    /* Blog-specific styles */
    .blog-header {
        background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
        padding: 120px 0 80px;
        text-align: center;
        border-bottom: 1px solid var(--border-color);
    }

    .page-title {
        font-size: var(--font-size-5xl);
        font-weight: 700;
        margin-bottom: var(--space-md);
        background: var(--gradient-secondary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .page-subtitle {
        font-size: var(--font-size-xl);
        color: var(--text-secondary);
        max-width: 600px;
        margin: 0 auto;
    }

    .blog-main {
        padding: var(--space-3xl) 0;
    }

    .blog-layout {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: var(--space-3xl);
        align-items: start;
    }

    .blog-posts {
        display: flex;
        flex-direction: column;
        gap: var(--space-3xl);
    }

    .blog-post {
        background: var(--bg-card);
        border-radius: 16px;
        overflow: hidden;
        border: 1px solid var(--border-color);
        transition: all var(--transition-normal);
    }

    .blog-post:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
        border-color: var(--accent-primary);
    }

    .blog-post.featured {
        border: 2px solid var(--accent-primary);
    }

    .blog-post.coming-soon {
        opacity: 0.7;
        position: relative;
    }

    .post-image {
        height: 200px;
        background: var(--gradient-primary);
        position: relative;
        overflow: hidden;
    }

    .post-image::before {
        content: '📝';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 3rem;
        opacity: 0.7;
    }

    .post-badge {
        position: absolute;
        top: 16px;
        left: 16px;
        background: var(--accent-primary);
        color: var(--bg-primary);
        padding: 4px 12px;
        border-radius: 20px;
        font-size: var(--font-size-xs);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .post-content {
        padding: var(--space-xl);
    }

    .post-meta {
        display: flex;
        gap: var(--space-md);
        margin-bottom: var(--space-md);
        font-size: var(--font-size-sm);
        color: var(--text-muted);
        font-family: var(--font-mono);
    }

    .post-title {
        margin-bottom: var(--space-md);
    }

    .post-link {
        color: var(--text-primary);
        text-decoration: none;
        font-size: var(--font-size-2xl);
        font-weight: 600;
        line-height: 1.3;
        transition: color var(--transition-fast);
    }

    .post-link:hover {
        color: var(--accent-primary);
    }

    .post-excerpt {
        color: var(--text-secondary);
        line-height: 1.7;
        margin-bottom: var(--space-lg);
    }

    .post-tags {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-sm);
        margin-bottom: var(--space-lg);
    }

    .tag {
        background: var(--bg-hover);
        color: var(--accent-primary);
        padding: 4px 12px;
        border-radius: 16px;
        font-size: var(--font-size-xs);
        border: 1px solid var(--accent-primary);
        transition: all var(--transition-fast);
    }

    .tag:hover {
        background: var(--accent-primary);
        color: var(--bg-primary);
    }

    .read-more {
        color: var(--accent-primary);
        text-decoration: none;
        font-weight: 500;
        display: inline-flex;
        align-items: center;
        gap: var(--space-sm);
        transition: all var(--transition-fast);
    }

    .read-more:hover {
        color: var(--text-primary);
        transform: translateX(4px);
    }

    .coming-soon-badge {
        background: var(--accent-warning);
        color: var(--bg-primary);
        padding: 6px 12px;
        border-radius: 16px;
        font-size: var(--font-size-xs);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    /* Sidebar Styles */
    .blog-sidebar {
        position: sticky;
        top: 100px;
    }

    .sidebar-section {
        background: var(--bg-card);
        padding: var(--space-xl);
        border-radius: 12px;
        border: 1px solid var(--border-color);
        margin-bottom: var(--space-xl);
    }

    .sidebar-title {
        color: var(--accent-primary);
        font-size: var(--font-size-lg);
        font-weight: 600;
        margin-bottom: var(--space-md);
        padding-bottom: var(--space-sm);
        border-bottom: 2px solid var(--border-accent);
    }

    .sidebar-text {
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: var(--space-md);
    }

    .category-list {
        list-style: none;
    }

    .category-list li {
        margin-bottom: var(--space-sm);
    }

    .category-link {
        color: var(--text-secondary);
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--space-sm) 0;
        transition: color var(--transition-fast);
    }

    .category-link:hover {
        color: var(--accent-primary);
    }

    .count {
        color: var(--text-muted);
        font-size: var(--font-size-sm);
    }

    .recent-posts {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
    }

    .recent-post {
        padding-bottom: var(--space-md);
        border-bottom: 1px solid var(--border-color);
    }

    .recent-post:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }

    .recent-post-link {
        color: var(--text-primary);
        text-decoration: none;
        font-weight: 500;
        display: block;
        margin-bottom: var(--space-xs);
        transition: color var(--transition-fast);
    }

    .recent-post-link:hover {
        color: var(--accent-primary);
    }

    .recent-post-date {
        color: var(--text-muted);
        font-size: var(--font-size-sm);
        font-family: var(--font-mono);
    }

    .newsletter-form {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
    }

    .newsletter-input {
        background: var(--bg-hover);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 12px 16px;
        color: var(--text-primary);
        font-family: var(--font-primary);
        transition: all var(--transition-normal);
    }

    .newsletter-input:focus {
        outline: none;
        border-color: var(--accent-primary);
        box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
    }

    .newsletter-btn {
        background: var(--gradient-primary);
        color: var(--text-primary);
        border: none;
        border-radius: 8px;
        padding: 12px 16px;
        font-weight: 500;
        cursor: pointer;
        transition: all var(--transition-normal);
    }

    .newsletter-btn:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
    }

    .tags-cloud {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-sm);
    }

    .tag-cloud-item {
        background: var(--bg-hover);
        color: var(--text-secondary);
        padding: 6px 12px;
        border-radius: 16px;
        font-size: var(--font-size-xs);
        text-decoration: none;
        border: 1px solid var(--border-accent);
        transition: all var(--transition-fast);
    }

    .tag-cloud-item:hover {
        background: var(--accent-primary);
        color: var(--bg-primary);
        border-color: var(--accent-primary);
        transform: translateY(-2px);
    }

    /* Pagination */
    .pagination {
        display: flex;
        justify-content: center;
        gap: var(--space-md);
        margin-top: var(--space-3xl);
        padding-top: var(--space-2xl);
        border-top: 1px solid var(--border-color);
    }

    .pagination-link {
        background: var(--bg-card);
        color: var(--text-secondary);
        padding: 8px 16px;
        border-radius: 8px;
        text-decoration: none;
        border: 1px solid var(--border-color);
        transition: all var(--transition-fast);
    }

    .pagination-link:hover,
    .pagination-link.active {
        background: var(--accent-primary);
        color: var(--bg-primary);
        border-color: var(--accent-primary);
    }

    .pagination-dots {
        color: var(--text-muted);
        display: flex;
        align-items: center;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .blog-layout {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
        }

        .blog-sidebar {
            position: static;
            order: -1;
        }

        .page-title {
            font-size: var(--font-size-3xl);
        }

        .post-link {
            font-size: var(--font-size-xl);
        }

        .pagination {
            flex-wrap: wrap;
        }
    }
`;

document.head.appendChild(blogStyles);
