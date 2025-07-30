// Blog Page JavaScript - Handles dynamic loading of blog content
class BlogPage {
    constructor() {
        this.init();
    }

    init() {
        this.loadBlogPosts();
        this.loadSidebar();
        this.setupEventListeners();
        this.setupNavigation();
    }

    loadBlogPosts() {
        const blogPostsContainer = document.querySelector('.blog-posts');
        if (!blogPostsContainer) return;

        // Get published and coming soon posts
        const publishedPosts = blogHelpers.getPublishedPosts();
        const comingSoonPosts = blogHelpers.getComingSoonPosts();

        let blogHTML = '';

        // Add published posts
        publishedPosts.forEach((post, index) => {
            const isFirstPost = index === 0 && post.featured;
            blogHTML += this.createPostHTML(post, isFirstPost);
        });

        // Add coming soon posts
        comingSoonPosts.forEach(post => {
            blogHTML += this.createComingSoonPostHTML(post);
        });

        blogPostsContainer.innerHTML = blogHTML;
    }

    createPostHTML(post, isFeatured = false) {
        const featuredClass = isFeatured ? 'featured' : '';
        const featuredBadge = isFeatured ? '<div class="post-badge">Featured</div>' : '';

        return `
            <article class="blog-post ${featuredClass}">
                <div class="post-image" style="background-image: url('${post.image}')">
                    ${featuredBadge}
                </div>
                <div class="post-content">
                    <div class="post-meta">
                        <span class="post-date">${blogHelpers.formatDate(post.date)}</span>
                        <span class="post-read-time">${post.readTime}</span>
                    </div>
                    <h2 class="post-title">
                        <a href="blog-post.html?slug=${post.slug}" class="post-link">${post.title}</a>
                    </h2>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <div class="post-tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <a href="blog-post.html?slug=${post.slug}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>
        `;
    }

    createComingSoonPostHTML(post) {
        return `
            <article class="blog-post coming-soon">
                <div class="post-image" style="background-image: url('${post.image}')"></div>
                <div class="post-content">
                    <div class="post-meta">
                        <span class="post-date">Coming Soon</span>
                        <span class="post-read-time">~${post.readTime}</span>
                    </div>
                    <h2 class="post-title">
                        <span class="post-link">${post.title}</span>
                    </h2>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <div class="post-tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <span class="coming-soon-badge">Coming Soon</span>
                </div>
            </article>
        `;
    }

    loadSidebar() {
        this.loadCategories();
        this.loadRecentPosts();
        this.loadTagsCloud();
    }

    loadCategories() {
        const categoriesList = document.querySelector('.category-list');
        if (!categoriesList) return;

        const categoriesHTML = blogCategories.map(category =>
            `<li><a href="#" class="category-link" data-category="${category.slug}">${category.name} <span class="count">(${category.count})</span></a></li>`
        ).join('');

        categoriesList.innerHTML = categoriesHTML;
    }

    loadRecentPosts() {
        const recentPostsContainer = document.querySelector('.recent-posts');
        if (!recentPostsContainer) return;

        const recentPosts = blogHelpers.getRecentPosts(3);
        const recentPostsHTML = recentPosts.map(post => `
            <article class="recent-post">
                <h4><a href="blog-post.html?slug=${post.slug}" class="recent-post-link">${post.title}</a></h4>
                <span class="recent-post-date">${blogHelpers.formatDate(post.date)}</span>
            </article>
        `).join('');

        recentPostsContainer.innerHTML = recentPostsHTML;
    }

    loadTagsCloud() {
        const tagsCloudContainer = document.querySelector('.tags-cloud');
        if (!tagsCloudContainer) return;

        const tagsHTML = blogTags.map(tag =>
            `<a href="#" class="tag-cloud-item" data-tag="${tag.name}">${tag.name}</a>`
        ).join('');

        tagsCloudContainer.innerHTML = tagsHTML;
    }

    setupEventListeners() {
        // Category filtering
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('category-link')) {
                e.preventDefault();
                const category = e.target.dataset.category;
                this.filterByCategory(category);
            }
        });

        // Tag filtering
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('tag-cloud-item')) {
                e.preventDefault();
                const tag = e.target.dataset.tag;
                this.filterByTag(tag);
            }
        });

        // Newsletter form
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleNewsletterSubmission(e);
            });
        }
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

            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }
    }

    filterByCategory(categorySlug) {
        console.log('Filtering by category:', categorySlug);
        // Implementation for category filtering can be added here
    }

    filterByTag(tag) {
        console.log('Filtering by tag:', tag);
        // Implementation for tag filtering can be added here
    }

    handleNewsletterSubmission(e) {
        const email = e.target.querySelector('.newsletter-input').value;
        if (this.validateEmail(email)) {
            alert(`Thank you for subscribing with email: ${email}`);
            e.target.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Initialize blog page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait for blog data to be loaded
    if (typeof blogData !== 'undefined') {
        new BlogPage();
    } else {
        // Wait a bit for the data to load
        setTimeout(() => {
            if (typeof blogData !== 'undefined') {
                new BlogPage();
            }
        }, 100);
    }
});
