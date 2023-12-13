// AddProductForm.js
import React, { useState } from 'react';
import '../styles/AddProductForm.css';
import PropTypes from 'prop-types';

const AddProductForm = ({ addProduct, onClose }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any of the fields is blank
    if (!productName || !productPrice || !productDescription || !productImage) {
      setErrorMessage('Please provide information for all fields.');
      return;
    }

    const newProduct = {
      id: new Date().getTime(),
      name: productName,
      price: parseFloat(productPrice),
      description: productDescription,
      image: productImage,
    };

    addProduct(newProduct);

    setProductName('');
    setProductPrice('');
    setProductDescription('');
    setProductImage(null);

    setSuccessMessage('Product Added Successfully');

    // Close the modal and reset success and error messages after a delay
    setTimeout(() => {
      setSuccessMessage('');
      setErrorMessage('');
      onClose();
    }, 3000); // Adjust the delay time as needed
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="modal-container">
      <div className="add-product-form">
        <h2>Add Product</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
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
            Product Image:
            <input type="file" accept="image/*" onChange={handleImageChange} />
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