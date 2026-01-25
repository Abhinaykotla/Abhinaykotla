// Projects and Technical Work
const projectsData = [
    {
        title: "Edge- and Color-Aware Adversarial Image Inpainting",
        description: "Developed a dual-GAN image inpainting model that integrates edge and color guidance for semantically coherent and photorealistic reconstructions. Achieved a 7% reduction in perceptual loss on CelebA and Places2 benchmarks.",
        technologies: ["Python", "GANs", "Deep Learning", "Computer Vision"],
        category: "ai-ml",
        featured: true,
        github: "https://github.com/Abhinaykotla/EdgeConnect_Plus_Inpainting_with_Edge_and_Color_Guidance",
        image: "js/data/images/projects/image-inpainting.png",
        details: "7% reduction in perceptual loss on CelebA and Places2."
    },
    {
        title: "Emotionally Intelligent Chatbot",
        description: "Built a multimodal chatbot capable of interpreting user sentiment via voice and facial cues. Integrated real-time emotion recognition and transformer-based language models to improve user engagement.",
        technologies: ["Python", "NLP", "Hugging Face Transformers", "TensorFlow", "PyTorch"],
        category: "ai-ml",
        featured: true,
        github: "<placeholder>",
        image: "js/data/images/projects/emotion-chatbot.jpg",
        details: "Real-time emotion recognition, multimodal input."
    },
    {
        title: "News Summarization using T5 Transformer",
        description: "Developed a T5-based abstractive text summarization system. Achieved ROUGE-1: 0.532, ROUGE-2: 0.351, ROUGE-L: 0.427 and cosine similarity of 0.80, highlighting improved semantic retention and summary coherence.",
        technologies: ["Python", "T5", "NLP", "Transformers"],
        category: "ai-ml",
        featured: true,
        github: "https://github.com/Abhinaykotla/news-summarization-T5-Transformer",
        image: "js/data/images/projects/news-summarization.jpg",
        details: "ROUGE-1: 0.532, ROUGE-2: 0.351, ROUGE-L: 0.427, cosine: 0.80."
    },
    {
        title: "Efficient Computer Vision Models with Knowledge Distillation",
        description: "Created a modular CNN architecture for image classification using student–teacher knowledge distillation. Compressed a 669MB teacher model to a 6.5MB student (99% smaller) while maintaining 97% accuracy on the Intel Image Classification dataset via residual pruning and quantized training (FP16, FP8).",
        technologies: ["Python", "CNNs", "Quantization", "PyTorch"],
        category: "ai-ml",
        featured: true,
        github: "https://github.com/Abhinaykotla/Knowledge_Distilation_for_Smaller_Models_in_CV",
        image: "js/data/images/projects/knowledge-distillation.jpg",
        details: "669MB → 6.5MB, 97% accuracy, quantized training."
    },
    {
        title: "Voice-Based Gender Recognition System",
        description: "Trained classical ML models (RFC, SVM, KNN, etc.) on 32k voice samples using 14 acoustic features. Achieved 98.5% accuracy with Random Forest Classifier. Integrated into a call center workflow for pre-call user profiling.",
        technologies: ["Python", "scikit-learn", "ML"],
        category: "ai-ml",
        featured: false,
        github: "https://github.com/Abhinaykotla/Gender-recognisition-voice",
        image: "js/data/images/projects/voice-recognition.jpg",
        details: "98.5% accuracy, RFC, SVM, KNN, 32k samples."
    },
    {
        title: "Road Surface Analysis and Classification",
        description: "Built a GUI-driven machine learning tool for road quality assessment. Trained on 3,500 samples to classify surface defects and life span predictions to aid in predictive maintenance planning.",
        technologies: ["Python", "scikit-learn", "Qt Designer"],
        category: "ai-ml",
        featured: false,
        github: "https://github.com/Abhinaykotla/Road-Surface-Analysis-and-classification",
        image: "js/data/images/projects/road-analysis.jpg",
        details: "GUI, 3,500 samples, predictive maintenance."
    },
    {
        title: "TuneParams.ai Community Platform",
        description: "Built a comprehensive web-based community forum platform for AI/ML discussions. Features user authentication, thread/reply system, real-time interactions, admin dashboard, and public read access. Implemented responsive design with Firebase backend for scalable user management.",
        technologies: ["React", "Firebase", "Firestore", "CSS3", "JavaScript", "React Router", "Context API"],
        category: "web",
        featured: true,
        github: "https://github.com/TuneParams-ai/platform-frontend",
        image: "js/data/images/projects/tpai.png",
        details: "Full-stack forum platform, Firebase Auth, admin dashboard, responsive design."
    },
    {
        title: "Saintechinc Website",
        description: "Fully responsive business website built with modern web technologies. Features include responsive design, SEO optimization, and secure hosting.",
        technologies: ["React", "Next.js", "Node.js", "CSS3", "JavaScript"],
        category: "web",
        featured: false,
        github: "https://github.com/abhinaykotla/saintechinc-website",
        image: "js/data/images/projects/saintechinc.jpg",
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
