import React, { useState, useEffect } from 'react';
import './HeroSection.css';

import img1 from '../assets/braclet1.jpg';
import img2 from '../assets/barclet2.jpg';
import img3 from '../assets/braclet3.jpg';
import img4 from '../assets/braclet4.jpg';
import img5 from '../assets/braclet5.jpg';
import new1 from '../assets/ring6.jpg';
import new2 from '../assets/necklace4.jpg';
import new3 from '../assets/new3.jpg';

const images = [img1, img2, img3, img4, img5];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero-grid">
        <div className="hero-left">
          {images.map((img, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Discover Handmade Elegance</h1>
            <p>Authentic jewelry crafted with love and tradition.</p>
          </div>
        </div>

        <div className="hero-right">
          <div
              className="hero-box top-box"
              style={{ backgroundImage: `url(${new1})` }}
            >
              <div className="hero-box-overlay"></div>
              <div className="hero-box-content">
                <h3>Free Shipping</h3>
                <p>On orders over €50</p>
              </div>
            </div>

          <div
              className="hero-box bottom-box"
              style={{ backgroundImage: `url(${new2})` }}
            >
              <div className="hero-box-overlay"></div>
              <div className="hero-box-content">
                <h3>Exclusive Deals</h3>
                <p>New styles every week</p>
              </div>
            </div>

        </div>
      </section>

      <section className="new-arrivals">
        <h2>New Arrivals</h2>
        <div className="arrival-gallery">
          <img src={new1} alt="New Arrival 1" />
          <img src={new2} alt="New Arrival 2" />
          <img src={new3} alt="New Arrival 3" />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
