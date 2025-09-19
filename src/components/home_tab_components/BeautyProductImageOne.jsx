// src/components/home_tab_components/BeautyProductImageOne.jsx
import React from 'react';
import './BeautyProductImageOne.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/fbe819f5-01ef-4c42-b37c-0ebcb7c3fda5.png',
};

const BeautyProductImageOne = ({ image }) => {
  return (
    <div
      className="beauty-product-image-one"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
    />
  );
};

export default BeautyProductImageOne;