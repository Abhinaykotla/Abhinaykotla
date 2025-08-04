// Work Experience and Professional History
const experienceData = [
    {
        title: "Full-Stack Developer",
        company: "TuneParams.ai",
        period: "2024 - Present",
        location: "Remote",
        type: "Freelance",
        description: "Developed a comprehensive community forum platform using React and Firebase. Built user authentication system, real-time discussion threads, admin dashboard, and responsive UI. Implemented Firestore database with security rules and scalable architecture for AI/ML community discussions.",
        technologies: ["React", "Firebase", "Firestore", "JavaScript", "CSS3", "React Router", "Context API"],
        category: "work"
    },
    {
        title: "Graduate Research Assistant – IT for Campus Operations",
        company: "UT Arlington Office of Information Technology",
        period: "Sep 2024 – Present",
        location: "Arlington, TX",
        type: "Full-time",
        description: "Pioneered research initiatives in AI-driven technical support chatbot, developing scalable solutions for campus-wide IT operations and workflow enhancement.",
        technologies: ["AI", "Machine Learning", "Python", "NLP"],
        category: "work"
    },
    {
        title: "Graduate Assistant - OIT Tech Support",
        company: "UT Arlington Office of Information Technology",
        period: "Aug 2024 - Sep 2024",
        location: "Arlington, TX",
        type: "Full-time",
        description: "Developed and maintained comprehensive IT support documentation, reducing average resolution time for common issues across campus facilities. Supported IT systems for University center and campus housing departments impacting 5,000+ users.",
        technologies: ["Technical Documentation", "IT Support", "System Administration"],
        category: "work"
    },
    {
        title: "Freelance Web Developer",
        company: "Saintechinc",
        period: "Feb 2023 - Nov 2023",
        location: "Remote",
        type: "Freelance",
        description: "Designed, developed, and deployed a fully responsive business website using React, Next.js, and Node.js. Implemented SEO optimization, security best practices, and cloud hosting. Delivered complete end-to-end web development solution with ongoing maintenance.",
        technologies: ["React", "Next.js", "Node.js", "CSS3", "JavaScript", "Web Development", "DevOps", "SEO"],
        category: "work"
    },
    {
        title: "AI/ML Content Creator",
        company: "SmartKnowers",
        period: "Jun 2022 - Jul 2022",
        location: "Remote",
        type: "Internship",
        description: "Created AI/ML course content and enhanced student engagement through research on latest trends.",
        technologies: ["AI", "Machine Learning", "Content Creation", "Research"],
        category: "internship"
    },
    {
        title: "ML Engineer",
        company: "1StopAI",
        period: "Nov 2021 - Jan 2022",
        location: "Remote",
        type: "Internship",
        description: "Led voice-based ML project for gender and mood detection, implementing real-time analysis features that enhanced call center response accuracy.",
        technologies: ["Machine Learning", "Voice Processing", "Real-time Analysis", "Python"],
        category: "internship"
    },
    {
        title: "YouTube Creator",
        company: "NukeYT (Own Channel)",
        period: "May 2021 - Dec 2023",
        location: "Remote",
        type: "Self-employed",
        description: "Grew a YouTube channel to 1.7k subscribers, focusing on e-Sports, tech reviews, and tutorials; increased view duration by 50%; collaborated on sponsorships.",
        technologies: ["Content Creation", "Video Editing", "Marketing"],
        category: "creative"
    }
];

// Export for both browser and Node.js
if (typeof window !== 'undefined') {
    window.experienceData = experienceData;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = experienceData;
}
