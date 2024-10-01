import React from 'react';
import ProfileImg from '../assets/react.svg';

function About() {
  return (
    <section className="about">
      <div>About Me</div>
      <img src={ProfileImg} />
      <p>Hello! I’m Matthew Keeney, a seasoned sales professional with over 7 years of experience and a current Software Development Bootcamp student at Ohio State University. My journey began in Huntington, West Virginia, and has taken me through South Point, Ohio, and Morehead, Kentucky, where I’ve been residing since February 2023.

Currently, I work with National Garden Service, managing plant care for various corporations. This role allows me to blend my dedication to detail with my love for nurturing growth and beauty. Simultaneously, I’m diving deep into the world of software development, having discovered a passion for programming midway through 2023. I am committed to continuous learning and skill enhancement in this dynamic field.

Beyond my professional life, I’m an avid hunter and fisherman, and I take pride in my hidden talent as a cornhole guru. My love for family and sports, particularly as a lifelong Cincinnati Bengals fan, shapes my personal life and drives my enthusiasm.

I firmly believe in treating others the way I would like to be treated—a principle that guides my interactions both personally and professionally. As I navigate through my bootcamp and beyond, I am excited to integrate my diverse experiences into innovative solutions and contribute meaningfully to the tech industry.

Feel free to connect with me to discuss opportunities, share insights, or just chat about sports and the great outdoors!</p>
    </section>
  )
}

export default About