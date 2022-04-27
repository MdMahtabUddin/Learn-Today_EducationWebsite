import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import logo from './ilearn.gif'

import "./NavMenu.css";
const NavMenu = () => {
    return (
    //   

    <Navbar collapseOnSelect expand="sm" bg="secondary" variant="secondary">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
      
    </Nav>
    <Nav>
    <NavLink to="/home">Home</NavLink>
         <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/about">About Us</NavLink>
         {/* <NavLink to="/contact">Contact Us</NavLink> */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default NavMenu;