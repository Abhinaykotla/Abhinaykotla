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
• resume         - Download my resume/CV
• interests      - Display research interests and future plans
• certifications - List professional certifications with verification links
• clear          - Clear the terminal
• help           - Show this help message

Tip: Use tab completion for project names!`
    },
    about: {
        description: "Display personal information",
        response: `Abhinay Kotla - IT Operations @ UTA | AI/ML Engineer | Full Stack Developer

Experienced professional specializing in AI/ML engineering, automation, and full-stack development. Currently working in IT Operations at UT Arlington, developing AI-powered solutions including NLP chatbots and automation systems. Notable experience in developing AI solutions like emotion-aware chatbots, image recognition systems, and community platforms using React and Firebase. Proficient in TensorFlow, PyTorch, NLP frameworks, and modern web technologies.

Current Status: MSCS @ UT Arlington (GPA: 4.0/4.0) | IT Operations Professional
Location: Arlington, TX
Specialization: AI, Machine Learning, Deep Learning, NLP, Computer Vision, Full-Stack Development, Automation

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
• Python (Advanced), JavaScript, C++, Java, Scala, R, SQL, Bash

Machine Learning & AI:
• Deep Learning, Generative AI, NLP, Transformer Models
• GANs, Transfer Learning, Computer Vision, Statistical Analysis

Web Development:
• React, Next.js, Node.js, Firebase, Firestore
• React Router, Context API, HTML5, CSS3, Responsive Design

Frameworks & Libraries:
• PyTorch, TensorFlow, Keras, scikit-learn, OpenCV
• Pandas, Spark, Matplotlib, Hugging Face Transformers

Big Data & Cloud:
• Apache Spark, Hadoop, Kubernetes, AWS, Google Cloud, Azure, Firebase

DevOps & Deployment:
• MLOps, Model Deployment, Docker, GitHub Actions

Soft Skills:
• Research & Innovation, Team Leadership, Technical Documentation
• Project Management, Mentoring, Full-Stack Development

Type 'experience' to see how I've applied these skills.`
    },
    experience: {
        description: "Display work experience",
        response: `Work Experience:

💻 IT Operations
   UT Arlington Office of Information Technology | Sep 2024 - Present
   • Designed AI-powered chatbot using Python and NLP for campus IT
   • Automated support queries through model-based intent detection
   • Improved ticket resolution time by 18%
   • Deployed retraining pipelines with ServiceNow integration
   • Developed automation scripts and optimized infrastructure workflows
   Technologies: Python, NLP, Machine Learning, AI, ServiceNow, Automation

🛠️ OIT Tech Support
   UT Arlington Office of Information Technology | Aug 2024 - Sep 2024
   • Supported ~5,000+ users, resolving hardware, software, and network issues
   • Documented IT workflows and created knowledge-base SOPs
   • Reduced ticket escalations by 20%
   • Assisted in device imaging, switch configurations, network maintenance
   Technologies: Linux, macOS, Windows, Technical Documentation, IT Support

🌐 Full Stack Developer
   Saintechinc | Feb 2023 - Nov 2023 | Remote
   • Built and deployed responsive full-stack application
   • Achieved 99.9% uptime and improved SEO metrics by 40%
   • Implemented secure user roles and real-time analytics
   • Applied component-based architecture for scalability
   Technologies: Python, React, Node.js, REST APIs, Authentication, Deployment

📚 ML Content Developer
   SmartKnowers | Jun 2022 - Jul 2022 | Remote
   • Designed ML learning modules on model evaluation and data pipelines
   • Delivered interactive Jupyter notebooks and exercises
   • Increased course engagement by 30%
   Technologies: Machine Learning, Jupyter, Content Creation, Cloud Deployment

🤖 Machine Learning Engineer
   1StopAI | Nov 2021 - Jan 2022 | Remote
   • Developed real-time mood and gender classification models
   • Improved routing accuracy by 15% through emotion detection
   • Deployed trained models in production using lightweight inference APIs
   Technologies: Python, scikit-learn, Audio Processing, ML Deployment

Type 'projects' to see my technical projects.`
    },
    projects: {
        description: "Show all projects",
        response: `Projects:

🎨 Edge- and Color-Aware Adversarial Image Inpainting [FEATURED]
    Technologies: Python, GANs, Deep Learning, Computer Vision
    Achievement: 7% reduction in perceptual loss on CelebA and Places2

🤖 Emotionally Intelligent Chatbot [FEATURED]
    Technologies: Python, NLP, Hugging Face Transformers, TensorFlow, PyTorch
    Features: Real-time emotion recognition, multimodal input

📰 News Summarization using T5 Transformer [FEATURED]
    Technologies: Python, T5, NLP, Transformers
    Performance: ROUGE-1: 0.532, ROUGE-2: 0.351, ROUGE-L: 0.427

📊 Efficient Computer Vision Models with Knowledge Distillation [FEATURED]
    Technologies: Python, CNNs, Quantization, PyTorch
    Achievement: 669MB → 6.5MB (99% smaller), 97% accuracy maintained

🌐 TuneParams.ai Community Platform [FEATURED]
    Technologies: React, Firebase, Firestore, CSS3, JavaScript, React Router
    Features: User auth, real-time discussions, admin dashboard

🎤 Voice-Based Gender Recognition System
    Technologies: Python, scikit-learn, ML
    Performance: 98.5% accuracy with Random Forest, 32k samples

🛣️ Road Surface Analysis and Classification
    Technologies: Python, scikit-learn, Qt Designer
    Features: GUI-driven tool, 3,500 samples, predictive maintenance

🌐 Saintechinc Website
    Technologies: React, Next.js, Node.js, CSS3, JavaScript
    Features: Responsive design, SEO optimization, secure hosting

Type 'project <name>' for detailed information about any project.
Example: 'project image inpainting' or 'project tuneparams'`
    },
    blog: {
        description: "List recent blog posts",
        response: `Recent Blog Posts:

📝 EdgeConnect+: Adversarial Inpainting with Edge and Color Guidance
   July 29, 2025 | 10 min read | FEATURED
   A three-stage deep learning pipeline that enhances image inpainting
   Tags: Deep Learning, Computer Vision, GANs, Image Inpainting

🌐 Building a Community Forum Platform with React and Firebase
   January 20, 2025 | 14 min read | COMING SOON
   Comprehensive guide to developing TuneParams.ai's community platform
   Tags: React, Firebase, Web Development, Full-Stack

🧠 Transformer Architecture: Beyond BERT and GPT
   February 1, 2025 | 12 min read | COMING SOON
   In-depth exploration of transformer models and attention mechanisms
   Tags: Transformers, NLP, Attention

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
    resume: {
        description: "Download resume/CV",
        response: `📄 Resume/CV Download

Downloading Abhinay Kotla's Resume...

The resume includes:
• Complete professional experience
• Educational background and achievements
• Technical skills and certifications  
• Featured projects and research
• Contact information

File: Abhinay_Kotla_Resume.pdf
Status: Download initiated...

Note: If download doesn't start automatically, you can also find the 
download button in the web interface (switch back using 'web' command).`
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
   Platform: Coursera | Status: Verified
   
🏆 Robotic Process Automation (RPA)
   Platform: Coursera | Status: Verified
   
🏆 IBM Big Data with Spark and Hadoop
   Platform: Coursera | Status: Verified
   
🏆 Wordcloud Using NLP and TF-IDF
   Platform: Coursera | Status: Verified
   
🏆 Google Technical Support Fundamentals
   Platform: Coursera | Status: Verified

Note: All certifications include verification links in the web interface.
Visit the About section for clickable verification links.`
    },

    // Individual project commands
    "project image": {
        description: "EdgeConnect+ Image Inpainting project details",
        response: `🎨 Edge- and Color-Aware Adversarial Image Inpainting

Description:
Developed a dual-GAN image inpainting model that integrates edge and color 
guidance for semantically coherent and photorealistic reconstructions.

Key Achievements:
• 7% reduction in perceptual loss on CelebA and Places2 benchmarks
• Three-stage pipeline: Edge Generator → Color Guidance → Inpainting Generator
• Enhanced fusion strategy for improved semantic and perceptual fidelity

Technologies: Python, GANs, Deep Learning, Computer Vision
GitHub: github.com/Abhinaykotla/EdgeConnect_Plus_Inpainting_with_Edge_and_Color_Guidance
Status: Featured Project | Published Research`
    },

    "project tuneparams": {
        description: "TuneParams.ai Community Platform details",
        response: `🌐 TuneParams.ai Community Platform

Description:
Built a comprehensive web-based community forum platform for AI/ML discussions.
Full-stack application with modern React architecture and Firebase backend.

Key Features:
• User authentication and session management
• Thread/reply system with real-time interactions
• Admin dashboard for content moderation
• Public read access for unauthenticated users
• Responsive design for all devices
• Scalable Firestore database architecture

Technologies: React, Firebase, Firestore, CSS3, JavaScript, React Router, Context API
GitHub: github.com/TuneParams-ai/platform-frontend
Status: Featured Project | Production Ready`
    },

    "project chatbot": {
        description: "Emotionally Intelligent Chatbot details",
        response: `🤖 Emotionally Intelligent Chatbot

Description:
Built a multimodal chatbot capable of interpreting user sentiment via voice 
and facial cues. Integrated real-time emotion recognition with transformer-based 
language models to improve user engagement.

Key Features:
• Real-time emotion recognition from voice and facial expressions
• Multimodal input processing
• Transformer-based language understanding
• Adaptive response generation based on emotional context
• Enhanced user engagement metrics

Technologies: Python, NLP, Hugging Face Transformers, TensorFlow, PyTorch
Status: Featured Project | Research & Development`
    },

    "project summarization": {
        description: "T5 News Summarization project details",
        response: `📰 News Summarization using T5 Transformer

Description:
Developed a T5-based abstractive text summarization system with impressive 
performance metrics highlighting improved semantic retention and summary coherence.

Performance Metrics:
• ROUGE-1: 0.532
• ROUGE-2: 0.351  
• ROUGE-L: 0.427
• Cosine Similarity: 0.80

Key Features:
• Abstractive summarization (not extractive)
• T5 transformer architecture
• Semantic coherence optimization
• Multi-document summarization support

Technologies: Python, T5, NLP, Transformers
GitHub: github.com/Abhinaykotla/news-summarization-T5-Transformer
Status: Featured Project | Research Complete`
    }
};

// Export for both browser and Node.js
if (typeof window !== 'undefined') {
    window.cliData = cliData;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cliData;
}
