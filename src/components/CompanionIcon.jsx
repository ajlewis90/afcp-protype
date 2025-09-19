// src/components/CompanionIcon.jsx
import React from 'react';
import './CompanionIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/31477269-1636-4a09-b214-8a5a5e291fe1.png'
};

const CompanionIcon = (props) => {
  return (
    <div className="companion-icon tab-icon" style={{
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default CompanionIcon;