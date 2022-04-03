import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import '../Home/Home.css';
import CourseInfo from '../CourseInfo/CourseInfo';


const Home = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch('./course.JSON')
      .then(res => res.json())
      .then(data => setCourse(data));
  }, [])






  return (

    <div>
      <div className="banner-container text-start">
        <h1 className="ms-5">Start a new day with Learn Today </h1>
        <button className="btn btn-lg-outline btn-info fs-5 fw-bolder ms-5 text-primary">Learn More</button>
      </div>
      <h3 className="mb-4">Popular Course</h3>
      <Row xs={1} md={2} lg={4} sm={1} className="g-4">
        {
          course.map(course => <CourseInfo course={course}></CourseInfo>)
        }


      </Row>
    </div>

  );
};




export default Home;