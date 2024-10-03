// src/pages/buyer/BuyerDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

const BuyerDashboard = () => {
    return (
        <Container fluid>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Buyer Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/buyer/products">View Products</Nav.Link>
                        <Nav.Link as={Link} to="/buyer/orders">Track Orders</Nav.Link>
                        <Nav.Link as={Link} to="/buyer/feedback">Leave Feedback</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <h2 className="mt-4">Welcome to the Buyer Dashboard</h2>
            {/* Button to navigate to the payment page */}
            <Button as={Link} to="/payment" variant="success" className="mt-3">
                Make Payment
            </Button>
        </Container>
    );
};

export default BuyerDashboard;
