// Education and Certifications Data
const educationData = {
    education: [
        {
            degree: "Masters in Computer Science",
            institution: "The University of Texas at Arlington",
            period: "Aug 2025",
            gpa: "4.0/4.0",
            location: "Arlington, TX",
            status: "Current"
        },
        {
            degree: "BE in Computer Science",
            institution: "Gandhi Institute of Technology and Management",
            period: "April 2023",
            gpa: "8.47 CGPA",
            location: "Hyderabad, India",
            status: "Completed"
        }
    ],

    certifications: [
        "Neural Networks and Deep Learning by DeepLearning.AI",
        "Robotic Process Automation (RPA)",
        "IBM Big Data with Spark and Hadoop",
        "Wordcloud Using NLP and TF-IDF",
        "Google Technical Support Fundamentals"
    ]
};

// Export for both browser and Node.js
if (typeof window !== 'undefined') {
    window.educationData = educationData;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = educationData;
}
