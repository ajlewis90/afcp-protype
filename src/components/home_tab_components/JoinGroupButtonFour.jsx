// src/components/home_tab_components/JoinGroupButtonFour.jsx
import React from 'react';
import './JoinGroupButtonFour.css';

const defaultProps = {
  label: 'Join Group',
};

const JoinGroupButtonFour = ({ label = defaultProps.label }) => {
  return (
    <button className="join-group-button-four">
      {label}
    </button>
  );
};

export default JoinGroupButtonFour;