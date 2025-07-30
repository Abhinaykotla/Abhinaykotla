# Blog CSS Architecture Documentation

## Overview
This document outlines the CSS architecture for the blog pages, ensuring maintainable, organized, and responsive styling.

## File Structure

```
css/
├── pages/
│   ├── blog.css          # Main blog listing page styles
│   └── blog-post.css     # Individual blog post page styles
├── sections/
│   └── blog.css          # Blog section styles for home page
└── main.css              # Main CSS file with imports
```

## Page-Specific CSS Files

### `css/pages/blog.css`
- **Purpose**: Styles for the main blog listing page (`blog.html`)
- **Key Components**:
  - Blog header with gradient title
  - Two-column layout (posts + sidebar)
  - Blog post cards with hover effects
  - Sidebar sections (categories, recent posts, about)
  - Featured post styling
  - Coming soon post states
  - Mobile responsive design

### `css/pages/blog-post.css`
- **Purpose**: Styles for individual blog post pages (`blog-post.html`)
- **Key Components**:
  - Blog post container with proper spacing
  - Typography for headers, paragraphs, lists
  - Code blocks and blockquotes
  - Image and media styling
  - Navigation links (prev/next, back to blog)
  - Share buttons and related posts
  - Mobile responsive design
  - Print-friendly styles

## Key Features

### Responsive Design
- **Desktop**: Full layout with sidebar
- **Tablet**: Stacked layout, sidebar moves to top
- **Mobile**: Single column, optimized touch targets
- **Print**: Clean, text-focused layout

### Consistent Navigation
- Same navigation structure as main site
- Dev mode toggle button for consistency
- Active state highlighting
- Mobile hamburger menu

### Accessibility
- Proper heading hierarchy
- Focus states for interactive elements
- High contrast ratios
- Screen reader friendly markup

### Performance
- Efficient CSS organization
- Minimal specificity conflicts
- Optimized animations and transitions
- Proper image loading

## CSS Variables Used

The blog pages use the existing CSS custom properties:
- `--text-primary`, `--text-secondary`, `--text-muted`
- `--bg-primary`, `--bg-card`, `--bg-hover`
- `--accent-primary`, `--accent-secondary`
- `--border-color`
- `--shadow-sm`, `--shadow-md`, `--shadow-lg`
- `--transition-normal`
- `--gradient-text`, `--gradient-primary`

## Component Breakdown

### Blog Listing Page Components
1. **Blog Header**: Hero section with title and description
2. **Blog Layout**: Two-column grid layout
3. **Blog Posts**: Article cards with metadata
4. **Sidebar**: Categories, recent posts, about section
5. **Filter System**: Category and tag filtering

### Blog Post Page Components
1. **Post Header**: Title, metadata, tags
2. **Post Content**: Typography, code blocks, images
3. **Navigation**: Previous/next post navigation
4. **Share Section**: Social media sharing buttons
5. **Related Posts**: Suggested reading

## Maintenance Guidelines

### Adding New Blog Styles
1. Add styles to appropriate page-specific CSS file
2. Follow existing naming conventions
3. Use CSS custom properties for colors and spacing
4. Include mobile responsive variants

### Modifying Existing Styles
1. Test changes on both desktop and mobile
2. Ensure consistency with main site design
3. Check for conflicts with existing styles
4. Update documentation if needed

### Media Queries
- Use mobile-first approach
- Standard breakpoints: 480px, 768px, 1024px
- Test on various device sizes

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- CSS custom properties support required

## Performance Considerations
- CSS files are loaded only on relevant pages
- Minimal redundancy between files
- Efficient selector specificity
- Optimized for critical rendering path
