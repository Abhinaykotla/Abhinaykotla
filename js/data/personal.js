// Personal Information and Contact Details
const personalData = {
    name: "Abhinay Kotla",
    title: "AI/ML Engineer & Researcher",
    email: "abhinaykotla@gmail.com",
    phone: "+1 469 674 1021",
    location: "Arlington, TX",
    linkedin: "https://linkedin.com/in/abhinaykotla",
    github: "https://github.com/abhinaykotla",
    summary: "Passionate Computer Science graduate specializing in AI and machine learning, with notable experience in developing solutions like emotion-aware chatbots and image recognition systems. Proficient in TensorFlow, PyTorch, and NLP frameworks, with skills in model development and scalable AI implementation. Proven track record in enhancing AI applications, optimizing machine learning models, and engaging in research-driven innovation."
};

// Export for both browser and Node.js
if (typeof window !== 'undefined') {
    window.personalData = personalData;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = personalData;
}
