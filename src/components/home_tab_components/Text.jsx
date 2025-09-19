// src/components/Text.jsx
import React from 'react';
import './Text.css';

const defaultProps = {
  text: 'Search',
};

const Text = (props) => {
  return (
    <div className="text">
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;