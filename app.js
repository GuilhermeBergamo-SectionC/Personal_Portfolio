// Fetch data from the server
async function fetchData(endpoint) {
    try {
        const response = await fetch(`http://localhost:8000/${endpoint}`);
        return await response.json();
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        return null;
    }
}

// Update overview section
async function updateOverview() {
    const data = await fetchData('getOverview');
    if (data) {
        document.getElementById('name').textContent = data.name;
        document.getElementById('title').textContent = data.title;
        document.getElementById('summary').textContent = data.summary;

        // Update hobbies
        const hobbiesList = document.getElementById('hobbies-list');
        hobbiesList.innerHTML = '';
        data.hobbies.forEach((hobby, index) => {
            const hobbyElement = document.createElement('span');
            hobbyElement.className = 'hobby';
            hobbyElement.style.animation = `fadeIn 0.3s ease forwards ${index * 0.1}s`;
            hobbyElement.innerHTML = `<i class="fas fa-star"></i> ${hobby}`;
            hobbiesList.appendChild(hobbyElement);
        });
    }
}

// Update skills section
async function updateSkills() {
    const data = await fetchData('getSkills');
    if (data) {
        const technicalSkills = document.getElementById('technical-skills');
        const softSkills = document.getElementById('soft-skills');

        // Clear existing content
        technicalSkills.innerHTML = '';
        softSkills.innerHTML = '';

        // Add technical skills with staggered animation
        data.technical.forEach((skill, index) => {
            const skillElement = document.createElement('span');
            skillElement.className = 'skill';
            skillElement.style.animation = `fadeIn 0.3s ease forwards ${index * 0.1}s`;
            skillElement.textContent = skill;
            technicalSkills.appendChild(skillElement);
        });

        // Add soft skills with staggered animation
        data.soft.forEach((skill, index) => {
            const skillElement = document.createElement('span');
            skillElement.className = 'skill';
            skillElement.style.animation = `fadeIn 0.3s ease forwards ${index * 0.1}s`;
            skillElement.textContent = skill;
            softSkills.appendChild(skillElement);
        });
    }
}

// Update projects section
async function updateProjects() {
    const data = await fetchData('getProjects');
    if (data) {
        const projectsContainer = document.getElementById('projects');
        projectsContainer.innerHTML = '';

        data.forEach((project, index) => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project-card';
            projectElement.style.animation = `fadeIn 0.5s ease forwards ${index * 0.2}s`;
            
            projectElement.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.githubUrl}" target="_blank">
                            <i class="fab fa-github"></i> Source Code
                        </a>
                    </div>
                </div>
            `;
            
            projectsContainer.appendChild(projectElement);
        });
    }
}

// Update experience section
async function updateExperience() {
    const data = await fetchData('getExp');
    if (data) {
        const experienceContainer = document.getElementById('experience');
        experienceContainer.innerHTML = '';

        data.forEach((exp, index) => {
            const expElement = document.createElement('div');
            expElement.className = 'item';
            expElement.style.animation = `fadeIn 0.5s ease forwards ${index * 0.2}s`;
            expElement.innerHTML = `
                <h3>${exp.title}</h3>
                <div class="period"><i class="far fa-calendar-alt"></i> ${exp.company} | ${exp.period}</div>
                <p>${exp.description}</p>
            `;
            experienceContainer.appendChild(expElement);
        });
    }
}

// Update education section
async function updateEducation() {
    const data = await fetchData('getEdu');
    if (data) {
        const educationContainer = document.getElementById('education');
        educationContainer.innerHTML = '';

        data.forEach((edu, index) => {
            const eduElement = document.createElement('div');
            eduElement.className = 'item';
            eduElement.style.animation = `fadeIn 0.5s ease forwards ${index * 0.2}s`;
            eduElement.innerHTML = `
                <h3>${edu.degree}</h3>
                <div class="period"><i class="fas fa-university"></i> ${edu.school} | ${edu.year}</div>
                <p>${edu.description}</p>
            `;
            educationContainer.appendChild(eduElement);
        });
    }
}

// Initialize all sections
async function initializeResume() {
    await Promise.all([
        updateOverview(),
        updateSkills(),
        updateProjects(),
        updateExperience(),
        updateEducation()
    ]);
}

// Add scroll animations
function handleScroll() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Start the application
document.addEventListener('DOMContentLoaded', () => {
    initializeResume();
    window.addEventListener('scroll', handleScroll);
}); 