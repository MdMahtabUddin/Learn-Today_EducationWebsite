import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from "react-bootstrap";
import "./ContactUs.css";
const ContactUs = () => {
    return (
      <div className="admit-form">
      <Form className="container py-5 ">
      <h1>Contact Us form</h1>
  <Row className="mb-5">
      <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
      </Form.Group>
  </Row>

  <Form.Group className="mb-5" controlId="formGridAddress1">
      <Form.Label>Address</Form.Label>
      <Form.Control placeholder="1234 Road no." />
  </Form.Group>


  <div className="form-group mt-2">
        <textarea className="form-control text-white"rows="3"placeholder="message"></textarea>
    </div>

  <br></br>

  <Button variant="primary" type="submit" className="btn btn-lg btn-primary">
      Submit
  </Button>
  </Form>
  </div>
    );
};

export default ContactUs;




