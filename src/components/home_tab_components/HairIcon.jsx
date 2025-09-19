// src/components/home_tab_components/HairIcon.jsx
import React from 'react';
import './HairIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/fa709d7d-d417-4b0e-afda-c86fddde9622.png',
};

const HairIcon = ({ image }) => {
  return (
    <div
      className="hair-icon"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
    />
  );
};

export default HairIcon;