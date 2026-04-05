import { readDb, writeDb } from "@/lib/db";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, owner_email } = await req.json();
    if (!name || !owner_email) {
      return NextResponse.json({ error: "name and owner_email required" }, { status: 400 });
    }

    const id = nanoid(12);
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 40) + "-" + nanoid(4);
    const created_at = new Date().toISOString();

    const db = await readDb();
    db.projects.push({ id, name, slug, owner_email, created_at });
    await writeDb(db);

    return NextResponse.json({ id, slug, collect_url: `/collect/${slug}` });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  if (!email) {
    return NextResponse.json({ error: "email required" }, { status: 400 });
  }

  try {
    const db = await readDb();
    const projects = db.projects
      .filter(p => p.owner_email === email)
      .sort((a, b) => b.created_at.localeCompare(a.created_at));
    return NextResponse.json({ projects });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
