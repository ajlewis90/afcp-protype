// src/components/me_tab_components/OffersProductOriginalPriceTextOne.jsx
import React from 'react';
import './OffersProductOriginalPriceTextOne.css';

const defaultProps = {
  text: 'Original Price: $120.00',
};

const OffersProductOriginalPriceTextOne = ({ text = defaultProps.text }) => {
  return (
    <div className="offers-product-original-price-text-one">
      {text}
    </div>
  );
};

export default OffersProductOriginalPriceTextOne;