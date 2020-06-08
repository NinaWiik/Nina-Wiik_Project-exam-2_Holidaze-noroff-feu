import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Insta from "../../assets/socialmedia/insta.png";
import Facebook from "../../assets/socialmedia/fb.png";
import Twitter from "../../assets/socialmedia/twitter.png";

function Footer() {
  return (
    <div>
      <Container className="container__footer" fluid>
        <Row>
          <Col className="col__footer--left">
            <h5>Our Address</h5>
            <p className="paragraph__footer--left">Dreggsallmenningen 1,</p>
            <p className="paragraph__footer--left">5003 Bergen</p>
            <p className="paragraph__footer--left">Tel: +47 123 45 678</p>
          </Col>
          <Col className="col__footer--middle">
            <p className="paragraph__footer--middle">
              Copyright &copy; {new Date().getFullYear()} - HOLIDAZE
            </p>
          </Col>
          <Col className="col__footer--right">
            <h5>Follow us </h5>
            <a href="https://instagram.com" className="anchor__footer">
              <img
                src={Insta}
                className="image__footer--some"
                alt="instagram social media icon"
              ></img>
            </a>
            <a href="https://facebook.com" className="anchor__footer">
              <img
                src={Facebook}
                className="image__footer--some"
                alt="facebook social media icon"
              ></img>
            </a>
            <a href="https://twitter.com" className="anchor__footer">
              <img
                src={Twitter}
                className="image__footer--some"
                alt="twitter social media icon"
              ></img>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
