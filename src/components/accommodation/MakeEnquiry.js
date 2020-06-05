import React, { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { useHistory, useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/Api";
import { Container, Button, Form, Col, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import ErrorMessage from "../contact/ErrorMessage";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from 'react-datepicker';
import ModalEnquiry from "../modals/ModalEnquiry";
import Moment from "moment";

const schema = yup.object().shape({
    name: yup.string()
    .required("A name is required"),
    email: yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
})


function MakeEnquiry() {

    const defaultState = {
        id: "",
    }

    const { register, handleSubmit, errors, control } = useForm({
        validationSchema: schema
    });
    const [enquiry, makeInquiry] = useState(defaultState);
    const [loading, setLoading] = useState(true);
    const [modalShow, setModalShow] = useState(false);

    let { id } = useParams();
    const url = BASE_URL + "establishments/" + id;
    const options = { headers };

    const history = useHistory();


    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => makeInquiry(json))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <Spinner animation="border" variant="info" />;
    }

    async function onSubmit(data) {
        const url = BASE_URL + "enquiries";
        const options = { headers, method: "POST", body: JSON.stringify(data) };

        fetch(url, options)
            .then((r) => r.json())
            .then((j) => console.log(j));
        console.log("data", data);
        history.push(setModalShow(true));

        }


    return (
        <Container className="register__container" fluid>
        <Row className="justify-content-md-center">
            <Col md={4}>
                { modalShow && <ModalEnquiry show={modalShow} />}
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Make Enquiry</h1>
            <div className="makeEnquiry__form">
            <Form.Group >
                <Form.Label>Full Name</Form.Label>
                <Form.Control name="name" placeholder="Enter your full name" ref={register} />
                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" placeholder="Enter an email address" ref={register} />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Establishment ID</Form.Label>
                <Form.Control name="establishmentId" defaultValue={enquiry.id} readOnly ref={register} />
            </Form.Group>

            <Form.Row >
            <Form.Group as={Col}>
                <Form.Label className="makeEnquiry__formLabel">Check In</Form.Label>
                <Controller
                        as={ReactDatePicker}
                        control={control}
                        dateFormat="yyyy/MM/dd"
                        valueName="selected"
                        onChange={([selected]) => selected}
                        name="checkIn"
                        className="form-control check"
                        placeholderText="select date"
                        minDate={new Date()} 
                        />
                        {errors.checkIn && <ErrorMessage>{errors.checkIn.message}</ErrorMessage>}
                        
            </Form.Group>

            <Form.Group className="makeEnquiry__formGroup" as={Col}>
                <Form.Label className="makeEnquiry__formLabel">Check Out</Form.Label>
                <Controller
                        as={ReactDatePicker}
                        control={control}
                        valueName="selected"
                        onChange={([selected]) => selected}
                        name="checkOut"
                        className="form-control check"
                        placeholderText="select date" 
                        minDate={new Date()} />
                        
            </Form.Group>
            </Form.Row>

            <Button type="submit">Submit</Button>
            <ModalEnquiry show={modalShow} onHide={() => setModalShow(false)} />
            </div>
        </Form>
        </Col>
        </Row>
        </Container>
    );
}

export default MakeEnquiry;

