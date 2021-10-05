import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';


const Home = (props) => {
  const [course , setCourse] =useState([]);

  useEffect(()=>{
      fetch('/course.JSON')
      .then(res=>res.json())
      .then(data=>setCourse(data));
  },[])



    
    return (
      
      <div>
        <Row xs={1} md={1} className="g-4">
  {
      course.map(home=> <Home home={home}></Home> )
  }

  
</Row> 
      </div>

    );
};




export default Home;