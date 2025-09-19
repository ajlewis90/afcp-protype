// src/components/home_tab_components/BeautyProductTextOne.jsx
import React from 'react';
import './BeautyProductTextOne.css';

const defaultProps = {
  text: 'La Mer The Moisturizing Soft Cream',
};

const BeautyProductTextOne = ({ text = defaultProps.text }) => {
  return (
    <div className="beauty-product-text-one">
      {text}
    </div>
  );
};

export default BeautyProductTextOne;