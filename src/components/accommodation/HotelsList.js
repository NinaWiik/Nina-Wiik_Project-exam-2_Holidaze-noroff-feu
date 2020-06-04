import React, { useState, useEffect } from 'react';
import { BASE_URL, headers } from "../../constants/Api";
import HotelCard from "./HotelCard";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Search from "../search/Search";

function HotelsList() {

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

        const filteredArray = hotelsList.filter(function(hotel) {
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
            return <div className="hotelsList__filter">Sorry, no results</div>
        }
    }

    if (loading) {
        return <Spinner animation="border" variant="info" />;
    }

    return (
        <Container>
            <h1>Hotels</h1>
            <div className="hotelsList__search">
                <Search makeSearch={handleSearch} />
                {displayResults()}
            </div>
            {filteredHotels.map(function (hotel) {
                const { id, name, image, lat, lng, price, description } = hotel;
                return (
                    <Col className="hotelsList__col" key={hotel.id}>
                        <HotelCard id={id} image={image} name={name} lat={lat} lng={lng} description={description} price={price} />
                    </Col>
                )
            })}
        </Container>
    )
}

export default HotelsList
