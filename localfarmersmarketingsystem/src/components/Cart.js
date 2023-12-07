// CartPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const CartPage = () => {
  // Retrieve cart items from localStorage
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <div className="product-list">
        {cart && cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="product">
              <img src={item.image} alt={item.name} />
              <div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>₱{item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      {/* Back button to navigate to the Marketplace */}
      <Link to="/marketplace">Back to Marketplace</Link>
    </div>
  );
};

export default CartPage;
