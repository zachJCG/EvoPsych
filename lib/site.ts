/**
 * Single source of truth for practice details (name, address, contact, links).
 * When the CRM lands, this stays the config layer for the public site while
 * dynamic data moves behind lib/crm.
 */
export const site = {
  name: "Evolve Psychological Services",
  shortName: "Evolve",
  tagline: "Find meaningful enlightenment throughout every season of your life.",
  description:
    "Integrated, client-centered psychological care in downtown Cincinnati — individual therapy, psychological testing, and professional consultation with Dr. Sagan King, Psy.D. In person and telehealth.",
  url: "https://www.evolutionpsych.com",
  provider: {
    name: "Dr. Sagan King",
    credentials: "Psy.D.",
    title: "Licensed Clinical Psychologist",
    licensure: "Licensed in Ohio & North Carolina",
  },
  address: {
    street: "323 W. Fifth St, #1N",
    city: "Cincinnati",
    state: "OH",
    zip: "45202",
  },
  phone: "(513) 201-7776",
  phoneHref: "tel:+15132017776",
  fax: "(513) 978-1010",
  email: "dr.saganking@evolutionpsych.com",
  portalUrl: "https://sagan-king.clientsecure.me/",
  hours: "Monday – Saturday, by appointment",
  insurance: ["Aetna", "Custom Design Benefits", "Private pay / out-of-network"],
  nav: [
    { label: "About", href: "/about" },
    { label: "Therapy", href: "/services/individual-therapy" },
    { label: "Testing", href: "/services/psychological-testing" },
    { label: "Consulting & Speaking", href: "/services/consulting-speaking" },
    { label: "Fees & Insurance", href: "/fees-insurance" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
