// This file patches all direct portfolioData references to use safe data access
function patchPortfolioDataReferences() {
    // Store the original methods if they exist
    if (typeof WebInterface !== 'undefined' && WebInterface.prototype) {
        const originalLoadSkills = WebInterface.prototype.loadSkillsContent;
        const originalLoadExperience = WebInterface.prototype.loadExperienceContent;
        const originalLoadProjects = WebInterface.prototype.loadProjectsContent;
        const originalLoadBlog = WebInterface.prototype.loadBlogContent;

        // Patch loadSkillsContent
        WebInterface.prototype.loadSkillsContent = function () {
            const skillsContent = document.getElementById('skills-content');
            if (!skillsContent) return;

            const data = window.portfolioData;
            if (!data?.skills) return;

            const skillsHTML = Object.entries(data.skills).map(([category, skillData]) => {
                const icon = this.getSkillIcon(category);
                return `
                    <div class="skill-category">
                        <h3>
                            <i class="${icon}"></i>
                            ${category}
                        </h3>
                        <div class="skill-tags">
                            ${skillData.items.map(skill => `
                                <span class="skill-tag">${skill}</span>
                            `).join('')}
                        </div>
                    </div>
                `;
            }).join('');

            skillsContent.innerHTML = skillsHTML;
        };

        // Patch loadExperienceContent
        WebInterface.prototype.loadExperienceContent = function () {
            const timeline = document.getElementById('timeline');
            if (!timeline) return;

            const data = window.portfolioData;
            if (!data?.experience) return;

            const experienceHTML = data.experience.map(exp => `
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3 class="experience-title">${exp.title}</h3>
                        <div class="experience-company">${exp.company}</div>
                        <div class="experience-period">${exp.period} | ${exp.location}</div>
                        <p class="experience-description">${exp.description}</p>
                        <div class="experience-technologies">
                            ${exp.technologies.map(tech => `
                                <span class="tech-tag">${tech}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `).join('');

            timeline.innerHTML = experienceHTML;
        };

        // Patch loadProjectsContent
        WebInterface.prototype.loadProjectsContent = function () {
            const projectsGrid = document.getElementById('projects-grid');
            if (!projectsGrid) return;

            const data = window.portfolioData;
            if (!data?.projects) return;

            const projectsHTML = data.projects.map(project => `
                <div class="project-card" data-category="${project.category}">
                    <div class="project-image"></div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-technologies">
                            ${project.technologies.map(tech => `
                                <span class="tech-tag">${tech}</span>
                            `).join('')}
                        </div>
                        <div class="project-links">
                            <a href="${project.github}" class="project-link" target="_blank">
                                <i class="fab fa-github"></i>
                                GitHub
                            </a>
                            <a href="${project.demo}" class="project-link" target="_blank">
                                <i class="fas fa-external-link-alt"></i>
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            `).join('');

            projectsGrid.innerHTML = projectsHTML;
        };

        // Patch loadBlogContent
        WebInterface.prototype.loadBlogContent = function () {
            const blogGrid = document.getElementById('blog-grid');
            if (!blogGrid) return;

            const data = window.portfolioData;
            if (!data?.blogPosts) return;

            const blogHTML = data.blogPosts.map(post => `
                <article class="blog-card">
                    <div class="blog-image"></div>
                    <div class="blog-content">
                        <h3 class="blog-title">${post.title}</h3>
                        <p class="blog-excerpt">${post.excerpt}</p>
                        <div class="blog-meta">
                            <span class="blog-date">${this.formatDate(post.date)}</span>
                            <span class="blog-read-time">${post.readTime}</span>
                        </div>
                        <div class="blog-tags">
                            ${post.tags.map(tag => `
                                <span class="blog-tag">${tag}</span>
                            `).join('')}
                        </div>
                    </div>
                </article>
            `).join('');

            blogGrid.innerHTML = blogHTML;
        };
    }
}

// Apply patches when this script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', patchPortfolioDataReferences);
} else {
    patchPortfolioDataReferences();
}
