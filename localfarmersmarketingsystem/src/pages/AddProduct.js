// AddProduct.js
import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleAddProduct = () => {
    console.log('onAddProduct:', onAddProduct);
    if (!productName || !image || !price || !description) {
      alert('Please fill in all fields');
      return;
    }

    const newProduct = {
      productName,
      image,
      price: parseFloat(price),
      description,
    };

    onAddProduct(newProduct);

    setProductName('');
    setImage('');
    setPrice('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form>
        <label>
          Product Name:
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleAddProduct}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
