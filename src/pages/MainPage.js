// src/pages/MainPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPage.css'; // Import the CSS file

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="main-page text-center">
      <h1 className="mt-5">Welcome to the Handloom Fashion Platform</h1>
      <p className="lead">Explore our unique handloom products from artisans around the world.</p>
      <div className="button-container mt-4">
        <button className="btn btn-primary mx-2" onClick={() => navigate('/admin-dashboard')}>Admin Dashboard</button>
        <button className="btn btn-success mx-2" onClick={() => navigate('/artisan-dashboard')}>Artisan Dashboard</button>
        <button className="btn btn-info mx-2" onClick={() => navigate('/buyer-dashboard')}>Buyer Dashboard</button>
        <button className="btn btn-warning mx-2" onClick={() => navigate('/marketing-dashboard')}>Marketing Dashboard</button>
        <button className="btn btn-dark mx-2" onClick={() => navigate('/cart')}>View Cart</button>
      </div>
    </div>
  );
};

export default MainPage;
