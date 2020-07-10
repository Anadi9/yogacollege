import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import about from '../Images/about.jpg'

function About(props) {
    return (
        <Container fluid className="about">
            <Container className="py-5">
               <h1 className="pb-3">About Yoga College</h1>
               <Row>
                 <Col sm className="py-3 order-1 order-lg-1">
                    <article className="px-4">
                      From Yoga Capital Rishikesh - A Premier Yoga Center in Rishikesh<br/>
                      'Rishikesh is known as the capital city of yoga in the world canvas, yogic activities are here in the air. From yoga practices (in various form) to meditation and other retreats activities make it popular among yoga practitioners. Bank of holy river Ganga and foothills of Himalaya are also the prime attraction for yoga and meditation aspirants. All details about yoga training, availability, price options, accommodation, and booking conditions are conveniently arranged at one place and booking options are easily available on our website. You can contact our executives directly with questions or simply go ahead and make an online reservation.'
                    </article>
                 </Col>
                 <Col sm className="py-3 order-2 order-lg-2">
                   <Image fluid src={about} alt="rishikesh yoga pic" className="aboutimg" height="300px"/>
                 </Col>
               </Row>
            </Container>
        </Container>
    );
}

export default About;