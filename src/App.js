import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchResults from './SearchResults';

// Pages
import Home from './pages/Home';
import Braclet from './pages/Braclet';
import Ring from './pages/Ring';
import Contact from './pages/Contact';
import Necklace from './pages/Necklace';
import Cart from './pages/Cart'; // Cart page import
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { FavoritesProvider } from './FavoritesContext';
import Favorites from './pages/Favorites';
import ProductDetail from './pages/ProductDetail';


// Context for Cart
import { CartProvider } from './CartContext'; // Correct import

import './App.css';

function App() {
  return (
    <CartProvider> {/* Ensure the CartProvider wraps the entire app */}
     <FavoritesProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/braclet" element={<Braclet />} />
          <Route path="/ring" element={<Ring />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/necklace" element={<Necklace />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/product/:id" element={<ProductDetail />} />


        </Routes>
        <Footer />
      </Router>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;
