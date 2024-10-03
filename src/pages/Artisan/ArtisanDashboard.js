// src/pages/artisan/ArtisanDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './ArtisanDashboard.css'; // Create this file for custom styling

const ArtisanDashboard = () => {
    return (
        <Container fluid>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Artisan Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/artisan/add-product">Add Product</Nav.Link>
                        <Nav.Link as={Link} to="/artisan/manage-inventory">Manage Inventory</Nav.Link>
                        <Nav.Link as={Link} to="/artisan/view-sales">View Sales</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <h2 className="mt-4">Welcome to the Artisan Dashboard</h2>
            <div className="card-deck mt-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Add New Product</h5>
                        <p className="card-text">List your new handloom products for sale.</p>
                        <Link to="/artisan/add-product" className="btn btn-primary">Add Product</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Manage Inventory</h5>
                        <p className="card-text">Keep track of your stock and manage inventory efficiently.</p>
                        <Link to="/artisan/manage-inventory" className="btn btn-success">Manage Inventory</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">View Your Sales</h5>
                        <p className="card-text">Check your sales history and earnings.</p>
                        <Link to="/artisan/view-sales" className="btn btn-info">View Sales</Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ArtisanDashboard;
