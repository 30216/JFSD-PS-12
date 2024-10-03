// src/pages/Cart.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Handloom Shawl', price: 50, quantity: 1 },
    { id: 2, name: 'Handloom Tote Bag', price: 30, quantity: 1 },
  ]);
  
  const navigate = useNavigate();

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) => 
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + delta, 1) } : item
      )
    );
  };

  const handleCheckout = () => {
    alert("Proceeding to payment...");
    // Here you can integrate payment gateway logic
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <button className="btn btn-secondary" onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                {item.quantity}
                <button className="btn btn-secondary" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              </td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total Amount: ${totalAmount}</h4>
      <button className="btn btn-success" onClick={handleCheckout}>Proceed to Payment</button>
      <button className="btn btn-danger mt-2" onClick={() => navigate('/')}>Continue Shopping</button>
    </div>
  );
};

export default Cart;
