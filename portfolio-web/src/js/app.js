const portfolioUrl = '../data.json';

const createElement = (tag, className, text) => {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    return element;
};

fetch(portfolioUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`No se pudo cargar el portfolio (${response.status})`);
        }
        return response.json();
    })
    .then(data => {
        const personalInfo = data.personalInfo || {};
        const name = personalInfo.name || 'Tu Nombre';
        const title = personalInfo.title || 'Desarrollador Web';

        document.title = `${name} | ${title}`;
        document.getElementById('name').textContent = name;
        document.getElementById('footer-name').textContent = name;
        document.getElementById('role').textContent = title;
        document.getElementById('bio').textContent = personalInfo.description || '';
        document.getElementById('year').textContent = new Date().getFullYear();

        const projectsContainer = document.getElementById('project-list');
        (data.projects || []).forEach((project, index) => {
            const card = createElement('article', 'project-card');
            const number = createElement('span', 'project-number', `0${index + 1}`);
            const titleElement = createElement('h3', '', project.title);
            const description = createElement('p', '', project.description);
            const link = document.createElement('a');
            link.className = 'project-link';
            link.href = project.link || '#';
            link.target = '_blank';
            link.rel = 'noreferrer';
            link.innerHTML = 'Ver proyecto <span aria-hidden="true">&#8599;</span>';

            card.append(number, titleElement, description, link);
            projectsContainer.appendChild(card);
        });

        const skillsContainer = document.getElementById('skills-list');
        (data.skills || []).forEach(skill => {
            skillsContainer.appendChild(createElement('span', 'skill', skill));
        });
    })
    .catch(error => {
        document.getElementById('bio').textContent = 'No se pudo cargar la información del portfolio.';
        console.error(error);
    });