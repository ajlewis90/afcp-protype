// src/components/home_tab_components/CartOneBusinessName.jsx
import React from 'react';
import './CartOneBusinessName.css';

const defaultProps = {
  text: 'Baker N Cakes',
};

const CartOneBusinessName = ({ text = defaultProps.text }) => {
  return (
    <div className="cart-one-business-name">
      {text}
    </div>
  );
};

export default CartOneBusinessName;