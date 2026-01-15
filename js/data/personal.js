// Personal Information and Contact Details
const personalData = {
    name: "Abhinay Kotla",
    title: "AI/ML Engineer & Full-Stack Developer",
    email: "abhinaykotla@gmail.com",
    phone: "+1 469 674 1021",
    location: "Arlington, TX",
    linkedin: "https://linkedin.com/in/abhinaykotla",
    github: "https://github.com/abhinaykotla",
    summary: "Software Engineer with over 3 years of experience building and deploying AI systems. Skilled in Machine Learning, Data Structures, and Algorithms. Developed AI-powered chatbots, optimized computer vision pipelines, and fine-tuned NLP models for production use. Experienced in full-stack software development, integrating ML with scalable systems, and delivering real-world business impact through data-driven automation."
};

// Export for both browser and Node.js
if (typeof window !== 'undefined') {
    window.personalData = personalData;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = personalData;
}
