// src/components/me_tab_components/OffersProductDiscountLabelTwo.jsx
import React from 'react';
import './OffersProductDiscountLabelTwo.css';

const defaultProps = {
  label: '15% off for you',
  details: 'Original Price: $30.00, Now: $20.00',
};

const OffersProductDiscountLabelTwo = ({ label = defaultProps.label, details = defaultProps.details }) => {
  return (
    <div className="offers-product-discount-label-two">
      <span className="discount-icon">★</span>
      <span className="discount-text">{label}</span>
      <span className="discount-details">{details}</span>
    </div>
  );
};

export default OffersProductDiscountLabelTwo;