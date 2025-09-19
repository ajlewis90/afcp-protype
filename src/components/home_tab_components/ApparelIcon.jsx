// src/components/home_tab_components/ApparelIcon.jsx
import React from 'react';
import './ApparelIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/ca2dce33-6505-4191-a10a-3acd92fd3600.png',
  onClick: () => {},
};

const ApparelIcon = ({ image, onClick }) => {
  return (
    <div
      className="apparel-icon"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
      onClick={onClick}
    />
  );
};

export default ApparelIcon;