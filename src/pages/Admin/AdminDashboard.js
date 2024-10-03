// src/pages/admin/AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './AdminDashboard.css'; // Create this file for custom styling

const AdminDashboard = () => {
    return (
        <Container fluid>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/admin/users">Manage Users</Nav.Link>
                        <Nav.Link as={Link} to="/admin/orders">View Orders</Nav.Link>
                        <Nav.Link as={Link} to="/admin/products">Manage Products</Nav.Link>
                        <Nav.Link as={Link} to="/admin/reports">Generate Reports</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <h2 className="mt-4">Welcome to the Admin Dashboard</h2>
            <div className="card-deck mt-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Manage Users</h5>
                        <p className="card-text">Add, edit, or remove users from the platform.</p>
                        <Link to="/admin/users" className="btn btn-primary">Manage Users</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">View Orders</h5>
                        <p className="card-text">Check and manage all orders placed.</p>
                        <Link to="/admin/orders" className="btn btn-success">View Orders</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Manage Products</h5>
                        <p className="card-text">Add, edit, or remove products listed on the platform.</p>
                        <Link to="/admin/products" className="btn btn-info">Manage Products</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Generate Reports</h5>
                        <p className="card-text">Generate reports based on sales and user activity.</p>
                        <Link to="/admin/reports" className="btn btn-warning">Generate Reports</Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AdminDashboard;
