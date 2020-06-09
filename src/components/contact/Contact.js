import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button, Form, Container, Row, Col, Spinner } from "react-bootstrap";
import ErrorMessage from "./ErrorMessage";
import { BASE_URL, headers } from "../../constants/Api";
import { useParams } from "react-router-dom";
import ModalContact from "../modals/ModalContact";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  message: yup
    .string()
    .required("You need to write something")
    .min(10, "Include minimum 10 letters"),
});

function Contact() {
  const [modalShow, setModalShow] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });
  const [loading, setLoading] = useState(true);

  let { id } = useParams();
  const url = BASE_URL + "establishments/" + id;
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => setLoading(json))
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

  async function onSubmit(data) {
    const url = BASE_URL + "contacts";
    const options = { headers, method: "POST", body: JSON.stringify(data) };
    setModalShow(true);

    fetch(url, options)
      .then((r) => r.json())
      .then((j) => {
        setModalShow(true);
      });
    console.log("data", data);
  }

  return (
    <>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col className="col-md-5">
            <h1>Contact Us</h1>
            <div className="contact__col">
              <p>
                Please enter your name, email and your message, and we will get
                back to you as soon as possible!
              </p>

              {modalShow && <ModalContact show={modalShow} />}
              <Form onSubmit={handleSubmit(onSubmit)} className="contact__form">
                <Col className="col-sm-6">
                  <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      name="name"
                      placeholder="Enter your first name"
                      ref={register}
                    />
                    {errors.name && (
                      <ErrorMessage>{errors.name.message}</ErrorMessage>
                    )}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      name="email"
                      placeholder="Enter your email"
                      ref={register}
                    />
                    {errors.email && (
                      <ErrorMessage>{errors.email.message}</ErrorMessage>
                    )}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      name="message"
                      className="contact__formControl--text"
                      as="textarea"
                      rows="3"
                      placeholder="Enter your message.."
                      ref={register}
                    />
                    {errors.message && (
                      <ErrorMessage>{errors.message.message}</ErrorMessage>
                    )}
                  </Form.Group>

                  <Button type="submit">Send</Button>
                  <ModalContact
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </Col>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
