import { ButtonGroup, Card, Col, Row } from 'react-bootstrap';
import Home from '../Home/Home';


const CourseInfo = (props) => {
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

export default CourseInfo;