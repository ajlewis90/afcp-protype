// src/components/home_tab_components/JoinGroupButtonFive.jsx
import React from 'react';
import './JoinGroupButtonFive.css';

const defaultProps = {
  label: 'Join Group',
};

const JoinGroupButtonFive = ({ label = defaultProps.label }) => {
  return (
    <button className="join-group-button">
      {label}
    </button>
  );
};

export default JoinGroupButtonFive;