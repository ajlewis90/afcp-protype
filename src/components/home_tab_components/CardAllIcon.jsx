// src/components/home_tab_components/CardAllIcon.jsx
import React from 'react';
import './CardAllIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/4f0758bc-c665-48b2-99c3-39aa1ca93214.png',
};

const CardAllIcon = (props) => {
  return (
    <div
      className="card-all-icon"
      style={{ backgroundImage: `url(${props.image ?? defaultProps.image})` }}
    />
  );
};

export default CardAllIcon;