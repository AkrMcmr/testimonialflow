import { db, initDb } from "@/lib/db";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

// POST: Create a new project
export async function POST(req: NextRequest) {
  try {
    await initDb();
    const body = await req.json();
    const { name, owner_email } = body;

    if (!name || !owner_email) {
      return NextResponse.json({ error: "name and owner_email required" }, { status: 400 });
    }

    const id = nanoid(12);
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 40) + "-" + nanoid(4);

    await db.execute({
      sql: "INSERT INTO projects (id, name, slug, owner_email) VALUES (?, ?, ?, ?)",
      args: [id, name, slug, owner_email],
    });

    return NextResponse.json({ id, slug, collect_url: `/collect/${slug}` });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

// GET: List projects (for dashboard)
export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  if (!email) {
    return NextResponse.json({ error: "email required" }, { status: 400 });
  }

  try {
    const result = await db.execute({
      sql: "SELECT id, name, slug, created_at FROM projects WHERE owner_email = ? ORDER BY created_at DESC",
      args: [email],
    });
    return NextResponse.json({ projects: result.rows });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
