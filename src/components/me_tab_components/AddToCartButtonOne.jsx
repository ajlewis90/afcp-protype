// src/components/me_tab_components/AddToCartButtonOne.jsx
import React from 'react';
import './AddToCartButtonOne.css';

const defaultProps = {
  label: 'Add to Cart',
};

const AddToCartButtonOne = ({ label = defaultProps.label, onClick }) => {
  return (
    <button className="add-to-cart-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default AddToCartButtonOne;