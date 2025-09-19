// src/components/me_tab_components/OffersProductDiscountedPriceTextTwo.jsx
import React from 'react';
import './OffersProductDiscountedPriceTextTwo.css';

const defaultProps = {
  text: 'Now: $20.00',
};

const OffersProductDiscountedPriceTextTwo = ({ text = defaultProps.text }) => {
  return (
    <div className="offers-product-discounted-price-text-two">
      {text}
    </div>
  );
};

export default OffersProductDiscountedPriceTextTwo;