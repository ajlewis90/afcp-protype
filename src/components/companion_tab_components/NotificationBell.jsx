import React, { useState, useEffect, useRef } from 'react';
import './NotificationBell.css';

const timeAgo = (ts) => {
  if (!ts) return '';
  const diff = Date.now() - ts;
  const min  = Math.floor(diff / 60000);
  const hr   = Math.floor(diff / 3600000);
  const day  = Math.floor(diff / 86400000);
  if (min < 1)  return 'just now';
  if (min < 60) return `${min}m ago`;
  if (hr < 24)  return `${hr}h ago`;
  return `${day}d ago`;
};

/**
 * NotificationBell
 *
 * Props:
 *  priceDropNotifications  [{productName, originalPrice}]
 *  onPriceDropDismiss(productName)
 *  orderNotifications  [{id, title, body, time, read, orderId}]
 *  onOrderDismiss(id)
 *  onOrderMarkAllRead()
 *  onOrderNotifClick(orderId)   — opens OrderDetailSheet
 */
const NotificationBell = ({
  priceDropNotifications = [],
  onPriceDropDismiss,
  orderNotifications = [],
  onOrderDismiss,
  onOrderMarkAllRead,
  onOrderNotifClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);

  const unreadOrderCount = orderNotifications.filter(n => !n.read).length;
  const totalUnread = priceDropNotifications.length + unreadOrderCount;
  const totalCount  = priceDropNotifications.length + orderNotifications.length;

  // Close panel on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen]);

  const handleBellClick = () => {
    if (totalCount === 0) return;
    const opening = !isOpen;
    setIsOpen(opening);
    if (opening && unreadOrderCount > 0) {
      onOrderMarkAllRead?.();
    }
  };

  const handlePriceDropDismiss = (productName) => {
    onPriceDropDismiss?.(productName);
    if (totalCount <= 1) setIsOpen(false);
  };

  const handleOrderDismiss = (id, e) => {
    e.stopPropagation();
    onOrderDismiss?.(id);
    if (totalCount <= 1) setIsOpen(false);
  };

  const handleOrderClick = (n) => {
    setIsOpen(false);
    if (n.orderId) onOrderNotifClick?.(n.orderId);
  };

  return (
    <div className="notification-bell-wrapper" ref={panelRef}>
      <button
        className="notification-bell-btn"
        onClick={handleBellClick}
        aria-label={`Notifications${totalUnread ? ` (${totalUnread} unread)` : ''}`}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        {totalUnread > 0 && (
          <div className="notification-bell-badge">{totalUnread}</div>
        )}
      </button>

      {isOpen && totalCount > 0 && (
        <div className="notification-panel">
          <div className="notification-panel-header">
            <span>Notifications</span>
            {totalCount > 0 && (
              <span className="notif-panel-count">{totalCount}</span>
            )}
          </div>

          {/* ── Order status notifications ── */}
          {orderNotifications.length > 0 && (
            <div className="notif-section">
              {orderNotifications.map(n => (
                <div
                  key={n.id}
                  className={`notification-item notif-clickable ${n.read ? '' : 'notif-unread'}`}
                  onClick={() => handleOrderClick(n)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="notif-item-left">
                    <span className="notif-type-dot" />
                    <div className="notif-item-body">
                      <div className="notif-item-title">{n.title}</div>
                      <div className="notif-item-text">{n.body}</div>
                      <div className="notif-item-footer">
                        <span className="notif-item-time">{timeAgo(n.time)}</span>
                        {n.orderId && <span className="notif-item-track">Track →</span>}
                      </div>
                    </div>
                  </div>
                  <button
                    className="notification-dismiss"
                    onClick={(e) => handleOrderDismiss(n.id, e)}
                    aria-label="Dismiss"
                  >✕</button>
                </div>
              ))}
            </div>
          )}

          {/* ── Price-drop notifications ── */}
          {priceDropNotifications.length > 0 && (
            <div className="notif-section">
              {priceDropNotifications.map(n => (
                <div key={n.productName} className="notification-item notif-unread">
                  <div className="notif-item-left">
                    <span className="notif-type-dot notif-dot-price" />
                    <div className="notif-item-body">
                      <div className="notif-item-title">Price Drop 🏷️</div>
                      <div className="notif-item-text">{n.productName} dropped in price!</div>
                    </div>
                  </div>
                  <button
                    className="notification-dismiss"
                    onClick={() => handlePriceDropDismiss(n.productName)}
                    aria-label="Dismiss"
                  >✕</button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
