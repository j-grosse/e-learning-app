import React from 'react';
import daisyui from 'daisyui';
import { Button, Card } from 'react-daisyui';
const CourseCard = () => {
  return (
    <div>
      <Card className="shadow-2xl w-80 m-4 bg-gray-400">
        <figure>
          <img src="https://picsum.photos/id/1005/500/250" />
        </figure>
        <Card.Body>
          <Card.Title>DaisyUI Card</Card.Title>
          <p>
            Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
            sit necessitatibus.
          </p>
          <Button>Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseCard;
