// Skills and Technical Competencies
const skillsData = {
    "Programming": {
        items: ["Python (Advanced)", "JavaScript", "C++", "Java", "Scala", "R", "SQL", "Bash"],
        category: "technical"
    },
    "Core CS Areas": {
        items: ["Machine Learning", "Data Structures", "Algorithms", "Systems Design"],
        category: "technical"
    },
    "ML & AI": {
        items: ["Deep Learning", "Generative AI", "LLMs", "Transfer Learning", "NLP", "Transformer Models", "GANs", "Feature Engineering", "Statistical Analysis"],
        category: "technical"
    },
    "Computer Vision": {
        items: ["CNNs", "Vision Transformers (ViTs)", "Image Inpainting", "Object Detection"],
        category: "technical"
    },
    "Frameworks & Libraries": {
        items: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "OpenCV", "Pandas", "Spark", "Matplotlib", "Hugging Face Transformers"],
        category: "technical"
    },
    "Cloud & Big Data": {
        items: ["AWS", "Google Cloud", "Azure", "Apache Spark", "Hadoop", "Kubernetes", "Firebase"],
        category: "technical"
    },
    "DevOps & MLOps": {
        items: ["Docker", "GitHub Actions", "CI/CD", "Model Serving", "Model Deployment", "Terraform", "Monitoring", "MLOps"],
        category: "technical"
    },
    "Data Engineering": {
        items: ["ETL Pipelines", "Data Wrangling", "Kafka Streams", "SQL Optimization"],
        category: "technical"
    },
    "Web Development": {
        items: ["React", "Next.js", "Node.js", "Firebase", "Firestore", "React Router", "Context API", "REST APIs", "HTML5", "CSS3", "Responsive Design"],
        category: "technical"
    },
    "Soft Skills": {
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
