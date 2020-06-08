import React, { useState, useEffect, useRef } from "react";
import { BASE_URL, headers } from "../../constants/Api";
import HotelsItem from "./HotelsItem";
import { Container, Col, Row, Spinner, Button } from "react-bootstrap";

const BackToTop = function ({ elementRef }) {
  function ScrollToTop() {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }

  return (
    <Button className="hotelsList__button--scroll" onClick={ScrollToTop}>
      Go to Top
    </Button>
  );
};

function Hotels() {
  const refApp = useRef(null);

  const [hotels, setHotels] = useState([]);

  const url = BASE_URL + "establishments";

  const [loading, setLoading] = useState(true);

  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setHotels(json);
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
    <Container className="hotels__container">
      <div ref={refApp}>
        <h1>Hotels</h1>
        {hotels.map(function (hotel) {
          const {
            id,
            name,
            image,
            maxGuests,
            price,
            selfCatering,
            description,
          } = hotel;
          return (
            <Row key={hotel.id}>
              <Col>
                <HotelsItem
                  id={id}
                  image={image}
                  name={name}
                  maxGuests={maxGuests}
                  selfCatering={selfCatering}
                  description={description}
                  price={price}
                />
              </Col>
            </Row>
          );
        })}
        <Row className="justify-content-md-center">
          <BackToTop />
        </Row>
      </div>
    </Container>
  );
}

export default Hotels;

//<NavLink to={`/admin/hotels/edit/${hotel.id}`}>{hotel.name}</NavLink>
