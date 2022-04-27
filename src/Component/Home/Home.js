import React from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import '../Home/Home.css';
import CourseInfo from '../CourseInfo/CourseInfo';
import image from './JS.gif'

const Home = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch('./course.JSON')
      .then(res => res.json())
      .then(data => setCourse(data));
  }, [])






  return (

    <div>
      <div className="container hero-section py-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 lh-lg" data-aos="fade-right">
                    <small className="fw-light text-secondary">For Better Wellness & Hope</small>
                    <h1>Welcome to Learn Today
                        <br />
                        

                    </h1>

                    

                </div>
                <div className="col-md-6" data-aos="fade-left">
                    <div>
                        <img className="img-fluid w-100" src={image} alt="" />
                    </div>
                </div>

            </div>
        </div>
        <Container>
        <h2 className="my-3 text-center">
                <span className="border-success border-2 border-bottom">
                    Our Courses
                </span>
            </h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {
          course.map(course => <CourseInfo course={course}></CourseInfo>)
        }


      </div>
        </Container>
    </div>

  );
};




export default Home;