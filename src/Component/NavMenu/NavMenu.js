import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import logo from './ilearn.gif'

import "./NavMenu.css";
const NavMenu = () => {
    return (
      <Navbar bg="dark" variant={"dark"} expand="sm" className="navbar">
      <Container>
        <Navbar.Brand to="/home">
        {/* <img
      // className=" w-100"
      src={logo}
      alt="First slide"
    /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            navbarScroll
          >
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </Nav>
          <Form inline className="ml-auto">
            <FormControl
              type="text"
              placeholder="Type Course & Enter"
              className="mr-sm-2 m-lg-auto search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavMenu;