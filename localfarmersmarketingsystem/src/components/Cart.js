import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const CartPage = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [modalProduct, setModalProduct] = useState(null);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const checkout = (productId) => {
    const productToCheckout = cart.find((item) => item.id === productId);

    if (productToCheckout) {
      const updatedCart = cart.filter((item) => item.id !== productId);
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));

      alert(`Checkout successful! Thank you for your purchase of ${productToCheckout.name}.`);
    } else {
      alert('Product not found in the cart.');
    }
  };

  const handleImageClick = (product) => {
    setModalProduct(product);
  };

  const handleCloseModal = () => {
    setModalProduct(null);
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <div className="product-list">
        {cart && cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="product">
              <img src={item.image} alt={item.name} onClick={() => handleImageClick(item)} />
              <div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>₱{item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                <button onClick={() => checkout(item.id)}>Checkout</button>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <Link to="/marketplace">Back to Marketplace</Link>

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

export default CartPage;
