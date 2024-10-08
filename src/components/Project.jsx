import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Portfolio from '../pages/Portfolio';

import './Project.css'
function Project({ data }) {

//  const { title, image, deployed_link, github } = data;

  return (
    <section className="project">
       
        <Card >
          <Card.Img style={{ maxWidth: '300px' }} variant="top" src={data.image} alt={data.title} />
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>
              <div>{data.description}</div>

            </Card.Text>
            <a href={data.github_link} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className='git-btn'>Checkout GitHub</Button>
            </a>
            <a href={data.deployed_link} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className='deploy-btn'>Checkout Deployed App</Button>
            </a>
          </Card.Body>
        </Card>
    </section>
  )
}

export default Project

{/* <Col xs={6} md={4}>
<Image src="holder.js/171x180" rounded />
</Col> */}
