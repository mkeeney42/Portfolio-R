import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/matthew-keeney-492b49290/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/mkeeney42?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          GitHub
        </a>
      </div>
      <p className="footer-text">&copy; {new Date().getFullYear()} Coding better than yesterday</p>
    </footer>
  );
};

export default Footer;