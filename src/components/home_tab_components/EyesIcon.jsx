// src/components/home_tab_components/EyesIcon.jsx
import React from 'react';
import './EyesIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/76ac7e01-1988-4f30-a9de-2b145c62885a.png',
};

const EyesIcon = ({ image }) => {
  return (
    <div
      className="eyes-icon"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
    />
  );
};

export default EyesIcon;