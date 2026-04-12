// src/components/companion_tab_components/CompanionChatHeader.jsx
import React from 'react';
import './CompanionChatHeader.css';

const CompanionChatHeader = () => {
  return (
    <div className="companion-chat-header">
      <img
        src="/shopper-agent-logo.png"
        alt="Shopper Agent Avatar"
        className="companion-avatar"
      />
      <h1 className="companion-title">Shopper Agent</h1>
    </div>
  );
};

export default CompanionChatHeader;