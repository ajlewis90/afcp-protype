// src/components/home_tab_components/CartOneImage.jsx
import React from 'react';
import './CartOneImage.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/2024848d-d2e0-40f6-b809-fd21dd629edc.png',
};

const CartOneImage = ({ image }) => {
  return (
    <div
      className="cart-one-image"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
    />
  );
};

export default CartOneImage;