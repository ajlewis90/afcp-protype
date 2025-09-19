// src/components/home_tab_components/ToysIcon.jsx
import React from 'react';
import './ToysIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/5fdd72f9-eb71-44ad-ad59-be0dafcea1f6.png',
  onClick: () => {},
};

const ToysIcon = ({ image, onClick }) => {
  return (
    <div
      className="toys-icon"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
      onClick={onClick}
    />
  );
};

export default ToysIcon;