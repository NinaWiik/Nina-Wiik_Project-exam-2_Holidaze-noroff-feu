import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Container, Button } from "react-bootstrap";
import DeleteMessage from "./DeleteMessage";

function MessageItem({ id, name, email, message }) {
  return (
    <Container fluid>
      <Row className="messageItem__row--first">
        <Col md={6}>
          <p>
            <b>Full Name:</b> {name}
          </p>
        </Col>
        <Col md={6}>
          <p>
            <b>Email:</b>{" "}
            <a className="messageItem__col--email" href={"mailto:" + email}>
              {email}
            </a>
          </p>
        </Col>
        <Row className="messageItem__row--second">
          <Col md={12}>
            <p>
              <b>Message:</b> {message}
            </p>
          </Col>
        </Row>
        <Row className="messageItem__row--buttons">
          <Col className="messageItem__col--reply">
            <Button className="messageItem__button--reply">Reply</Button>
          </Col>
          <Col className="messageItem__col--delete">
            <DeleteMessage id={id} />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

MessageItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default MessageItem;
