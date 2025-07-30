// Blog Posts and Articles with Full Content
const blogData = [
    {
        "title": "EdgeConnect+: Adversarial Inpainting with Edge and Color Guidance",
        "excerpt": "A three-stage deep learning pipeline that enhances image inpainting by integrating structural edges and color priors. EdgeConnect+ improves visual realism and semantic coherence in challenging masked regions.",
        "date": "2025-07-30",
        "readTime": "10 min read",
        "tags": ["Deep Learning", "Computer Vision", "GANs", "Image Inpainting"],
        "image": "images/blog/edgeconnectplus-main.jpg",
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
    <img src="images/blog/architecture-diagram.jpg" alt="EdgeConnect+ Architecture (Figure 5 in paper)">

    <h2>Dataset and Preprocessing</h2>
    <p>The model was trained and evaluated on the CelebA dataset, which contains over 200,000 facial images. All images were center-cropped and resized to 256×256. Irregular binary masks covering ≥20% of the image were applied to simulate missing regions.</p>
    <p>We used Canny edge detection for both masked inputs and ground truth edge supervision. TELEA inpainting was applied to masked RGB inputs to generate color priors. These priors were fused with predicted edges to form the 7-channel guidance image used in G2.</p>
    <img src="images/blog/dataset-samples.jpg" alt="Sample inputs, edge maps, and guidance (Figures 1–4 in paper)">

    <h2>Model Details</h2>

    <h3>Edge Generator (G1)</h3>
    <p>G1 is a dilated residual network that receives a concatenation of grayscale input, masked edge map, and binary mask. The discriminator D1 enforces realism in predicted edges via adversarial training. G1 is trained using:</p>
    <ul>
      <li>L1 Loss</li>
      <li>Adversarial Loss (PatchGAN)</li>
      <li>Feature Matching Loss</li>
    </ul>
    <img src="images/blog/edge-predictions.jpg" alt="Edge generation results (Figure 7 in paper)">

    <h3>Color Guidance</h3>
    <p>To enhance chromatic consistency, we use the TELEA algorithm to create a blurred approximation of color in the missing regions. This low-frequency color map is overlaid with the edge map to form the fused guidance image.</p>
    <img src="images/blog/guidance-fusion.jpg" alt="Color and edge guidance fusion (Figure 9 in paper)">

    <h3>Final Inpainting Generator (G2)</h3>
    <p>G2 accepts the 7-channel input (masked RGB image + fused guidance + mask) and reconstructs the full image. It uses residual blocks and transposed convolutions, eliminating skip connections for better memory and modularity. It is trained with:</p>
    <ul>
      <li>L1 Loss</li>
      <li>Adversarial Loss</li>
      <li>Perceptual Loss (VGG16)</li>
      <li>Style Loss (Gram matrices)</li>
      <li>Feature Matching Loss</li>
    </ul>
    <img src="images/blog/g2-loss-trends.jpg" alt="G2 loss plots (Figure 13 in paper)">

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
    <img src="images/blog/comparison-outputs.jpg" alt="Visual comparisons with baselines (Figures 10–14 in paper)">

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
        image: "images/blog/emotion-ai.jpg",
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
        image: "images/blog/mlops-practices.jpg",
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
        image: "images/blog/placeholder.svg",
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
        image: "images/blog/placeholder.svg",
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
    )
};

// Export for both browser and Node.js
if (typeof window !== 'undefined') {
    window.blogData = blogData;
    window.blogCategories = blogCategories;
    window.blogTags = blogTags;
    window.blogHelpers = blogHelpers;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { blogData, blogCategories, blogTags, blogHelpers };
}
