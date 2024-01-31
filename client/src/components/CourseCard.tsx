import React from 'react'
import { Card, Button } from 'react-daisyui';

const CourseCard = ( { image, title, text, size }  ) => {
  return (
    <div className=''>
    <Card side={size}>
      <Card.Image
        src={image} alt="card image"
      />
      <Card.Body>
        <Card.Title tag="h2">{title}</Card.Title>
        <p>{text}</p>
        <Card.Actions className="justify-end">
          <Button color="primary">Details</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  </div>
  )
};

export default CourseCard