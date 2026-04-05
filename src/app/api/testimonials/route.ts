import { readDb, writeDb } from "@/lib/db";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { project_id, name, role, text, rating } = await req.json();
    if (!project_id || !name || !text) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const id = nanoid(12);
    const created_at = new Date().toISOString();

    const db = await readDb();
    db.testimonials.push({
      id,
      project_id,
      name,
      role: role || "",
      text,
      rating: rating || 5,
      approved: 0,
      created_at,
    });
    await writeDb(db);

    return NextResponse.json({ id });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  const projectId = req.nextUrl.searchParams.get("project_id");
  const approvedOnly = req.nextUrl.searchParams.get("approved") !== "false";

  try {
    const db = await readDb();

    let filtered;
    if (slug) {
      const project = db.projects.find(p => p.slug === slug);
      if (!project) return NextResponse.json({ testimonials: [] });
      filtered = db.testimonials.filter(
        t => t.project_id === project.id && (!approvedOnly || t.approved === 1)
      );
    } else if (projectId) {
      filtered = db.testimonials.filter(
        t => t.project_id === projectId && (!approvedOnly || t.approved === 1)
      );
    } else {
      return NextResponse.json({ error: "slug or project_id required" }, { status: 400 });
    }

    filtered.sort((a, b) => b.created_at.localeCompare(a.created_at));
    return NextResponse.json({ testimonials: filtered });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
