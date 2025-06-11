import React from 'react';
import { useLocation } from 'react-router-dom';
import products from './products';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery().get('query')?.toLowerCase() || '';

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query)
  );

  return (
    <div className="page-container">
      <h2>Search Results for "{query}"</h2>
      {filteredProducts.length === 0 ? (
        <p>No matching products found.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
