// src/components/me_tab_components/AddToCartButtonThree.jsx
import React from 'react';
import './AddToCartButtonThree.css';

const defaultProps = {
  label: 'Add to Cart',
};

const AddToCartButtonThree = ({ label = defaultProps.label, onClick }) => {
  return (
    <button className="add-to-cart-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default AddToCartButtonThree;