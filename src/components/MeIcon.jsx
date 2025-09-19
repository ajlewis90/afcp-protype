// src/components/MeIcon.jsx
import React from 'react';
import './MeIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/71fc0c62-cf3f-4540-af82-20ce1ea92e4d.png',
};

const MeIcon = (props) => {
  return (
    <div className="me-icon tab-icon" style={{
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default MeIcon;