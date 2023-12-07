// Marketplace.js

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddProductForm from '../components/AddProductForm';
import '../styles/Marketplace.css';

const ProductList = ({ products, onDelete, onAddToCart }) => (
  <div className="product-list">
    {products.map((product) => (
      <div key={product.id} className="product">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>₱{product.price}</p>
        <button onClick={() => onDelete(product.id)}>Delete</button>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    ))}
  </div>
);

const Marketplace = () => {
  const navigate = useNavigate();

  const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
  const [products, setProducts] = useState(storedProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddProductFormVisible, setAddProductFormVisible] = useState(false);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    console.log('Search button clicked:', searchQuery);
  };

  const openAddProductForm = () => {
    setAddProductFormVisible(true);
  };

  const closeAddProductForm = () => {
    setAddProductFormVisible(false);
  };

  const addProductToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem('cart', JSON.stringify([...cart, product]));
  };

  const deleteProduct = (identifier) => {
    const isNumeric = !isNaN(identifier);
    setProducts((prevProducts) =>
      prevProducts.filter((product) =>
        isNumeric ? product.id !== parseInt(identifier) : product.name !== identifier
      )
    );
  };

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <div className="marketplace">
      <div className="UserDashBoard">
        <div className="leftSide">
          <Link to="/userdashboard">Profile</Link>
        </div>
        <div className="rightSide">
          <h1>Welcome to our Marketplace</h1>
        </div>
        <div className="add-product-container">
          <button onClick={openAddProductForm}>+</button>
        </div>
        {isAddProductFormVisible && <AddProductForm addProduct={setProducts} onClose={closeAddProductForm} />}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {/* Pass addProductToCart to the ProductList component */}
        <ProductList products={filteredProducts} onDelete={deleteProduct} onAddToCart={addProductToCart} />
        {/* Link to the CartPage component */}
        <Link to="/cart">View Cart</Link>
      </div>
    </div>
  );
};

export default Marketplace;
