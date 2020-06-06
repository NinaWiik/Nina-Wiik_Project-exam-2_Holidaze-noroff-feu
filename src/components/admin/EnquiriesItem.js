import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeleteEnquiry from "./DeleteEnquiry";
import moment from "moment";

function EnquiriesItem({ id, name, email, checkIn, checkOut }) {
  return (
    <Container fluid>
      <Row className="enquiriesItem__row">
        <Col md={6}>
          <p>
            <b>Full Name:</b> {name}
          </p>
          <p>
            <b>Email:</b> {email}
          </p>
          <p>
            <b>Hotel Id:</b> {id}
          </p>
        </Col>
        <Col md={5}>
          <p>
            <b>Check In:</b> {moment(checkIn).format("DD/MM/yy")}
          </p>
          <p>
            <b>Check Out:</b> {moment(checkOut).format("DD/MM/yy")}
          </p>
        </Col>
        <Row className="enquiriesItem__row--buttons">
          <Col className="enquriesItem__col--reply">
            <Button className="enquriesItem__button--reply">Reply</Button>
          </Col>
          <Col className="enquriesItem__col--delete">
            <DeleteEnquiry id={id} />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default EnquiriesItem;
