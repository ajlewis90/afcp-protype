// src/components/home_tab_components/ShoesIcon.jsx
import React from 'react';
import './ShoesIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/2e195619-7e66-4079-8d21-1f852ab876dc.png',
  onClick: () => {},
};

const ShoesIcon = ({ image, onClick }) => {
  return (
    <div
      className="shoes-icon"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
      onClick={onClick}
    />
  );
};

export default ShoesIcon;