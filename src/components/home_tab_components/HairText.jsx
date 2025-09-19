// src/components/home_tab_components/HairText.jsx
import React from 'react';
import './HairText.css';

const defaultProps = {
  text: 'Hair',
};

const HairText = ({ text = defaultProps.text }) => {
  return (
    <div className="hair-text">
      {text}
    </div>
  );
};

export default HairText;