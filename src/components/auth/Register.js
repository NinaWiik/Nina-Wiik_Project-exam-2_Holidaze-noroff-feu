import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import{ Button, Form, Container, Row, Col } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import ErrorMessage from "../contact/ErrorMessage";

const schema = yup.object().shape({
    username: yup.string()
    .required("Username is required"),
});


function Register() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });
    const { registerUser } = useContext(AuthContext);
    const history = useHistory();

    function onSubmit(data) {
        console.log("data", data);
        registerUser(data.username);
        history.push("/admin");
    }

    return (
        <Container className="register__container" fluid>
            <Row className="justify-content-md-center">
                <Col className="col-md-5">
            <h1>Login</h1>
            <div className="register__col">
                <p className="register__paragraph">Please login with your username to get access to the administration dashboard. </p>
                <Col lg="12" className="register__col--form">
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" placeholder="Enter your username" ref={register} />
                {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
            </Form.Group>

            <Button type="submit">Login</Button>
        </Form>
        </Col>
        </div>
        </Col>
        </Row>
        </Container>
    );
}

export default Register;