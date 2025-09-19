// src/components/me_tab_components/ForMeTextTitle.jsx
import React from 'react';
import './ForMeTextTitle.css';

const defaultProps = {
  text: 'For Me',
};

const ForMeTextTitle = (props) => {
  return (
    <div className="for-me-text-title">
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default ForMeTextTitle;