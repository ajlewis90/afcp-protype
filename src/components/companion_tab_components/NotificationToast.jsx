import React, { useEffect, useState } from 'react';
import './NotificationToast.css';

/**
 * NotificationToast — slides in from the top, auto-dismisses after 4 s.
 *
 * Props:
 *  toast   { id, title, body, orderId }  — null when nothing to show
 *  onDismiss()
 *  onViewOrder(orderId)
 */
const NotificationToast = ({ toast, onDismiss, onViewOrder }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!toast) { setVisible(false); return; }
    // Trigger CSS enter animation
    const raf = requestAnimationFrame(() => setVisible(true));
    // Auto-dismiss after 4 s
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onDismiss, 320); // wait for exit animation
    }, 4000);
    return () => { cancelAnimationFrame(raf); clearTimeout(timer); };
  }, [toast?.id]); // re-run when toast id changes

  if (!toast) return null;

  return (
    <div className={`notif-toast ${visible ? 'notif-toast-visible' : ''}`}>
      <div
        className="notif-toast-body"
        onClick={() => { onViewOrder?.(toast.orderId); onDismiss?.(); }}
        role="button"
        tabIndex={0}
      >
        <div className="notif-toast-title">{toast.title}</div>
        <div className="notif-toast-text">{toast.body}</div>
        <div className="notif-toast-cta">Tap to track →</div>
      </div>
      <button
        className="notif-toast-close"
        onClick={(e) => { e.stopPropagation(); setVisible(false); setTimeout(onDismiss, 320); }}
        aria-label="Dismiss"
      >✕</button>
    </div>
  );
};

export default NotificationToast;
