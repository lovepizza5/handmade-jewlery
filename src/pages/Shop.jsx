import React from 'react';
import { useCart } from '../CartContext';
import './shop.css';

const Shop = () => {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: 'Silver Bracelet', price: '$25', image: '/images/braclet.png' },
    { id: 2, name: 'Pearl Necklace', price: '$40', image: './images/logo.png' },
    { id: 3, name: 'Gold Earrings', price: '$35', image: '/images/earrings.jpg' },
  ];

  return (
    <div className="page-container">
      <h2>Shop Our Handmade Jewelry</h2>
      <p>Discover our collection of bracelets, necklaces, and more.</p>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
