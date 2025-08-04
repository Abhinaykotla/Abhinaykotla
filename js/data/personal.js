// Personal Information and Contact Details
const personalData = {
    name: "Abhinay Kotla",
    title: "AI/ML Engineer & Full-Stack Developer",
    email: "abhinaykotla@gmail.com",
    phone: "+1 469 674 1021",
    location: "Arlington, TX",
    linkedin: "https://linkedin.com/in/abhinaykotla",
    github: "https://github.com/abhinaykotla",
    summary: "Passionate Computer Science graduate specializing in AI/ML engineering and full-stack web development. Notable experience in developing AI solutions like emotion-aware chatbots, image recognition systems, and community platforms using React and Firebase. Proficient in TensorFlow, PyTorch, NLP frameworks, and modern web technologies. Proven track record in end-to-end development, from machine learning model optimization to scalable web applications."
};

// Export for both browser and Node.js
if (typeof window !== 'undefined') {
    window.personalData = personalData;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = personalData;
}
