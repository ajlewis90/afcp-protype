// src/components/home_tab_components/ApparelProductImageTwo.jsx
import React from 'react';
import './ApparelProductImageTwo.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/2f3b0fff-5715-4d07-8c8a-a6ad268192a1.png',
};

const ApparelProductImageTwo = ({ image }) => {
  return (
    <img
      src={image ?? defaultProps.image}
      alt="Ralph Lauren Men's Polo Shirt"
      className="apparel-product-image-two"
    />
  );
};

export default ApparelProductImageTwo;