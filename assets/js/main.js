// função imediatamente invocada
(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateExperience(profileData);
})();

function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById('profile.name');
    name.innerText = profileData.name; 

    const job = document.getElementById('profile.job');
    job.innerText = profileData.job;

    const location = document.getElementById('profile.location');
    location.innerText = profileData.location;

    const phone = document.getElementById('profile.phone');
    phone.innerText = profileData.phone;
    phone.href = `tel: ${profileData.phone}`;

    const email = document.getElementById('profile.email');
    email.innerText = profileData.email;
    email.href = 'mailto:'.concat(profileData.email);

}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.soft_skills');
    softSkills.innerHTML = profileData.skills.soft_skills.map(skill => `<li>${skill}</li>`).join('');
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hard_skills');
    hardSkills.innerHTML = profileData.skills.hard_skills.map(skill => 
        `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`
    ).join('');
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages');
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio');
    portfolio.innerHTML = profileData.portfolio.map(project => 
        `<li>
            <h3 class="${project.github ? "github" : ''}">${project.name}</h3>
            <ul class="tools">
                ${project.tools.map( tool => 
                    `<li><img src="${tool.logo}" alt="${tool.name}" title="${tool.name}"></li>`).join('')}
            </ul>
            <a href="${project.url}" target="_blank">${project.url}</a>
        </li>`).join('');
}

function updateExperience(profileData) {
    const experience = document.getElementById('profile.experience');
    experience.innerHTML = profileData.professional_experience.map( experience => 
        `  
            <li>
                <h3 class="title">${experience.name}</h3>
                <span class="period">${experience.period}</span>
                <p>${experience.description}</p>
            </li>
        `  
    );
}