import React, { useState, useEffect } from 'react';
import { BASE_URL, headers } from "../../constants/Api";
import MessageItem from "./MessageItem";
import { Container, Row, Col } from "react-bootstrap";


function Messages() {
    const [messages, setMessages] = useState([]);

    const url = BASE_URL + "contacts";

    const options = { headers }

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
        <Container>
            <Row className="justify-content-md-center">
                <Col md={8}>
                <h1>Messages</h1>
                {messages.map(function (allMessages) {
                    const { id, name, email, message } = allMessages;
                    return (
                        <Row>
                            <Col md={12} key={allMessages.id}>
                                <MessageItem id={id} name={name} email={email} message={message} />
                            </Col>
                        </Row>
                    )
                })}
                </Col>
            </Row>
        </Container>
    )
}

export default Messages
