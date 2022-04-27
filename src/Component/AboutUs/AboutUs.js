import React from 'react';
import { Row, Col, } from 'react-bootstrap';
import '../AboutUs/AboutUs.css'
import image from './about.gif'

const About = () => {
    return (
        <div className="pb-5">
            <div className="about-container text-white">

            </div>

            <div className="container my-5 py-5">
                <Row >
                    <Col className="about-content text-start">
            {/* //   <h1>About Us</h1> */}
                        
                        <div className="about-item fs-5 fw-bolder text-start">
                            <li><span><i className="far fa-check-circle"></i></span> Full lifetime access</li>
                            <li> <span><i className="far fa-check-circle"></i></span> 20+ downloadable resources</li>
                            <li> <span><i className="far fa-check-circle"></i></span> Certificate of completion</li>
                            <li> <span><i className="far fa-check-circle"></i></span> Free Trial 7 Days</li>
                            <button className="btn btn-info fs-5 fw-bolder ms-5 text-secondary mt-3">Enroll Now</button>
                        </div>
                    </Col>
                    <Col className="about-img">
                        <img className="img-fluid" src={image} alt="" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default About;