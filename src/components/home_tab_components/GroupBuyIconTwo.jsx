// src/components/home_tab_components/GroupBuyIconTwo.jsx
import React from 'react';
import './GroupBuyIconTwo.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/7ed4ae79-56a9-4052-b51e-4b2a2c05c712.png',
};

const GroupBuyIconTwo = ({ image }) => {
  return (
    <div
      className="group-buy-icon-two"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
    />
  );
};

export default GroupBuyIconTwo;