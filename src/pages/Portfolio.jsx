import React, { useState } from 'react'
import Project from '../components/Project'
import image1 from '../assets/Film-Fanatics.png'
import image2 from '../assets/Continue.png'
import image3 from '../assets/NoteTaker.png'
import image4 from '../assets/TaskBoard.png'
import image5 from '../assets/Blog.png'
import image6 from '../assets/LogoMaker.png'
import './pages.css'
// import the rest of the images


const projectData = [
  {
    title: 'Film Fanatics',
    image: image1,
    description: 'Web application to search your favorite movies, and it returns a poster image of the movie. It also returns year was created, where to stream, cast and plot of movie.',
    deployed_link: 'https://mkeeney42.github.io/Film-Fanatics/',
    github_link: 'https://github.com/mkeeney42/Film-Fanatics'
  },
  {
    title: 'Continue',
    image: image2,
    description: 'A eccomerce site for Retro video game lovers.',
    deployed_link: 'https://continue-4su3.onrender.com/',
    github_link: 'https://github.com/jameswhatcott/continue'
  },
  {
    title: 'Logo Maker',
    image: image6,
    description: 'This Node.js command-line application generates an SVG logo based on user input. It allows users to choose a shape, specify colors for the shape and text, and input up to three characters for the logo text.',
    deployed_link: 'https://youtu.be/a0-i2-1g8Nk?si=eRELD8xctEIRK9-L',
    github_link: 'https://github.com/mkeeney42/logo-maker'
  },
  {
    title: 'NoteTaker',
    image: image3,
    description: 'The Note-Taker application is a web-based tool designed for users to create, save, and manage their notes. Built with an Express.js back end, this application allows users to organize their thoughts and track tasks efficiently. The front end is intuitive and user-friendly, providing a seamless experience for note management.',
    deployed_link: 'https://note-taker-mihl.onrender.com',
    github_link: 'https://github.com/mkeeney42/note-taker'
  },
  {
    title: 'Kaplan Task Board',
    image: image4,
    description: 'The Task Board Application is a web-based tool designed for project teams to efficiently manage and track tasks throughout a project’s lifecycle. Leveraging the power of jQuery and the Day.js library for date management, this application provides a visually organized interface that allows team members to easily add, update, and delete tasks, while monitoring their progress at a glance.',
    deployed_link: 'https://mkeeney42.github.io/Kaplan-taskBoard/',
    github_link: 'https://github.com/mkeeney42/Kaplan-taskBoard'
  },
  {
    title: 'Blog Page',
    image: image5,
    description: 'The Personal Blog project is a two-page website that allows users to create and view blog posts. It features a user-friendly form for submitting entries, dynamically rendered posts, and a light/dark mode toggle for improved readability. This project showcases practical JavaScript skills and explores the Document Object Model (DOM) for dynamic content manipulation.',
    deployed_link: 'https://mkeeney42.github.io/blog-page/',
    github_link: 'https://github.com/mkeeney42/blog-page'
  },
  
]

function Portfolio() {

  // --> [variableToHoldData, methodToUpdateState]  = ReactHook(InitialState)
  const [allProjects, setAllProjects] = useState(projectData);

  return (
    <section className="portfolio">
        <h1 className='portfolio-title'>Portfolio</h1>
        <div className="portfolio-content">
          { allProjects.map( (proj, idx) => (
            <Project key={idx} data={proj}/>
          ))}

        </div>
    </section>
  )
}

export default Portfolio