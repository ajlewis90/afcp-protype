// src/components/me_tab_components/OffersProductDiscountedPriceTextThree.jsx
import React from 'react';
import './OffersProductDiscountedPriceTextThree.css';

const defaultProps = {
  text: 'Now: $120.00',
};

const OffersProductDiscountedPriceTextThree = ({ text = defaultProps.text }) => {
  return (
    <div className="offers-product-discounted-price-text-three">
      {text}
    </div>
  );
};

export default OffersProductDiscountedPriceTextThree;