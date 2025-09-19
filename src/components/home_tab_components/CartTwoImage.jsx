// src/components/home_tab_components/CartTwoImage.jsx
import React from 'react';
import './CartTwoImage.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/539684e3-8152-476f-a205-497ae1d8ebc9.png',
};

const CartTwoImage = ({ image }) => {
  return (
    <div
      className="cart-two-image"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
    />
  );
};

export default CartTwoImage;