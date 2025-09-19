// src/components/me_tab_components/GiftsSurprisesIcon.jsx
import React from 'react';
import './GiftsSurprisesIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/6657d57e-934d-4905-8186-1fede09eac5f.png',
};

const GiftsSurprisesIcon = (props) => {
  return (
    <div className="gifts-surprises-icon" style={{
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default GiftsSurprisesIcon;