import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/DeleteProductForm.css';

const DeleteProductForm = ({ onDelete }) => {
  const [inputValue, setInputValue] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show the confirmation modal
    setShowConfirmation(true);
  };

  const handleConfirmDelete = () => {
    // Call onDelete only if the confirmation is true
    onDelete(inputValue);
    // Reset the input and hide the confirmation modal
    setInputValue('');
    setShowConfirmation(false);
  };

  const handleCancelDelete = () => {
    // Reset the input and hide the confirmation modal
    setInputValue('');
    setShowConfirmation(false);
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

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="confirmation-modal">
          <p>Are you sure you want to delete this product?</p>
          <div>
            <button onClick={handleConfirmDelete}>Yes, Delete</button>
            <button onClick={handleCancelDelete}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteProductForm;
