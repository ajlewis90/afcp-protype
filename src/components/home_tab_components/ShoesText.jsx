// src/components/home_tab_components/ShoesText.jsx
import React from 'react';
import './ShoesText.css';

const defaultProps = {
  text: 'Shoes',
  onClick: () => {},
};

const ShoesText = ({ text, onClick }) => {
  return (
    <div className="shoes-text" onClick={onClick}>
      {text ?? defaultProps.text}
    </div>
  );
};

export default ShoesText;