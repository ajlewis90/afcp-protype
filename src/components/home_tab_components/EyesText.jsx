// src/components/home_tab_components/EyesText.jsx
import React from 'react';
import './EyesText.css';

const defaultProps = {
  text: 'Eyes',
};

const EyesText = ({ text = defaultProps.text }) => {
  return (
    <div className="eyes-text">
      {text}
    </div>
  );
};

export default EyesText;