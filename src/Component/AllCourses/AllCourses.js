import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./AllCourses.css"

const AllCourses = (props) => {
  const {title, price,instructor, image} =props.courses;
    
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

export default AllCourses;