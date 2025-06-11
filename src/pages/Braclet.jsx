// src/pages/Braclet.jsx
import React from 'react';
import { useCart } from '../CartContext';
import { useFavorites } from '../FavoritesContext';
import { useNavigate } from 'react-router-dom';
import './shop.css';

const products = [
  { id: 1, name: 'Silver Bracelet', price: 25, image: '/images/braclet.png', description: 'A timeless silver bracelet perfect for everyday elegance.', sizes: ['S', 'M', 'L'] },
  { id: 2, name: 'Pearl Necklace', price: 40, image: '/images/new3.jpg', description: 'A graceful pearl necklace to complete your evening look.', sizes: ['One Size'] },
  { id: 3, name: 'Gold Earrings', price: 35, image: '/images/braclet5.jpg', description: 'Delicate gold earrings that add charm to any outfit.', sizes: ['One Size'] },
  { id: 4, name: 'Silver Bracelet', price: 25, image: '/images/braclet.png', description: 'A modern take on the classic silver bracelet.', sizes: ['S', 'M', 'L'] },
  { id: 5, name: 'Pearl Necklace', price: 40, image: '/images/new1.jpg', description: 'A radiant string of pearls for timeless beauty.', sizes: ['One Size'] },
  { id: 6, name: 'Gold Earrings', price: 35, image: '/images/new2.jpg', description: 'Elegant gold earrings that shine with every movement.', sizes: ['One Size'] },
  { id: 7, name: 'Silver Bracelet', price: 25, image: '/images/braclet.png', description: 'Crafted with precision, this silver bracelet stands out.', sizes: ['S', 'M', 'L'] },
  { id: 8, name: 'Pearl Necklace', price: 40, image: '/images/new3.jpg', description: 'Add a touch of class with this handcrafted pearl necklace.', sizes: ['One Size'] },
  { id: 9, name: 'Gold Earrings', price: 35, image: '/images/braclet5.jpg', description: 'Luxury and style in one pair of gold earrings.', sizes: ['One Size'] },
  { id: 10, name: 'Silver Bracelet', price: 25, image: '/images/braclet.png', description: 'Understated silver elegance for any occasion.', sizes: ['S', 'M', 'L'] },
  { id: 11, name: 'Pearl Necklace', price: 40, image: '/images/new1.jpg', description: 'Perfectly matched pearls to elevate your look.', sizes: ['One Size'] },
  { id: 12, name: 'Gold Earrings', price: 35, image: '/images/new2.jpg', description: 'Sophisticated gold earrings for refined tastes.', sizes: ['One Size'] },
  { id: 13, name: 'Silver Bracelet', price: 25, image: '/images/braclet.png', description: 'Hand-polished silver bracelet with a sleek finish.', sizes: ['S', 'M', 'L'] },
  { id: 14, name: 'Pearl Necklace', price: 40, image: '/images/new3.jpg', description: 'Elegant pearls crafted into a statement necklace.', sizes: ['One Size'] },
  { id: 15, name: 'Gold Earrings', price: 35, image: '/images/braclet5.jpg', description: 'Bold and beautiful gold earrings.', sizes: ['One Size'] },
  { id: 16, name: 'Silver Bracelet', price: 25, image: '/images/braclet.png', description: 'A fine accessory to match your unique style.', sizes: ['S', 'M', 'L'] },
  { id: 17, name: 'Pearl Necklace', price: 40, image: '/images/new1.jpg', description: 'Soft, elegant, and timeless — the perfect gift.', sizes: ['One Size'] },
  { id: 18, name: 'Gold Earrings', price: 35, image: '/images/new2.jpg', description: 'High-shine gold earrings for modern elegance.', sizes: ['One Size'] }
];


const Braclet = () => {
  const { addToCart } = useCart();
  const { addToFavorites } = useFavorites();
  const navigate = useNavigate();

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

export default Braclet;
