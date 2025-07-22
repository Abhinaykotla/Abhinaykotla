// Projects and Technical Work
const projectsData = [
    {
        title: "Edge- and Color-Aware Adversarial Image Inpainting",
        description: "Developed an inpainting framework that integrates edge and color guidance for realistic image reconstruction. Utilized a dual-GAN architecture to generate missing edges and enhance color continuity.",
        technologies: ["Python", "GANs", "Deep Learning", "Computer Vision", "PyTorch"],
        category: "ai-ml",
        featured: true,
        github: "https://github.com/abhinaykotla/image-inpainting-gan",
        demo: "https://abhinaykotla.github.io/image-inpainting-demo",
        image: "projects/image-inpainting.jpg",
        details: "Evaluated the model on CelebA and Places2 datasets for facial and scene inpainting with state-of-the-art results."
    },
    {
        title: "Emotionally Intelligent Chatbot",
        description: "Built a chatbot capable of recognizing and responding to user emotions using NLP and deep learning. Integrated emotion detection and multimodal interaction for improved user engagement.",
        technologies: ["Python", "NLP", "Hugging Face Transformers", "TensorFlow", "PyTorch"],
        category: "ai-ml",
        featured: true,
        github: "https://github.com/abhinaykotla/emotion-chatbot",
        demo: "https://abhinaykotla.github.io/emotion-chatbot-demo",
        image: "projects/emotion-chatbot.jpg",
        details: "Features voice and facial recognition capabilities for comprehensive emotion analysis."
    },
    {
        title: "News Summarization Using T5 Transformer",
        description: "Developed a summarization model using T5 Transformer to generate concise summaries from lengthy news articles, improving readability and information accessibility.",
        technologies: ["Python", "NLP", "T5 Transformer", "Hugging Face"],
        category: "ai-ml",
        featured: true,
        github: "https://github.com/abhinaykotla/news-summarization-t5",
        demo: "https://abhinaykotla.github.io/news-summarizer",
        image: "projects/news-summarization.jpg",
        details: "Achieved high ROUGE scores on news summarization benchmarks."
    },
    {
        title: "Road Surface Analysis and Classification",
        description: "Designed a machine learning model with a GUI to classify road quality based on surface features and maintenance factors. Trained on 3,500 samples for effective maintenance planning.",
        technologies: ["Python", "scikit-learn", "Qt Designer", "Machine Learning"],
        category: "ai-ml",
        featured: false,
        github: "https://github.com/abhinaykotla/road-surface-analysis",
        demo: "https://abhinaykotla.github.io/road-analyzer",
        image: "projects/road-analysis.jpg",
        details: "Comprehensive solution for municipal road maintenance optimization."
    },
    {
        title: "Gender Recognition based on Voice",
        description: "Developed a machine learning model trained on 32,000 samples to predict speaker gender using 14 voice features. Integrated into call center systems for mood anticipation.",
        technologies: ["Python", "scikit-learn", "Audio Processing", "Machine Learning"],
        category: "ai-ml",
        featured: false,
        github: "https://github.com/abhinaykotla/voice-gender-recognition",
        demo: "https://abhinaykotla.github.io/voice-analyzer",
        image: "projects/voice-recognition.jpg",
        details: "Achieved high accuracy in real-time voice analysis for commercial applications."
    },
    {
        title: "Saintechinc Website",
        description: "Fully responsive business website built with modern web technologies. Features include responsive design, SEO optimization, and secure hosting.",
        technologies: ["React", "Next.js", "Node.js", "CSS3", "JavaScript"],
        category: "web",
        featured: false,
        github: "https://github.com/abhinaykotla/saintechinc-website",
        demo: "https://saintechinc.com",
        image: "projects/saintechinc.jpg",
        details: "Complete end-to-end web development project with ongoing maintenance."
    }
];

// Export for both browser and Node.js
if (typeof window !== 'undefined') {
    window.projectsData = projectsData;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectsData;
}
