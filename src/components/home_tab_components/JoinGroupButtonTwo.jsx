// src/components/home_tab_components/JoinGroupButtonTwo.jsx
import React from 'react';
import './JoinGroupButtonTwo.css';

const defaultProps = {
  label: 'Join Group',
};

const JoinGroupButtonTwo = ({ label = defaultProps.label }) => {
  return (
    <button className="join-group-button-two">
      {label}
    </button>
  );
};

export default JoinGroupButtonTwo;