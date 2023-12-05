// DeleteProductForm.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/DeleteProductForm.css';

const DeleteProductForm = ({ onDelete }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the input value to the onDelete function
    onDelete(inputValue);
    // Clear the input field after submission
    setInputValue('');
  };
  DeleteProductForm.propTypes = {
    onDelete: PropTypes.func.isRequired,
  };

  return (
    <div className="delete-product-form">
      <h2>Delete Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name or ID:
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <button type="submit">Delete Product</button>
      </form>
    </div>
  );
};



export default DeleteProductForm;
