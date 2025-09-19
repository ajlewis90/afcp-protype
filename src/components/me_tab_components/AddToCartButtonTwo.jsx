// src/components/me_tab_components/AddToCartButtonTwo.jsx
import React from 'react';
import './AddToCartButtonTwo.css';

const defaultProps = {
  label: 'Add to Cart',
};

const AddToCartButtonTwo = ({ label = defaultProps.label, onClick }) => {
  return (
    <button className="add-to-cart-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default AddToCartButtonTwo;