// src/pages/payment/PaymentForm.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './PaymentForm.css'; // Create this file for custom styling

const PaymentForm = () => {
    const [paymentMethod, setPaymentMethod] = useState('COD'); // Default to COD
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        cardHolderName: '',
        expiryDate: '',
        cvv: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleCardChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({
            ...cardDetails,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (paymentMethod === 'Card') {
            // Simple validation for card details
            if (!cardDetails.cardNumber || !cardDetails.cardHolderName || !cardDetails.expiryDate || !cardDetails.cvv) {
                setError('Please fill in all card details.');
                setSuccess(false);
                return;
            }
            // Here you would typically send the card details to your payment processor
            console.log('Processing card payment:', cardDetails);
        } else {
            // Handle COD
            console.log('Processing Cash on Delivery payment.');
        }

        setError('');
        setSuccess(true);
        // Reset card details if COD is chosen
        if (paymentMethod === 'COD') {
            setCardDetails({
                cardNumber: '',
                cardHolderName: '',
                expiryDate: '',
                cvv: '',
            });
        }
    };

    return (
        <Container className="payment-form">
            <h2>Payment</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">Payment processed successfully!</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="paymentMethod">
                    <Form.Label>Payment Method</Form.Label>
                    <Form.Check
                        type="radio"
                        label="Cash on Delivery"
                        value="COD"
                        checked={paymentMethod === 'COD'}
                        onChange={handlePaymentMethodChange}
                    />
                    <Form.Check
                        type="radio"
                        label="Card Payment"
                        value="Card"
                        checked={paymentMethod === 'Card'}
                        onChange={handlePaymentMethodChange}
                    />
                </Form.Group>

                {paymentMethod === 'Card' && (
                    <div>
                        <Form.Group controlId="cardNumber">
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="cardNumber"
                                value={cardDetails.cardNumber}
                                onChange={handleCardChange}
                                placeholder="Enter card number"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="cardHolderName">
                            <Form.Label>Card Holder Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="cardHolderName"
                                value={cardDetails.cardHolderName}
                                onChange={handleCardChange}
                                placeholder="Enter card holder name"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="expiryDate">
                            <Form.Label>Expiry Date (MM/YY)</Form.Label>
                            <Form.Control
                                type="text"
                                name="expiryDate"
                                value={cardDetails.expiryDate}
                                onChange={handleCardChange}
                                placeholder="MM/YY"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="cvv">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control
                                type="text"
                                name="cvv"
                                value={cardDetails.cvv}
                                onChange={handleCardChange}
                                placeholder="CVV"
                                required
                            />
                        </Form.Group>
                    </div>
                )}
                <Button variant="primary" type="submit" className="mt-3">
                    Pay Now
                </Button>
            </Form>
        </Container>
    );
};

export default PaymentForm;
