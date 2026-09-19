// app.js

// Cargar datos desde data.json
fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        // Aquí puedes manejar los datos y actualizar el contenido del portafolio
        console.log(data);
        
        // Ejemplo de cómo podrías usar los datos
        document.getElementById('name').textContent = data.name;
        document.getElementById('bio').textContent = data.bio;

        const projectsContainer = document.getElementById('projects');
        data.projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">Ver proyecto</a>
            `;
            projectsContainer.appendChild(projectElement);
        });

        const skillsContainer = document.getElementById('skills');
        data.skills.forEach(skill => {
            const skillElement = document.createElement('span');
            skillElement.classList.add('skill');
            skillElement.textContent = skill;
            skillsContainer.appendChild(skillElement);
        });
    })
    .catch(error => console.error('Error al cargar los datos:', error));