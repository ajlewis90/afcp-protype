import React, { useState, useRef, useEffect } from 'react';
import './ChatInput.css';

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isVoiceSupported, setIsVoiceSupported] = useState(false);
  const recognitionRef = useRef(null);
  const onSendRef = useRef(onSend);
  
  // Update the ref when onSend changes
  useEffect(() => {
    onSendRef.current = onSend;
  }, [onSend]);

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

  // Check if speech recognition is supported
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      setIsVoiceSupported(true);
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';
      
      recognitionRef.current.onstart = () => {
        console.log('Voice recognition started');
        setIsListening(true);
      };
      
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results?.[0]?.[0]?.transcript;
        if (transcript) {
          console.log('Voice recognition result:', transcript);
          setInput(transcript);
          // Automatically send the voice message
          setTimeout(() => {
            if (transcript.trim()) {
              onSendRef.current(transcript);
              setInput('');
              setSuggestions([]);
            }
          }, 100);
        } else {
          console.log('No transcript received from voice recognition');
        }
      };
      
      recognitionRef.current.onerror = (event) => {
        console.error('Voice recognition error:', event.error);
        setIsListening(false);
        if (event.error === 'not-allowed') {
          alert('Microphone access denied. Please allow microphone access and try again.');
        } else if (event.error === 'network') {
          alert('Network error occurred during voice recognition.');
        } else {
          alert('Voice recognition error occurred. Please try again.');
        }
      };
      
      recognitionRef.current.onend = () => {
        console.log('Voice recognition ended');
        setIsListening(false);
      };
    } else {
      console.log('Speech recognition not supported');
      setIsVoiceSupported(false);
    }
    
    // Cleanup function
    return () => {
      if (recognitionRef.current && isListening) {
        try {
          recognitionRef.current.stop();
        } catch (error) {
          console.log('Recognition already stopped');
        }
      }
    };
  }, []); // Empty dependency array to prevent re-initialization

  const handleVoiceInput = () => {
    if (!isVoiceSupported) {
      alert('Voice recognition is not supported in your browser. Please use Chrome, Safari, or Edge.');
      return;
    }
    
    if (isListening) {
      // Stop listening
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      // Start listening
      try {
        recognitionRef.current.start();
      } catch (error) {
        console.error('Error starting voice recognition:', error);
        alert('Failed to start voice recognition. Please try again.');
      }
    }
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
          <button 
            onClick={handleVoiceInput} 
            className={`voice-input-button ${isListening ? 'listening' : ''} ${!isVoiceSupported ? 'disabled' : ''}`}
            disabled={!isVoiceSupported}
            title={isListening ? 'Stop voice input' : 'Start voice input'}
          >
            {isListening ? '🔴' : '🎙️'}
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