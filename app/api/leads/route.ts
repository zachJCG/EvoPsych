import { NextResponse } from "next/server";
import { submitLead, type Lead, type LeadInterest } from "@/lib/crm";

export const runtime = "nodejs";

const INTERESTS: LeadInterest[] = [
  "individual-therapy",
  "psychological-testing",
  "consulting-speaking",
  "general",
];

function str(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this — silently accept and drop.
  if (str(body.company, 10)) {
    return NextResponse.json({ ok: true });
  }

  const name = str(body.name, 120);
  const email = str(body.email, 200);
  const message = str(body.message, 4000);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Name, a valid email, and a message are required." },
      { status: 400 }
    );
  }

  const interestRaw = str(body.interest, 40);
  const lead: Lead = {
    name,
    email,
    phone: str(body.phone, 40) || undefined,
    interest: (INTERESTS as string[]).includes(interestRaw)
      ? (interestRaw as LeadInterest)
      : "general",
    message,
    source: str(body.source, 200) || "unknown",
    submittedAt: new Date().toISOString(),
  };

  const result = await submitLead(lead);
  if (!result.ok) {
    return NextResponse.json(
      { error: "Unable to record your message right now." },
      { status: 502 }
    );
  }
  return NextResponse.json({ ok: true });
}
