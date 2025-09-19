// src/components/home_tab_components/ApparelProductImageOne.jsx
import React from 'react';
import './ApparelProductImageOne.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/d59d7261-5ecd-4484-9551-44dc1d93fe45.png',
};

const ApparelProductImageOne = ({ image }) => {
  return (
    <img
      src={image ?? defaultProps.image}
      alt="Levi's 501 Original Fit Jeans"
      className="apparel-product-image-one"
    />
  );
};

export default ApparelProductImageOne;