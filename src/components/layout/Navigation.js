import React, { useContext } from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Logout from "../auth/Logout";
import logo from "../../assets/logo/logo1.png";

function Navigation() {
    const { user } = useContext(AuthContext);
    return (
        <Navbar expand="lg">
                <Navbar.Brand href="/"><img src={logo} className="logo" alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
            
                        <NavLink to="/" exact className="nav-link">Home</NavLink>

                        <NavLink to="/accommodation/" className="nav-link">Accommodation</NavLink>

                        { user ? (
                            <>
                                <NavLink to="/admin" className="nav-link">Admin</NavLink>
                                    
                                <Logout />
                            </>
                        ) : (
                            <>
                            <NavLink to="/contact/" className="nav-link">Contact</NavLink>

                            <NavLink to="/register" className="nav-link">Login</NavLink>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default Navigation;
