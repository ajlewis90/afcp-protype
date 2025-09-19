// src/components/home_tab_components/GroupBuyIconFour.jsx
import React from 'react';
import './GroupBuyIconFour.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/7ed4ae79-56a9-4052-b51e-4b2a2c05c712.png',
};

const GroupBuyIconFour = ({ image }) => {
  return (
    <div
      className="group-buy-icon-four"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
    />
  );
};

export default GroupBuyIconFour;