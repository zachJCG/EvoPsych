import Link from "next/link";
import Logo from "./Logo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/individual-therapy", label: "Individual Therapy" },
  { href: "/testing", label: "Testing" },
  { href: "/presentations", label: "Presentations" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="relative z-30 border-b border-gold-500/15">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <Link href="/" className="flex items-center">
          <Logo withWordmark />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-gold text-[13px] uppercase tracking-[0.22em] text-cream/85 hover:text-gold-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="https://sagan-king.clientsecure.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-none border border-gold-500/60 bg-transparent px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] text-gold-200 transition hover:bg-gold-500/10 lg:inline-block"
        >
          Schedule a Consultation
        </Link>
      </div>
    </header>
  );
}
