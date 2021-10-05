import React, { useEffect } from 'react';
import { useState } from "react";
import { Row,Container } from 'react-bootstrap';
import AllCourses from '../AllCourses/AllCourses';

const Services = () => {

    const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('./courses.JSON')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="home">
      <Container>
          <h3 className="mb-4">All Courses</h3>
        <Row xs={1} md={2} lg={3} className="g-4">
          {
          courses.map(courses => <AllCourses courses={courses} key={courses.id}></AllCourses>)
          }
        </Row>
      </Container>
    </div> 
    );
};

export default Services;