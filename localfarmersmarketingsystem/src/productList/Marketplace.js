// Marketplace.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddProductForm from '../components/AddProductForm';
import ConfirmationDialog from '../components/ConfirmationDialog';
import '../styles/Marketplace.css';
import '../styles/ConfirmationDialog.css';

const ProductList = ({ products, onAddToCart, onShowConfirmation, onDeleteSuccess }) => {
  const [modalProduct, setModalProduct] = useState(null);

  const handleImageClick = (product) => {
    setModalProduct(product);
  };

  const handleCloseModal = () => {
    setModalProduct(null);
  };

  const handleDeleteConfirmation = (product) => {
    onShowConfirmation({
      title: 'Delete Product',
      message: `Are you sure you want to delete ${product.name}?`,
      onConfirm: () => {
        onDeleteSuccess(product.id);
        handleCloseModal();
      },
      onCancel: handleCloseModal,
    });
  };

  return (
    <div className="product-list">
      {Array.isArray(products) &&
        products.map((product) => (
          <div key={product.id} className="product">
            <img
              src={product.image}
              alt={product.name}
              onClick={() => handleImageClick(product)}
            />
            <div className="product-info">
              <div>
                <label>Name:</label>
                <h2>{product.name}</h2>
              </div>
              <div>
                <label>Description:</label>
                <p>{product.description}</p>
              </div>
              <p>Price: ₱{product.price} per kilo</p>
              <div className="button-container">
                <button onClick={() => handleDeleteConfirmation(product)}>Delete</button>
                <button onClick={() => onAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}

      {modalProduct && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content">
            <img src={modalProduct.image} alt={modalProduct.name} />
          </div>
        </div>
      )}
    </div>
  );
};

const Marketplace = () => {
  const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
  const [products, setProducts] = useState(storedProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddProductFormVisible, setAddProductFormVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [confirmation, setConfirmation] = useState(null);

  const filteredProducts = Array.isArray(products)
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

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

  const deleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
    setSuccessMessage('Product deleted successfully!');
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const addProductToMarketplace = (newProduct) => {
    setProducts((prevProducts) => {
      const updatedProducts = Array.isArray(prevProducts) ? [...prevProducts, newProduct] : [newProduct];
      return updatedProducts;
    });
  };

  const handleShowConfirmation = (confirmationData) => {
    setSuccessMessage('');
    setConfirmation(confirmationData);
  };

  const handleCloseConfirmation = () => {
    setConfirmation(null);
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
        {isAddProductFormVisible && (
          <AddProductForm addProduct={addProductToMarketplace} onClose={closeAddProductForm} />
        )}
        <Link to="/cart" className="view-cart-link">
          View Cart
        </Link>
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
        <ProductList
          products={filteredProducts}
          onAddToCart={addProductToCart}
          onShowConfirmation={handleShowConfirmation}
          onDeleteSuccess={deleteProduct}
        />
      </div>

      {/* Display ConfirmationDialog when confirmation is set */}
      {confirmation && (
        <ConfirmationDialog
          title={confirmation.title}
          message={confirmation.message}
          onConfirm={() => {
            confirmation.onConfirm();
            setSuccessMessage('Product deleted successfully!');
            setTimeout(() => {
              setSuccessMessage('');
            }, 3000);
            handleCloseConfirmation();
          }}
          onCancel={handleCloseConfirmation}
        />
      )}

      {/* Display success message */}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default Marketplace;
