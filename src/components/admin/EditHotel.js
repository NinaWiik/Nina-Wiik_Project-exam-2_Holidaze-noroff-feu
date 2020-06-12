import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useParams, useHistory } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { BASE_URL, headers, PATCH } from "../../constants/Api";
import DeleteHotel from "./DeleteHotel";
import ErrorMessage from "../contact/ErrorMessage";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  maxGuests: yup
    .number()
    .typeError("Please enter a number")
    .positive("The number cant include a minus")
    .required("A number is required"),
  price: yup
    .number()
    .typeError("Please enter a number")
    .positive("The number cant include a minus")
    .required("A price is required"),
  lat: yup
    .number()
    .typeError("Please enter a number")
    .positive("The number cant include a minus")
    .required("A number is required"),
  lng: yup
    .number()
    .typeError("Please enter a number")
    .positive("The number cant include a minus")
    .required("A number is required"),
  image: yup.string().required("An absolute URL is required"),
  description: yup.string().required("You need to write a description").min(10),
});

function EditHotel() {
  const defaultState = {
    name: "",
    email: "",
    price: "",
    maxGuests: "",
    image: "",
    selfCatering: "",
    lat: "",
    lng: "",
    description: "",
  };

  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });
  const [hotel, setHotel] = useState(defaultState);
  const [validated, setValidated] = useState(false);

  let { id } = useParams();

  const options = { headers };
  const fetchUrl = BASE_URL + "establishments/" + id;

  useEffect(() => {
    fetch(fetchUrl, options)
      .then((response) => response.json())
      .then((json) => setHotel(json))
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onSubmit(data) {
    console.log("data", data);

    const updateOptions = {
      headers,
      method: PATCH,
      body: JSON.stringify(data),
    };
    await fetch(fetchUrl, updateOptions);
    setValidated(true);
    setTimeout(() => {
      history.push("/admin/hotels");
    }, 2000);
  }

  return (
    <Container className="register__container" fluid>
      <Row className="justify-content-md-center">
        <Col className="col-md-5">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Edit Accommodation</h1>
            <div className="addHotel__col">
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  defaultValue={hotel.name}
                  placeholder="Enter a name for the hotel"
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
                  defaultValue={hotel.email}
                  placeholder="Enter an email address"
                  ref={register}
                />
                {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Max Guests</Form.Label>
                  <Form.Control
                    name="maxGuests"
                    defaultValue={hotel.maxGuests}
                    placeholder="Enter max guests"
                    ref={register}
                  />
                  {errors.maxGuests && (
                    <ErrorMessage>{errors.maxGuests.message}</ErrorMessage>
                  )}
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    name="price"
                    defaultValue={hotel.price}
                    placeholder="Enter a price"
                    ref={register}
                  />
                  {errors.price && (
                    <ErrorMessage>{errors.price.message}</ErrorMessage>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Latitude</Form.Label>
                  <Form.Control
                    name="lat"
                    defaultValue={hotel.lat}
                    placeholder="Enter latitude"
                    ref={register}
                  />
                  {errors.lat && (
                    <ErrorMessage>{errors.lat.message}</ErrorMessage>
                  )}
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Longitude</Form.Label>
                  <Form.Control
                    name="lng"
                    defaultValue={hotel.lng}
                    placeholder="Enter longitude"
                    ref={register}
                  />
                  {errors.lng && (
                    <ErrorMessage>{errors.lng.message}</ErrorMessage>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Group>
                <Form.Label>Image</Form.Label>
                <Form.Control
                  name="image"
                  defaultValue={hotel.image}
                  placeholder="Enter a image URL"
                  ref={register}
                />
                {errors.image && (
                  <ErrorMessage>{errors.image.message}</ErrorMessage>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="description"
                  defaultValue={hotel.description}
                  placeholder="Enter a description"
                  ref={register}
                />
                {errors.description && (
                  <ErrorMessage>{errors.description.message}</ErrorMessage>
                )}
              </Form.Group>

              {validated && (
                <div>
                  <div className="addHotel__validated--text">
                    Accommodation has been updated
                  </div>
                </div>
              )}

              <Button type="submit">Update</Button>
              <DeleteHotel id={id} />
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default EditHotel;
