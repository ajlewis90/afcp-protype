// src/components/me_tab_components/OffersProductImageThree.jsx
import React from 'react';
import './OffersProductImageThree.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/8f965042-a7ff-4f50-bd40-27caa9853275.png',
};

const OffersProductImageThree = ({ image }) => {
  return (
    <img
      src={image ?? defaultProps.image}
      alt="Coffee Machine"
      className="offers-product-image-three"
    />
  );
};

export default OffersProductImageThree;