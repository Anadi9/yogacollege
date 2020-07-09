import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function LandingPage(props) {
    return (
        <React.Fragment>
           <Container fluid className="landingpage">
              <h1>Welcome To Yoga College</h1>
           </Container>
           <Container fluid className="start py-4">
               <Row>
                 <Col className="col2">
                   <h2 className="py-2">Spreading mindful movement.</h2>
                   <h4 className="py-2">Avail your 3 Day trial for FREE</h4>
                   <h3>Our Services</h3><i className="fas fa-2x fa-angle-double-down"></i><br/>
                   <Button 
                   className="button my-3" 
                   variant="outline-dark" 
                   size="lg" 
                   onClick={() => props.history.push('/services')}>Start Today</Button>
                 </Col>
               </Row>
           </Container>
        </React.Fragment>
    );
}

export default LandingPage;