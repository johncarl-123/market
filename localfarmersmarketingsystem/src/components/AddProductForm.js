// AddProductForm.js
import React, { useState } from 'react';
import '../styles/AddProductForm.css';
import PropTypes from 'prop-types';

const AddProductForm = ({ addProduct, onClose }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: new Date().getTime(),
      name: productName,
      price: parseFloat(productPrice),
      description: productDescription,
      image: productImage,
    };

    addProduct(newProduct);
    // Clear the form fields after submitting
    setProductName('');
    setProductPrice('');
    setProductDescription('');
    setProductImage('');
    onClose(); // Close the form
  };
  
  AddProductForm.propTypes = {
    addProduct: PropTypes.func.isRequired,
  };

  return (
    <div className="modal-container">
      <div className="add-product-form">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          {/* Add form fields here */}
          <label>
            Product Name:
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </label>
          <label>
            Product Price:
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </label>
          <label>
            Product Description:
            <input
              type="text"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </label>
          <label>
            Product Image URL:
            <input
              type="text"
              value={productImage}
              onChange={(e) => setProductImage(e.target.value)}
            />
          </label>
          <button type="submit">Add Product</button>
        </form>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

AddProductForm.propTypes = {
  addProduct: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddProductForm;
