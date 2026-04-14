import React from 'react';
import './CompanionChatHeader.css';
import NotificationBell from './NotificationBell';

const CompanionChatHeader = ({ onMenuToggle, notifications, onNotificationDismiss }) => {
  return (
    <div className="companion-chat-header">
      <img
        src="/shopper-agent-logo.png"
        alt="Shopper Agent Avatar"
        className="companion-avatar"
      />
      <h1 className="companion-title">Shopper Agent</h1>
      <NotificationBell notifications={notifications} onDismiss={onNotificationDismiss} />
      <button className="hamburger-btn" onClick={onMenuToggle} aria-label="Open menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default CompanionChatHeader;
