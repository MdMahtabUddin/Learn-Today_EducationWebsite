import React from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
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
      <Carousel>
  <Carousel.Item>
    <img
      className=" w-100"
      src={image}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
</Carousel>
      <h3 className="mb-4">Popular Course</h3>
      <Row xs={1} md={2} lg={4} className="g-4">
        {
          course.map(course => <CourseInfo course={course}></CourseInfo>)
        }


      </Row>
    </div>

  );
};




export default Home;