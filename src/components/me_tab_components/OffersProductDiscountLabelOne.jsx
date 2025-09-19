// src/components/me_tab_components/OffersProductDiscountLabelOne.jsx
import React from 'react';
import './OffersProductDiscountLabelOne.css';

const defaultProps = {
  label: '20% off for you',
  details: 'Original Price: $120.00, Now: $90.00',
};

const OffersProductDiscountLabelOne = ({ label = defaultProps.label, details = defaultProps.details }) => {
  return (
    <div className="offers-product-discount-label-one">
      <span className="discount-icon">★</span>
      <span className="discount-text">{label}</span>
      <span className="discount-details">{details}</span>
    </div>
  );
};

export default OffersProductDiscountLabelOne;