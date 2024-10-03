// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AdminDashboard from './pages/Admin/AdminDashboard'; // Check the file name
import BuyerDashboard from './pages/Buyer/BuyerDashboard'; // Check the file name
import ArtisanDashboard from './pages/Artisan/ArtisanDashboard'; // Check the file name
import MarketingDashboard from './pages/MarketingSpecialist/MarketingDashboard'; // Check the file name
import PaymentForm from './pages/payment/PaymentForm'; // Ensure this file exists

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
                <Route path="/artisan-dashboard" element={<ArtisanDashboard />} />
                <Route path="/marketing-dashboard" element={<MarketingDashboard />} />
                <Route path="/payment" element={<PaymentForm />} />
            </Routes>
        </Router>
    );
};

export default App;
