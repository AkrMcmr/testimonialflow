import { NextResponse } from "next/server";
import { put, list } from "@vercel/blob";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const sanitized = email.trim().toLowerCase();

    // Log to Vercel Function Logs (always works, even without Blob store)
    console.log(`[waitlist] New signup: ${sanitized} at ${new Date().toISOString()}`);

    // Try to store in Vercel Blob (graceful fallback if not configured)
    try {
      // Read existing list
      let emails: string[] = [];
      try {
        const blobs = await list({ prefix: "waitlist/" });
        if (blobs.blobs.length > 0) {
          const res = await fetch(blobs.blobs[0].url);
          emails = await res.json();
        }
      } catch {
        // No existing blob, start fresh
      }

      if (emails.includes(sanitized)) {
        return NextResponse.json({ message: "Already on the list" });
      }

      emails.push(sanitized);
      await put("waitlist/emails.json", JSON.stringify(emails), {
        access: "public",
        addRandomSuffix: false,
      });
    } catch (e) {
      // Blob not configured — that's ok, we have console.log
      console.log(`[waitlist] Blob storage not available, email logged only: ${sanitized}`);
    }

    return NextResponse.json({ message: "Added to waitlist" });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const blobs = await list({ prefix: "waitlist/" });
    if (blobs.blobs.length > 0) {
      const res = await fetch(blobs.blobs[0].url);
      const emails: string[] = await res.json();
      return NextResponse.json({ count: emails.length, emails });
    }
  } catch {
    // Blob not available
  }
  return NextResponse.json({ count: 0, emails: [] });
}
