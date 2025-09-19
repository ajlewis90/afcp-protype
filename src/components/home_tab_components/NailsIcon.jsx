// src/components/home_tab_components/NailsIcon.jsx
import React from 'react';
import './NailsIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/493431ba-08c5-4c56-823a-fef75ef986b8.png',
};

const NailsIcon = ({ image }) => {
  return (
    <div
      className="nails-icon"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
    />
  );
};

export default NailsIcon;