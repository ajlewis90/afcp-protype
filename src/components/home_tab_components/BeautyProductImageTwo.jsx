// src/components/home_tab_components/BeautyProductImageTwo.jsx
import React from 'react';
import './BeautyProductImageTwo.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/6e6aee90-d251-49d2-b465-498a99659f3a.png',
};

const BeautyProductImageTwo = ({ image }) => {
  return (
    <div
      className="beauty-product-image-two"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
    />
  );
};

export default BeautyProductImageTwo;