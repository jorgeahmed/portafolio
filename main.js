// GitHub Username
const GITHUB_USERNAME = 'jorgeahmed';

async function fetchGitHubProjects() {
    const container = document.getElementById('github-projects');
    
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
        const repos = await response.json();

        if (Array.isArray(repos)) {
            const featuredNames = ['quotebot-vision', 'Pomodoro_RBR', 'Shopify', 'propuesta-cctv-pinfra']; // Filter out manually featured
            container.innerHTML = repos
                .filter(repo => !repo.fork && !featuredNames.includes(repo.name))
                .map(repo => `
                <div class="project-card glass">
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'Sin descripción disponible.'}</p>
                    <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        <span style="font-size: 0.8rem; color: var(--accent-color);">${repo.language || 'Code'}</span>
                    </div>
                    <a href="${repo.html_url}" target="_blank" style="display: block; margin-top: 1rem; color: #fff; font-size: 0.9rem;">Ver en GitHub →</a>
                </div>
            `).join('');
        } else {
            container.innerHTML = '<p>No se pudieron cargar los proyectos de GitHub en este momento.</p>';
        }
    } catch (error) {
        console.error('Error fetching repos:', error);
        container.innerHTML = '<p>Error al conectar con GitHub.</p>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchGitHubProjects();
});
