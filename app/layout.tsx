import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Evolve Psychological Services | Dr. Sagan King, Psy.D.",
  description:
    "Integrated psychological services in Cincinnati, OH. Individual therapy, psychological testing, and professional presentations led by Dr. Sagan King, Psy.D.",
  openGraph: {
    title: "Evolve Psychological Services",
    description:
      "Integrated, client-centered therapy and testing in Cincinnati, OH.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-forest-800 text-cream">
        <Nav />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
