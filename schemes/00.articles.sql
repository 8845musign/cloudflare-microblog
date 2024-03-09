CREATE TABLE IF NOT EXISTS articles (
  id TEXT PRIMARY KEY,
  title TEXT,
  body TEXT,
  updated_at TEXT DEFAULT (datetime ('now')),
  created_at TEXT DEFAULT (datetime ('now'))
);
