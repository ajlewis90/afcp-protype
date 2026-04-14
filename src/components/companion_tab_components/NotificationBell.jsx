import React, { useState, useEffect, useRef } from 'react';
import './NotificationBell.css';

const NotificationBell = ({ notifications = [], onDismiss }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const prevLengthRef = useRef(0);

  // When new notifications arrive, mark as unread and update count
  // When all notifications are cleared externally (e.g. agent chat processed them), reset badge
  useEffect(() => {
    const prev = prevLengthRef.current;
    const curr = notifications.length;
    if (curr > prev) {
      const added = curr - prev;
      setUnreadCount(c => c + added);
      setHasUnread(true);
    } else if (curr === 0) {
      setHasUnread(false);
      setUnreadCount(0);
      setIsOpen(false);
    }
    prevLengthRef.current = curr;
  }, [notifications.length]);

  const handleBellClick = () => {
    if (notifications.length > 0) {
      setIsOpen(o => !o);
      // Mark all as read the moment panel opens
      setHasUnread(false);
      setUnreadCount(0);
    }
  };

  const handleDismiss = (productName) => {
    onDismiss(productName);
    if (notifications.length <= 1) setIsOpen(false);
  };

  return (
    <div className="notification-bell-wrapper">
      <button className="notification-bell-btn" onClick={handleBellClick} aria-label="Notifications">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        {hasUnread && unreadCount > 0 && (
          <div className="notification-bell-badge">{unreadCount}</div>
        )}
      </button>
      {isOpen && notifications.length > 0 && (
        <div className="notification-panel">
          <div className="notification-panel-header">Notifications</div>
          {notifications.map(n => (
            <div className="notification-item" key={n.productName}>
              <span className="notification-text">
                {n.productName} price has dropped, check it out!
              </span>
              <button className="notification-dismiss" onClick={() => handleDismiss(n.productName)}>✕</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
