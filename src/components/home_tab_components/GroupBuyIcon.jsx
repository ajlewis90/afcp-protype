// src/components/home_tab_components/GroupBuyIcon.jsx
import React from 'react';
import './GroupBuyIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/7ed4ae79-56a9-4052-b51e-4b2a2c05c712.png',
};

const GroupBuyIcon = ({ image }) => {
  return (
    <div
      className="group-buy-icon"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
    />
  );
};

export default GroupBuyIcon;