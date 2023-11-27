// Marketplace.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/Marketplace.css';

const products = [
  { id: 1, name: 'Eggplant ', price: 20 },
  { id: 1, name: 'Potato ', price: 20 },
  { id: 1, name: 'Tomato ', price: 20 },
  { id: 1, name: 'Letuce ', price: 20 },
  { id: 1, name: 'Egg ', price: 20 },
  { id: 1, name: 'Meat ', price: 20 },
  { id: 1, name: 'Rice ', price: 20 },
  { id: 1, name: 'Squash ', price: 20 },
  { id: 1, name: 'SweatPotato ', price: 20 },
  { id: 1, name: 'Carrot ', price: 20 },
  { id: 1, name: 'Mango ', price: 20 },
  { id: 1, name: 'Banana ', price: 20 },
  { id: 1, name: 'Coconut ', price: 20 },
  { id: 1, name: 'StarApple ', price: 20 },
  { id: 1, name: 'StarFruit ', price: 20 },
  { id: 1, name: 'JackFruit ', price: 20 },
  
  
];

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
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
