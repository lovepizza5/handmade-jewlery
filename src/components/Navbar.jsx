// Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import { FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi';
import './Navbar.css';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef(null);
  const navigate = useNavigate();
  const { cart } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    navigate(`/search?query=${encodeURIComponent(q)}`);
    setSearchQuery('');
  };

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setAccountOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div>Order tracking</div>
        <div className="language-switch">
          <span>French</span> | <span>English</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/" className="logo-text">Handmade Jewelry</Link>
        </div>

        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="Search for a product, category or brand"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-btn">SEARCH</button>
        </form>

        <div className="nav-icons">
          <div
            className="account-container"
            onClick={() => setAccountOpen(prev => !prev)}
            ref={accountRef}
          >
            <FiUser className="icon account-icon" />
            {accountOpen && (
              <div className="account-dropdown fixed">
                <p className="account-message">
                  Log in to take advantage of special member offers and quick checkout.
                </p>
                <Link to="/login" className="account-btn primary">Connection</Link>
                <Link to="/signup" className="account-btn secondary">Create an account</Link>
              </div>
            )}
          </div>
          <FiHeart className="icon" />
          <Link to="/cart" className="cart-link">
            <FiShoppingBag className="icon" />
            {cart.length > 0 && (
              <span className="cart-count">{cart.length}</span>
            )}
          </Link>
        </div>
      </nav>

      {/* Navigation Categories Bar */}
      <div className="nav-categories">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/shop" className="highlight">OUTLET</Link>
      </div>
    </>
  );
}

export default Navbar;
