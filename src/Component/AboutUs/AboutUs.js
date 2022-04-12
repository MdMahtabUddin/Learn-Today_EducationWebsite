import React from 'react';
import { Row, Col, } from 'react-bootstrap';
import '../AboutUs/AboutUs.css'

const About = () => {
    return (
        <div className="pb-5">
            <div className="about-container text-white">

            </div>

            <div className="container my-5 py-5">
                <Row >
                    <Col className="about-content text-start">
            //   <h1>About Us</h1>
                        <p className="fs-5">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, distinctio. loren5
                            Lorem ipsum dolor sit amet.</p>
                        <div className="about-item fs-5 fw-bolder text-start">
                            <li><span><i className="far fa-check-circle"></i></span> Full lifetime access</li>
                            <li> <span><i className="far fa-check-circle"></i></span> 20+ downloadable resources</li>
                            <li> <span><i className="far fa-check-circle"></i></span> Certificate of completion</li>
                            <li> <span><i className="far fa-check-circle"></i></span> Free Trial 7 Days</li>
                            <button className="btn btn-info fs-5 fw-bolder ms-5 text-secondary mt-3">Enroll Now</button>
                        </div>
                    </Col>
                    <Col className="about-img">
                        <img className="img-fluid" src="https://imgur.com/5oP3vKg.jpg" alt="" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default About;