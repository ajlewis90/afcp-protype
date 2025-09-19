// src/components/home_tab_components/BeautyProductTextTwo.jsx
import React from 'react';
import './BeautyProductTextTwo.css';

const defaultProps = {
  text: 'Dior Dway Slide Sandal in Embroidered Cotton',
};

const BeautyProductTextTwo = ({ text = defaultProps.text }) => {
  return (
    <div className="beauty-product-text-two">
      {text}
    </div>
  );
};

export default BeautyProductTextTwo;