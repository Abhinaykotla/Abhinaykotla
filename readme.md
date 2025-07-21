# Abhinay Kotla - Personal Portfolio

A modern, interactive portfolio website featuring both a standard web interface and a command-line interface (CLI) mode. Built with vanilla JavaScript, CSS3, and HTML5.

## Features

### 🌐 Dual Interface System
- **Standard Web Interface**: Clean, modern design with smooth animations
- **CLI Interface**: Interactive terminal for a unique user experience
- **Seamless Toggle**: Switch between modes with a simple button click

### 🎨 Design Highlights
- **Dark Theme**: Professional dark color scheme
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Engaging transitions and micro-interactions
- **Modern Typography**: Inter and JetBrains Mono fonts

### 🔧 Technical Features
- **Modular Architecture**: Easy to maintain and extend
- **Performance Optimized**: Lazy loading, efficient animations
- **Accessibility**: Keyboard navigation and screen reader friendly
- **SEO Optimized**: Semantic HTML and meta tags

## Project Structure

```
├── index.html              # Main portfolio page
├── blog.html              # Blog listing page
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   ├── data.js           # All content data (easily editable)
│   ├── web-interface.js  # Web interface functionality
│   ├── cli-interface.js  # CLI interface functionality
│   ├── main.js           # Main application logic
│   └── blog.js           # Blog-specific functionality
└── README.md             # This file
```

## � Adding New Content

The portfolio is designed to be easily maintainable. All content is stored in `js/data.js` for easy updates.

### Adding New Projects

1. Open `js/data.js`
2. Add a new project to the `projects` array:

```javascript
{
    title: "Your Project Name",
    description: "Brief description of your project",
    technologies: ["Tech1", "Tech2", "Tech3"],
    category: "ai-ml", // or "web", "research"
    featured: true, // or false
    github: "https://github.com/yourusername/project",
    demo: "https://your-demo-link.com",
    image: "projects/your-image.jpg",
    details: "Additional detailed information about the project"
}
```

### Adding New Work Experience

Add to the `experience` array in `js/data.js`:

```javascript
{
    title: "Your Job Title",
    company: "Company Name",
    period: "Start Date - End Date",
    location: "City, State",
    type: "Full-time", // or "Internship", "Part-time", etc.
    description: "Description of your role and achievements",
    technologies: ["Tech1", "Tech2"],
    category: "work" // or "internship", "creative"
}
```

### Adding New Skills

Update the `skills` object in `js/data.js`:

```javascript
"New Skill Category": {
    items: ["Skill1", "Skill2", "Skill3"],
    category: "technical" // or "soft"
}
```

### Adding New Blog Posts

Add to the `blogPosts` array in `js/data.js`:

```javascript
{
    title: "Your Blog Post Title",
    excerpt: "Brief excerpt or summary",
    date: "YYYY-MM-DD",
    readTime: "X min read",
    tags: ["Tag1", "Tag2"],
    image: "blog/your-image.jpg",
    slug: "url-friendly-slug"
}
```

### Adding New CLI Commands

Add to the `cliCommands` object in `js/data.js`:

```javascript
"newcommand": {
    description: "What this command does",
    response: "The response text when the command is executed"
}
```

## 🚀 Deployment

### GitHub Pages
1. Push your changes to GitHub
2. Go to repository Settings > Pages
3. Select "Deploy from a branch" and choose "main"
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: (leave empty for static site)
3. Set publish directory: `/` (root)
4. Deploy!

### Vercel
1. Import your GitHub repository to Vercel
2. No build configuration needed
3. Deploy automatically

## 🎨 Customization

### Colors
Edit CSS custom properties in `css/styles.css`:

```css
:root {
    --accent-primary: #64ffda;    /* Main accent color */
    --accent-secondary: #bb86fc;  /* Secondary accent */
    --bg-primary: #0a0a0f;       /* Main background */
    /* ... other colors */
}
```

### Fonts
Change fonts by updating the Google Fonts import in HTML files and CSS variables:

```css
--font-primary: 'Your Font', sans-serif;
--font-mono: 'Your Mono Font', monospace;
```

### Animations
Modify animation durations and easing in CSS:

```css
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;
```

## 📱 Mobile Optimization

The portfolio is fully responsive with:
- Mobile-first CSS approach
- Touch-friendly interactive elements
- Optimized typography scaling
- Hamburger navigation menu
- Swipe gestures support

## ⌨️ Keyboard Shortcuts

- `Ctrl/Cmd + K`: Toggle between web and CLI modes
- `Escape`: Switch from CLI to web mode
- `Alt + H`: Show help in CLI mode (when in CLI)
- `Tab`: Auto-complete commands in CLI mode

## 🔍 CLI Commands

When in CLI mode, try these commands:
- `help` - Show all available commands
- `about` - Display personal information
- `skills` - List technical skills
- `projects` - Show all projects
- `project <name>` - Get details about a specific project
- `experience` - Display work experience
- `contact` - Show contact information
- `clear` - Clear the terminal

### Easter Eggs
- `whoami` - Display current user
- `ls` - List directory contents
- `pwd` - Show current directory
- `fortune` - Get a random quote
- `sudo make coffee` - Brew some coffee ☕

## 🔧 Development

### Local Development
1. Clone the repository
2. Open `index.html` in a web browser
3. Or use a local server: `python -m http.server 8000`

### Code Structure
- **Modular Design**: Each interface has its own JavaScript module
- **Data Separation**: All content is in a single data file
- **Performance**: Optimized with lazy loading and efficient animations
- **Maintainable**: Clear separation of concerns

## 📊 Analytics (Optional)

To add Google Analytics:
1. Get your tracking ID from Google Analytics
2. Add the tracking code to `index.html` and `blog.html`
3. Update the analytics setup in `js/main.js`

## 🔒 Security

- No external dependencies for core functionality
- CSP-friendly code
- No inline scripts or styles
- Sanitized user inputs in forms

## 🐛 Browser Support

- **Modern Browsers**: Chrome 70+, Firefox 65+, Safari 12+, Edge 79+
- **Features Used**: CSS Grid, Flexbox, ES6+, Intersection Observer
- **Fallbacks**: Graceful degradation for older browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and adapt it for your own portfolio! If you find bugs or have suggestions for improvements, please open an issue.

## 📞 Contact

- **Email**: abhinaykotla@gmail.com
- **LinkedIn**: [linkedin.com/in/abhinaykotla](https://linkedin.com/in/abhinaykotla)
- **GitHub**: [github.com/abhinaykotla](https://github.com/abhinaykotla)

---

Built with ❤️ and lots of ☕ by Abhinay Kotla

Thank you for stopping by! Feel free to explore my repositories or reach out for collaboration. 😊
