// Personal Information and Contact Details
const personalData = {
    name: "Abhinay Kotla",
    title: "AI/ML Engineer & Full-Stack Developer",
    email: "abhinaykotla@gmail.com",
    phone: "+1 469 674 1021",
    location: "Arlington, TX",
    linkedin: "https://linkedin.com/in/abhinaykotla",
    github: "https://github.com/abhinaykotla",
    summary: "Software Engineer with 3+ years of experience building and deploying production-grade AI systems. Proficient in Machine Learning, Deep Learning, and Full-Stack Development. Currently developing AI chatbots for IT support automation at UT Arlington OIT. Experienced in computer vision, NLP, and MLOps, with proven ability to optimize models, reduce inference time, and integrate ML solutions into scalable production systems. Passionate about leveraging AI to solve real-world problems and drive business impact through data-driven automation."
};

// Export for both browser and Node.js
if (typeof window !== 'undefined') {
    window.personalData = personalData;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = personalData;
}
