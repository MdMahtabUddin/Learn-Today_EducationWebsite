import { ButtonGroup, Card, Col, Row } from 'react-bootstrap';
import "./CourseInfo.css";


const CourseInfo = (props) => {
    const {title, price,instructor, image} =props.course;
    
    return (
        <Col>
      <Card className="card shadow-lg">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Course: {title}</Card.Title>
          <Card.Text>
            Course fee :{price}
          </Card.Text>
          <Card.Text>
            Instructor :{instructor}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default CourseInfo;