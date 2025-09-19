// src/components/home_tab_components/BeautyProductOneSizesText.jsx
import React from 'react';
import './BeautyProductOneSizesText.css';

const defaultProps = {
  text: '2 sizes',
};

const BeautyProductOneSizesText = ({ text = defaultProps.text }) => {
  return (
    <div className="beauty-product-one-sizes-text">
      {text}
    </div>
  );
};

export default BeautyProductOneSizesText;