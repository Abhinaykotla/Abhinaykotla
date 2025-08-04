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
        {
            name: "Neural Networks and Deep Learning by DeepLearning.AI",
            link: "https://www.coursera.org/account/accomplishments/verify/88Z29RVRMEZP"
        },
        {
            name: "Robotic Process Automation (RPA)",
            link: "https://www.coursera.org/account/accomplishments/records/XAMYCY6RN2ML"
        },
        {
            name: "IBM Big Data with Spark and Hadoop",
            link: "https://www.coursera.org/account/accomplishments/records/V8BYH6R78BVT"
        },
        {
            name: "Wordcloud Using NLP and TF-IDF",
            link: "https://www.coursera.org/account/accomplishments/records/76EQ4DE83H2B"
        },
        {
            name: "Google Technical Support Fundamentals",
            link: "https://www.coursera.org/account/accomplishments/records/P89PW75CCMT8"
        },
        {
            name: "View all certifications on LinkedIn",
            link: "https://www.linkedin.com/in/abhinaykotla/details/certifications/"
        }
    ]
};

// Export for both browser and Node.js
if (typeof window !== 'undefined') {
    window.educationData = educationData;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = educationData;
}
