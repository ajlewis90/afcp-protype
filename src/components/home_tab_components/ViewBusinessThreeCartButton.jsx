// src/components/home_tab_components/ViewBusinessThreeCartButton.jsx
import React from 'react';
import './ViewBusinessThreeCartButton.css';


const ViewBusinessThreeCartButton = ({ onClick }) => {
  return (
    <button className="view-business-three-cart-button" onClick={onClick}>
      View Cart
    </button>
  );
};

export default ViewBusinessThreeCartButton;