"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-forest-line bg-parchment/90 backdrop-blur-md"
          : "bg-parchment/0"
      }`}
    >
      <div className="mx-auto flex max-w-wrap items-center justify-between px-6 py-4 lg:px-10">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {site.nav.map((item) => {
            const active = pathname?.startsWith(item.href) ?? false;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`link-quiet text-[13px] tracking-wide transition ${
                  active ? "text-gold-deep" : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={site.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-forest px-5 py-2.5 text-[12px] font-medium uppercase tracking-caps text-parchment transition hover:bg-forest-deep"
          >
            Book a Session
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`h-px w-6 bg-ink transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-b border-forest-line bg-parchment px-6 pb-8 pt-2 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-forest-line/60 py-4 font-display text-xl text-ink"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 rounded-full bg-forest px-6 py-3.5 text-center text-[12px] font-medium uppercase tracking-caps text-parchment"
            >
              Book a Session
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
