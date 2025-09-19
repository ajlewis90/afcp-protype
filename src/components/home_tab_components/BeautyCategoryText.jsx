// src/components/home_tab_components/BeautyCategoryText.jsx
import React from 'react';
import './BeautyCategoryText.css';

const defaultProps = {
  text: 'Beauty',
  onClick: () => {},
};

const BeautyCategoryText = ({ text, onClick }) => {
  return (
    <div className="beauty-category-text" onClick={onClick}>
      {text ?? defaultProps.text}
    </div>
  );
};

export default BeautyCategoryText;