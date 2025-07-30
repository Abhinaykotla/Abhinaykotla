// Blog Posts and Articles with Full Content
const blogData = [
    {
        "title": "EdgeConnect+: Adversarial Inpainting with Edge and Color Guidance",
        "excerpt": "A three-stage deep learning pipeline that enhances image inpainting by integrating structural edges and color priors. EdgeConnect+ improves visual realism and semantic coherence in challenging masked regions.",
        "date": "2025-07-30",
        "readTime": "10 min read",
        "tags": ["Deep Learning", "Computer Vision", "GANs", "Image Inpainting"],
        "image": "js/data/images/projects/image-inpainting.jpg",
        "slug": "edgeconnect-plus-inpainting",
        "featured": true,
        "category": "AI & Machine Learning",
        "author": "Abhinay Kotla",
        "status": "published",
        "content": `
    <h2>Introduction</h2>
    <p>Image inpainting involves reconstructing missing or corrupted regions of an image to achieve seamless and realistic restoration. Traditional methods such as diffusion- or patch-based techniques often fall short in recovering complex structures or textures. EdgeConnect+ is a deep generative model that advances this task by combining structural and chromatic cues within a modular three-stage architecture.</p>
    <p>This project builds upon the original EdgeConnect model by introducing an additional color guidance module and enhanced fusion strategy, leading to improved semantic and perceptual fidelity.</p>

    <h2>Architecture Overview</h2>
    <p>EdgeConnect+ follows a sequential pipeline:</p>
    <ol>
      <li><strong>Edge Generator (G1):</strong> Predicts structural contours from grayscale masked inputs and binary masks.</li>
      <li><strong>Color Guidance:</strong> Applies TELEA inpainting to produce low-frequency chromatic priors that maintain spatial coherence.</li>
      <li><strong>Inpainting Generator (G2):</strong> Synthesizes final output conditioned on both edge and color guidance.</li>
    </ol>
    <p>This fused approach helps the model generate sharper details and natural transitions in challenging inpainting tasks.</p>
    <div class="image-wrapper">
        <img src="js/data/images/blog/edgeconnect-plus-inpainting/architecture-diagram.png" alt="EdgeConnect+ Architecture (Figure 5 in paper)" class="full-width-image">
    </div>

    <h2>Dataset and Preprocessing</h2>
    <p>The model was trained and evaluated on the CelebA dataset, which contains over 200,000 facial images. All images were center-cropped and resized to 256×256. Irregular binary masks covering ≥20% of the image were applied to simulate missing regions.</p>
    <p>We used Canny edge detection for both masked inputs and ground truth edge supervision. TELEA inpainting was applied to masked RGB inputs to generate color priors. These priors were fused with predicted edges to form the 7-channel guidance image used in G2.</p>
    <img src="js/data/images/blog/edgeconnect-plus-inpainting/Fig1.jpg" alt="Sample inputs, edge maps, and guidance (Figures 1–4 in paper)">

    <h2>Model Details</h2>

    <h3>Edge Generator (G1)</h3>
    <p>G1 is a dilated residual network that receives a concatenation of grayscale input, masked edge map, and binary mask. The discriminator D1 enforces realism in predicted edges via adversarial training. G1 is trained using:</p>
    <ul>
      <li>L1 Loss</li>
      <li>Adversarial Loss (PatchGAN)</li>
      <li>Feature Matching Loss</li>
    </ul>
    <img src="js/data/images/blog/edgeconnect-plus-inpainting/Fig7.png" alt="Edge generation results (Figure 7 in paper)" class="diagram-image">

    <h3>Color Guidance</h3>
    <p>To enhance chromatic consistency, we use the TELEA algorithm to create a blurred approximation of color in the missing regions. This low-frequency color map is overlaid with the edge map to form the fused guidance image.</p>
    <img src="js/data/images/blog/edgeconnect-plus-inpainting/Fig9.png" alt="Color and edge guidance fusion (Figure 9 in paper)">

    <h3>Final Inpainting Generator (G2)</h3>
    <p>G2 accepts the 7-channel input (masked RGB image + fused guidance + mask) and reconstructs the full image. It uses residual blocks and transposed convolutions, eliminating skip connections for better memory and modularity. It is trained with:</p>
    <ul>
      <li>L1 Loss</li>
      <li>Adversarial Loss</li>
      <li>Perceptual Loss (VGG16)</li>
      <li>Style Loss (Gram matrices)</li>
      <li>Feature Matching Loss</li>
    </ul>
    <img src="js/data/images/blog/edgeconnect-plus-inpainting/loss_trends_g2.png" alt="G2 loss plots (Figure 13 in paper)">

    <h2>Results</h2>
    <p>EdgeConnect+ demonstrates promising improvements over the baseline EdgeConnect and Fusion Label methods. Below is a summary of the results on the CelebA test set:</p>
    <table>
      <thead>
        <tr>
          <th>Metric</th><th>Fusion Label</th><th>EdgeConnect</th><th>EdgeConnect+</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>PSNR</td><td>29.16</td><td>25.28</td><td>25.23</td></tr>
        <tr><td>SSIM</td><td>0.9235</td><td>0.846</td><td>0.864</td></tr>
        <tr><td>L1 Loss (%)</td><td>—</td><td>3.03</td><td>4.83</td></tr>
        <tr><td>FID</td><td>—</td><td>2.82</td><td>2.94</td></tr>
        <tr><td>LPIPS</td><td>—</td><td>—</td><td>0.193</td></tr>
      </tbody>
    </table>
    <p>Qualitative results reveal that EdgeConnect+ produces more coherent structure and color transitions in comparison to baselines.</p>
    <img src="js/data/images/blog/edgeconnect-plus-inpainting/Fig10.png" alt="Visual comparisons with baselines (Figures 10–14 in paper)">

    <h2>Challenges and Takeaways</h2>
    <p>Training stability, color bleeding, and guidance image artifacts were initial challenges. These were addressed by replacing Gaussian blur with TELEA inpainting, incorporating gradient penalty for discriminators, and using perceptual/style losses to stabilize G2 outputs.</p>
    <p>Another key insight was that combining color and edge priors early in the pipeline helps the model synthesize content that aligns better both spatially and semantically.</p>

    <h2>Conclusion and Future Work</h2>
    <p>EdgeConnect+ advances generative image inpainting by fusing structure and color into a guided framework. While preliminary results are promising, further training and architectural enhancements such as attention-based fusion and learnable color modules may further improve results.</p>
    <p>The project also opens doors to extending this method to general-purpose datasets like Places2 or integrating multimodal guidance like depth or semantic maps.</p>

    <h2>GitHub and Citation</h2>
    <p>Check out the full codebase and training scripts on GitHub: <a href="https://github.com/Abhinaykotla/EdgeConnect_Plus_Inpainting_with_Edge_and_Color_Guidance">EdgeConnect+</a></p>
    <p><i>If citing this work, please use the report titled: "EdgeConnect+: Adversarial Inpainting with Edge and Color Guidance" by Abhinay Kotla and Sanjana Ravi Prakash, University of Texas at Arlington, 2025.</i></p>
    `
    },
    {
        title: "Building Emotion-Aware AI Systems",
        excerpt: "How to integrate emotional intelligence into AI applications for better human-computer interaction. Learn about sentiment analysis, emotion detection, and creating more empathetic AI systems.",
        date: "2024-11-28",
        readTime: "6 min read",
        tags: ["NLP", "Emotion AI", "Human-AI"],
        image: "js/data/images/blog/emotion-ai.jpg",
        slug: "emotion-aware-ai",
        featured: false,
        category: "AI & Machine Learning",
        author: "Abhinay Kotla",
        status: "published",
        content: `
            <h2>The Importance of Emotional Intelligence in AI</h2>
            <p>As AI systems become more integrated into our daily lives, the ability to understand and respond to human emotions becomes crucial. Emotion-aware AI systems can provide more natural, empathetic, and effective interactions.</p>
            
            <h2>My Approach: Multimodal Emotion Recognition</h2>
            <p>In developing an emotionally intelligent chatbot, I implemented a multimodal approach that combines:</p>
            <ul>
                <li>Voice sentiment analysis using acoustic features</li>
                <li>Facial expression recognition through computer vision</li>
                <li>Text-based emotion detection using transformer models</li>
            </ul>
            
            <h3>Technical Implementation</h3>
            <p>The system architecture includes:</p>
            <ul>
                <li><strong>Audio Processing:</strong> Extract MFCC and spectral features</li>
                <li><strong>Vision Module:</strong> CNN-based facial emotion recognition</li>
                <li><strong>NLP Pipeline:</strong> BERT-based sentiment classification</li>
                <li><strong>Fusion Layer:</strong> Weighted combination of modalities</li>
            </ul>
            
            <blockquote>
                "True emotional intelligence in AI requires understanding context, not just recognizing patterns."
            </blockquote>
            
            <h2>Real-World Applications</h2>
            <p>Emotion-aware AI has applications across various domains:</p>
            <ul>
                <li>Customer service automation</li>
                <li>Mental health support systems</li>
                <li>Educational technology</li>
                <li>Human-robot interaction</li>
            </ul>
            
            <h2>Challenges and Ethical Considerations</h2>
            <p>Building emotion-aware systems raises important questions:</p>
            <ul>
                <li>Privacy concerns with emotional data</li>
                <li>Cultural differences in emotional expression</li>
                <li>Bias in emotion recognition models</li>
                <li>The responsibility of emotional manipulation</li>
            </ul>
            
            <h2>Future Research Directions</h2>
            <p>The field is moving toward:</p>
            <ul>
                <li>More sophisticated context understanding</li>
                <li>Personalized emotion models</li>
                <li>Long-term emotional state tracking</li>
                <li>Integration with large language models</li>
            </ul>
        `
    },
    {
        title: "MLOps Best Practices for Production AI",
        excerpt: "Essential practices for deploying and maintaining machine learning models in production environments. Covering CI/CD pipelines, monitoring, versioning, and scaling strategies.",
        date: "2024-11-10",
        readTime: "10 min read",
        tags: ["MLOps", "DevOps", "Production AI"],
        image: "js/data/images/blog/mlops-practices.jpg",
        slug: "mlops-best-practices",
        featured: false,
        category: "MLOps",
        author: "Abhinay Kotla",
        status: "published",
        content: `
            <h2>Introduction to MLOps</h2>
            <p>Machine Learning Operations (MLOps) is the practice of applying DevOps principles to machine learning workflows. It bridges the gap between model development and production deployment, ensuring reliable, scalable, and maintainable AI systems.</p>
            
            <h2>Core MLOps Principles</h2>
            <p>Successful MLOps implementation relies on several key principles:</p>
            <ul>
                <li><strong>Version Control:</strong> Track data, code, and model versions</li>
                <li><strong>Automation:</strong> Automate training, testing, and deployment pipelines</li>
                <li><strong>Monitoring:</strong> Continuous monitoring of model performance</li>
                <li><strong>Reproducibility:</strong> Ensure consistent results across environments</li>
            </ul>
            
            <h2>Building Robust ML Pipelines</h2>
            <p>A well-designed ML pipeline includes:</p>
            <ol>
                <li><strong>Data Ingestion:</strong> Automated data collection and validation</li>
                <li><strong>Feature Engineering:</strong> Scalable feature transformation</li>
                <li><strong>Model Training:</strong> Distributed training with hyperparameter optimization</li>
                <li><strong>Model Validation:</strong> Comprehensive testing and evaluation</li>
                <li><strong>Deployment:</strong> Blue-green or canary deployment strategies</li>
            </ol>
            
            <h3>Tools and Technologies</h3>
            <p>Popular MLOps tools include:</p>
            <ul>
                <li><strong>Orchestration:</strong> Apache Airflow, Kubeflow, MLflow</li>
                <li><strong>Containerization:</strong> Docker, Kubernetes</li>
                <li><strong>Model Serving:</strong> TensorFlow Serving, Seldon Core</li>
                <li><strong>Monitoring:</strong> Prometheus, Grafana, Evidently AI</li>
            </ul>
            
            <h2>Model Monitoring and Maintenance</h2>
            <p>Production models require continuous monitoring for:</p>
            <ul>
                <li><strong>Data Drift:</strong> Changes in input data distribution</li>
                <li><strong>Concept Drift:</strong> Evolution of the target concept</li>
                <li><strong>Performance Degradation:</strong> Declining model accuracy</li>
                <li><strong>System Health:</strong> Infrastructure and service metrics</li>
            </ul>
            
            <blockquote>
                "The best model is worthless if it can't be deployed and maintained in production."
            </blockquote>
            
            <h2>My Experience with MLOps</h2>
            <p>In my work at UT Arlington's Office of Information Technology, I've implemented MLOps practices for:</p>
            <ul>
                <li>Automated model retraining pipelines</li>
                <li>A/B testing frameworks for model comparison</li>
                <li>Real-time monitoring dashboards</li>
                <li>Scalable feature stores</li>
            </ul>
            
            <h2>Common Pitfalls and How to Avoid Them</h2>
            <p>Learn from common mistakes:</p>
            <ul>
                <li><strong>Neglecting Data Quality:</strong> Implement robust data validation</li>
                <li><strong>Over-Engineering:</strong> Start simple and iterate</li>
                <li><strong>Ignoring Security:</strong> Implement proper access controls</li>
                <li><strong>Poor Documentation:</strong> Maintain comprehensive docs</li>
            </ul>
            
            <h2>Future of MLOps</h2>
            <p>The field is evolving toward:</p>
            <ul>
                <li>AutoML integration for automated model development</li>
                <li>Edge deployment for real-time inference</li>
                <li>Multi-cloud and hybrid cloud strategies</li>
                <li>Integration with large language models</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>MLOps is essential for successful AI initiatives. By following best practices and leveraging the right tools, organizations can build reliable, scalable AI systems that deliver business value consistently.</p>
        `
    },
    {
        title: "Computer Vision in Edge Computing",
        excerpt: "Optimizing computer vision models for edge devices. Performance considerations, model compression techniques, and real-world deployment strategies.",
        date: "2025-02-15",
        readTime: "8 min read",
        tags: ["Computer Vision", "Edge Computing", "Optimization"],
        image: "js/data/images/blog/placeholder.svg",
        slug: "cv-edge-computing",
        featured: false,
        category: "Computer Vision",
        author: "Abhinay Kotla",
        status: "coming-soon",
        content: ""
    },
    // Coming Soon Posts
    {
        title: "Transformer Architecture: Beyond BERT and GPT",
        excerpt: "An in-depth exploration of transformer models, attention mechanisms, and their evolution in modern NLP. Understanding the mathematical foundations and practical implementations.",
        date: "2025-02-01",
        readTime: "12 min read",
        tags: ["Transformers", "NLP", "Attention"],
        image: "js/data/images/blog/placeholder.svg",
        slug: "transformer-architecture",
        featured: false,
        category: "Deep Learning",
        author: "Abhinay Kotla",
        status: "coming-soon",
        content: ""
    }
];

// Function to dynamically generate blog categories with counts
function generateBlogCategories() {
    const categoryMap = new Map();

    // Count categories from published posts only
    blogData
        .filter(post => post.status === 'published')
        .forEach(post => {
            const category = post.category;
            if (categoryMap.has(category)) {
                categoryMap.set(category, categoryMap.get(category) + 1);
            } else {
                categoryMap.set(category, 1);
            }
        });

    // Convert to array and sort by count (descending)
    return Array.from(categoryMap.entries())
        .map(([name, count]) => ({
            name,
            count,
            slug: name.toLowerCase().replace(/[^a-z0-9]/g, '-')
        }))
        .sort((a, b) => b.count - a.count);
}

// Function to dynamically generate blog tags with counts
function generateBlogTags() {
    const tagMap = new Map();

    // Count tags from published posts only
    blogData
        .filter(post => post.status === 'published')
        .forEach(post => {
            post.tags.forEach(tag => {
                if (tagMap.has(tag)) {
                    tagMap.set(tag, tagMap.get(tag) + 1);
                } else {
                    tagMap.set(tag, 1);
                }
            });
        });

    // Convert to array and sort by count (descending)
    return Array.from(tagMap.entries())
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count);
}

// Generate dynamic categories and tags
const blogCategories = generateBlogCategories();
const blogTags = generateBlogTags();

// Helper functions
const blogHelpers = {
    // Get published posts only
    getPublishedPosts: () => blogData.filter(post => post.status === 'published'),

    // Get coming soon posts
    getComingSoonPosts: () => blogData.filter(post => post.status === 'coming-soon'),

    // Get featured posts
    getFeaturedPosts: () => blogData.filter(post => post.featured && post.status === 'published'),

    // Get post by slug
    getPostBySlug: (slug) => blogData.find(post => post.slug === slug),

    // Get recent posts (limit)
    getRecentPosts: (limit = 3) => blogData
        .filter(post => post.status === 'published')
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit),

    // Format date
    formatDate: (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },

    // Get posts by category
    getPostsByCategory: (categorySlug) => blogData.filter(post =>
        post.category.toLowerCase().replace(/[^a-z0-9]/g, '-') === categorySlug
    ),

    // Get posts by tag
    getPostsByTag: (tag) => blogData.filter(post =>
        post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    ),

    // Search posts by query (title, category, tags, excerpt, content)
    searchPosts: (query) => {
        if (!query || query.trim() === '') {
            return blogHelpers.getPublishedPosts();
        }

        const searchTerm = query.toLowerCase().trim();
        const searchWords = searchTerm.split(/\s+/);

        return blogData.filter(post => {
            if (post.status !== 'published') return false;

            // Create searchable text from post
            const searchableText = [
                post.title,
                post.excerpt,
                post.category,
                post.tags.join(' '),
                post.content.replace(/<[^>]*>/g, '') // Remove HTML tags
            ].join(' ').toLowerCase();

            // Check if any search word matches
            return searchWords.some(word => searchableText.includes(word));
        });
    },

    // Advanced search with filters
    advancedSearch: (query, filters = {}) => {
        let results = blogHelpers.searchPosts(query);

        // Filter by category if specified
        if (filters.category) {
            results = results.filter(post =>
                post.category.toLowerCase() === filters.category.toLowerCase()
            );
        }

        // Filter by tags if specified
        if (filters.tags && filters.tags.length > 0) {
            results = results.filter(post =>
                filters.tags.some(tag =>
                    post.tags.some(postTag =>
                        postTag.toLowerCase() === tag.toLowerCase()
                    )
                )
            );
        }

        // Filter by date range if specified
        if (filters.dateFrom || filters.dateTo) {
            results = results.filter(post => {
                const postDate = new Date(post.date);
                const fromDate = filters.dateFrom ? new Date(filters.dateFrom) : null;
                const toDate = filters.dateTo ? new Date(filters.dateTo) : null;

                return (!fromDate || postDate >= fromDate) &&
                    (!toDate || postDate <= toDate);
            });
        }

        return results;
    }
};

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
                this.handleNewsletterSignup(e);
            });
        }
    }

    setupNavigation() {
        // Setup navigation functionality if needed
        // This can include hamburger menu, mobile navigation, etc.
    }

    setupSearch() {
        // Create search interface if it doesn't exist
        this.createSearchInterface();
    }

    createSearchInterface() {
        // Check if search interface already exists
        if (document.getElementById('blog-search-container')) return;

        // Create search interface and insert it before the blog posts
        const blogLayout = document.querySelector('.blog-layout');
        if (!blogLayout) return;

        // Ensure we have blog data before creating search interface
        if (!window.blogCategories || !window.blogTags) {
            console.log('Blog categories/tags not ready, retrying search interface creation...');
            setTimeout(() => this.createSearchInterface(), 100);
            return;
        }

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

        // Setup search event listeners immediately after creation
        this.setupSearchEventListeners();
        // Setup advanced search event listeners
        this.setupAdvancedSearchListeners();
    }

    setupSearchEventListeners() {
        console.log('Setting up search event listeners...');

        const searchInput = document.getElementById('blog-search-input');
        const searchButton = document.getElementById('blog-search-button');
        const advancedSearchToggle = document.getElementById('advanced-search-toggle');

        if (searchInput) {
            console.log('Search input found, adding listeners...');

            // Real-time search as user types (debounced)
            let searchTimeout;
            searchInput.addEventListener('input', (e) => {
                console.log('Search input changed:', e.target.value);
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    this.performSearch(e.target.value);
                }, 300);
            });

            // Search on Enter key
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    console.log('Enter key pressed, searching:', e.target.value);
                    this.performSearch(e.target.value);
                }
            });
        } else {
            console.log('Search input not found!');
        }

        if (searchButton) {
            console.log('Search button found, adding click listener...');
            searchButton.addEventListener('click', () => {
                const query = searchInput ? searchInput.value : '';
                console.log('Search button clicked, query:', query);
                this.performSearch(query);
            });
        } else {
            console.log('Search button not found!');
        }

        if (advancedSearchToggle) {
            advancedSearchToggle.addEventListener('click', () => {
                this.toggleAdvancedSearch();
            });
        }
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
            const isVisible = panel.classList.contains('expanded');

            if (isVisible) {
                panel.classList.remove('expanded');
            } else {
                panel.classList.add('expanded');
            }

            const icon = toggle.querySelector('i');
            if (icon) {
                icon.className = isVisible ? 'fas fa-chevron-down' : 'fas fa-chevron-up';
            }
        }
    }

    performSearch(query) {
        console.log('Performing search with query:', query);

        this.currentSearchQuery = query;

        // Use blogHelpers.searchPosts function
        let results;
        if (!query || query.trim() === '') {
            results = blogHelpers.getPublishedPosts();
        } else {
            if (blogHelpers && blogHelpers.searchPosts) {
                results = blogHelpers.searchPosts(query);
            } else {
                console.error('blogHelpers.searchPosts function not available');
                results = [];
            }
        }

        console.log('Search results:', results);
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
        console.log('Filtering by category:', categorySlug);
        const posts = blogHelpers.getPostsByCategory(categorySlug);
        this.currentSearchQuery = '';
        this.currentFilters = { category: categorySlug };
        this.loadBlogPosts(posts);
    }

    filterByTag(tag) {
        console.log('Filtering by tag:', tag);
        const posts = blogHelpers.getPostsByTag(tag);
        this.currentSearchQuery = '';
        this.currentFilters = { tag: tag };
        this.loadBlogPosts(posts);
    }

    handleNewsletterSignup(event) {
        const formData = new FormData(event.target);
        const email = formData.get('email');

        if (this.validateEmail(email)) {
            // Here you would typically send the email to your backend
            console.log('Newsletter signup:', email);
            alert('Thank you for subscribing to our newsletter!');
            event.target.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Initialize blog page when portfolio data is loaded
window.addEventListener('portfolioDataLoaded', function (event) {
    console.log('Portfolio data loaded, initializing blog page');
    setTimeout(() => {
        if (!window.blogPageInstance) {
            window.blogPageInstance = new BlogPage();
        }
    }, 100);
});

// Fallback initialization for direct access
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (!window.blogPageInstance && (typeof blogData !== 'undefined' || typeof blogCategories !== 'undefined')) {
            console.log('Fallback initialization for blog page');
            window.blogPageInstance = new BlogPage();
        }
    }, 200);
});

// Export for both browser and Node.js
if (typeof window !== 'undefined') {
    window.blogData = blogData;
    window.blogCategories = blogCategories;
    window.blogTags = blogTags;
    window.blogHelpers = blogHelpers;
    // Add global search function for convenience
    window.searchPosts = blogHelpers.searchPosts;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { blogData, blogCategories, blogTags, blogHelpers };
}
