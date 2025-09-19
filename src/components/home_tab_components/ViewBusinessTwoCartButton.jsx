// src/components/home_tab_components/ViewBusinessTwoCartButton.jsx
import React from 'react';
import './ViewBusinessTwoCartButton.css';


const ViewBusinessTwoCartButton = ({ onClick }) => {
  return (
    <button className="view-business-two-cart-button" onClick={onClick}>
      View Cart
    </button>
  );
};

export default ViewBusinessTwoCartButton;