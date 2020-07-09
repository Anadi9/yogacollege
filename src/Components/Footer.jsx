import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer(props) {
    const year = new Date().getFullYear();
    return (
        <Container fluid className="footer py-2">
            <Row>
               <Col className="social py-4">
                 <i className="fab fa-2x fa-whatsapp"></i> Phone: +91 8923551074<br/><br/>
                 <i className="fas fa-2x fa-envelope"></i> Email: Collegeyoga1@gmail.com<br/><br/>
                 <a className="mx-3" href="https://www.instagram.com/invites/contact/?i=11kadljom40g1&utm_content=9rwfz2f">
                 <i className="fab fa-2x fa-instagram"></i></a>
               </Col>
            </Row>
            <Row>
               <Col className="py-4">
                 <p>&copy;Yoga College. All rights reserved {year}</p>
               </Col>
            </Row>
        </Container>
    );
}

export default Footer;