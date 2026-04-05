import { readDb, writeDb } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const { approved } = await req.json();
    if (typeof approved !== "number") {
      return NextResponse.json({ error: "approved field required (0 or 1)" }, { status: 400 });
    }

    const db = await readDb();
    const t = db.testimonials.find(t => t.id === id);
    if (!t) return NextResponse.json({ error: "not found" }, { status: 404 });
    t.approved = approved;
    await writeDb(db);

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const db = await readDb();
    db.testimonials = db.testimonials.filter(t => t.id !== id);
    await writeDb(db);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
