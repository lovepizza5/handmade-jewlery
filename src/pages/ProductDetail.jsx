import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import './ProductDetail.css';

const sizes = ['M', 'L', 'XL', '2XL', '3XL']; // Example sizes
const outOfStock = ['L', '2XL', 'XXL']; // Simulate out-of-stock sizes

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState('M');

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <div className="image-section">
        <img src={product.image} alt={product.name} className="detail-image" />
      </div>

      <div className="detail-info">
        {/* Optional: product code */}
        <p className="product-code">Code produit: #{product.id}</p>
        <h1>{product.name}</h1>
        <p className="price">{product.price} TND</p>
        <p>{product.description || "Une chemise confortable et élégante pour un usage quotidien."}</p>

        <div className="size-select">
          <label>Taille:</label>
          <div className="size-options">
            {sizes.map(size => (
              <button
                key={size}
                className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}
                disabled={outOfStock.includes(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() =>
            addToCart({
              ...product,
              quantity: 1,
              size: selectedSize,
              color: product.color || 'Indigo',
            })
          }
        >
          Ajouter au panier
        </button>

        <button className="back-btn" onClick={() => navigate(-1)}>
          Retour à la boutique
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
