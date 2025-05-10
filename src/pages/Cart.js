// src/Cart.js
import React from 'react';
import { useCart } from '../CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="page-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
