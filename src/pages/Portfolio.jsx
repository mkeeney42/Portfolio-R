import React, { useState } from 'react'
import Project from '../components/Project'
import image1 from '../assets/Film-Fanatics.png'
// import the rest of the images


const projectData = [
  {
    title: 'Film Fanatics',
    image: image1,
    description: 'Web application to search your favorite movies, and it returns a poster image of the movie. It also returns year was created, where to stream, cast and plot of movie.',
    deployed_link: 'http://www.render.com',
    github_link: 'http://www.github.com'
  },
  {
    title: 'Continue',
    image: 'src\assets\Continue.png',
    description: 'A eccomerce site for Retro video game lovers.',
    deployed_link: 'https://continue-4su3.onrender.com/',
    github_link: 'https://github.com/jameswhatcott/continue'
  },
  {
    title: 'Logo Maker',
    image: 'src\assets\LogoMaker.png',
    description: 'This Node.js command-line application generates an SVG logo based on user input. It allows users to choose a shape, specify colors for the shape and text, and input up to three characters for the logo text.',
    deployed_link: 'https://youtu.be/a0-i2-1g8Nk?si=eRELD8xctEIRK9-L',
    github_link: 'https://github.com/mkeeney42/logo-maker'
  },
  {
    title: 'Project D',
    image: '',
    description: '',
    deployed_link: 'http://www.render.com',
    github_link: 'http://www.github.com'
  },
  {
    title: 'Project E',
    image: '',
    description: '',
    deployed_link: 'http://www.render.com',
    github_link: 'http://www.github.com'
  },
  {
    title: 'Project F',
    image: '',
    description: '',
    deployed_link: 'http://www.render.com',
    github_link: 'http://www.github.com'
  },
  
]

function Portfolio() {

  // --> [variableToHoldData, methodToUpdateState]  = ReactHook(InitialState)
  const [allProjects, setAllProjects] = useState(projectData);

  return (
    <section className="portfolio">
        <div>Portfolio</div>
        { allProjects.map( (proj, idx) => (
          <Project key={idx} data={proj}/>
        ))}
    </section>
  )
}

export default Portfolio