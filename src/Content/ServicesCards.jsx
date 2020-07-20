import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Services from './../Service/Services';

function ServicesCards(props) {
    return (
        <Container fluid>
            <Container className="pt-5">
                <h2>Our Services</h2>
            </Container>
            <Container fluid className=" py-5 mx-auto">
               <Row>
                 <Col className="cards_list">
                 {Services.map(({id,title,img}) => {
                    return (
                      <div key={id} className="cards round mx-4 my-4">
                       <div>
                        <Image variant="top" className="card_img" src={require(`../Images/service${img}.jpeg`)} alt="services pic" height="150px"/>
                        </div>
                         <div className="card_title">
                            {title}
                         </div>
                      </div>
                      )
                   })}
                 </Col>
               </Row>
                    
                  
            </Container>
        </Container>
    );
}

export default ServicesCards;