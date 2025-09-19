// src/components/home_tab_components/JoinGroupButtonSeven.jsx
import React from 'react';
import './JoinGroupButtonSeven.css';

const defaultProps = {
  label: 'Join Group',
};

const JoinGroupButtonSeven = ({ label = defaultProps.label }) => {
  return (
    <button className="join-group-button-seven">
      {label}
    </button>
  );
};

export default JoinGroupButtonSeven;