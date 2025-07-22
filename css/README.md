# CSS Architecture

The CSS has been refactored from a single large file into a modular structure for better maintainability and organization.

## File Structure

```
css/
├── main.css                 # Main entry point that imports all modules
├── variables.css            # CSS custom properties and root styles
├── animations.css           # All @keyframes animations
├── utilities.css            # Utility classes
├── responsive.css           # All responsive design rules
├── components/              # Reusable UI components
│   ├── loading.css         # Loading screen styles
│   ├── toggle.css          # View toggle button
│   ├── navigation.css      # Navigation bar and mobile menu
│   ├── buttons.css         # Button styles
│   ├── sections.css        # General section layouts
│   ├── cli.css            # CLI terminal interface
│   ├── footer.css         # Footer styles
│   └── scrollbar.css      # Custom scrollbar styles
└── sections/               # Page-specific sections
    ├── hero.css           # Hero section with neural network
    ├── about.css          # About section with stats
    ├── skills.css         # Skills grid and tags
    ├── experience.css     # Timeline and experience cards
    ├── projects.css       # Project grid and filters
    ├── blog.css          # Blog cards and grid
    └── contact.css       # Contact form and info
```

## Organization Principles

### 1. **Base Layer**
- `variables.css`: All CSS custom properties (colors, fonts, spacing, etc.)
- `animations.css`: All keyframe animations in one place
- `utilities.css`: Helper classes for common styling needs

### 2. **Components Layer**
- Reusable UI components that can be used across different pages
- Each component is self-contained with its own file
- Examples: buttons, navigation, loading screens

### 3. **Sections Layer**
- Page-specific sections with unique styling
- Each major section of the website has its own file
- Examples: hero, about, skills, projects

### 4. **Responsive Layer**
- All media queries consolidated in `responsive.css`
- Organized by breakpoint and component
- Easier to maintain responsive behavior

## Benefits

1. **Maintainability**: Each file has a single responsibility
2. **Scalability**: Easy to add new components or sections
3. **Performance**: Can selectively load only needed styles
4. **Collaboration**: Different developers can work on different files
5. **Debugging**: Easier to locate and fix styling issues
6. **Modularity**: Components can be reused across projects

## Usage

The main entry point is `main.css`, which imports all other files:

```html
<link rel="stylesheet" href="css/main.css">
```

## Development Workflow

1. **Adding new components**: Create a new file in `components/` and import it in `main.css`
2. **Adding new sections**: Create a new file in `sections/` and import it in `main.css`
3. **Modifying variables**: Edit `variables.css` to change global styles
4. **Adding animations**: Add new keyframes to `animations.css`
5. **Responsive changes**: Edit `responsive.css` for breakpoint-specific styles

## File Size Comparison

- **Before**: Single `styles.css` file (~2,775 lines)
- **After**: 17 modular files (average ~150 lines each)

This modular approach makes the codebase much more manageable and developer-friendly.
