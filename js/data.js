// Personal Information and Data
const portfolioData = {
    personal: {
        name: "Abhinay Kotla",
        title: "AI/ML Engineer & Researcher",
        email: "abhinaykotla@gmail.com",
        phone: "+1 469 674 1021",
        location: "Arlington, TX",
        linkedin: "https://linkedin.com/in/abhinaykotla",
        github: "https://github.com/abhinaykotla",
        summary: "Passionate Computer Science graduate specializing in AI and machine learning, with notable experience in developing solutions like emotion-aware chatbots and image recognition systems. Proficient in TensorFlow, PyTorch, and NLP frameworks, with skills in model development and scalable AI implementation. Proven track record in enhancing AI applications, optimizing machine learning models, and engaging in research-driven innovation."
    },

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
    ],

    skills: {
        "Programming Languages": {
            items: ["Python (Advanced)", "C++", "Java", "Scala", "R", "SQL", "Bash"],
            category: "technical"
        },
        "Machine Learning & AI": {
            items: ["Deep Learning", "Generative AI", "NLP", "Transformer Models", "GANs", "Transfer Learning", "Computer Vision", "Statistical Analysis"],
            category: "technical"
        },
        "Frameworks & Libraries": {
            items: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "OpenCV", "Pandas", "Spark", "Matplotlib", "Hugging Face Transformers"],
            category: "technical"
        },
        "Big Data & Cloud": {
            items: ["Apache Spark", "Hadoop", "Kubernetes", "AWS", "Google Cloud", "Azure"],
            category: "technical"
        },
        "DevOps & Deployment": {
            items: ["MLOps", "Model Deployment", "Docker", "GitHub Actions"],
            category: "technical"
        },
        "Soft Skills": {
            items: ["Research & Innovation", "Team Leadership", "Technical Documentation", "Project Management", "Mentoring"],
            category: "soft"
        }
    },

    experience: [
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
            description: "Designed, developed, and deployed a fully responsive website using React, Next.js, and Node.js. Hosted and managed the website, implementing security best practices and ensuring high availability.",
            technologies: ["React", "Next.js", "Node.js", "Web Development", "DevOps"],
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
            title: "Content Manager",
            company: "SaharaYT",
            period: "May 2021 - Dec 2023",
            location: "Remote",
            type: "Part-time",
            description: "Managed content strategy and production for a 325k-subscriber YouTube channel; improved video retention by 20%.",
            technologies: ["Content Strategy", "Video Production", "Analytics"],
            category: "creative"
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
    ],

    projects: [
        {
            title: "Edge- and Color-Aware Adversarial Image Inpainting",
            description: "Developed an inpainting framework that integrates edge and color guidance for realistic image reconstruction. Utilized a dual-GAN architecture to generate missing edges and enhance color continuity.",
            technologies: ["Python", "GANs", "Deep Learning", "Computer Vision", "PyTorch"],
            category: "ai-ml",
            featured: true,
            github: "#",
            demo: "#",
            image: "projects/image-inpainting.jpg",
            details: "Evaluated the model on CelebA and Places2 datasets for facial and scene inpainting with state-of-the-art results."
        },
        {
            title: "Emotionally Intelligent Chatbot",
            description: "Built a chatbot capable of recognizing and responding to user emotions using NLP and deep learning. Integrated emotion detection and multimodal interaction for improved user engagement.",
            technologies: ["Python", "NLP", "Hugging Face Transformers", "TensorFlow", "PyTorch"],
            category: "ai-ml",
            featured: true,
            github: "#",
            demo: "#",
            image: "projects/emotion-chatbot.jpg",
            details: "Features voice and facial recognition capabilities for comprehensive emotion analysis."
        },
        {
            title: "News Summarization Using T5 Transformer",
            description: "Developed a summarization model using T5 Transformer to generate concise summaries from lengthy news articles, improving readability and information accessibility.",
            technologies: ["Python", "NLP", "T5 Transformer", "Hugging Face"],
            category: "ai-ml",
            featured: true,
            github: "#",
            demo: "#",
            image: "projects/news-summarization.jpg",
            details: "Achieved high ROUGE scores on news summarization benchmarks."
        },
        {
            title: "Road Surface Analysis and Classification",
            description: "Designed a machine learning model with a GUI to classify road quality based on surface features and maintenance factors. Trained on 3,500 samples for effective maintenance planning.",
            technologies: ["Python", "scikit-learn", "Qt Designer", "Machine Learning"],
            category: "ai-ml",
            featured: false,
            github: "#",
            demo: "#",
            image: "projects/road-analysis.jpg",
            details: "Comprehensive solution for municipal road maintenance optimization."
        },
        {
            title: "Gender Recognition based on Voice",
            description: "Developed a machine learning model trained on 32,000 samples to predict speaker gender using 14 voice features. Integrated into call center systems for mood anticipation.",
            technologies: ["Python", "scikit-learn", "Audio Processing", "Machine Learning"],
            category: "ai-ml",
            featured: false,
            github: "#",
            demo: "#",
            image: "projects/voice-recognition.jpg",
            details: "Achieved high accuracy in real-time voice analysis for commercial applications."
        },
        {
            title: "Saintechinc Website",
            description: "Fully responsive business website built with modern web technologies. Features include responsive design, SEO optimization, and secure hosting.",
            technologies: ["React", "Next.js", "Node.js", "CSS3", "JavaScript"],
            category: "web",
            featured: false,
            github: "#",
            demo: "#",
            image: "projects/saintechinc.jpg",
            details: "Complete end-to-end web development project with ongoing maintenance."
        }
    ],

    blogPosts: [
        {
            title: "Deep Dive into Generative Adversarial Networks",
            excerpt: "Exploring the architecture and applications of GANs in modern AI, with practical examples and implementation tips.",
            date: "2024-12-15",
            readTime: "8 min read",
            tags: ["AI", "Deep Learning", "GANs"],
            image: "blog/gans-deep-dive.jpg",
            slug: "deep-dive-gans"
        },
        {
            title: "Building Emotion-Aware AI Systems",
            excerpt: "How to integrate emotional intelligence into AI applications for better human-computer interaction.",
            date: "2024-11-28",
            readTime: "6 min read",
            tags: ["NLP", "Emotion AI", "Human-AI"],
            image: "blog/emotion-ai.jpg",
            slug: "emotion-aware-ai"
        },
        {
            title: "MLOps Best Practices for Production AI",
            excerpt: "Essential practices for deploying and maintaining machine learning models in production environments.",
            date: "2024-11-10",
            readTime: "10 min read",
            tags: ["MLOps", "DevOps", "Production AI"],
            image: "blog/mlops-practices.jpg",
            slug: "mlops-best-practices"
        }
    ],

    interests: [
        "AI Research & Innovation",
        "Deep Learning & Neural Networks",
        "Natural Language Processing",
        "Computer Vision & Image Processing",
        "Generative AI & Large Language Models",
        "Autonomous Systems & Robotics",
        "MLOps & Scalable AI Deployment",
        "Real-time AI Applications"
    ],

    // CLI Commands and Responses
    cliCommands: {
        help: {
            description: "Show available commands",
            response: `Available commands:
• about          - Display personal information and bio
• education      - Show educational background
• skills         - List technical and soft skills
• experience     - Display work experience and internships
• projects       - Show all projects
• project <name> - Get detailed info about a specific project
• blog           - List recent blog posts
• contact        - Show contact information
• interests      - Display research interests and future plans
• certifications - List professional certifications
• clear          - Clear the terminal
• help           - Show this help message

Tip: Use tab completion for project names!`
        },
        about: {
            description: "Display personal information",
            response: `Abhinay Kotla - AI/ML Engineer & Researcher

Passionate Computer Science graduate specializing in AI and machine learning, with notable experience in developing solutions like emotion-aware chatbots and image recognition systems. Proficient in TensorFlow, PyTorch, and NLP frameworks, with skills in model development and scalable AI implementation. Proven track record in enhancing AI applications, optimizing machine learning models, and engaging in research-driven innovation.

Current Status: Graduate Student at UT Arlington (GPA: 4.0/4.0)
Location: Arlington, TX
Specialization: AI, Machine Learning, Deep Learning, NLP, Computer Vision

Type 'education' for academic background or 'experience' for work history.`
        },
        education: {
            description: "Show educational background",
            response: `Educational Background:

🎓 Masters in Computer Science
   The University of Texas at Arlington
   Aug 2025 | GPA: 4.0/4.0 | Arlington, TX

🎓 BE in Computer Science  
   Gandhi Institute of Technology and Management
   April 2023 | CGPA: 8.47 | Hyderabad, India

Type 'certifications' to see professional certifications.`
        },
        skills: {
            description: "List technical and soft skills",
            response: `Technical Skills:

Programming Languages:
• Python (Advanced), C++, Java, Scala, R, SQL, Bash

Machine Learning & AI:
• Deep Learning, Generative AI, NLP, Transformer Models
• GANs, Transfer Learning, Computer Vision, Statistical Analysis

Frameworks & Libraries:
• PyTorch, TensorFlow, Keras, scikit-learn, OpenCV
• Pandas, Spark, Matplotlib, Hugging Face Transformers

Big Data & Cloud:
• Apache Spark, Hadoop, Kubernetes, AWS, Google Cloud, Azure

DevOps & Deployment:
• MLOps, Model Deployment, Docker, GitHub Actions

Soft Skills:
• Research & Innovation, Team Leadership, Technical Documentation
• Project Management, Mentoring

Type 'experience' to see how I've applied these skills.`
        },
        experience: {
            description: "Display work experience",
            response: `Work Experience:

🔬 Graduate Research Assistant - IT Campus Operations
   UT Arlington Office of Information Technology | Sep 2024 - Present
   • AI-driven technical support chatbot research
   • Scalable solutions for campus-wide IT operations

💻 Graduate Assistant - OIT Tech Support  
   UT Arlington Office of Information Technology | Aug 2024 - Sep 2024
   • IT support documentation & system administration
   • Served 5,000+ campus users

🌐 Freelance Web Developer
   Saintechinc | Feb 2023 - Nov 2023
   • Full-stack development with React, Next.js, Node.js
   • Security implementation and hosting management

🤖 ML Engineer Intern
   1StopAI | Nov 2021 - Jan 2022
   • Voice-based ML for gender and mood detection
   • Real-time analysis for call center optimization

Type 'projects' to see my technical projects.`
        },
        projects: {
            description: "Show all projects",
            response: `Featured Projects:

🖼️  Edge- and Color-Aware Adversarial Image Inpainting
    Technologies: Python, GANs, Deep Learning, Computer Vision
    
🤖 Emotionally Intelligent Chatbot
    Technologies: Python, NLP, Hugging Face Transformers, PyTorch
    
📰 News Summarization Using T5 Transformer  
    Technologies: Python, NLP, T5 Transformer
    
🛣️  Road Surface Analysis and Classification
    Technologies: Python, scikit-learn, Qt Designer
    
🎙️  Gender Recognition based on Voice
    Technologies: Python, scikit-learn, Audio Processing

Type 'project <name>' for detailed information about any project.
Example: 'project emotion chatbot' or 'project image inpainting'`
        },
        blog: {
            description: "List recent blog posts",
            response: `Recent Blog Posts:

📝 Deep Dive into Generative Adversarial Networks
   December 15, 2024 | 8 min read
   Exploring GAN architecture and applications in modern AI

🧠 Building Emotion-Aware AI Systems  
   November 28, 2024 | 6 min read
   Integrating emotional intelligence into AI applications

⚙️  MLOps Best Practices for Production AI
   November 10, 2024 | 10 min read
   Essential practices for deploying ML models in production

Visit the blog section for full articles and more posts!`
        },
        contact: {
            description: "Show contact information",
            response: `Contact Information:

📧 Email: abhinaykotla@gmail.com
📱 Phone: +1 469 674 1021
📍 Location: Arlington, TX

🔗 LinkedIn: linkedin.com/in/abhinaykotla
💻 GitHub: github.com/abhinaykotla

Feel free to reach out for collaborations, research opportunities, 
or just to discuss AI and technology!`
        },
        interests: {
            description: "Display research interests",
            response: `Research Interests & Future Plans:

🔬 AI Research & Innovation
   • Deep Learning & Neural Networks
   • Natural Language Processing
   • Computer Vision & Image Processing

🤖 Emerging Technologies
   • Generative AI & Large Language Models  
   • Autonomous Systems & Robotics
   • Real-time AI Applications

⚙️  Production & Scalability
   • MLOps & Scalable AI Deployment
   • Vision Transformers (ViTs)
   • Multimodal AI for real-world problem-solving

🎯 Career Goals
   Contributing to cutting-edge AI research, particularly in autonomous 
   systems, generative AI, and real-time ML applications.`
        },
        certifications: {
            description: "List professional certifications",
            response: `Professional Certifications:

🏆 Neural Networks and Deep Learning by DeepLearning.AI
🏆 Robotic Process Automation (RPA)  
🏆 IBM Big Data with Spark and Hadoop
🏆 Wordcloud Using NLP and TF-IDF
🏆 Google Technical Support Fundamentals

View complete profile on LinkedIn for verification and additional certifications.`
        }
    }
};

// Ensure data is available globally immediately
window.portfolioData = portfolioData;

// Also for Node.js compatibility
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}

// Dispatch a custom event when data is ready
if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('portfolioDataReady', { detail: portfolioData }));
}

console.log('portfolioData loaded and assigned to window:', !!window.portfolioData);
console.log('Data verification - personal name:', portfolioData?.personal?.name);
