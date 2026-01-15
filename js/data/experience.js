// Work Experience and Professional History
const experienceData = [
    {
        title: "IT Operations",
        company: "UT Arlington Office of Information Technology",
        period: "Sep 2024 – Present",
        location: "Arlington, TX",
        type: "Full-time",
        description: "Designed and developed an AI-powered chatbot using Python and NLP for campus IT, automating support queries through model-based intent detection. Improved ticket resolution time by 18% and deployed retraining pipelines with ServiceNow integration. Supported IT operations by developing automation scripts and optimizing infrastructure workflows.",
        technologies: ["Python", "NLP", "Machine Learning", "AI", "ServiceNow", "Automation"],
        category: "work"
    },
    {
        title: "OIT Tech Support",
        company: "UT Arlington Office of Information Technology",
        period: "Aug 2024 - Sep 2024",
        location: "Arlington, TX",
        type: "Full-time",
        description: "Supported ~5,000+ users, resolving hardware, software, and network issues in Linux, macOS, and Windows systems. Documented IT workflows and created knowledge-base SOPs, reducing ticket escalations by 20%. Assisted in device imaging, switch configurations, and network maintenance across campus labs.",
        technologies: ["Linux", "macOS", "Windows", "Technical Documentation", "IT Support", "System Administration"],
        category: "work"
    },
    {
        title: "Full Stack Developer",
        company: "Saintechinc",
        period: "Feb 2023 - Nov 2023",
        location: "Remote",
        type: "Full-time",
        description: "Built and deployed a responsive full-stack application with secure user roles and real-time analytics. Achieved 99.9% uptime and improved SEO metrics by 40% through structured data and optimized routing. Applied component-based architecture for modular scalability and maintainability.",
        technologies: ["Python", "React", "Node.js", "REST APIs", "Authentication", "Deployment"],
        category: "work"
    },
    {
        title: "ML Content Developer",
        company: "SmartKnowers",
        period: "Jun 2022 - Jul 2022",
        location: "Remote",
        type: "Internship",
        description: "Designed ML learning modules on model evaluation, data pipelines, and cloud deployment. Delivered interactive Jupyter notebooks and exercises that increased course engagement by 30%.",
        technologies: ["Machine Learning", "Jupyter", "Content Creation", "Cloud Deployment", "Data Pipelines"],
        category: "internship"
    },
    {
        title: "Machine Learning Engineer",
        company: "1StopAI",
        period: "Nov 2021 - Jan 2022",
        location: "Remote",
        type: "Internship",
        description: "Developed real-time mood and gender classification models for customer support calls. Improved routing accuracy by 15% through emotion detection and ML inference optimization. Deployed trained models in production using lightweight inference APIs.",
        technologies: ["Python", "scikit-learn", "Audio Processing", "Machine Learning", "ML Deployment"],
        category: "internship"
    }
];

// Export for both browser and Node.js
if (typeof window !== 'undefined') {
    window.experienceData = experienceData;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = experienceData;
}
