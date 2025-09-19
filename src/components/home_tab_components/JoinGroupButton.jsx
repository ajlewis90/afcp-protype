// src/components/home_tab_components/JoinGroupButton.jsx
import React from 'react';
import './JoinGroupButton.css';

const defaultProps = {
  label: 'Join Group',
};

const JoinGroupButton = ({ label = defaultProps.label }) => {
  return (
    <button className="join-group-button">
      {label}
    </button>
  );
};

export default JoinGroupButton;