import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Bergen1 from "../../assets/images/bergen1.jpg";
import BergenCover from "../../assets/images/bergen2.jpg";
import Subscribe from "./Subscribe";

function Home() {
  return (
    <>
      <Container className="home__Container--first" fluid>
        <Row className="home__Row">
          <Col>
            <h1>Visit Bergen</h1>
            <p>
              <img
                src={Bergen1}
                className="bergen__picture1"
                alt="bryggen in Bergen"
              />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore .
            </p>
            <h6>find your accommodation</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </Col>
          <Col>
            <h1>Whats up?</h1>
            <h4>10.05.20 - Food Festival</h4>
            <p className="whatsup">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h4>15.06.20 - Beer Festival</h4>
            <p className="whatsup">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="container__cover">
        <img
          src={BergenCover}
          className="bergen__cover"
          alt="Bryggen in Bergen"
        />
        <Subscribe />
      </Container>
    </>
  );
}

export default Home;
