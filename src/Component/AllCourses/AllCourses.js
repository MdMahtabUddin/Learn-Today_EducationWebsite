import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AllCourses = (props) => {
    const {title, price, image} =props.course;
    
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {price}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default AllCourses;