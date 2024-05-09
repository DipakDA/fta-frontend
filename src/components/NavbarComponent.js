// NavbarComponent.js

import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Image } from 'react-bootstrap';
import Logo from '../images/logo_without_background.png';


const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            
            <Navbar.Brand className="mx-2" href="#home">
                <Image src={Logo} width="100" height="100"/>
                Vansavali
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto me-2">
                    <Nav.Link href="#my-profile" className="mx-2">My Profile</Nav.Link>
                    <Nav.Link href="#family-tree" className="mx-2">Family Tree</Nav.Link>
                    <Nav.Link href="#upcoming-events" className="mx-2">Upcoming Events</Nav.Link>
                </Nav>
                <Form className="d-flex ms-5 me-2">
                        <FormControl
                            type="search"
                            placeholder="Find Relatives"
                            className="me-2"
                            aria-label="Search"
                        />
                </Form> 
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;
