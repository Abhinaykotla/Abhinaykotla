// Data Loader - Combines all modular data files
// This file loads and combines all modular data files to maintain compatibility
// with existing code while providing better maintainability

// This function will be called after all data modules are loaded
function loadPortfolioData() {
    // Check if all required data modules are loaded
    if (typeof window === 'undefined') return;

    const requiredModules = ['personalData', 'educationData', 'skillsData', 'experienceData', 'projectsData', 'blogData', 'cliData'];
    const missingModules = requiredModules.filter(module => !window[module]);

    if (missingModules.length > 0) {
        console.warn('Missing data modules:', missingModules);
        // Try again in a short while
        setTimeout(loadPortfolioData, 50);
        return;
    }

    // Combine all data into the portfolioData structure
    const portfolioData = {
        // Personal information
        ...window.personalData,

        // Education - extract the education array from educationData
        education: window.educationData?.education || [],

        // Certifications - extract from educationData
        certifications: window.educationData?.certifications || [],

        // Skills
        skills: window.skillsData,

        // Experience
        experience: window.experienceData,

        // Projects
        projects: window.projectsData,

        // Blog posts
        blogPosts: window.blogData,

        // CLI commands and responses
        cliCommands: window.cliData
    };

    // Make it globally available
    window.portfolioData = portfolioData;

    console.log('Portfolio data loaded successfully from modular files');

    // Trigger a custom event to notify other scripts
    if (typeof CustomEvent !== 'undefined') {
        window.dispatchEvent(new CustomEvent('portfolioDataLoaded', { detail: portfolioData }));
    }

    return portfolioData;
}

// Auto-load when DOM is ready and scripts are loaded
if (typeof window !== 'undefined') {
    // Try to load immediately if modules are already available
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            // Small delay to ensure all scripts are loaded
            setTimeout(loadPortfolioData, 100);
        });
    } else {
        // Document already loaded, try now
        setTimeout(loadPortfolioData, 10);
    }
}

// Export for CommonJS if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadPortfolioData };
}
