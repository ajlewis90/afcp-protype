// src/components/home_tab_components/BeautyProductTwoColorsText.jsx
import React from 'react';
import './BeautyProductTwoColorsText.css';

const defaultProps = {
  text: '4 colors',
};

const BeautyProductTwoColorsText = ({ text = defaultProps.text }) => {
  return (
    <div className="beauty-product-two-colors-text">
      {text}
    </div>
  );
};

export default BeautyProductTwoColorsText;