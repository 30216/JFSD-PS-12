// src/pages/marketing/MarketingDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './MarketingDashboard.css'; // Create this file for custom styling

const MarketingDashboard = () => {
    return (
        <Container fluid>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Marketing Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/marketing/create-campaign">Create Campaign</Nav.Link>
                        <Nav.Link as={Link} to="/marketing/analyze-performance">Analyze Performance</Nav.Link>
                        <Nav.Link as={Link} to="/marketing/engage-audience">Engage Audience</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <h2 className="mt-4">Welcome to the Marketing Dashboard</h2>
            <div className="card-deck mt-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Create Marketing Campaign</h5>
                        <p className="card-text">Design and launch new marketing campaigns.</p>
                        <Link to="/marketing/create-campaign" className="btn btn-primary">Create Campaign</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Analyze Campaign Performance</h5>
                        <p className="card-text">Track and analyze the performance of your campaigns.</p>
                        <Link to="/marketing/analyze-performance" className="btn btn-success">Analyze Performance</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Engage Your Audience</h5>
                        <p className="card-text">Find new ways to engage with your customers.</p>
                        <Link to="/marketing/engage-audience" className="btn btn-info">Engage Audience</Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default MarketingDashboard;
