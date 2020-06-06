import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Bergen3 from "../../assets/images/bergen3.jpg";
import { MdMail, MdAddCircle, MdEventNote } from "react-icons/md";
import { FaHotel } from "react-icons/fa";

function Dashboard() {
    return (
        <Container fluid>
        <Row className="justify-content-md-center">
            <Col className="col-md-6 dashboard__col1">
        <h1>Admin - Dashboard</h1>
        <Row>
        <Col className="col-md-5" ><img src={Bergen3} className="dashboard__img" alt="Bryggen in Bergen"/></Col>
        <Col className="dashboard__col2">
            <p className="dashboard__paragraph">Welcome to your dashboard. Here you can find all the hotel listings. You can also manage the different hotels, or add/delete hotels. You also have access to messages and enquiries from customers. </p>

                    <NavLink to="/admin/hotels"><Button className="dashboard__button"><FaHotel />List Hotels</Button></NavLink>

                    <NavLink to="/admin/hotels/add"><Button className="dashboard__button"><MdAddCircle />Add Hotel</Button></NavLink>

                    <NavLink to="/admin/enquiries"><Button className="dashboard__button"><MdEventNote />Enquiries</Button></NavLink>

                    <NavLink to="/admin/messages"><Button className="dashboard__button"><MdMail  />Messages</Button></NavLink>

    </Col>
    </Row>
    </Col>
    </Row>
    </Container>
    );
}

export default Dashboard;