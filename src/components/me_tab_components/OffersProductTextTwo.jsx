// src/components/me_tab_components/OffersProductTextTwo.jsx
import React from 'react';
import './OffersProductTextTwo.css';

const defaultProps = {
  text: "Cute Stuffed Bear",
};

const OffersProductTextTwo = ({ text = defaultProps.text }) => {
  return (
    <div className="offers-product-text-two">
      {text}
    </div>
  );
};

export default OffersProductTextTwo;