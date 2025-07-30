// Blog Page JavaScript - Handles dynamic loading of blog content
class BlogPage {
    constructor() {
        this.currentSearchQuery = '';
        this.currentFilters = {};
        this.init();
    }

    init() {
        this.loadBlogPosts();
        this.loadSidebar();
        this.setupEventListeners();
        this.setupNavigation();
        this.setupSearch();
        this.handleURLSearch();
    }

    handleURLSearch() {
        // Check for search parameter in URL
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search');

        if (searchQuery) {
            // Set the search input value
            const searchInput = document.getElementById('blog-search-input');
            if (searchInput) {
                searchInput.value = searchQuery;
            }

            // Perform the search
            this.performSearch(searchQuery);
        }
    }

    loadBlogPosts(posts = null) {
        const blogPostsContainer = document.querySelector('.blog-posts');
        if (!blogPostsContainer) return;

        // Use provided posts or get default posts
        let publishedPosts, comingSoonPosts;

        if (posts) {
            publishedPosts = posts.filter(post => post.status === 'published');
            comingSoonPosts = posts.filter(post => post.status === 'coming-soon');
        } else {
            publishedPosts = blogHelpers.getPublishedPosts();
            comingSoonPosts = blogHelpers.getComingSoonPosts();
        }

        let blogHTML = '';

        // Show search results info if searching
        if (this.currentSearchQuery) {
            const totalResults = publishedPosts.length + comingSoonPosts.length;
            blogHTML += `
                <div class="search-results-info">
                    <p><strong>${totalResults}</strong> result${totalResults !== 1 ? 's' : ''} found for "<em>${this.currentSearchQuery}</em>"</p>
                    <button class="clear-search" onclick="blogPageInstance.clearSearch()">Clear Search</button>
                </div>
            `;
        }

        // Add published posts
        publishedPosts.forEach((post, index) => {
            const isFirstPost = index === 0 && post.featured && !this.currentSearchQuery;
            blogHTML += this.createPostHTML(post, isFirstPost);
        });

        // Add coming soon posts
        comingSoonPosts.forEach(post => {
            blogHTML += this.createComingSoonPostHTML(post);
        });

        // Show no results message if searching and no results
        if (this.currentSearchQuery && publishedPosts.length === 0 && comingSoonPosts.length === 0) {
            blogHTML += `
                <div class="no-results">
                    <h3>No posts found</h3>
                    <p>Try adjusting your search terms or <button class="clear-search-link" onclick="blogPageInstance.clearSearch()">clear your search</button> to see all posts.</p>
                </div>
            `;
        }

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

    setupSearch() {
        // Create search interface if it doesn't exist
        this.createSearchInterface();

        // Setup search functionality
        const searchInput = document.getElementById('blog-search-input');
        const searchButton = document.getElementById('blog-search-button');
        const advancedSearchToggle = document.getElementById('advanced-search-toggle');

        if (searchInput) {
            // Real-time search as user types (debounced)
            let searchTimeout;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    this.performSearch(e.target.value);
                }, 300);
            });

            // Search on Enter key
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.performSearch(e.target.value);
                }
            });
        }

        if (searchButton) {
            searchButton.addEventListener('click', () => {
                const query = searchInput ? searchInput.value : '';
                this.performSearch(query);
            });
        }

        if (advancedSearchToggle) {
            advancedSearchToggle.addEventListener('click', () => {
                this.toggleAdvancedSearch();
            });
        }
    }

    createSearchInterface() {
        // Check if search interface already exists
        if (document.getElementById('blog-search-container')) return;

        // Create search interface and insert it before the blog posts
        const blogLayout = document.querySelector('.blog-layout');
        if (!blogLayout) return;

        const searchHTML = `
            <div id="blog-search-container" class="blog-search-container">
                <div class="search-box">
                    <input type="text" id="blog-search-input" placeholder="Search blog posts..." class="search-input">
                    <button id="blog-search-button" class="search-button">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
                <button id="advanced-search-toggle" class="advanced-search-toggle">
                    Advanced Search <i class="fas fa-chevron-down"></i>
                </button>
                <div id="advanced-search-panel" class="advanced-search-panel">
                    <div class="advanced-search-filters">
                        <div class="filter-group">
                            <label for="category-filter">Category:</label>
                            <select id="category-filter" class="filter-select">
                                <option value="">All Categories</option>
                                ${blogCategories.map(cat => `<option value="${cat.slug}">${cat.name}</option>`).join('')}
                            </select>
                        </div>
                        <div class="filter-group">
                            <label for="tag-filter">Tags:</label>
                            <div class="tag-checkboxes">
                                ${blogTags.map(tag => `
                                    <label class="tag-checkbox">
                                        <input type="checkbox" value="${tag.name}" class="tag-filter-checkbox">
                                        ${tag.name} (${tag.count})
                                    </label>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="advanced-search-actions">
                        <button id="apply-filters" class="apply-filters-btn">Apply Filters</button>
                        <button id="reset-filters" class="reset-filters-btn">Reset</button>
                    </div>
                </div>
            </div>
        `;

        blogLayout.insertAdjacentHTML('beforebegin', searchHTML);

        // Setup advanced search event listeners
        this.setupAdvancedSearchListeners();
    }

    setupAdvancedSearchListeners() {
        const applyFiltersBtn = document.getElementById('apply-filters');
        const resetFiltersBtn = document.getElementById('reset-filters');

        if (applyFiltersBtn) {
            applyFiltersBtn.addEventListener('click', () => {
                this.applyAdvancedFilters();
            });
        }

        if (resetFiltersBtn) {
            resetFiltersBtn.addEventListener('click', () => {
                this.resetFilters();
            });
        }
    }

    toggleAdvancedSearch() {
        const panel = document.getElementById('advanced-search-panel');
        const toggle = document.getElementById('advanced-search-toggle');

        if (panel && toggle) {
            const isVisible = panel.style.display === 'block';
            panel.style.display = isVisible ? 'none' : 'block';

            const icon = toggle.querySelector('i');
            if (icon) {
                icon.className = isVisible ? 'fas fa-chevron-down' : 'fas fa-chevron-up';
            }
        }
    }

    performSearch(query) {
        this.currentSearchQuery = query;
        const results = blogHelpers.searchPosts(query);
        this.loadBlogPosts(results);

        // Update URL with search parameter (optional)
        if (query) {
            const url = new URL(window.location);
            url.searchParams.set('search', query);
            window.history.replaceState({}, '', url);
        } else {
            this.clearSearchFromURL();
        }
    }

    applyAdvancedFilters() {
        const searchInput = document.getElementById('blog-search-input');
        const categoryFilter = document.getElementById('category-filter');
        const tagCheckboxes = document.querySelectorAll('.tag-filter-checkbox:checked');

        const query = searchInput ? searchInput.value : '';
        const filters = {};

        if (categoryFilter && categoryFilter.value) {
            filters.category = blogCategories.find(cat => cat.slug === categoryFilter.value)?.name;
        }

        if (tagCheckboxes.length > 0) {
            filters.tags = Array.from(tagCheckboxes).map(cb => cb.value);
        }

        this.currentSearchQuery = query;
        this.currentFilters = filters;

        const results = blogHelpers.advancedSearch(query, filters);
        this.loadBlogPosts(results);
    }

    resetFilters() {
        // Clear search input
        const searchInput = document.getElementById('blog-search-input');
        if (searchInput) searchInput.value = '';

        // Reset category filter
        const categoryFilter = document.getElementById('category-filter');
        if (categoryFilter) categoryFilter.value = '';

        // Uncheck all tag checkboxes
        const tagCheckboxes = document.querySelectorAll('.tag-filter-checkbox');
        tagCheckboxes.forEach(cb => cb.checked = false);

        // Clear search state
        this.currentSearchQuery = '';
        this.currentFilters = {};

        // Reload all posts
        this.loadBlogPosts();
        this.clearSearchFromURL();
    }

    clearSearch() {
        this.resetFilters();
    }

    clearSearchFromURL() {
        const url = new URL(window.location);
        url.searchParams.delete('search');
        window.history.replaceState({}, '', url);
    }

    filterByCategory(categorySlug) {
        const category = blogCategories.find(cat => cat.slug === categorySlug);
        if (category) {
            this.currentFilters = { category: category.name };
            const results = blogHelpers.getPostsByCategory(categorySlug);
            this.loadBlogPosts(results);
        }
    }

    filterByTag(tag) {
        this.currentFilters = { tags: [tag] };
        const results = blogHelpers.getPostsByTag(tag);
        this.loadBlogPosts(results);
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
        window.blogPageInstance = new BlogPage();
    } else {
        // Wait a bit for the data to load
        setTimeout(() => {
            if (typeof blogData !== 'undefined') {
                window.blogPageInstance = new BlogPage();
            }
        }, 100);
    }
});
