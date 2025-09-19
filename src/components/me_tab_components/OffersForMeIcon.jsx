// src/components/me_tab_components/OffersForMeIcon.jsx
import React from 'react';
import './OffersForMeIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/52622ffc-3626-4a80-aea0-22fbfcb11c66.png',
};

const OffersForMeIcon = (props) => {
  return (
    <div className="offers-for-me-icon" style={{
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default OffersForMeIcon;