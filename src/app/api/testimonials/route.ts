import { db } from "@/lib/db";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

// POST: Submit a new testimonial (public)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { project_id, name, role, text, rating } = body;

    if (!project_id || !name || !text) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const id = nanoid(12);
    await db.execute({
      sql: `INSERT INTO testimonials (id, project_id, name, role, text, rating)
            VALUES (?, ?, ?, ?, ?, ?)`,
      args: [id, project_id, name, role || "", text, rating || 5],
    });

    return NextResponse.json({ id });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

// GET: Get testimonials for a project (for widget / dashboard)
export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  const projectId = req.nextUrl.searchParams.get("project_id");
  const approvedOnly = req.nextUrl.searchParams.get("approved") !== "false";

  try {
    let result;
    if (slug) {
      result = await db.execute({
        sql: `SELECT t.id, t.name, t.role, t.text, t.rating, t.approved, t.created_at
              FROM testimonials t
              JOIN projects p ON t.project_id = p.id
              WHERE p.slug = ? ${approvedOnly ? "AND t.approved = 1" : ""}
              ORDER BY t.created_at DESC`,
        args: [slug],
      });
    } else if (projectId) {
      result = await db.execute({
        sql: `SELECT id, name, role, text, rating, approved, created_at
              FROM testimonials
              WHERE project_id = ? ${approvedOnly ? "AND approved = 1" : ""}
              ORDER BY created_at DESC`,
        args: [projectId],
      });
    } else {
      return NextResponse.json({ error: "slug or project_id required" }, { status: 400 });
    }

    return NextResponse.json({ testimonials: result.rows });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
