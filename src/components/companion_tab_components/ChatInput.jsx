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
  const textareaRef = useRef(null);

  useEffect(() => {
    onSendRef.current = onSend;
  }, [onSend]);

  const suggestionOptions = [
    'for casual wear...',
    'for a specific occasion...',
    'from a popular brand or design...',
    'which is stylish and affordable...',
  ];

  const autoResize = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 140) + 'px';
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    autoResize();

    if (value.toLowerCase().includes('dress') || value.toLowerCase().includes('beauty')) {
      const filtered = suggestionOptions.filter(s =>
        s.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.length > 0 ? filtered : suggestionOptions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      onSend(input.trim());
      setInput('');
      setSuggestions([]);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.style.height = 'auto';
        }
      }, 0);
    }
  };

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      setIsVoiceSupported(true);
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => setIsListening(true);

      recognition.onresult = (event) => {
        const transcript = event.results?.[0]?.[0]?.transcript;
        if (transcript?.trim()) {
          setInput(transcript);
          setTimeout(() => {
            onSendRef.current(transcript.trim());
            setInput('');
            setSuggestions([]);
          }, 150);
        }
      };

      recognition.onerror = (event) => {
        setIsListening(false);
        if (event.error === 'not-allowed') {
          alert('Microphone access was denied. Please allow microphone access in your browser settings and try again.');
        } else if (event.error === 'no-speech') {
          alert('No speech detected. Please try speaking again.');
        } else if (event.error !== 'aborted') {
          alert(`Voice error: ${event.error}. Please try again.`);
        }
      };

      recognition.onend = () => setIsListening(false);

      recognitionRef.current = recognition;
    } else {
      setIsVoiceSupported(false);
    }

    return () => {
      try { recognitionRef.current?.stop(); } catch (_) {}
    };
  }, []);

  const handleVoiceInput = () => {
    if (!isVoiceSupported) {
      alert('Voice recognition requires Chrome, Edge, or Safari. Please switch browsers and try again.');
      return;
    }
    if (isListening) {
      try { recognitionRef.current.stop(); } catch (_) {}
      setIsListening(false);
    } else {
      try { recognitionRef.current.start(); } catch (_) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
          recognitionRef.current = new SpeechRecognition();
          recognitionRef.current.continuous = false;
          recognitionRef.current.interimResults = false;
          recognitionRef.current.lang = 'en-US';
          recognitionRef.current.onstart = () => setIsListening(true);
          recognitionRef.current.onend = () => setIsListening(false);
          recognitionRef.current.onresult = (event) => {
            const transcript = event.results?.[0]?.[0]?.transcript;
            if (transcript?.trim()) {
              setInput(transcript);
              setTimeout(() => {
                onSendRef.current(transcript.trim());
                setInput('');
              }, 150);
            }
          };
          recognitionRef.current.onerror = () => setIsListening(false);
          recognitionRef.current.start();
        }
      }
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const newInput = input ? `${input} ${suggestion}` : suggestion;
    setInput(newInput);
    setSuggestions([]);
    textareaRef.current?.focus();
    setTimeout(autoResize, 0);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
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
                onMouseDown={() => handleSuggestionClick(suggestion)}
              >
                <span className="suggestion-icon">Q</span>
                {suggestion}
              </div>
            ))}
          </div>
        )}
        <div className="chat-input-with-voice">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            placeholder="What are you looking for?"
            className="chat-input"
            rows={1}
          />
          <button
            onClick={handleVoiceInput}
            className={`voice-input-button ${isListening ? 'listening' : ''}`}
            title={isListening ? 'Stop listening' : 'Voice input'}
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
