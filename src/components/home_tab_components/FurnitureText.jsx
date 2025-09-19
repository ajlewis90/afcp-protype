// src/components/home_tab_components/FurnitureText.jsx
import React from 'react';
import './FurnitureText.css';

const defaultProps = {
  text: 'Furniture',
  onClick: () => {},
};

const FurnitureText = ({ text, onClick }) => {
  return (
    <div className="furniture-text" onClick={onClick}>
      {text ?? defaultProps.text}
    </div>
  );
};

export default FurnitureText;