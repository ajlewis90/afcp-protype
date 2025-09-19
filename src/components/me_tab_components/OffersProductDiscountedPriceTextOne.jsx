// src/components/me_tab_components/OffersProductDiscountedPriceTextOne.jsx
import React from 'react';
import './OffersProductDiscountedPriceTextOne.css';

const defaultProps = {
  text: 'Now: $90.00',
};

const OffersProductDiscountedPriceTextOne = ({ text = defaultProps.text }) => {
  return (
    <div className="offers-product-discounted-price-text-one">
      {text}
    </div>
  );
};

export default OffersProductDiscountedPriceTextOne;