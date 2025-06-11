// FavoritesContext.js
import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (product) => {
    setFavorites(prev =>
      prev.find(item => item.id === product.id) ? prev : [...prev, product]
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
