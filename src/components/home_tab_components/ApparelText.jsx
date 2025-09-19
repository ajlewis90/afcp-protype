// src/components/home_tab_components/ApparelText.jsx
import React from 'react';
import './ApparelText.css';

const defaultProps = {
  text: 'Apparel',
  onClick: () => {},
};

const ApparelText = ({ text, onClick }) => {
  return (
    <div className="apparel-text" onClick={onClick}>
      {text ?? defaultProps.text}
    </div>
  );
};

export default ApparelText;