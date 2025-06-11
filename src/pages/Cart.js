import React from 'react';
import { useCart } from '../CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const shippingCost = 5.99;

  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  const calculateTotal = () => {
    return (parseFloat(calculateSubtotal()) + shippingCost).toFixed(2);
  };

  return (
    <div className="page-container">
      <h2>My Cart ({cart.length} Product{cart.length !== 1 ? 's' : ''})</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cart-container">
          <div className="cart-left">
            {cart.map((product, index) => (
              <div key={index} className="cart-item">
                <img src={product.image} alt={product.name} />
                <div className="cart-details">
                  <h3>{product.name}</h3>
                  <p className="cart-meta">Size: <strong>{product.size}</strong></p>
                  <p className="cart-meta">Color: <strong>{product.color}</strong></p>
                  <div className="cart-quantity">
                    <button onClick={() => decreaseQuantity(product.id)}>-</button>
                    <span>{product.quantity}</span>
                    <button onClick={() => increaseQuantity(product.id)}>+</button>
                  </div>
                </div>
                <div className="cart-price">{(product.price * product.quantity).toFixed(2)} TND</div>
                <button className="cart-remove" onClick={() => removeFromCart(product.id)}>🗑</button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>ORDER SUMMARY</h3>
            <div className="summary-item">
              <span>Total revenue</span>
              <span>{calculateSubtotal()} TND</span>
            </div>
            <div className="summary-item">
              <span>Shipping costs</span>
              <span>{shippingCost.toFixed(2)} TND</span>
            </div>
            <div className="summary-total">
              <strong>TOTAL</strong>
              <strong>{calculateTotal()} TND</strong>
            </div>
            <input type="text" placeholder="Enter the campaign code" className="coupon-input" />
            <button className="checkout-btn">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
