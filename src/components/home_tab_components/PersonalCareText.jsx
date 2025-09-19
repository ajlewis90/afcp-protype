// src/components/home_tab_components/PersonalCareText.jsx
import React from 'react';
import './PersonalCareText.css';

const defaultProps = {
  text: 'Personal Care',
  onClick: () => {},
};

const PersonalCareText = ({ text = defaultProps.text, onClick }) => {
  const [firstWord, secondWord] = text.split(' ');

  return (
    <div className="personal-care-text" onClick={onClick}>
      <span className="first-word">{firstWord}</span>
      <span className="second-word">{secondWord}</span>
    </div>
  );
};

export default PersonalCareText;