// src/components/me_tab_components/OffersProductTextThree.jsx
import React from 'react';
import './OffersProductTextThree.css';

const defaultProps = {
  text: "Coffee Machine",
};

const OffersProductTextThree = ({ text = defaultProps.text }) => {
  return (
    <div className="offers-product-text-three">
      {text}
    </div>
  );
};

export default OffersProductTextThree;