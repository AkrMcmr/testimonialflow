import { readDb } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const db = await readDb();
    return NextResponse.json({
      ok: true,
      projects: db.projects.length,
      testimonials: db.testimonials.length,
    });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
