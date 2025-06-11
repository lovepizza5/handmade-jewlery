import React from 'react';
import { useCart } from '../CartContext';
import { useFavorites } from '../FavoritesContext';
import { useNavigate } from 'react-router-dom';
import './shop.css';

// Capitalized component name as required by React
const Ring = () => {
  const { addToCart } = useCart();
  const { addToFavorites } = useFavorites();
  const navigate = useNavigate();

  // Product list
  const products = [
    { id: 1, name: 'Silver Bracelet', price: 25, image: '/images/rings/ring1.jpg' },
    { id: 2, name: 'Pearl Necklace', price: 40, image: '/images/rings/ring2.jpg' },
    { id: 3, name: 'Gold Earrings', price: 35, image: '/images/rings/ring3.jpg' },
    { id: 4, name: 'Silver Bracelet', price: 25, image: '/images/rings/ring4.jpg' },
    { id: 5, name: 'Silver Bracelet', price: 25, image: '/images/rings/ring5.jpg' },
    { id: 6, name: 'Silver Bracelet', price: 25, image: '/images/rings/ring6.jpg' },
    { id: 7, name: 'Pearl Necklace', price: 40, image: '/images/rings/ring7.jpg' },
    { id: 8, name: 'Gold Earrings', price: 35, image: '/images/rings/ring8.jpg' },
    { id: 9, name: 'Silver Bracelet', price: 25, image: '/images/rings/ring9.jpg' },
    
  ];

  // Add product to favorites and navigate to Favorites page
  const handleFavorite = (product) => {
    addToFavorites(product);
    navigate('/favorites');
  };

  const handleViewProduct = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="shop-page">
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="image-container" onClick={() => handleViewProduct(product)}>
              <img src={product.image} alt={product.name} />
              <button className="like-button" onClick={() => handleFavorite(product)}>♡</button>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">{product.price} TND</p>
              <button onClick={() =>
                addToCart({ ...product, quantity: 1, size: 'M', color: 'Silver' })
              }>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Ring;
