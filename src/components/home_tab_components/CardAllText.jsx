// src/components/home_tab_components/CardAllText.jsx
import React from 'react';
import './CardAllText.css';

const defaultProps = {
  text: 'All',
};

const CardAllText = (props) => {
  return (
    <div className="card-all-text">
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default CardAllText;