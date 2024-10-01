import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Portfolio from '../pages/Portfolio';

import './Project.css'
function Project({ data }) {

//  const { title, image, deployed_link, github } = data;

  return (
    <section className="project">
       
        <Card style={{ width: '18rem' }}>
          <Card.Img style={{ width: '40rem' }} variant="top" src={data.image} alt={data.title} />
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>
              <div>{data.description}</div>

            </Card.Text>
            <Button variant="primary">Checkout GitHub</Button>
            <Button variant="primary">Checkout Deployed App</Button>
          </Card.Body>
        </Card>
    </section>
  )
}

export default Project

{/* <Col xs={6} md={4}>
<Image src="holder.js/171x180" rounded />
</Col> */}
