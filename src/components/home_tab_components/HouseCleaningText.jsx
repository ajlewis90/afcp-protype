// src/components/home_tab_components/HouseCleaningText.jsx
import React from 'react';
import './HouseCleaningText.css';

const defaultProps = {
  text: 'House Cleaning',
  onClick: () => {},
};

const HouseCleaningText = ({ text = defaultProps.text, onClick }) => {
  const [firstWord, secondWord] = text.split(' ');

  return (
    <div className="house-cleaning-text" onClick={onClick}>
      <span className="first-word">{firstWord}</span>
      <span className="second-word">{secondWord}</span>
    </div>
  );
};

export default HouseCleaningText;