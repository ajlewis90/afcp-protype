// src/components/me_tab_components/OffersProductOriginalPriceTextTwo.jsx
import React from 'react';
import './OffersProductOriginalPriceTextTwo.css';

const defaultProps = {
  text: 'Original Price: $250.00',
};

const OffersProductOriginalPriceTextTwo = ({ text = defaultProps.text }) => {
  return (
    <div className="offers-product-original-price-text-two">
      {text}
    </div>
  );
};

export default OffersProductOriginalPriceTextTwo;