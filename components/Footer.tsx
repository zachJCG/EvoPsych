import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-parchment">
      <div className="mx-auto max-w-wrap px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <Logo dark />
            <p className="max-w-xs text-sm leading-relaxed text-parchment/60">
              {site.tagline}
            </p>
          </div>

          <div>
            <h3 className="eyebrow text-gold-soft">Visit</h3>
            <address className="mt-4 text-sm not-italic leading-relaxed text-parchment/80">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </address>
            <p className="mt-2 text-xs text-parchment/50">
              Office is ADA accessible · {site.hours}
            </p>
          </div>

          <div>
            <h3 className="eyebrow text-gold-soft">Reach Us</h3>
            <ul className="mt-4 space-y-2 text-sm text-parchment/80">
              <li>
                <a href={site.phoneHref} className="link-quiet">
                  {site.phone}
                </a>
              </li>
              <li className="text-parchment/60">Fax: {site.fax}</li>
              <li>
                <a href={`mailto:${site.email}`} className="link-quiet break-all">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-quiet text-gold-soft"
                >
                  Client portal →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold-soft">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-parchment/80">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-quiet">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-parchment/10 pt-8">
          <p className="text-xs leading-relaxed text-parchment/45">
            If you are experiencing a mental health emergency, call 911 or dial
            988 (Suicide &amp; Crisis Lifeline). This website is not monitored
            for crisis support and is not a substitute for professional care.
          </p>
          <p className="mt-4 text-xs text-parchment/45">
            © {new Date().getFullYear()} {site.name} ·{" "}
            {site.provider.name}, {site.provider.credentials} ·{" "}
            {site.provider.licensure}
          </p>
        </div>
      </div>
    </footer>
  );
}
