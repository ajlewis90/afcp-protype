// src/components/home_tab_components/PriceDropToggle.jsx
import React from 'react';
import './PriceDropToggle.css';

const PriceDropToggle = ({ 
  productName, 
  originalPrice, 
  isEnabled = false, 
  onToggle 
}) => {
  console.log('PriceDropToggle rendered with:', { productName, originalPrice, isEnabled, hasOnToggle: !!onToggle });
  
  const handleToggle = () => {
    console.log('Toggle clicked!', { productName, originalPrice, isEnabled });
    if (onToggle) {
      console.log('Calling onToggle with:', productName, originalPrice, !isEnabled);
      onToggle(productName, originalPrice, !isEnabled);
    } else {
      console.error('onToggle function not provided!');
    }
  };

  return (
    <div className="price-drop-toggle-container">
      <label className="price-drop-toggle-label">
        <span className="price-drop-text">Price Drop</span>
        <div className="toggle-switch" onClick={handleToggle}>
          <div className={`toggle-slider ${isEnabled ? 'enabled' : ''}`}>
            <div className="toggle-knob"></div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default PriceDropToggle;