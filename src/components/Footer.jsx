import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Handmade Jewelry</h3>
          <p>Questions? Contact our customer service anytime.</p>
          <p><strong>Email:</strong> support@handmadejewelry.com</p>
        </div>
        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li>Women</li>
            <li>Men</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Collections</h4>
          <ul>
            <li>Summer</li>
            <li>Ramadan</li>
            <li>Special Editions</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Community</h4>
          <p>Join us for updates and offers!</p>
        </div>
      </div>
      <p className="copyright">© 2025 Handmade Jewelry. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
