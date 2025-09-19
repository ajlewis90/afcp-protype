// src/components/home_tab_components/ApparelProductOneSizesText.jsx
import React from 'react';
import './ApparelProductOneSizesText.css';

const defaultProps = {
  text: 'Sizes: S, M, L',
};

const ApparelProductOneSizesText = ({ text = defaultProps.text }) => {
  return (
    <div className="apparel-product-one-sizes-text">
      {text}
    </div>
  );
};

export default ApparelProductOneSizesText;