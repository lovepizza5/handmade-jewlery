import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchResults from './SearchResults';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import Cart from './pages/Cart'; // Cart page import
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';


// Context for Cart
import { CartProvider } from './CartContext'; // Correct import

import './App.css';

function App() {
  return (
    <CartProvider> {/* Ensure the CartProvider wraps the entire app */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />


        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
