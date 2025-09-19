// src/components/home_tab_components/BeautyProductTwoIndivdualPriceText.jsx
import React from 'react';
import './BeautyProductTwoIndivdualPriceText.css';

const defaultProps = {
  text: '$ 1100.00',
};

const BeautyProductTwoIndivdualPriceText = ({ text = defaultProps.text }) => {
  return (
    <div className="beauty-product-two-indivdual-price-text">
      {text}
    </div>
  );
};

export default BeautyProductTwoIndivdualPriceText;