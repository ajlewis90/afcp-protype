// src/components/home_tab_components/ApparelProductTextTwo.jsx
import React from 'react';
import './ApparelProductTextTwo.css';

const defaultProps = {
  text: "Ralph Lauren Men's Polo Shirt",
};

const ApparelProductTextTwo = ({ text = defaultProps.text }) => {
  return (
    <div className="apparel-product-text-two">
      {text}
    </div>
  );
};

export default ApparelProductTextTwo;