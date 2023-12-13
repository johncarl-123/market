// CheckoutForm.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/CheckoutForm.css';

const CheckoutForm = ({ onCheckout, onCancel, onAddProduct, checkedOutProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contactNumber: '',
    productName: '',
    productDescription: '',
    productPrice: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onCheckout) {
      onCheckout(formData);
    } else if (onAddProduct) {
      const newProduct = {
        name: formData.productName,
        description: formData.productDescription,
        price: formData.productPrice,
      };
      onAddProduct(newProduct);
    }

    onCancel();
  };

  return (
    <div className="checkout-form">
      <h2>{onCheckout ? 'Checkout' : 'Add New Product'}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />

        <label htmlFor="contactNumber">Contact Number:</label>
        <input type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />

        {onAddProduct && (
          <>
            <label htmlFor="productName">Product Name:</label>
            <input type="text" id="productName" name="productName" value={formData.productName} onChange={handleChange} required />

            <label htmlFor="productDescription">Product Description:</label>
            <textarea id="productDescription" name="productDescription" value={formData.productDescription} onChange={handleChange} required />

            <label htmlFor="productPrice">Product Price:</label>
            <input type="text" id="productPrice" name="productPrice" value={formData.productPrice} onChange={handleChange} required />
          </>
        )}

        <div className="centered-button">
          <button type="submit">{onCheckout ? 'Submit' : 'Add Product'}</button>
          {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
        </div>
      </form>
    </div>
  );
};

CheckoutForm.propTypes = {
  onCheckout: PropTypes.func,
  onCancel: PropTypes.func,
  onAddProduct: PropTypes.func,
  checkedOutProduct: PropTypes.object,
};

export default CheckoutForm;
