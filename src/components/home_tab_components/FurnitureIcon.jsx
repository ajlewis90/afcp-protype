// src/components/home_tab_components/FurnitureIcon.jsx
import React from 'react';
import './FurnitureIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/8f81ca98-a13f-41a6-948b-ac9a5900e278.png',
  onClick: () => {},
};

const FurnitureIcon = ({ image, onClick }) => {
  return (
    <div
      className="furniture-icon"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
      onClick={onClick}
    />
  );
};

export default FurnitureIcon;