// src/components/home_tab_components/GlassesIcon.jsx
import React from 'react';
import './GlassesIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/6d876c42-ab8a-4239-b3b5-1b5ffb204404.png',
  onClick: () => {},
};

const GlassesIcon = ({ image, onClick }) => {
  return (
    <div
      className="glasses-icon"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
      onClick={onClick}
    />
  );
};

export default GlassesIcon;