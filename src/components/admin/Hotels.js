import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/Api";
import HotelsItem from "./HotelsItem";
import { Container, Col, Row } from "react-bootstrap";

function Hotels() {
    const [hotels, setHotels] = useState([]);

    const url = BASE_URL + "establishments";

    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setHotels(json);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <Container className="hotels__container">
        <h1>Hotels</h1>
        {hotels.map(function (hotel) {
            const { id, name, image, maxGuests, price, selfCatering, description } = hotel;
            return (
                <Row>
                <Col key={hotel.id}>
                    <HotelsItem id={id} image={image} name={name} maxGuests={maxGuests} selfCatering={selfCatering} description={description} price={price} />
                </Col>
                </Row>
            )
        })}
    </Container>
    );
}

export default Hotels;

//<NavLink to={`/admin/hotels/edit/${hotel.id}`}>{hotel.name}</NavLink>