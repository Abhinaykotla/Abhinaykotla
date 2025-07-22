// Blog Posts and Articles
const blogData = [
    {
        title: "Deep Dive into Generative Adversarial Networks",
        excerpt: "Exploring the architecture and applications of GANs in modern AI, with practical examples and implementation tips.",
        date: "2024-12-15",
        readTime: "8 min read",
        tags: ["AI", "Deep Learning", "GANs"],
        image: "blog/gans-deep-dive.jpg",
        slug: "deep-dive-gans"
    },
    {
        title: "Building Emotion-Aware AI Systems",
        excerpt: "How to integrate emotional intelligence into AI applications for better human-computer interaction.",
        date: "2024-11-28",
        readTime: "6 min read",
        tags: ["NLP", "Emotion AI", "Human-AI"],
        image: "blog/emotion-ai.jpg",
        slug: "emotion-aware-ai"
    },
    {
        title: "MLOps Best Practices for Production AI",
        excerpt: "Essential practices for deploying and maintaining machine learning models in production environments.",
        date: "2024-11-10",
        readTime: "10 min read",
        tags: ["MLOps", "DevOps", "Production AI"],
        image: "blog/mlops-practices.jpg",
        slug: "mlops-best-practices"
    }
];

// Export for both browser and Node.js
if (typeof window !== 'undefined') {
    window.blogData = blogData;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = blogData;
}
