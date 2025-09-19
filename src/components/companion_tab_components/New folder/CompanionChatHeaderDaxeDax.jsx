// src/components/companion_tab_components/CompanionChatHeader.jsx
import React from 'react';
import './CompanionChatHeader.css';

const CompanionChatHeader = () => {
  return (
    <div className="companion-chat-header">
      <img
        src="https://assets.api.uizard.io/api/cdn/stream/57326620-2a53-4912-9b70-e6a4f364b204.png"
        alt="Daxedax Avatar"
        className="companion-avatar"
      />
      <h1 className="companion-title">Chat with Daxedax</h1>
    </div>
  );
};

export default CompanionChatHeader;