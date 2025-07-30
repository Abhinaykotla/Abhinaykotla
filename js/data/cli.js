// CLI Commands and Responses for Developer Mode
const cliData = {
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
        response: `Projects:

Edge- and Color-Aware Adversarial Image Inpainting
    Technologies: Python, GANs, Deep Learning, Computer Vision

Efficient Computer Vision Models with Knowledge Distillation
    Technologies: Python, CNNs, Quantization, PyTorch

Emotionally Intelligent Chatbot
    Technologies: Python, NLP, Hugging Face Transformers, TensorFlow, PyTorch

News Summarization using T5 Transformer
    Technologies: Python, T5, NLP, Transformers

Voice-Based Gender Recognition System
    Technologies: Python, scikit-learn, ML

Road Surface Analysis and Classification
    Technologies: Python, scikit-learn, Qt Designer

Saintechinc Website
    Technologies: React, Next.js, Node.js, CSS3, JavaScript

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
        response: `Contact Me:

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
};

// Export for both browser and Node.js
if (typeof window !== 'undefined') {
    window.cliData = cliData;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cliData;
}
