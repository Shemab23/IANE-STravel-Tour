import type { LucideIcon } from "lucide-react";

/* ---------- Shared CTA shape (reused across /tours) ---------- */

export interface ToursCTA {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
  variant: "primary" | "secondary";
  ariaLabel: string;
}

/* ---------- Section 1 — Tours Hero ---------- */

export interface ToursHeroMetadata {
  id: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  /** Optional background image. If omitted, hero renders on solid gradient. */
  backgroundImage?: string;
  backgroundImageAlt?: string;
  ctas: ToursCTA[];
  /** Small trust line under the CTAs. */
  trustLine: string;
}

/* ---------- Shared card pieces ---------- */

/** A short highlight chip shown inside a package card. */
export interface HighlightChip {
  id: string;
  label: string;
  /** Optional Lucide icon */
  icon?: LucideIcon;
}

/**
 * A single multi-country itinerary card.
 * No price field — by design.
 */
export interface TourPackage {
  id: string;
  /** Display name, e.g. "Virunga & Serengeti" */
  name: string;
  /** Short subtitle: regions covered, e.g. "Rwanda · Tanzania" */
  regions: string;
  /** Duration, e.g. "8 days / 7 nights" */
  duration: string;
  /** One-line evocative description (max ~110 chars) */
  description: string;
  /** 2–4 highlight chips */
  highlights: HighlightChip[];
  /** Optional card image */
  image?: string;
  imageAlt?: string;
}

/* ---------- Section 2 metadata ---------- */

export interface RegionalHubMetadata {
  id: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  /** Ordered list of packages. */
  packages: TourPackage[];
  /** CTA copy rendered on every card. */
  cardCta: {
    label: string;
    icon: LucideIcon;
  };
  /** WhatsApp number in wa.me format (digits only). */
  whatsappNumber: string;
  /** Optional footer line under the grid. */
  footer: string;
}

/* ---------- Section 3 — Couples Escapes ---------- */

/**
 * A single couples/honeymoon escape.
 * No price field — by design.
 */
export interface CouplesEscape {
  id: string;
  /** Evocative name, e.g. "Lakeside Honeymoon" */
  name: string;
  /** Region/country, e.g. "Lake Kivu, Rwanda" */
  location: string;
  /** Duration, e.g. "4 nights" */
  duration: string;
  /** Short poetic line (max ~90 chars) */
  tagline: string;
  /** Optional list of inclusions shown as small chips */
  inclusions?: string[];
  /** Card image — required for couples cards (visual-first) */
  image: string;
  imageAlt: string;
  /** Optional: render this card as the "featured" (larger) card */
  featured?: boolean;
}

export interface CouplesEscapesMetadata {
  id: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  /** Ordered list of escapes. Exactly one may be `featured: true`. */
  escapes: CouplesEscape[];
  /** CTA copy rendered on every card. */
  cardCta: {
    label: string;
    icon: LucideIcon;
  };
  whatsappNumber: string;
  footer: string;
}

/* ---------- Section 4 — Group Travel ---------- */

/** A single scheduled group departure. No price field — by design. */
export interface GroupDeparture {
  id: string;
  /** Trip name, e.g. "Virunga Gorilla Trek" */
  name: string;
  /** Region/destination, e.g. "Rwanda · Uganda" */
  destination: string;
  /** ISO date the group departs (yyyy-mm-dd) */
  departureDate: string;
  /** ISO date the group returns */
  returnDate: string;
  /** Duration in days/nights, e.g. "7 days / 6 nights" */
  duration: string;
  /** Short factual description (max ~100 chars) */
  description: string;
  /**
   * Seats currently available.
   * When null, the departure is shown as "Waitlist only" or the badge is hidden.
   */
  seatsAvailable: number | null;
  /**
   * Total group size — used to compute "X of Y seats left".
   */
  groupSize: number;
  /** Optional status flag for special displays. */
  status?: "open" | "waitlist" | "almost-full";
}

export interface GroupTravelMetadata {
  id: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  /** Ordered list of departures, sorted by departure date ascending. */
  departures: GroupDeparture[];
  /** CTA copy rendered on each row. */
  cardCta: {
    label: string;
    icon: LucideIcon;
  };
  /** Label used when seatsAvailable is null. */
  waitlistLabel: string;
  /** Label used when remaining seats <= threshold. */
  almostFullLabel: string;
  /** Threshold below which we show "Almost full". */
  almostFullThreshold: number;
  whatsappNumber: string;
  footer: string;
}
