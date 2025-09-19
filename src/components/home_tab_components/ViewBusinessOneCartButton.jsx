// src/components/home_tab_components/ViewBusinessOneCartButton.jsx
import React from 'react';
import './ViewBusinessOneCartButton.css';


const ViewBusinessOneCartButton = ({ onClick }) => {
  return (
    <button className="view-business-one-cart-button" onClick={onClick}>
      View Cart
    </button>
  );
};

export default ViewBusinessOneCartButton;