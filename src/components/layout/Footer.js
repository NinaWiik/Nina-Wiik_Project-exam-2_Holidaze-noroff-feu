import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Insta from "../../assets/socialmedia/insta.png";
import Facebook from "../../assets/socialmedia/fb.png";
import Twitter from "../../assets/socialmedia/twitter.png";
import { FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <Container className="footer__container" fluid>
        <Row>
          <Col className="footer__col--left">
            <h5>Our Address</h5>
            <p className="footer__paragraph--left">Dreggsallmenningen 1,</p>
            <p className="footer__paragraph--left">5003 Bergen</p>
            <p className="footer__paragraph--left">Tel: +47 123 45 678</p>
          </Col>
          <Col className="footer__col--middle">
            <p className="footer__paragraph--middle">
              Copyright &copy; {new Date().getFullYear()} - HOLIDAZE
            </p>
          </Col>
          <Col className="footer__col--right">
            <h5>Follow us </h5>
            <a href="https://instagram.com">
              <FaInstagram className="footer__anchor" />
            </a>
            <a href="https://facebook.com">
              <FaFacebookSquare className="footer__anchor" />
            </a>
            <a href="https://twitter.com">
              <FaTwitter className="footer__anchor" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
