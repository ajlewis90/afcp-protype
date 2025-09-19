// src/components/HomeIcon.jsx
import React from 'react';
import './HomeIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/99c17f34-9c59-4f3d-8131-cc5d7b48db3e.png',
};

const HomeIcon = (props) => {
  return (
    <div className="home-icon tab-icon" style={{
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default HomeIcon;