// src/components/home_tab_components/SkinCareText.jsx
import React from 'react';
import './SkinCareText.css';

const defaultProps = {
  text: 'Skin Care',
};

const SkinCareText = (props) => {
  return (
    <div className="skin-care-text">
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default SkinCareText;