// Work Experience and Professional History
const experienceData = [
    {
        title: "ML Engineer – AI Support Operations",
        company: "UT Arlington OIT",
        period: "Sep 2024 – Present",
        location: "Arlington, TX",
        type: "Full-time",
        description: "Built an AI-powered IT support assistant using Python, NLP, and LLM-based responses for query resolution. Reduced ticket resolution time by 18% using intent detection, retrieval-grounded answers, and ServiceNow integration. Developed automation scripts and internal tools to streamline IT workflows and operational reporting.",
        technologies: ["Python", "NLP", "LLM", "Machine Learning", "AI", "ServiceNow", "Automation"],
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
        period: "Aug 2022 – Nov 2023",
        location: "Remote",
        type: "Full-time",
        description: "Built and deployed a production-ready full-stack application using React, Node.js, and REST APIs. Implemented secure authentication, role-based access control, and scalable backend services. Delivered 99.9% uptime through modular architecture and optimized deployment pipelines.",
        technologies: ["React", "Node.js", "REST APIs", "Authentication", "RBAC", "Backend Services", "Deployment"],
        category: "work"
    },

    {
        title: "Machine Learning Engineer",
        company: "1StopAI",
        period: "Nov 2021 – Jan 2022",
        location: "Remote",
        type: "Internship",
        description: "Developed and deployed ML models for emotion and gender detection in customer support audio streams. Optimized inference pipelines to improve routing accuracy and real-time response efficiency. Engineered audio feature extraction and model evaluation workflows for production deployment.",
        technologies: ["Python", "Machine Learning", "Audio Processing", "Feature Engineering", "ML Deployment", "Model Optimization"],
        category: "internship"
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
    }
];

// Export for both browser and Node.js
if (typeof window !== 'undefined') {
    window.experienceData = experienceData;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = experienceData;
}
