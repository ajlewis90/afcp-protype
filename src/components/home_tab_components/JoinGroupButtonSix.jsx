// src/components/home_tab_components/JoinGroupButtonSix.jsx
import React from 'react';
import './JoinGroupButtonSix.css';

const defaultProps = {
  label: 'Join Group',
};

const JoinGroupButtonSix = ({ label = defaultProps.label }) => {
  return (
    <button className="join-group-button">
      {label}
    </button>
  );
};

export default JoinGroupButtonSix;