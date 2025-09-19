// src/components/me_tab_components/OffersProductTextOne.jsx
import React from 'react';
import './OffersProductTextOne.css';

const defaultProps = {
  text: "Retro Sneakers",
};

const OffersProductTextOne = ({ text = defaultProps.text }) => {
  return (
    <div className="offers-product-text-one">
      {text}
    </div>
  );
};

export default OffersProductTextOne;