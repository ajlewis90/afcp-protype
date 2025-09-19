// src/components/SearchBar.jsx
import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from './SearchIcon';

import { FiSearch } from 'react-icons/fi'; // Using Feather icon set for the magnifying glass

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      console.log('Searching for:', searchTerm);
      // Add search logic here (e.g., filter products or navigate to results)
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      handleSearch();
    }
  };

  return (
    <div className="search-bar-container">
      <div className="search-input-wrapper">
        <FiSearch className="search-icon" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Search for products, brands & more"
          className="search-input"
        />
      </div>
    </div>
  );
};

export default SearchBar;