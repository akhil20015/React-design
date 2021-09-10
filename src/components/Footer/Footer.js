import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <Container fluid>
        <Row className="footer-contents">
          <Col md={6}>
            <h4 className="Text-logo">Amaze-On!!</h4>
            <p>
              Our main goal is to achieve customer satisfaction , We value your
              feedbacks and improve upon them. Get ready to be Amazed!!
            </p>
          </Col>
          <Col md={3}>
            <h5 >Locations</h5>
            <ul >
              <li>
                <a href="#">India</a>
              </li>
              <li>
                <a href="#">United Kingdom</a>
              </li>
              <li>
                <a href="#">China</a>
              </li>
              <li>
                <a href="#">Uae</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact</h5>
            <ul >
              <li>
                <a href="#">Email</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <div class="footer-copyright text-center  own-copyright ">
            &copy; 2021 Copyright:
            <a href="#"> Amaze-on.com</a>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
