/**
 * CRM adapter — the seam where the future CRM plugs in.
 *
 * Today, submitted leads are (1) logged to the server console — visible in
 * Vercel's function logs — and (2) forwarded to CRM_WEBHOOK_URL if that env
 * var is set (Zapier, Make, HubSpot forms endpoint, or a custom collector).
 *
 * When the real CRM lands, replace the body of `submitLead` with a database
 * write (e.g. Vercel Postgres / Supabase / Prisma) and keep the signature —
 * the API route and the site never need to change.
 */

export type LeadInterest =
  | "individual-therapy"
  | "psychological-testing"
  | "consulting-speaking"
  | "general";

export interface Lead {
  name: string;
  email: string;
  phone?: string;
  interest: LeadInterest;
  message: string;
  /** Where on the site the lead came from, e.g. "/contact". */
  source: string;
  submittedAt: string; // ISO timestamp
}

export interface LeadResult {
  ok: boolean;
  error?: string;
}

export async function submitLead(lead: Lead): Promise<LeadResult> {
  // Always log — Vercel keeps these in the function logs as a fallback record.
  console.log("[lead]", JSON.stringify(lead));

  const webhookUrl = process.env.CRM_WEBHOOK_URL;
  if (!webhookUrl) {
    return { ok: true };
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error(`[lead] webhook responded ${res.status}`);
      // The lead is still captured in logs; don't fail the visitor's submission.
    }
    return { ok: true };
  } catch (err) {
    console.error("[lead] webhook delivery failed", err);
    return { ok: true };
  }
}
