// src/components/home_tab_components/HouseCleaningIcon.jsx
import React from 'react';
import './HouseCleaningIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/2104919d-afa4-49df-9cb9-f7e13bd84e86.png',
  onClick: () => {},
}

const HouseCleaningIcon = ({ image, onClick }) => {
  return (
    <div
      className="house-cleaning-icon"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
      onClick={onClick}
    />
  );
};

export default HouseCleaningIcon;