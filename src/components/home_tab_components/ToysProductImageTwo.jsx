// src/components/home_tab_components/ToysProductImageTwo.jsx
import React from 'react';
import './ToysProductImageTwo.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/510cfb6b-37eb-4d34-b364-a3f46741363e.png',
};

const ToysProductImageTwo = ({ image }) => {
  return (
    <div
      className="toys-product-image-two"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
    />
  );
};

export default ToysProductImageTwo;