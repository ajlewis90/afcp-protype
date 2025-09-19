// src/components/home_tab_components/ToysText.jsx
import React from 'react';
import './ToysText.css';

const defaultProps = {
  text: 'Toys',
  onClick: () => {},
};

const ToysText = ({ text, onClick }) => {
  return (
    <div className="toys-text" onClick={onClick}>
      {text ?? defaultProps.text}
    </div>
  );
};

export default ToysText;