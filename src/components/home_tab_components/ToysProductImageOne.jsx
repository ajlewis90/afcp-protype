// src/components/home_tab_components/ToysProductImageOne.jsx
import React from 'react';
import './ToysProductImageOne.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/545b2668-558f-420c-9fc6-c2b4ccdf0ed2.png',
};

const ToysProductImageOne = ({ image }) => {
  return (
    <div
      className="toys-product-image-one"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
    />
  );
};

export default ToysProductImageOne;