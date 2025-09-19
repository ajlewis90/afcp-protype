// src/components/me_tab_components/OffersProductImageTwo.jsx
import React from 'react';
import './OffersProductImageTwo.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/aacf3168-0a02-4b3b-b828-107f5bd8523c.png',
};

const OffersProductImageTwo = ({ image }) => {
  return (
    <img
      src={image ?? defaultProps.image}
      alt="Cute Stuffed Bear"
      className="offers-product-image-two"
    />
  );
};

export default OffersProductImageTwo;