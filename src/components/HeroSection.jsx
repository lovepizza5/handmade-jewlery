import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/braclet.png'; // make sure you add an image here!

function HeroSection() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1>Discover Handmade Elegance</h1>
        <p>Authentic bracelets crafted with love and tradition.</p>
      </div>
    </section>
  );
}

export default HeroSection;
