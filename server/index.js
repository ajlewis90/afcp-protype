import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.NEON_DATABASE_URL);
const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// ── Health check ──────────────────────────────────────────────────────────
app.get('/api/health', async (req, res) => {
  try {
    await sql`SELECT 1`;
    res.json({ ok: true, db: 'connected' });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// ── Orders ────────────────────────────────────────────────────────────────

// GET all orders (newest first)
app.get('/api/orders', async (req, res) => {
  try {
    const rows = await sql`SELECT * FROM orders ORDER BY created_at DESC`;
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new order
app.post('/api/orders', async (req, res) => {
  const { id, items, total } = req.body;
  try {
    await sql`
      INSERT INTO orders (id, items, total)
      VALUES (${id}, ${JSON.stringify(items)}, ${total})
    `;
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── Chat sessions ─────────────────────────────────────────────────────────

// GET all sessions (newest first, max 30)
app.get('/api/chat-sessions', async (req, res) => {
  try {
    const rows = await sql`
      SELECT * FROM chat_sessions ORDER BY started_at DESC LIMIT 30
    `;
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT (upsert) — insert on first save, update on subsequent saves
app.put('/api/chat-sessions/:id', async (req, res) => {
  const { messages } = req.body;
  try {
    await sql`
      INSERT INTO chat_sessions (id, messages)
      VALUES (${req.params.id}, ${JSON.stringify(messages)})
      ON CONFLICT (id) DO UPDATE
        SET messages = EXCLUDED.messages
    `;
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log('AFCP API running at http://localhost:' + PORT)
);
