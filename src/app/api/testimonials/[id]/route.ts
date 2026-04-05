import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// PATCH: Update testimonial (approve/reject)
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const body = await req.json();
    const { approved } = body;

    if (typeof approved !== "number") {
      return NextResponse.json({ error: "approved field required (0 or 1)" }, { status: 400 });
    }

    await db.execute({
      sql: "UPDATE testimonials SET approved = ? WHERE id = ?",
      args: [approved, id],
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

// DELETE: Remove testimonial
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    await db.execute({
      sql: "DELETE FROM testimonials WHERE id = ?",
      args: [id],
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
