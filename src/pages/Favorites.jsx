// pages/Favorites.jsx
import React from 'react';
import { useFavorites } from '../FavoritesContext';
import './favorites.css';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="page-container">
      <h2>Your Favorite Products</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <div className="products-grid">
          {favorites.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price} TND</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
