import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Cart.css'; // Import the shared styles

const CheckoutPage = () => {
  const location = useLocation();
  const checkedOutProduct = location.state && location.state.checkedOutProduct;

  if (!checkedOutProduct) {
    // Handle the case where checkedOutProduct is not available (optional)
    return <div>No product information available for checkout.</div>;
  }

  // Render the checkout page with the checked-out product information
  return (
    <div className="checkout-page"> {/* Add the checkout-page class */}
      <h2>Checkout Page</h2>
      <div className="product"> {/* Add the product class */}
        <img src={checkedOutProduct.image} alt={checkedOutProduct.name} />
        <div>
          <p>Name: {checkedOutProduct.name}</p>
          <p>Description: {checkedOutProduct.description}</p>
          <p>Price: ₱{checkedOutProduct.price}</p>
          {/* Add other product details as needed */}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
