import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <Container fluid id="footer-box">
            <Row>
                <Col xs={12} md={3}><img id="logo-footer" src="images/logo-footer.svg" alt="logo" /></Col>
                <Col xs={12} md={3} className="footer-section">
                    <p className="footer-title">Features</p>
                    <ul className="footer-list">
                        <li className="text">Link Shortening</li>
                        <li className="text">Branded Links</li>
                        <li className="text">Analytics</li>
                    </ul>
                </Col>
                <Col xs={12} md={3} className="footer-section">
                    <p className="footer-title">Resources</p>
                    <ul className="footer-list">
                        <li className="text">Blog</li>
                        <li className="text">Developers</li>
                        <li className="text">Support</li>
                    </ul>
                </Col>
                <Col xs={12} md={3} className="footer-section">
                    <p className="footer-title">Company</p>
                    <ul className="footer-list">
                        <li className="text">About</li>
                        <li className="text">Our Team</li>
                        <li className="text">Careers</li>
                        <li className="text">Contact</li>
                    </ul>
                </Col>
            </Row>

            <div id="socials">
                <img className="socialIcon" src="images/icon-facebook.svg" alt="facebook" />
                <img className="socialIcon" src="images/icon-twitter.svg" alt="twitter" />
                <img className="socialIcon" src="images/icon-pinterest.svg" alt="pinterest" />
                <img className="socialIcon" src="images/icon-instagram.svg" alt="instagram" />
            </div>
        </Container>
     
    )
}
export default Footer;
