import { createClient } from "@libsql/client";

export const db = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export async function initDb() {
  await db.batch([
    {
      sql: `CREATE TABLE IF NOT EXISTS projects (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        owner_email TEXT NOT NULL,
        created_at TEXT DEFAULT (datetime('now'))
      )`,
      args: [],
    },
    {
      sql: `CREATE TABLE IF NOT EXISTS testimonials (
        id TEXT PRIMARY KEY,
        project_id TEXT NOT NULL REFERENCES projects(id),
        name TEXT NOT NULL,
        role TEXT DEFAULT '',
        text TEXT NOT NULL,
        rating INTEGER DEFAULT 5,
        photo_url TEXT DEFAULT '',
        approved INTEGER DEFAULT 0,
        created_at TEXT DEFAULT (datetime('now'))
      )`,
      args: [],
    },
  ]);
}
