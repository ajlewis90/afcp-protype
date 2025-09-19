// src/components/home_tab_components/SearchIcon.jsx
import React from 'react';
import './SearchIcon.css';

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/bbaa0d77-a4d0-4408-a0cf-c0e4ad18bcc9.png',
};

const SearchIcon = ({ image }) => {
  return (
    <div
      className="search-icon"
      style={{ backgroundImage: `url(${image ?? defaultProps.image})` }}
    />
  );
};

export default SearchIcon;