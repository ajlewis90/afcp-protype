// src/components/home_tab_components/ApparelProductTextOne.jsx
import React from 'react';
import './ApparelProductTextOne.css';

const defaultProps = {
  text: "Levi's 501 Original Fit Jeans",
};

const ApparelProductTextOne = ({ text = defaultProps.text }) => {
  return (
    <div className="apparel-product-text-one">
      {text}
    </div>
  );
};

export default ApparelProductTextOne;