// src/components/home_tab_components/JoinGroupButtonEight.jsx
import React from 'react';
import './JoinGroupButtonEight.css';

const defaultProps = {
  label: 'Join Group',
};

const JoinGroupButtonEight = ({ label = defaultProps.label }) => {
  return (
    <button className="join-group-button-eight">
      {label}
    </button>
  );
};

export default JoinGroupButtonEight;