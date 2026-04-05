import { initDb } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST() {
  const secret = process.env.INIT_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "No INIT_SECRET configured" }, { status: 500 });
  }
  try {
    await initDb();
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
