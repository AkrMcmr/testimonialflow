// Gist-based JSON storage for MVP
// Single Gist with db.json file containing { projects, testimonials }

const DB_GIST_ID = process.env.DB_GIST_ID;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export interface Project {
  id: string;
  name: string;
  slug: string;
  owner_email: string;
  created_at: string;
}

export interface Testimonial {
  id: string;
  project_id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  approved: number;
  created_at: string;
}

interface DbData {
  projects: Project[];
  testimonials: Testimonial[];
}

const EMPTY_DB: DbData = { projects: [], testimonials: [] };

export async function readDb(): Promise<DbData> {
  if (!DB_GIST_ID || !GITHUB_TOKEN) return EMPTY_DB;
  const res = await fetch(`https://api.github.com/gists/${DB_GIST_ID}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    },
    cache: "no-store",
  });
  if (!res.ok) return EMPTY_DB;
  const gist = await res.json();
  const content = gist.files?.["db.json"]?.content;
  if (!content) return EMPTY_DB;
  try {
    return JSON.parse(content) as DbData;
  } catch {
    return EMPTY_DB;
  }
}

export async function writeDb(data: DbData): Promise<boolean> {
  if (!DB_GIST_ID || !GITHUB_TOKEN) return false;
  const res = await fetch(`https://api.github.com/gists/${DB_GIST_ID}`, {
    method: "PATCH",
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      files: {
        "db.json": {
          content: JSON.stringify(data),
        },
      },
    }),
  });
  return res.ok;
}
