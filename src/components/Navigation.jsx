import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className='navigation'>
        <div>Hello, I Am Matthew</div>
        <Link to="/" className='nav-link'>About</Link>
        <Link to="/resume" className='nav-link'>Resume</Link>
        <Link to="/portfolio" className='nav-link'>Portfolio</Link>
        <Link to="/contact" className='nav-link'>Contact Me</Link>
    </nav>
  )
}

export default Navigation