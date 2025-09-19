// src/components/home_tab_components/PersonalCareIcon.jsx
import React from 'react';
import './PersonalCareIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/13ede680-9310-49f6-adc6-5535a5459301.png',
  onClick: () => {},
};

const PersonalCareIcon = ({ image, onClick }) => {
  return (
    <div
      className="personal-care-icon"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
      onClick={onClick}
    />
  );
};

export default PersonalCareIcon;