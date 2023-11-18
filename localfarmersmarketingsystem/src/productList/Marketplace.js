// Marketplace.js

import React from 'react';
import '../styles/Marketplace.css';

const products = [
  { id: 1, name: 'Product 1', price: 20 },
  { id: 2, name: 'Product 2', price: 30 },
  { id: 3, name: 'Product 3', price: 25 },
  // Add more products as needed
];

const Marketplace = () => {
  return (
    <div className="marketplace">
      <h1>Marketplace</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
