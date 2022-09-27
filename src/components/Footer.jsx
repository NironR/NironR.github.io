import { Container, Row, Col } from "react-bootstrap"
import React from 'react';
import './css/footer.css'
import logo from "./assets/img/logo.png"
import navIcon1 from "./assets/img/nav-icon1.svg"
import navIcon2 from "./assets/img/github.svg"
import navIcon3 from "./assets/img/file-regular.svg"

const Footer = () => {
    return (
        <footer className="footer">
          <Container>
            <Row className="align-items-center">
              <Col size={12} sm={6}>
                <img src={logo} alt="Logo" />
              </Col>
              <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/ryan-norin-4970a5249/" target="_blank" ><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/NironR" target="_blank"><img className="navIcon" src={navIcon2} alt="" /></a>
                <a href="https://docs.google.com/document/d/1r8rGz8Nzbro6F5Zwm4RsV8mo5_gEUgCt/edit" target="_blank"><img className="navIcon" src={navIcon3} alt="" /></a>
              </div>
                <p>Copyright 2022. All Rights Reserved Ryan Norin</p>
              </Col>
            </Row>
          </Container>
        </footer>
    );
}

export default Footer;
