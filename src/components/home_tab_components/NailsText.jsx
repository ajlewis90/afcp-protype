// src/components/home_tab_components/NailsText.jsx
import React from 'react';
import './NailsText.css';

const defaultProps = {
  text: 'Nails',
};

const NailsText = ({ text = defaultProps.text }) => {
  return (
    <div className="nails-text">
      {text}
    </div>
  );
};

export default NailsText;