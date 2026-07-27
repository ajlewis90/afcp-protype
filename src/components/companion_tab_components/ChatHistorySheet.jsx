import React, { useEffect, useState } from 'react';
import './ChatHistorySheet.css';

const timeAgo = (ts) => {
  if (!ts) return '';
  const diff = Date.now() - ts;
  const min  = Math.floor(diff / 60000);
  const hr   = Math.floor(diff / 3600000);
  const day  = Math.floor(diff / 86400000);
  if (min < 1)  return 'just now';
  if (min < 60) return `${min} min ago`;
  if (hr < 24)  return `${hr} hr ago`;
  if (day === 1) return 'Yesterday';
  if (day < 7)  return `${day} days ago`;
  if (day < 14) return '1 week ago';
  return new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

const getPeriod = (ts) => {
  if (!ts) return 'Older';
  const day = Math.floor((Date.now() - ts) / 86400000);
  if (day < 1)  return 'Today';
  if (day < 2)  return 'Yesterday';
  if (day < 7)  return 'Last 7 Days';
  if (day < 30) return 'Last 30 Days';
  return 'Older';
};

const PERIOD_ORDER = ['Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days', 'Older'];

const ChatHistorySheet = ({ currentMessages, onClose }) => {
  const [show, setShow] = useState(false);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const t = requestAnimationFrame(() => setShow(true));
    try {
      const saved = JSON.parse(localStorage.getItem('afcp_chat_sessions') || '[]');
      setSessions(saved);
    } catch (_) {
      setSessions([]);
    }
    return () => cancelAnimationFrame(t);
  }, []);

  const hasUserMsgs = currentMessages.some(m => !m.isBot);
  const allSessions = hasUserMsgs
    ? [{ id: 'current', startedAt: Date.now(), messages: currentMessages }, ...sessions]
    : sessions;

  // Group by time period
  const grouped = {};
  allSessions.forEach(s => {
    const p = s.id === 'current' ? 'Today' : getPeriod(s.startedAt);
    if (!grouped[p]) grouped[p] = [];
    grouped[p].push(s);
  });

  return (
    <div className={`history-backdrop ${show ? 'history-visible' : ''}`} onClick={onClose}>
      <div className="history-sheet" onClick={e => e.stopPropagation()}>
        <div className="sheet-handle" />
        <div className="history-header">
          <h2 className="history-title">Chat History</h2>
          <button className="history-close-btn" onClick={onClose}>✕</button>
        </div>

        {allSessions.length === 0 ? (
          <div className="history-empty">
            <div className="history-empty-icon">💬</div>
            <p>No conversations yet</p>
            <span>Your chat history will appear here.</span>
          </div>
        ) : (
          <div className="history-list">
            {PERIOD_ORDER.filter(p => grouped[p]).map(period => (
              <div key={period} className="history-group">
                <div className="history-group-label">{period}</div>
                {grouped[period].map((session, idx) => {
                  const userMsgs = session.messages.filter(m => !m.isBot);
                  const title = userMsgs[0]?.text || 'New conversation';
                  const isCurrent = session.id === 'current';
                  return (
                    <div
                      key={session.id || idx}
                      className={`history-row ${isCurrent ? 'history-row-active' : ''}`}
                    >
                      <span className="history-row-title">{title}</span>
                      <span className="history-row-time">
                        {isCurrent ? 'Now' : timeAgo(session.startedAt)}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatHistorySheet;
