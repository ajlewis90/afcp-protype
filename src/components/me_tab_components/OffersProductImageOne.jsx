// src/components/me_tab_components/OffersProductImageOne.jsx
import React from 'react';
import './OffersProductImageOne.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/92f317f8-23b6-42a2-8122-4d4f16fdf84f.png',
};

const OffersProductImageOne = ({ image }) => {
  return (
    <img
      src={image ?? defaultProps.image}
      alt="Retro Sneakers"
      className="offers-product-image-one"
    />
  );
};

export default OffersProductImageOne;