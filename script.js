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

projectListElements(1, 'Tic Tac Toe', 'Tic-Tac-Toe-list.png', 'Grid-based game using just JavaScript, HTML and CSS. This project helped to cement my understanding of JavaScript in particular and gave me a good opportunity to build an app that involved a significant amount of game logic. It also allowed me to learn more about coding best practices for bigger-sized applications and had a lot of scope to add optional features (local storage and photo uploads for example)')
projectListElements(2, 'Dream Team', 'dream-team-project-list.png', 'React front end with Ruby Backend. Created an app that allows users to create, update and delete their own fantasy football teams and share them with other users. This project really helped my knowledge and application of Ruby.')
projectListElements(3, 'Music UI', 'music-ui-list.png', 'React frontend app with an Axios API connection to the iTunes API. The aim of the project was to allow users to create and customise their own music playlists as they please. This project really cemented my React knowledge and enabled me to learn more about React Hooks in particular.')
projectListElements(4, 'Game Dictionary', 'game-dictionary-list.png', 'Full-stack MERN app with CRUD functionality. As a group, we created an app that allows fans of the game Apex Legends to understand the game better. I worked on the Authentication, Login page and Profile page as well as pair programming the Node.js server.')

// const projectNavigation = document.querySelector('#header-option-project')
// projectNavigation.addEventListener('click', () => {
//   e.scrollIntoView({
//     block: 'end',
//     behaviour: 'smooth',
//     inline: 'center'
//   })
// })
