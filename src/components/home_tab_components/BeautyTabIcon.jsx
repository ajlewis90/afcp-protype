// src/components/home_tab_components/BeautyTabIcon.jsx
import React from 'react';
import './BeautyTabIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/880cb242-3bf3-44c9-ad4d-5031a5bdb77a.png',
  onClick: () => {},
};

const BeautyTabIcon = ({ image, onClick }) => {
  return (
    <div
      className="beauty-tab-icon"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
      onClick={onClick}
    />
  );
};

export default BeautyTabIcon;