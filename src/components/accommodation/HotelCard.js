import React from 'react';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function HotelCard({ id, name, image, price, description }) {
    return (
        <Container fluid>
        <Row className="hotelCard__row">
                <Col xs={12} md={6} className="hotelCard__col">
                    <img className="hotelCard__col--img" alt="hotels" src={image} />
                </Col>
                <Col className="hotelCard__col--text col-sm">
                    <h3>{name}</h3>
                    <p className="hotelCard__col--paragraph"><b>Description:</b> {description}</p>
                    <p className="hotelCard__col--paragraph"><b>Price:</b> {price}$</p>
                    <Link to={id}><Button>View</Button></Link>
                </Col>
            </Row>
        </Container>
    )
}

export default HotelCard
