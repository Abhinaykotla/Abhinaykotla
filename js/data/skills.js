// Skills and Technical Competencies
const skillsData = {
    "Programming Languages": {
        items: ["Python (Advanced)", "JavaScript", "C++", "Java", "Scala", "R", "SQL", "Bash"],
        category: "technical"
    },
    "Machine Learning & AI": {
        items: ["Deep Learning", "Generative AI", "NLP", "Transformer Models", "GANs", "Transfer Learning", "Computer Vision", "Statistical Analysis"],
        category: "technical"
    },
    "Web Development": {
        items: ["React", "Next.js", "Node.js", "Firebase", "Firestore", "React Router", "Context API", "HTML5", "CSS3", "Responsive Design"],
        category: "technical"
    },
    "Frameworks & Libraries": {
        items: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "OpenCV", "Pandas", "Spark", "Matplotlib", "Hugging Face Transformers"],
        category: "technical"
    },
    "Big Data & Cloud": {
        items: ["Apache Spark", "Hadoop", "Kubernetes", "AWS", "Google Cloud", "Azure", "Firebase"],
        category: "technical"
    },
    "DevOps & Deployment": {
        items: ["MLOps", "Model Deployment", "Docker", "GitHub Actions"],
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
