// src/components/companion_tab_components/ChatInput.jsx (Daxedax version)
import React, { useState } from 'react';
import './ChatInput.css';

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  // Dress-related suggestions (unchanged from original Daxedax content)
  const suggestionOptions = [
    'for casual wear...',
    'for a specific occasion...',
    'from a popular brand or design...',
    'which is stylish and affordable...',
  ];

  // Filter suggestions based on user input (matching non-Daxedax logic)
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.toLowerCase().includes('dress') || value.toLowerCase().includes('beauty')) {
      const filteredSuggestions = suggestionOptions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions.length > 0 ? filteredSuggestions : suggestionOptions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
      setSuggestions([]);
    }
  };

  const handleVoiceInput = () => {
    // Placeholder for voice input functionality
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setSuggestions([]);
    onSend(suggestion);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chat-input-container">
      <div className="chat-input-wrapper">
        {isFocused && suggestions.length > 0 && (
          <div className="suggestions">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <span className="suggestion-icon">Q</span>
                {suggestion}
              </div>
            ))}
          </div>
        )}
        <div className="chat-input-with-voice">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            placeholder="Message companion"
            className="chat-input"
          />
          <button onClick={handleVoiceInput} className="voice-input-button">
            🎙️
          </button>
        </div>
        <button onClick={handleSend} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInput;