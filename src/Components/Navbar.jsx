import React from 'react';
import { Navbar, Nav }  from 'react-bootstrap';

function NavBar(props) {
    return (
        <Navbar expand="lg" sticky="top" className="navbar">
           <Navbar.Brand href="#home">Yoga College</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#link">Services</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
              </Nav>
           </Navbar.Collapse>
         </Navbar>
    );
}

export default NavBar;


