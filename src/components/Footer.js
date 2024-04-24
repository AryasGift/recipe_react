import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
function Footer() {
    return (
        <div>
            <div className="bg-body-tertiary">
                <Container>
                    <Row>

                        <Col lg={6}>
                            <div className='m-3 text-center FooterSection'>
                                For better experience,download the FoodWorld app now
                            </div>
                        </Col>
                        <Col lg={6}>
                            <img className='m-3' src="https://i.postimg.cc/TwptnvHq/play-store.avif" style={{ height: '64px' }} />
                            <img className='m-3' src="https://i.postimg.cc/ydHNZ7N2/app-store.avif" style={{ height: '64px' }} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bg-dark text-light">
            <Container>
                <Row>
                    <Col lg={4} md={4} sm={6}>
                        <div>
                            <h4 className='m-3 text-light'>Company</h4>
                            <ul style={{listStyleType:'none'}}>
                                <li>About</li>
                                <li>Careers</li>
                                <li>Team</li>

                            </ul>
                        </div>
                     </Col>
                     <Col lg={4} md={4} sm={6}>
                        <div>
                            <h4 className='m-3 text-light'>Contact us</h4>
                            <ul style={{listStyleType:'none'}}>
                                <li>Help & Support</li>
                                <li>Partner with us</li>
                                <li>Ride with us</li>

                            </ul>
                        </div>
                     </Col>
                     <Col lg={4} md={4} sm={6}>
                        <div>
                            <h4 className='ms-4 mt-3 text-light'>Legal</h4>
                            <ul style={{listStyleType:'none'}}>
                                <li>Terms & Conditions</li>
                                <li>Cookie policy</li>
                                <li>Privacy Policy</li>

                            </ul>
                        </div>
                     </Col>
                </Row>
            </Container>
           
        </div>
 
        </div>
    )
}

export default Footer
