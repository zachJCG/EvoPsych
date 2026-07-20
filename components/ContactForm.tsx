"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const interests = [
  { value: "individual-therapy", label: "Individual therapy" },
  { value: "psychological-testing", label: "Psychological testing" },
  { value: "consulting-speaking", label: "Consulting or speaking" },
  { value: "general", label: "Something else" },
];

const inputClasses =
  "w-full rounded-xl border border-forest-line bg-parchment-card px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/25";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: window.location.pathname }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-gold/40 bg-gold-wash p-10 text-center">
        <p className="font-display text-3xl">Thank you.</p>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
          Your message is on its way. You can expect a reply within 48 hours —
          typically sooner.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Honeypot — hidden from real visitors, catches naive bots */}
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow">Name</span>
          <input
            type="text"
            name="name"
            required
            maxLength={120}
            autoComplete="name"
            placeholder="Your full name"
            className={`mt-2 ${inputClasses}`}
          />
        </label>
        <label className="block">
          <span className="eyebrow">Phone (optional)</span>
          <input
            type="tel"
            name="phone"
            maxLength={40}
            autoComplete="tel"
            placeholder="(513) ..."
            className={`mt-2 ${inputClasses}`}
          />
        </label>
      </div>

      <label className="block">
        <span className="eyebrow">Email</span>
        <input
          type="email"
          name="email"
          required
          maxLength={200}
          autoComplete="email"
          placeholder="you@example.com"
          className={`mt-2 ${inputClasses}`}
        />
      </label>

      <label className="block">
        <span className="eyebrow">I&apos;m reaching out about</span>
        <select name="interest" defaultValue="individual-therapy" className={`mt-2 ${inputClasses}`}>
          {interests.map((i) => (
            <option key={i.value} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="eyebrow">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          maxLength={4000}
          placeholder="A sentence or two about what brings you here. Please avoid sharing sensitive clinical details in this form."
          className={`mt-2 ${inputClasses}`}
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-forest px-8 py-4 text-[12px] font-medium uppercase tracking-caps text-parchment transition hover:bg-forest-deep disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-center text-sm text-red-700">
          Something went wrong sending your message. Please try again, or email
          us directly.
        </p>
      )}

      <p className="text-center text-xs leading-relaxed text-ink-faint">
        This form is not for emergencies. If you are in crisis, call 911 or
        dial 988.
      </p>
    </form>
  );
}
