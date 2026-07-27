import React from 'react';
import './CompanionChatHeader.css';
import NotificationBell from './NotificationBell';

const HistoryIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 .49-4.95" />
    <polyline points="12 7 12 12 15 15" />
  </svg>
);

const CompanionChatHeader = ({
  onHistoryClick,
  priceDropNotifications,
  onPriceDropDismiss,
  orderNotifications,
  onOrderDismiss,
  onOrderMarkAllRead,
  onOrderNotifClick,
}) => (
  <div className="companion-chat-header">
    <img
      src="/shopper-agent-logo.png"
      alt="Shopper Agent Avatar"
      className="companion-avatar"
    />
    <h1 className="companion-title">Shopper Agent</h1>

    <NotificationBell
      priceDropNotifications={priceDropNotifications}
      onPriceDropDismiss={onPriceDropDismiss}
      orderNotifications={orderNotifications}
      onOrderDismiss={onOrderDismiss}
      onOrderMarkAllRead={onOrderMarkAllRead}
      onOrderNotifClick={onOrderNotifClick}
    />

    <button className="history-btn" onClick={onHistoryClick} aria-label="Chat history">
      <HistoryIcon />
    </button>
  </div>
);

export default CompanionChatHeader;
