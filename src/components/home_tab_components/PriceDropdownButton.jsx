// src/components/home_tab_components/PriceDropdownButton.jsx
import React from 'react';
import './PriceDropdownButton.css';

const PriceDropdownButton = ({ onPriceDropdownClick, productName, originalPrice, hasPendingRequest }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    if (onPriceDropdownClick) {
      onPriceDropdownClick(productName, originalPrice);
    }
  };

  return (
    <button 
      className={`price-dropdown-button ${hasPendingRequest ? 'pending' : ''}`} 
      onClick={handleClick}
    >
      {hasPendingRequest ? 'Requested ✓' : 'Price Drop'}
    </button>
  );
};

export default PriceDropdownButton;