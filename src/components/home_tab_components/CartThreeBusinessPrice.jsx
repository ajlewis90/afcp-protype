// src/components/home_tab_components/CartThreeBusinessPrice.jsx
import React from 'react';
import './CartThreeBusinessPrice.css';

const defaultProps = {
  text: '$40.00', // Updated from '$ 15.49'
};

const CartThreeBusinessPrice = ({ text = defaultProps.text }) => {
  return (
    <div className="cart-three-business-price">
      {text}
    </div>
  );
};

export default CartThreeBusinessPrice;