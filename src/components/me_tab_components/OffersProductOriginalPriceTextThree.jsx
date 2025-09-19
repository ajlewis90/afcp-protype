// src/components/me_tab_components/OffersProductOriginalPriceTextThree.jsx
import React from 'react';
import './OffersProductOriginalPriceTextThree.css';

const defaultProps = {
  text: 'Original Price: $150.00',
};

const OffersProductOriginalPriceTextThree = ({ text = defaultProps.text }) => {
  return (
    <div className="offers-product-original-price-text-three">
      {text}
    </div>
  );
};

export default OffersProductOriginalPriceTextThree;