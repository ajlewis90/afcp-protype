// src/components/home_tab_components/SearchBarPrompt.jsx
import React from 'react';
import './SearchBarPrompt.css';

const defaultProps = {
  text: 'Search for products, brands & more',
};

const SearchBarPrompt = ({ text = defaultProps.text }) => {
  return (
    <div className="search-bar-prompt">
      {text}
    </div>
  );
};

export default SearchBarPrompt;