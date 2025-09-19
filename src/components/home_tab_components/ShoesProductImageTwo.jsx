// src/components/home_tab_components/ShoesProductImageTwo.jsx
import React from 'react';
import './ShoesProductImageTwo.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/027eb941-5abd-4ad4-8438-8237473aaa99.png',
};

const ShoesProductImageTwo = ({ image }) => {
  return (
    <div
      className="shoes-product-image-two"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
    />
  );
};

export default ShoesProductImageTwo;