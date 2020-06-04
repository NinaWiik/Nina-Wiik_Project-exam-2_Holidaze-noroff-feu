import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Bergen3 from "../../assets/images/bergen3.jpg";

function Dashboard() {
    return (
        <Container fluid>
        <Row className="justify-content-md-center">
            <Col className="col-md-6 dashboard__col1">
        <h1>Admin - Dashboard</h1>
        <Row>
        <Col className="col-md-5" ><img src={Bergen3} className="dashboard__img" alt="Bryggen in Bergen"/></Col>
        <Col className="dashboard__col2">
            <p className="dashboard__paragraph">Welcome to your dashboard. Here you can find all the hotel listings. You can also manage the different hotels, or add/delete hotels. You also have access to your mails from customers. </p>
            <li>
                    <NavLink to="/admin/hotels">List Hotels</NavLink>
                </li>
                <li>
                    <NavLink to="/admin/hotels/add">Add Hotel</NavLink>
                </li>

                <li>
                    <NavLink to="/admin/enquiries">Enquiries</NavLink>
                </li>

                <li>
                    <NavLink to="/admin/messages">Messages</NavLink>
                </li>
    </Col>
    </Row>
    </Col>
    </Row>
    </Container>
    );
}

export default Dashboard;