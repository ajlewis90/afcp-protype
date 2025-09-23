// src/components/home_tab_components/ViewProductButton.jsx
import React from 'react';
import './ViewProductButton.css';

const defaultProps = {
  label: 'View Product',
};

const ViewProductButton = ({ label = defaultProps.label }) => {
  return (
    <button className="view-product-button">
      {label}
    </button>
  );
};

export default ViewProductButton;