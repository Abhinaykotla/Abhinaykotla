// Data Patch - Ensures compatibility with modular data structure
// This file provides compatibility and fallback mechanisms for the modular data system

function ensureDataLoaded() {
    // If portfolioData doesn't exist, try to load it from modules
    if (typeof window !== 'undefined' && !window.portfolioData) {
        if (typeof loadPortfolioData === 'function') {
            loadPortfolioData();
        }
    }

    return window.portfolioData;
}

// Provide a safe data accessor
function safeDataAccess(path, defaultValue = null) {
    const data = ensureDataLoaded();
    if (!data) return defaultValue;

    const keys = path.split('.');
    let current = data;

    for (const key of keys) {
        if (current && typeof current === 'object' && key in current) {
            current = current[key];
        } else {
            return defaultValue;
        }
    }

    return current;
}

// Initialize data loading when this script loads
if (typeof window !== 'undefined') {
    // Make safe accessor globally available
    window.safeDataAccess = safeDataAccess;

    // Try to ensure data is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ensureDataLoaded);
    } else {
        ensureDataLoaded();
    }
}
