// src/components/home_tab_components/GlassesText.jsx
import React from 'react';
import './GlassesText.css';

const defaultProps = {
  text: 'Glasses',
  onClick: () => {},
};

const GlassesText = ({ text, onClick }) => {
  return (
    <div className="glasses-text" onClick={onClick}>
      {text ?? defaultProps.text}
    </div>
  );
};

export default GlassesText;