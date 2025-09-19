// src/components/home_tab_components/ShoesProductImageOne.jsx
import React from 'react';
import './ShoesProductImageOne.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/0fd8e547-6f14-4dfc-8c01-42f39be7636c.png',
};

const ShoesProductImageOne = ({ image }) => {
  return (
    <div
      className="shoes-product-image-one"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
    />
  );
};

export default ShoesProductImageOne;