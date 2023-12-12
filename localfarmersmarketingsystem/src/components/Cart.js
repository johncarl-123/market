// CartPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CheckOutForm from '../components/CheckOutForm';
import '../styles/Cart.css';

const CartPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [checkedOutProduct, setCheckedOutProduct] = useState(null);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const checkout = (productId) => {
    const productToCheckout = cart.find((item) => item.id === productId);

    if (productToCheckout) {
      setModalProduct(null);
      setCheckedOutProduct(productToCheckout);
      setShowCheckoutForm(true);
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

  const handleCheckout = (checkoutDetails) => {
    console.log('Checkout details:', checkoutDetails);

    const checkedOutProductIndex = cart.findIndex((item) => item.id === checkedOutProduct.id);

    if (checkedOutProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(checkedOutProductIndex, 1);
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    setCheckedOutProduct(null);
    setShowCheckoutForm(false);

    // Pass checked-out product information to the checkout page
    navigate('/checkoutpage', { state: { checkedOutProduct } });
  };

  const handleCancelCheckout = () => {
    setShowCheckoutForm(false);
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

      {showCheckoutForm && <CheckOutForm onCheckout={handleCheckout} onCancel={handleCancelCheckout} />}
    </div>
  );
};

export default CartPage;
