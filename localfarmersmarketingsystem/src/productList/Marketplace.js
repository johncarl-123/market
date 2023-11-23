// Marketplace.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/Marketplace.css';

const products = [
  { id: 1, name: 'Product 1', price: 20 },
  { id: 2, name: 'Product 2', price: 30 },
  { id: 3, name: 'Product 3', price: 25 },
  { id: 3, name: 'Product 3', price: 25 },
  { id: 3, name: 'Product 3', price: 25 },
  { id: 3, name: 'Product 3', price: 25 },
  { id: 3, name: 'Product 3', price: 25 },
  { id: 3, name: 'Product 3', price: 25 },
  { id: 3, name: 'Product 3', price: 25 },
  { id: 3, name: 'Product 3', price: 25 },
  { id: 3, name: 'Product 3', price: 25 },
  { id: 3, name: 'Product 3', price: 25 },
  // ... (your product data)
];

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    // You can perform additional actions when the search button is clicked
    console.log('Search button clicked:', searchQuery);
  };

  return (
    <div className="marketplace">
      <div className="UserDashBoard">
        <div className="leftSide">
          <Link to="/userdashboard">Profile</Link>
        </div>
        <div className="rightSide">
        <h1>Marketplace</h1>   
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product">
            <h2>{product.name}</h2>
            <p>₱{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
