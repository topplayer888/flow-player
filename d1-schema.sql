CREATE TABLE IF NOT EXISTS users (
  uid TEXT PRIMARY KEY,
  phone TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  salt TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  last_login_at INTEGER,
  login_count INTEGER DEFAULT 0,
  last_device_id TEXT,
  devices_json TEXT DEFAULT '{}',
  usage_json TEXT DEFAULT '{}',
  redeem_code TEXT,
  redeem_type TEXT,
  redeem_activated_at INTEGER,
  redeem_expires_at INTEGER,
  deleted INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY,
  uid TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS redeem_codes (
  code TEXT PRIMARY KEY,
  type TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  created_by TEXT,
  active INTEGER DEFAULT 1,
  bound_uid TEXT,
  bound_phone TEXT,
  used_at INTEGER,
  last_redeemed_at INTEGER
);

CREATE TABLE IF NOT EXISTS chat_history_records (
  uid TEXT NOT NULL,
  record_id TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  updated_at INTEGER NOT NULL,
  PRIMARY KEY (uid, record_id)
);

CREATE INDEX IF NOT EXISTS idx_users_phone ON users(phone);
CREATE INDEX IF NOT EXISTS idx_sessions_uid ON sessions(uid);
CREATE INDEX IF NOT EXISTS idx_sessions_expires ON sessions(expires_at);
CREATE INDEX IF NOT EXISTS idx_redeem_type ON redeem_codes(type);
CREATE INDEX IF NOT EXISTS idx_history_uid_updated ON chat_history_records(uid, updated_at DESC);
