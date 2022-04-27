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
      <h2 className="my-3 text-center">
                <span className="border-success border-2 border-bottom">
                    Our All Courses
                </span>
            </h2>
        <div  className="row row-cols-1 row-cols-md-4 g-4">
          {
          courses.map(courses => <AllCourses courses={courses} key={courses.id}></AllCourses>)
          }
        </div>
      </Container>
    </div> 
    );
};

export default Services;