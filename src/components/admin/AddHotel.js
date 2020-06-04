
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers } from "../../constants/Api";
import { OverlayTrigger, Popover, Container, Row, Col } from "react-bootstrap";
import ErrorMessage from "../contact/ErrorMessage";

const schema = yup.object().shape({
    name: yup.string()
    .required("Name is required"),
    email: yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
    maxGuests: yup.number()
    .typeError("Please enter a number")
    .positive("The number cant include a minus")
    .required("A number is required"),
    price: yup.number()
    .typeError("Please enter a number")
    .positive("The number cant include a minus")
    .required("A price is required"),
    lat: yup.number()
    .typeError("Please enter a number")
    .positive("The number cant include a minus")
    .required("A number is required"),
    lng: yup.number()
    .typeError("Please enter a number")
    .positive("The number cant include a minus")
    .required("A number is required"),
    image: yup.string()
    .required("An absolute URL is required"),
    description: yup.string()
    .required("You need to write a description")
    .min(10),
})

function AddHotel() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    const history = useHistory();

    async function onSubmit(data) {
        console.log("data", data);

        const url = BASE_URL + "establishments";

        const options = { headers, method: "POST", body: JSON.stringify(data) };

        await fetch(url, options);

        history.push("/admin/hotels");
    }

    const popover = (
        <Popover id="popover-basic">
            <Popover.Content>Only enter a number</Popover.Content>
        </Popover>
    );

    const popoverLatitude = (
        <Popover id="popover-basic">
            <Popover.Content>Enter a number with a period: xx.xxxxxx</Popover.Content>
        </Popover>
    );


    
    return (
        <Container className="register__container" fluid>
        <Row className="justify-content-md-center">
            <Col className="col-md-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Add Accommodation</h1>
            <div className="editHotel__col">
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" placeholder="Enter a name for the hotel" ref={register} />
                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" placeholder="Enter an email address" ref={register} />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </Form.Group>

            <Form.Row>
            <Form.Group as={Col}>
                <Form.Label>Max Guests</Form.Label>
                <Form.Control className="addHotel__input--col" name="maxGuests" placeholder="Enter maximum guests" ref={register} />
                {errors.maxGuests && <ErrorMessage>{errors.maxGuests.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group as={Col}>
                <Form.Label>Price</Form.Label>
                <div className="makeEnquiry__popover">
                <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
                    <Button className="addHotel__button--popover">i</Button>
                </OverlayTrigger>
                </div>
                <Form.Control name="price" placeholder="Enter a price" ref={register} />
                {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
            </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group as={Col}>
                <Form.Label>Latitude</Form.Label>
                <div className="makeEnquiry__popover">
                <OverlayTrigger trigger="hover" placement="right" overlay={popoverLatitude}>
                    <Button className="addHotel__button--popover">i</Button>
                </OverlayTrigger>
                </div>
                <Form.Control name="lat" placeholder="Enter latitude" ref={register} />
                {errors.lat && <ErrorMessage>{errors.lat.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group as={Col}>
                <Form.Label>Longitude</Form.Label>
                <div className="makeEnquiry__popover">
                <OverlayTrigger trigger="hover" placement="right" overlay={popoverLatitude}>
                    <Button className="addHotel__button--popover">i</Button>
                </OverlayTrigger>
                </div>
                <Form.Control name="lng" placeholder="Enter longitude" ref={register} />
                {errors.lng && <ErrorMessage>{errors.lng.message}</ErrorMessage>}
            </Form.Group>
            </Form.Row>

            <Form.Group>
                <Form.Label>Image Url</Form.Label>
                <Form.Control name="image" placeholder="Enter a image URL" ref={register} />
                {errors.image && <ErrorMessage>{errors.image.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows="3" name="description" placeholder="Enter a description" ref={register} />
                {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
            </Form.Group>

            <Button type="submit">Submit</Button>
            </div>
        </Form>
        </Col>
        </Row>
        </Container>
    );
}

export default AddHotel;