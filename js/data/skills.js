// Skills and Technical Competencies
const skillsData = {
    "Programming & Core CS": {
        items: ["Python (Advanced)", "JavaScript", "C++", "Java", "SQL", "Data Structures", "Algorithms", "Systems Design"],
        category: "technical"
    },
    "ML & AI": {
        items: ["Machine Learning", "Deep Learning", "Generative AI", "LLMs", "NLP", "Computer Vision", "GANs", "Transfer Learning", "Feature Engineering"],
        category: "technical"
    },
    "Frameworks & Tools": {
        items: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "OpenCV", "Pandas", "Spark", "Hugging Face Transformers", "Matplotlib"],
        category: "technical"
    },
    "Cloud, DevOps & MLOps": {
        items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Model Deployment", "Terraform"],
        category: "technical"
    },
    "Web & Data Engineering": {
        items: ["React", "Next.js", "Node.js", "REST APIs", "Firebase", "ETL Pipelines", "Kafka Streams", "SQL Optimization", "Hadoop"],
        category: "technical"
    },
    "Leadership & Soft Skills": {
        items: ["Research & Innovation", "Team Leadership", "Technical Documentation", "Project Management", "Mentoring", "Full-Stack Development"],
        category: "soft"
    }
};

// Export for both browser and Node.js
if (typeof window !== 'undefined') {
    window.skillsData = skillsData;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = skillsData;
}
