// src/components/home_tab_components/JoinGroupButtonThree.jsx
import React from 'react';
import './JoinGroupButtonThree.css';

const defaultProps = {
  label: 'Join Group',
};

const JoinGroupButtonThree = ({ label = defaultProps.label }) => {
  return (
    <button className="join-group-button-three">
      {label}
    </button>
  );
};

export default JoinGroupButtonThree;