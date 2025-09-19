// src/components/me_tab_components/OffersProductDiscountLabelThree.jsx
import React from 'react';
import './OffersProductDiscountLabelThree.css';

const defaultProps = {
  label: '20% off for you',
  details: 'Original Price: $150.00, Now: $120.00',
};

const OffersProductDiscountLabelThree = ({ label = defaultProps.label, details = defaultProps.details }) => {
  return (
    <div className="offers-product-discount-label-three">
      <span className="discount-icon">★</span>
      <span className="discount-text">{label}</span>
      <span className="discount-details">{details}</span>
    </div>
  );
};

export default OffersProductDiscountLabelThree;