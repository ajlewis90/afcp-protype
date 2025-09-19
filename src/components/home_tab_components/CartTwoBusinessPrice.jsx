// src/components/home_tab_components/CartTwoBusinessPrice.jsx
import React from 'react';
import './CartTwoBusinessPrice.css';

const defaultProps = {
  text: '$29.99', // Updated from '$20.99'
};

const CartTwoBusinessPrice = ({ text = defaultProps.text }) => {
  return (
    <div className="cart-two-business-price">
      {text}
    </div>
  );
};

export default CartTwoBusinessPrice;