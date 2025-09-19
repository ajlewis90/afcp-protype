// src/components/CartsIcon.jsx
import React from 'react';
import './CartsIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/db184a86-d36b-4703-85f6-235145ab9340.png',
};

const CartsIcon = (props) => {
  return (
    <div className="carts-icon tab-icon" style={{
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default CartsIcon;