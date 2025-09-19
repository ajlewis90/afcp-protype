// src/components/home_tab_components/CartThreeBusinessName.jsx
import React from 'react';
import './CartThreeBusinessName.css';

const defaultProps = {
  text: 'The Warehouse', // Updated from 'Warehouse Stationary'
};

const CartThreeBusinessName = ({ text = defaultProps.text }) => {
  return (
    <div className="cart-three-business-name">
      {text}
    </div>
  );
};

export default CartThreeBusinessName;