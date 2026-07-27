# AFCP Shopper Agent — Setup & Run Guide (v6)

## What Changed This Release

### 1. Claude/Grok-style centred input (welcome state)
- On first load the input sits **vertically centred** on the screen with the agent logo, heading, and subtitle above it.
- The input renders as a card with an integrated voice mic and circular Send button.
- **✨ Suggestions** and **📦 Orders** quick-tags appear centred below it.
- The moment the user sends a message (or uses voice), the entire layout transitions: messages fill the area above and the input snaps to the **bottom of the screen**. Tags disappear in the active state.

### 2. Claude-style left icon sidebar
- A **permanent collapsed sidebar** (52 px wide) runs down the left of the Agent tab showing clean SVG icons.
- Tap the **☰ hamburger at the top** to expand to 210 px with icon + label.
- Clicking any item closes the drawer automatically.
- A badge on the Cart icon shows the item count.

| Sidebar item | Action |
|---|---|
| 💬 New Chat | Resets conversation & clears cart |
| 🕐 History | Opens the Chat History bottom-sheet |
| 👤 My Account | Placeholder (ready for auth wiring) |
| 🛒 My Cart | Opens the Cart bottom-sheet |
| 📦 My Orders | Opens the Orders bottom-sheet |
| ⭐ Suggestions For You | Navigates to the Me/Suggestions tab |

### 3. Active chat top bar
- When chatting, a slim bar appears at the top of the chat area with the **notification bell** and a **🛒 Cart (n)** button.

---

## Quick Start (Local Development)

```bash
npm install   # once
npm run dev   # http://localhost:5173
```

Voice search requires Chrome, Edge, or Safari.

---

## Full File List (new & changed)

```
src/
├── App.jsx                                          ← agent tab restructured
├── App.css                                          ← new layout classes
│
└── components/
    ├── companion_tab_components/
    │   ├── LeftSidebar.jsx          ★ NEW
    │   ├── LeftSidebar.css          ★ NEW
    │   ├── ChatInput.jsx            ← centred prop + layout
    │   ├── ChatInput.css            ← centred mode styles
    │   ├── ChatMessage.jsx
    │   ├── ChatMessage.css
    │   ├── CompanionChatHeader.jsx  ← hamburger left, history icon right
    │   ├── CompanionChatHeader.css
    │   ├── ChatHistorySheet.jsx     ★ NEW (prev release)
    │   ├── ChatHistorySheet.css     ★ NEW (prev release)
    │   ├── SuggestionsSheet.jsx     ★ NEW (prev release)
    │   └── SuggestionsSheet.css     ★ NEW (prev release)
    │
    └── shop_flow/
        ├── ProductDetailSheet.jsx
        ├── ProductDetailSheet.css
        ├── CartSheet.jsx
        ├── CartSheet.css
        ├── CheckoutSheet.jsx
        ├── CheckoutSheet.css
        ├── OrderConfirmation.jsx
        ├── OrderConfirmation.css
        ├── OrdersSheet.jsx          ← live status from createdAt
        └── OrdersSheet.css
```

---

## Layout Architecture (Agent Tab)

```
.mobile-container
└── .view-agent  (flex-row)
    ├── LeftSidebar  (52 px collapsed / 210 px expanded overlay)
    └── .chat-main  (flex-col, flex: 1)
        │
        ├── [hasStartedChat = false]  → .chat-welcome  (centred)
        │       logo + heading + subtitle
        │       <ChatInput centered />   ← card style, centred
        │       .chat-quick-tags  (Suggestions + Orders)
        │
        └── [hasStartedChat = true]   → active state
                .chat-active-bar      ← notification bell + cart button
                .chat-messages        ← scrollable messages list
                <ChatInput />         ← bottom of screen, no tags
```

`hasStartedChat` is computed inline: `messages.some(m => !m.isBot)`.  
No extra state variable is needed.

---

## Order Status Timing

| Time since order | Status |
|---|---|
| 0 – 3 min | Confirmed |
| 3 – 10 min | Processing |
| 10 min – 24 h | Shipped |
| > 24 h | Delivered |

Status recomputes every 30 s while the Orders sheet is open.

---

## Database Setup (Neon PostgreSQL)

Neon does not have a native Replit connector. You need a small Express backend.

```bash
npm install express pg cors dotenv
```

**.env**
```
NEON_DATABASE_URL=postgresql://user:pass@host/db?sslmode=require
PORT=3001
```

**server.js** (minimal)
```js
import express from 'express';
import { Pool } from 'pg';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(cors(), express.json());
const pool = new Pool({ connectionString: process.env.NEON_DATABASE_URL, ssl: { rejectUnauthorized: false } });

pool.query(`
  CREATE TABLE IF NOT EXISTS orders (
    id TEXT PRIMARY KEY, created_at BIGINT, date TEXT, items JSONB, total TEXT
  );
  CREATE TABLE IF NOT EXISTS chat_sessions (
    session_id TEXT PRIMARY KEY, started_at BIGINT, messages JSONB DEFAULT '[]', updated_at BIGINT
  );
`);

app.post('/api/orders', async (req, res) => {
  const { id, createdAt, date, items, total } = req.body;
  await pool.query(
    'INSERT INTO orders VALUES ($1,$2,$3,$4,$5) ON CONFLICT(id) DO NOTHING',
    [id, createdAt, date, JSON.stringify(items), total]
  );
  res.json({ ok: true });
});

app.get('/api/orders', async (_, res) => {
  const { rows } = await pool.query('SELECT * FROM orders ORDER BY created_at DESC');
  res.json(rows);
});

app.listen(process.env.PORT || 3001);
```

Run in development:
```bash
# Terminal 1
npm run dev

# Terminal 2
node server.js
```

**Chat history DB recommendation:**  
Use the same Neon PostgreSQL DB — add a `chat_sessions` table (schema above).  
Store the `session_id` UUID in `localStorage` on first visit; link to user account later when auth is added.

---

*Generated: July 2026 · AFCP Shopper Agent v6*
