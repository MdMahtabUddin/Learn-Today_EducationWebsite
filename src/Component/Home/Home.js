import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import '../Home/Home.css';
import CourseInfo from '../CourseInfo/CourseInfo';


const Home = () => {
  const [course , setCourse] =useState([]);

  useEffect(()=>{
      fetch('./course.JSON')
      .then(res=>res.json())
      .then(data=>setCourse(data));
  },[])

  



    
    return (
      
      <div>

        <Row xs={1} md={1} className="g-4">
  {
      course.map(course=> <CourseInfo course={course}></CourseInfo> )
  }

  
</Row> 
      </div>

    );
};




export default Home;