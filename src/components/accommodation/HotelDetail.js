import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { BASE_URL, headers } from "../../constants/Api";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import MapsGoogle from "../googleMaps/MapsGoogle";

function HotelDetail() {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  const url = BASE_URL + "establishments/" + id;
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDetail(json);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Row className="justify-content-md-center">
        <Spinner animation="grow" size="lg" className="spinner">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Row>
    );
  }

  return (
    <Container className="hotelDetail__container justify-content-md-center">
      <h2>{detail.name}</h2>
      <Row className="hotelDetail__row">
        <Col xs={12} lg={5} className="hotelDetail__col--image">
          <Image className="hotelDetail__image" src={detail.image} />
        </Col>
        <Col lg={4} className="hotelDetail__col--text">
          <p>
            <b>Description:</b> {detail.description}
          </p>
          <p>
            <b>Max Guests:</b> {detail.maxGuests}
          </p>
          <p>
            <b>Self Catering:</b> {detail.selfCatering ? "Yes" : "No"}
          </p>
          <p>
            <b>Email:</b>{" "}
            <a
              href={"mailto:" + detail.email}
              className="hotelDetail__col--mail"
            >
              {detail.email}
            </a>
          </p>
          <p>
            <b>Price:</b> {detail.price} $ per night
          </p>
          <Link to={`/accommodation/makeenquiry/${detail.id}`}>
            {" "}
            <Button className="hotelDetails__button--inquiry">
              Make Inquiry
            </Button>
          </Link>
        </Col>
        <Col xs={8} lg={2}>
          <p className="hotelDetails__col--map">Map:</p>
          <MapsGoogle latitude={detail.lat} longitude={detail.lng} />
        </Col>
      </Row>
    </Container>
  );
}

export default HotelDetail;
