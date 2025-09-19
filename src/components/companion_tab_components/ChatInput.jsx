import React, { useState } from 'react';
import './ChatInput.css';

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const suggestionOptions = [
    'for casual wear...',
    'for a specific occasion...',
    'from a popular brand or design...',
    'which is stylish and affordable...',
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    console.log('handleInputChange - New value:', value);
    setInput(value);

    if (value.toLowerCase().includes('dress') || value.toLowerCase().includes('beauty')) {
      const filteredSuggestions = suggestionOptions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions.length > 0 ? filteredSuggestions : suggestionOptions);
      console.log('handleInputChange - Suggestions updated:', filteredSuggestions.length > 0 ? filteredSuggestions : suggestionOptions);
    } else {
      setSuggestions([]);
      console.log('handleInputChange - Suggestions cleared');
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      console.log('handleSend - Sending message:', input);
      onSend(input);
      setInput('');
      setSuggestions([]);
    }
  };

  const handleVoiceInput = () => {
    console.log('Voice input activated');
    // Placeholder for voice input functionality
  };

  const handleSuggestionClick = (suggestion) => {
    console.log('handleSuggestionClick - Clicked suggestion:', suggestion);
    console.log('handleSuggestionClick - Current input before update:', input);

    const newInput = input ? `${input} ${suggestion}` : suggestion;
    console.log('handleSuggestionClick - New input after append:', newInput);

    setInput(newInput);
    setSuggestions([]);
    console.log('handleSuggestionClick - Suggestions cleared');

    document.querySelector('.chat-input').focus();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('handleKeyPress - Enter pressed');
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
            onFocus={() => {
              console.log('Input focused');
              setIsFocused(true);
            }}
            onBlur={() => {
              setTimeout(() => {
                console.log('Input blurred');
                setIsFocused(false);
              }, 200);
            }}
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