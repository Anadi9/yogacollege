import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import GalleryImg from './../Service/GalleryImg';

function Gallery(props) {
    return (
       <Container fluid className="gallery">
          <Container className="pt-5">
             <h2>Taking YOGA beyond the studio.</h2>
          </Container>
          <Container fluid className="py-5 mx-auto">
            <Row>
              <Col>
              {GalleryImg.map(({id,imgsrc}) => {
                  return (
                  <Image
                   key={id}
                   className="mx-1 my-1" 
                   src={require(`../Images/yc${imgsrc}.jpeg`)} 
                   height="200px" 
                   alt="Eshwar Nirola yoga asana pics"/>
              )
            })} 
              </Col>
            </Row>
          </Container>
       </Container>
    );
}

export default Gallery;