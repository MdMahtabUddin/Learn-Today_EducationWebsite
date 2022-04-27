import { ButtonGroup, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./CourseInfo.css";


const CourseInfo = (props) => {
    const {title, price,instructor, image} =props.course;
    
    return (
        <div className="col">
        <div className="card h-100">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body text-secondary">
                <h5 className="card-title">{title}</h5>
                <h5 className="card-title">{instructor}</h5>
                <p className="card-text">${price}</p>
            </div>
            <div className="card-footer">
                
                    <button className="btn btn-outline-dark">Enroll Course</button>
                
            </div>
        </div>
    </div>
    );
};

export default CourseInfo;