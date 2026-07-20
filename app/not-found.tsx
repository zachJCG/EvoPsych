import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grain">
      <div className="mx-auto max-w-wrap px-6 py-32 text-center lg:px-10">
        <p className="eyebrow">404</p>
        <h1 className="mt-5 font-display text-5xl font-light md:text-6xl">
          This page has <em className="text-gold-deep">moved on</em>.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-ink-muted">
          The page you&apos;re looking for doesn&apos;t exist — but everything
          else is right where it should be.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block rounded-full bg-forest px-8 py-4 text-[12px] font-medium uppercase tracking-caps text-parchment transition hover:bg-forest-deep"
        >
          Back Home
        </Link>
      </div>
    </section>
  );
}
