import React, { Component } from "react";
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Navbar.css";


const MyNavbar = () => {

    return (
      <Navbar bg="warning" expand="">
  <Navbar.Brand href="/">Cooking Instruction Made Easy</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home |</Nav.Link>
      <Nav.Link href="/about">About |</Nav.Link>
      <Nav.Link href="/calendar">Join Us |</Nav.Link>
      <Nav.Link href="/contact">Contact Us |</Nav.Link>
      <Nav.Link href="/menu">What's On The Menu |</Nav.Link>

      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>
    );
};

export default MyNavbar;
