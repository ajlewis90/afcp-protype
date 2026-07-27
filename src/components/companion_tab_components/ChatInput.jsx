import React, { useState, useRef, useEffect } from 'react';
import './ChatInput.css';

/**
 * ChatInput
 *
 * Props:
 *   onSend(text)         — called when user sends a message
 *   centered             — true → centred welcome-screen mode (shows tags)
 *   onSuggestionsClick() — called when ✨ Suggestions tag tapped
 *   onOrdersClick()      — called when 📦 Orders tag tapped
 */
const ChatInput = ({ onSend, centered = false, onSuggestionsClick, onOrdersClick }) => {
  const [input, setInput]               = useState('');
  const [suggestions, setSuggestions]   = useState([]);
  const [isFocused, setIsFocused]       = useState(false);
  const [isListening, setIsListening]   = useState(false);
  const [isVoiceSupported, setIsVoiceSupported] = useState(false);

  const recognitionRef = useRef(null);
  const onSendRef      = useRef(onSend);
  const textareaRef    = useRef(null);

  useEffect(() => { onSendRef.current = onSend; }, [onSend]);

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
      const filtered = suggestionOptions.filter(s => s.toLowerCase().includes(value.toLowerCase()));
      setSuggestions(filtered.length > 0 ? filtered : suggestionOptions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input.trim());
    setInput('');
    setSuggestions([]);
    setTimeout(() => {
      if (textareaRef.current) textareaRef.current.style.height = 'auto';
    }, 0);
  };

  // ── Voice recognition setup ───────────────────────────────────────────────
  useEffect(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { setIsVoiceSupported(false); return; }

    setIsVoiceSupported(true);
    const recognition = new SR();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart  = () => setIsListening(true);
    recognition.onend    = () => setIsListening(false);

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
      if (event.error === 'not-allowed')
        alert('Microphone access was denied. Allow mic access in your browser settings and try again.');
      else if (event.error === 'no-speech')
        alert('No speech detected. Please try again.');
      else if (event.error !== 'aborted')
        alert(`Voice error: ${event.error}. Please try again.`);
    };

    recognitionRef.current = recognition;
    return () => { try { recognitionRef.current?.stop(); } catch (_) {} };
  }, []);

  const handleVoiceInput = () => {
    if (!isVoiceSupported) {
      alert('Voice recognition requires Chrome, Edge, or Safari.');
      return;
    }
    if (isListening) {
      try { recognitionRef.current.stop(); } catch (_) {}
      setIsListening(false);
    } else {
      try { recognitionRef.current.start(); } catch (_) {
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SR) {
          const r = new SR();
          r.continuous = false; r.interimResults = false; r.lang = 'en-US';
          r.onstart  = () => setIsListening(true);
          r.onend    = () => setIsListening(false);
          r.onresult = (ev) => {
            const t = ev.results?.[0]?.[0]?.transcript;
            if (t?.trim()) {
              setInput(t);
              setTimeout(() => { onSendRef.current(t.trim()); setInput(''); }, 150);
            }
          };
          r.onerror = () => setIsListening(false);
          recognitionRef.current = r;
          r.start();
        }
      }
    }
  };

  const handleSuggestionClick = (s) => {
    const newVal = input ? `${input} ${s}` : s;
    setInput(newVal);
    setSuggestions([]);
    textareaRef.current?.focus();
    setTimeout(autoResize, 0);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  return (
    <div className={`chat-input-container ${centered ? 'chat-input-container--centered' : ''}`}>
      <div className="chat-input-wrapper">
        {/* Inline suggestions dropdown */}
        {isFocused && suggestions.length > 0 && (
          <div className="suggestions">
            {suggestions.map((s, i) => (
              <div key={i} className="suggestion-item" onMouseDown={() => handleSuggestionClick(s)}>
                <span className="suggestion-icon">Q</span>{s}
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

        <button onClick={handleSend} className="send-button">Send</button>
      </div>

      {/* Quick-action tags — only in centred (welcome) mode */}
      {centered && (
        <div className="chat-quick-tags">
          <button className="quick-tag" onMouseDown={(e) => { e.preventDefault(); onSuggestionsClick?.(); }}>
            ✨ Suggestions
          </button>
          <button className="quick-tag" onMouseDown={(e) => { e.preventDefault(); onOrdersClick?.(); }}>
            📦 Orders
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatInput;
