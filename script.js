const myCarouselElement = document.querySelector('#carouselMain')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})

const projectListElements = (projectNumber, heading, src, innerText) => {
  const projectListElement = document.querySelector('#project-list')
  const projectDiv = document.createElement('div')
  projectDiv.id = `project-${projectNumber}`
  const projectImage = document.createElement('img')
  projectImage.id = `project-${projectNumber}-image`
  projectImage.src = src
  const projectDescription = document.createElement('div')
  projectDescription.id = `project-${projectNumber}-description`
  const projectHeading = document.createElement('h3')
  projectHeading.id = `project-${projectNumber}-heading`
  projectHeading.innerText = heading
  const projectText = document.createElement('p')
  projectText.id = `project-${projectNumber}-text`
  projectText.innerText = innerText
  projectListElement.appendChild(projectDiv)
  projectDiv.appendChild(projectImage)
  projectDiv.appendChild(projectDescription)
  projectDescription.appendChild(projectHeading)
  projectDescription.appendChild(projectText)
}

projectListElements(1, 'Tic Tac Toe', 'resources/Tic-Tac-Toe-list.png', 'Grid-based game using just JavaScript, HTML and CSS. This project helped to cement my understanding of JavaScript in particular and gave me a good opportunity to build an app that involved a significant amount of game logic. It also allowed me to learn more about coding best practices for bigger-sized applications and had a lot of scope to add optional features (local storage and photo uploads for example)')
projectListElements(2, 'Dream Team', 'resources/dream-team-project-list.png', 'React front end with Ruby Backend. Created an app that allows users to create, update and delete their own fantasy football teams and share them with other users. This project really helped my knowledge and application of Ruby.')
projectListElements(3, 'Create Your Own Playlist', 'resources/music-ui-list.png', 'React frontend app with an Axios API connection to the iTunes API. The aim of the project was to allow users to create and customise their own music playlists as they please. This project really cemented my React knowledge and enabled me to learn more about React Hooks in particular.')
projectListElements(4, 'Game Dictionary', 'resources/game-dictionary-list.png', 'Full-stack MERN app with CRUD functionality. As a group, we created an app that allows fans of the game Apex Legends to understand the game better. I worked on the Authentication, Login page and Profile page as well as pair programming the Node.js server.')

const header = document.querySelector('#header-sections')

const loadStickyHeader = () => {
  if(window.pageYOffset > document.querySelector('#about-me').offsetTop) {
    header.className = 'show'
  } else {
    header.className = 'hide'
  }
}

const highlightSection = (menuSelector, sectionSelector) => {
  if(window.pageYOffset >= sectionSelector.offsetTop -1 && window.pageYOffset < (sectionSelector.offsetTop + sectionSelector.scrollHeight -1)) {
    menuSelector.className = 'highlighted'
  } else {
    menuSelector.className = 'not-highlighted'
  }
}

const highlightSectionBeforeFooter = (menuSelector, sectionSelector, bodySelector) => {
  if(window.pageYOffset >= sectionSelector.offsetTop && window.pageYOffset < (bodySelector.scrollHeight - window.visualViewport.height - document.querySelector('footer').scrollHeight)) {
    menuSelector.className = 'highlighted'
  } else {
    menuSelector.className = 'not-highlighted'
  }
}

const highlightFooter = (menuSelector, sectionSelector) => {
  if(window.pageYOffset > (sectionSelector.scrollHeight - window.visualViewport.height - document.querySelector('footer').scrollHeight)) {
    menuSelector.className = 'highlighted'
  } else {
    menuSelector.className = 'not-highlighted'
  }
}

const aboutMenuSelect = document.querySelector('#about-select')
const aboutSection = document.querySelector('#about-me')
const skillsMenuSelect = document.querySelector('#skills-select')
const skillsSection = document.querySelector('#skills')
const projectsMenuSelect = document.querySelector('#projects-select')
const projectsSection = document.querySelector('#project-carousel')
const projectsSectionExtended = document.querySelector('#project-list')
const contactMenuSelect = document.querySelector('#contact-select')
const contactSection = document.querySelector('body')

window.onscroll = () => {
  loadStickyHeader();
  highlightSection(aboutMenuSelect, aboutSection);
  highlightSection(skillsMenuSelect, skillsSection);
  highlightSectionBeforeFooter(projectsMenuSelect, projectsSection, contactSection);
  highlightFooter(contactMenuSelect, contactSection);
}

const learnMoreButtons = document.querySelectorAll('.btn.btn-secondary')

learnMoreButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const projectNumber = index + 1
    const stringValue = projectNumber.toString()
    const projectToHighlight = document.querySelector(`#project-${stringValue}`)
    projectToHighlight.className = 'highlighted-project';
    setTimeout(() => projectToHighlight.className = '', 3000)
  })
})

// history.replaceState(null, null, '');

const skillsElements = (skillNumber, skill, type, src) => {
  let skillsSection = null
  if(type === 'coding') {
    skillsSection = document.querySelector('#coding-skills-section')
  } else {
    skillsSection = document.querySelector('#professional-skills-section')
  }
  const skillDiv = document.createElement('div')
  skillDiv.id = `skill-${skillNumber}`
  skillDiv.className = 'skill'
  skillsSection.appendChild(skillDiv)
  if(type === 'coding') {
    const skillImage = document.createElement('img')
    skillImage.id = `skill-${skillNumber}-image`
    skillImage.className = 'skill-image'
    skillImage.src = src
    skillDiv.appendChild(skillImage)
  }
  const skillName = document.createElement('p')
  skillName.id = `skill-${skillNumber}-name`
  skillName.className = `skill-name`
  skillName.innerText = skill
  skillDiv.appendChild(skillName)
}

skillsElements(1, 'JavaScript', 'coding', 'resources/js.png')
skillsElements(2, 'HTML5', 'coding', 'resources/html.png')
skillsElements(3, 'CSS3', 'coding', 'resources/css.png')
skillsElements(4, 'React.js', 'coding', 'resources/react.png')
skillsElements(5, 'Node.js', 'coding', 'resources/nodejs.png')
skillsElements(6, 'MongoDB', 'coding', 'resources/mongodb.png')
skillsElements(7, 'Ruby on Rails', 'coding', 'resources/ruby.png')
skillsElements(8, 'Git', 'coding', 'resources/git.png')
skillsElements(9, 'PostgreSQL', 'coding', 'resources/postgresql.png')
// skillsElements(10, 'Team Leadership', 'pro')
// skillsElements(11, 'Ad Technologies', 'pro')
// skillsElements(12, 'Client Serives', 'pro')
// skillsElements(13, 'Product Management', 'pro')
// skillsElements(14, 'Troubleshooting', 'pro')
// skillsElements(15, 'Presenting', 'pro')
