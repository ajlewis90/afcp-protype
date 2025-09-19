// src/components/home_tab_components/CartTwoBusinessName.jsx
import React from 'react';
import './CartTwoBusinessName.css';

const defaultProps = {
  text: 'New Pharma', // Updated from 'Baker N Cakes'
};

const CartTwoBusinessName = ({ text = defaultProps.text }) => {
  return (
    <div className="cart-two-business-name">
      {text}
    </div>
  );
};

export default CartTwoBusinessName;