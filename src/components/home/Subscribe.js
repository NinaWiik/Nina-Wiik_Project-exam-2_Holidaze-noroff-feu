import React, { useState } from "react";
import { Container, Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ErrorMessageSub from "../contact/ErrorMessageSub";
import ModalSub from "../modals/ModalSub";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
});

function Subscribe() {
  const [modalShow, setModalShow] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  function onSubmit(data) {
    console.log("data", data);
    setModalShow(true);
  }

  return (
    <Container fluid className="container__cover">
      <Row className="justify-content-md-center">
        <Col className="subscribe__col" md={4} xs={12}>
          <Col>
            <p className="paragraph__subscribe--title">
              Subscribe on our newsletter
            </p>
            <p className="paragraph__subscribe--sub">
              Get exclusive offers straight in your mailbox
            </p>
            {modalShow && <ModalSub show={modalShow} />}
          </Col>
          <Row className="justify-content-md-center">
            <Form inline onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Control
                  className="subscribe__form--input"
                  name="email"
                  placeholder="Enter your email.."
                  ref={register}
                />
              </Form.Group>
              <Button className="subscribe__button" type="submit">
                Submit
              </Button>
              <ModalSub show={modalShow} onHide={() => setModalShow(false)} />
            </Form>
          </Row>
          <Col className="subscribe__col--error">
            {errors.email && (
              <ErrorMessageSub>{errors.email.message}</ErrorMessageSub>
            )}
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Subscribe;
