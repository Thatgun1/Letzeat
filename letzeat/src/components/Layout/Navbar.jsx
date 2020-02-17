import React, { Component } from "react";
import {
  Nav,
  Navbar,
  // NavDropdown,
  // Form,
  // FormControl,
  // Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const MyNavbar = () => {
  return (
    <Navbar bg="warning" expand="lg" style={{width:"1515px", position:"absolute"}}>
      <Navbar.Brand href="/">Cooking Instruction Made Easy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home      |</Nav.Link>
          <Nav.Link href="/calendar">Class Schedule |</Nav.Link>
          <Nav.Link href="/menu">Class Selections  |</Nav.Link>
          <Nav.Link href="/about">General Class Info |</Nav.Link>
          <Nav.Link href="/john">About Your Teacher |</Nav.Link>
          <Nav.Link href="/contact">Contact Us |</Nav.Link>


          {/* <NavDropdown title="What's on the Menu" id="basic-nav-dropdown">
            <NavDropdown.Item href="/menu">Food Item</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
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
