// Marketplace.js

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddProductForm from '../components/AddProductForm';

import '../styles/Marketplace.css';

const ProductList = ({ products, onDelete }) => (
  <div className="product-list">
    {products.map((product) => (
      <div key={product.id} className="product">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>₱{product.price}</p>
        <button onClick={() => onDelete(product.id)}>Delete</button>
        <button>Add to Cart</button> {/* Add your Add to Cart functionality here */}
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
  const [isDeleteProductFormVisible, setDeleteProductFormVisible] = useState(false);

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

  const openDeleteProductForm = () => {
    setDeleteProductFormVisible(true);
  };

  const closeDeleteProductForm = () => {
    setDeleteProductFormVisible(false);
  };

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    // Hide the form after adding a product
    closeAddProductForm();
  };

  const deleteProduct = (identifier) => {
    // Check if the identifier is a number (ID) or a string (name)
    const isNumeric = !isNaN(identifier);
    setProducts((prevProducts) =>
      prevProducts.filter((product) =>
        isNumeric ? product.id !== parseInt(identifier) : product.name !== identifier
      )
    );
    // Hide the form after deleting a product
    closeDeleteProductForm();
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
          <h1>Marketplace</h1>
        </div>
        <div className="add-product-container">
          <button onClick={openAddProductForm}>+</button>
        </div>
        {isAddProductFormVisible && <AddProductForm addProduct={addProduct} onClose={closeAddProductForm} />}
        <div className="delete-product-container">
          
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
      <ProductList products={filteredProducts} onDelete={deleteProduct} />
    </div>
  );
};

export default Marketplace;
