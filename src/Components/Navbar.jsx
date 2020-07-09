import React from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav }  from 'react-bootstrap';
import { Link } from 'react-scroll';

function NavBar(props) {
    return (
        <Navbar variant="dark" expand="lg" sticky="top" className="navbar">
           <Navbar.Brand onClick={() => props.history.push('/')}>Yoga College</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link className="nav-item" onClick={() => props.history.push('/')} ><i className="fas fa-home"></i> Home</Nav.Link>
                <Nav.Link className="nav-item" onClick={() => props.history.push('/about')} ><i className="fas fa-address-card"></i> About</Nav.Link>
                <Nav.Link className="nav-item" onClick={() => props.history.push('/gallery')} ><i className="fas fa-photo-video"></i> Gallery</Nav.Link>
                <Nav.Link className="nav-item">
                <Link activeClass="active"
                to="footer"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <i className="fas fa-phone"></i> Contact</Link></Nav.Link>
              </Nav>
           </Navbar.Collapse>
         </Navbar>
    );
}

export default withRouter(NavBar);


