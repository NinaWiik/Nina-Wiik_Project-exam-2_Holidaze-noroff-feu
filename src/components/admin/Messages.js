import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/Api";
import MessageItem from "./MessageItem";
import { Container, Row, Col } from "react-bootstrap";

function Messages() {
  const [messages, setMessages] = useState([]);

  const url = BASE_URL + "contacts";

  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setMessages(json);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col md={5} xs={12}>
          <h2>Messages</h2>
          {messages.map(function (allMessages) {
            const { id, name, email, message } = allMessages;
            return (
              <Row key={allMessages.id}>
                <Col md={12}>
                  <MessageItem
                    id={id}
                    name={name}
                    email={email}
                    message={message}
                  />
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default Messages;
