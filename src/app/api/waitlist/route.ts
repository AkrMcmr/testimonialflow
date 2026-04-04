import { NextResponse } from "next/server";

const GIST_ID = process.env.WAITLIST_GIST_ID;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

async function readGist(): Promise<string[]> {
  if (!GIST_ID || !GITHUB_TOKEN) return [];
  const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    },
    cache: "no-store",
  });
  if (!res.ok) return [];
  const gist = await res.json();
  const content = gist.files?.["waitlist.json"]?.content;
  if (!content) return [];
  try {
    const data = JSON.parse(content);
    return data.emails || [];
  } catch {
    return [];
  }
}

async function writeGist(emails: string[]): Promise<boolean> {
  if (!GIST_ID || !GITHUB_TOKEN) return false;
  const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    method: "PATCH",
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      files: {
        "waitlist.json": {
          content: JSON.stringify(
            { emails, updated_at: new Date().toISOString() },
            null,
            2
          ),
        },
      },
    }),
  });
  return res.ok;
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const sanitized = email.trim().toLowerCase();
    console.log(
      `[waitlist] New signup: ${sanitized} at ${new Date().toISOString()}`
    );

    const emails = await readGist();

    if (emails.includes(sanitized)) {
      return NextResponse.json({ message: "Already on the list" });
    }

    emails.push(sanitized);
    const saved = await writeGist(emails);

    if (!saved) {
      console.log(`[waitlist] Gist save failed for: ${sanitized}`);
    }

    return NextResponse.json({
      message: "Added to waitlist",
      count: emails.length,
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const emails = await readGist();
  return NextResponse.json({ count: emails.length });
}
