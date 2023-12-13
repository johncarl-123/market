import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Cart.css'; 

const CheckoutPage = () => {
  const location = useLocation();
  const checkedOutProduct = location.state && location.state.checkedOutProduct;

  if (!checkedOutProduct) {
    
    return <div>No product information available for checkout.</div>;
  }

  
  return (
    <div className="checkout-page"> 
      <h2>Checkout Page</h2>
      <div className="product"> 
        <img src={checkedOutProduct.image} alt={checkedOutProduct.name} />
        <div>
          <p>Name: {checkedOutProduct.name}</p>
          <p>Description: {checkedOutProduct.description}</p>
          <p>Price: ₱{checkedOutProduct.price}</p>
         
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
