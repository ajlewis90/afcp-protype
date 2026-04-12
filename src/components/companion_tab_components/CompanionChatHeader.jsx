// src/components/companion_tab_components/CompanionChatHeader.jsx
import React from 'react';
import './CompanionChatHeader.css';

const CompanionChatHeader = ({ onMenuToggle, notificationCount }) => {
  return (
    <div className="companion-chat-header">
      <img
        src="/shopper-agent-logo.png"
        alt="Shopper Agent Avatar"
        className="companion-avatar"
      />
      <h1 className="companion-title">Shopper Agent</h1>
      <button className="hamburger-btn" onClick={onMenuToggle} aria-label="Open menu">
        <span></span>
        <span></span>
        <span></span>
        {notificationCount > 0 && (
          <div className="hamburger-badge">{notificationCount}</div>
        )}
      </button>
    </div>
  );
};

export default CompanionChatHeader;
