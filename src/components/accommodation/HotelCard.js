import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HotelCard({ id, name, image, price, description }) {
  return (
    <Container fluid>
      <Row className="hotelCard__row">
        <Col xs={12} md={6} className="hotelCard__col">
          <img className="hotelCard__col--img" alt="hotels" src={image} />
        </Col>
        <Col className="hotelCard__col--text col-sm">
          <h3>{name}</h3>
          <p className="hotelCard__col--paragraph">
            <b>Description:</b> {description}
          </p>
          <p className="hotelCard__col--paragraph">
            <b>Price:</b> {price}$
          </p>
          <Link to={id}>
            <Button>View</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

HotelCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default HotelCard;
