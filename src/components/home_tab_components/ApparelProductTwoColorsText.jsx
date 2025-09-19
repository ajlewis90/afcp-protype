// src/components/home_tab_components/ApparelProductTwoColorsText.jsx
import React from 'react';
import './ApparelProductTwoColorsText.css';

const defaultProps = {
  text: 'Colors: Black, White, Blue',
};

const ApparelProductTwoColorsText = ({ text = defaultProps.text }) => {
  return (
    <div className="apparel-product-two-colors-text">
      {text}
    </div>
  );
};

export default ApparelProductTwoColorsText;