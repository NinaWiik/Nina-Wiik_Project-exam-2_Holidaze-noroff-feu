import React, { useState, useEffect, useRef } from "react";
import { BASE_URL, headers } from "../../constants/Api";
import HotelCard from "./HotelCard";
import { Col, Row, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Search from "../search/Search";

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

function HotelsList() {
  const refApp = useRef(null);

  const [hotelsList, setHotelsList] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = BASE_URL + "establishments";

  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.dir(json.results);
        setHotelsList(json);
        setFilteredHotels(json);
        console.log(json);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  function handleSearch(inputValue) {
    const lowerCaseInput = inputValue.toLowerCase();

    const filteredArray = hotelsList.filter(function (hotel) {
      const lowerCaseName = hotel.name.toLowerCase();

      if (lowerCaseName.startsWith(lowerCaseInput)) {
        return true;
      } else {
        return false;
      }
    });

    setFilteredHotels(filteredArray);
  }

  function displayResults() {
    if (filteredHotels.length === 0) {
      return <div className="hotelsList__filter">Sorry, no results</div>;
    }
  }

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
    <Container>
      <div className="hotelsList__search" ref={refApp}>
        <h1>Hotels</h1>
        <div>
          <Search makeSearch={handleSearch} />
          {displayResults()}
        </div>
        {filteredHotels.map(function (hotel, index) {
          const { id, name, image, lat, lng, price, description } = hotel;
          return (
            <Col className="hotelsList__col" key={index}>
              <HotelCard
                id={id}
                image={image}
                name={name}
                lat={lat}
                lng={lng}
                description={description}
                price={price}
              />
            </Col>
          );
        })}
        <Row className="justify-content-md-center">
          <BackToTop />
        </Row>
      </div>
    </Container>
  );
}

export default HotelsList;
