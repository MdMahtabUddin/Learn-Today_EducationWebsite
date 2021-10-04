import React, { useEffect } from 'react';
import { useState } from "react";
import { Row } from 'react-bootstrap';

const Services = () => {

    const [allCourse, setAllCourse] =useState([]);
    useEffect(()=>{
        fetch('./allCourses.JSON')
        .then(res=>res.json())
        .then(data=>setAllCourse(data));
    },[])
    return (
        <Row xs={1} md={1} className="g-4">
        {
            allCourse.map(course=> <course course={course}></course> )
        }
      </Row>  
    );
};

export default Services;