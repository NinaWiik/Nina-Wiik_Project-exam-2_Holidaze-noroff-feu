import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/Api";
import EnquiriesItem from "./EnquiriesItem";
import { Container, Col, Row } from "react-bootstrap";

function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);

  const url = BASE_URL + "enquiries";

  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setEnquiries(json);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col md={5} xs={6}>
          <h1>Enquiries</h1>
          {enquiries.map(function (enquiry) {
            const { id, name, email, checkIn, checkOut } = enquiry;
            return (
              <Row>
                <Col md={12} key={enquiry.id}>
                  <EnquiriesItem
                    id={id}
                    name={name}
                    email={email}
                    checkIn={checkIn}
                    checkOut={checkOut}
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

export default Enquiries;
