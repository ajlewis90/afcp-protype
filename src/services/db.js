/**
 * AFCP Shopper Agent — Database Service
 *
 * Calls the Express API (/api/...) which connects to Neon PostgreSQL.
 * If the API is unreachable (e.g. server not started), falls back to
 * localStorage so the app stays usable without the backend.
 *
 * To run without the backend at all, the localStorage fallback handles
 * everything automatically — no changes needed.
 */

// ── Session ID (stable across reloads) ───────────────────────────────────
const getSessionId = () => {
  let id = localStorage.getItem('afcp_session_id');
  if (!id) {
    id = crypto.randomUUID?.() ?? Math.random().toString(36).slice(2);
    localStorage.setItem('afcp_session_id', id);
  }
  return id;
};

// ── Local storage helpers (fallback) ─────────────────────────────────────
const LS_ORDERS   = 'afcp_orders';
const LS_SESSIONS = 'afcp_chat_sessions';

const lsGetOrders = () => {
  try { return JSON.parse(localStorage.getItem(LS_ORDERS) || '[]'); }
  catch { return []; }
};

const lsSaveOrder = (order) => {
  const list = lsGetOrders();
  localStorage.setItem(LS_ORDERS, JSON.stringify([order, ...list]));
};

const lsGetSessions = () => {
  try { return JSON.parse(localStorage.getItem(LS_SESSIONS) || '[]'); }
  catch { return []; }
};

const lsSaveSession = (id, messages) => {
  const sessions = lsGetSessions().filter(s => s.id !== id);
  localStorage.setItem(
    LS_SESSIONS,
    JSON.stringify(
      [{ id, startedAt: new Date().toISOString(), messages }, ...sessions].slice(0, 30)
    )
  );
};

// ── Orders ────────────────────────────────────────────────────────────────

/**
 * Load all orders — tries API first, falls back to localStorage.
 * NOTE: This is async. In App.jsx use useEffect to call it:
 *   useEffect(() => { loadOrders().then(setOrderHistory); }, []);
 */
export const loadOrders = async () => {
  try {
    const res = await fetch('/api/orders');
    if (!res.ok) throw new Error('API error');
    return res.json();
  } catch {
    return lsGetOrders();
  }
};

/**
 * Save a new order — tries API first, falls back to localStorage.
 */
export const saveOrder = async (order) => {
  try {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    });
    if (!res.ok) throw new Error('API error');
  } catch {
    lsSaveOrder(order);
  }
};

// ── Chat sessions ─────────────────────────────────────────────────────────

/**
 * Load previous chat sessions — tries API first, falls back to localStorage.
 */
export const loadChatSessions = async () => {
  try {
    const res = await fetch('/api/chat-sessions');
    if (!res.ok) throw new Error('API error');
    return res.json();
  } catch {
    return lsGetSessions();
  }
};

/**
 * Save / update the current chat session.
 */
export const saveChatSession = async (messages) => {
  const id = getSessionId();
  try {
    const res = await fetch(`/api/chat-sessions/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
    });
    if (!res.ok) throw new Error('API error');
  } catch {
    lsSaveSession(id, messages);
  }
};

export { getSessionId };
