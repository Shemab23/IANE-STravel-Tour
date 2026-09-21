import type { LucideIcon } from "lucide-react";

/* ---------- Shared CTA shape (reused across home sections) ---------- */

export interface HomeCTA {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
  variant: "primary" | "secondary";
  ariaLabel: string;
}

/* ---------- Section 1 — Home Hero ---------- */

export interface HomeHeroMetadata {
  id: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  /** Background image path (relative to /public). Optional. */
  backgroundImage: string;
  backgroundImageAlt: string;
  ctas: HomeCTA[];
  /** Small trust line under the CTAs. */
  trustLine: string;
}

/* ---------- Section 2 — Home Pitch ---------- */

/** A single "fact" chip in the pitch block. */
export interface PitchFact {
  id: string;
  /** Small label, e.g. "Based in" */
  label: string;
  /** Value, e.g. "Kigali, Rwanda" */
  value: string;
}

export interface HomePitchMetadata {
  id: string;
  eyebrow: string;
  headline: string;
  /** Body copy — 1–2 short paragraphs. */
  paragraphs: string[];
  /** Quick-fact chips rendered below the copy. */
  facts: PitchFact[];
  /** Soft WhatsApp escape link. */
  softCta: {
    text: string;
    label: string;
    href: string;
  };
}
/* ---------- Section 3 — Home Main Services ---------- */

/** A single full-screen service card (Flights or Tours). */
export interface MainServiceCard {
  id: string;
  /** Destination route, e.g. "/flights" */
  href: string;
  /** Card background image */
  image: {
    src: string;
    alt: string;
  };
  /** Small category label above the headline, e.g. "FLIGHTS" */
  category: string;
  /** Big headline on the card */
  headline: string;
  /** Short description */
  description: string;
  /** CTA label rendered on the card */
  ctaLabel: string;
}

export interface HomeMainServicesMetadata {
  id: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  /** Exactly two cards — Flights and Tours. */
  cards: MainServiceCard[];
}

/* ---------- Section 4 — Home Other Services ---------- */

export interface OtherServiceCard {
  id: string;
  /** Card title, e.g. "Visa Assistance" */
  title: string;
  /** One-line description (max ~110 chars) */
  description: string;
  /** Lucide icon */
  icon: LucideIcon;
  /** CTA label, e.g. "Enquire" */
  ctaLabel: string;
  /**
   * WhatsApp pre-filled message specific to this service.
   * The component builds the full wa.me link from this.
   */
  whatsappPrompt: string;
}

export interface HomeOtherServicesMetadata {
  id: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  /** Ordered list of service cards (typically 4). */
  cards: OtherServiceCard[];
  /** WhatsApp number in wa.me format (digits only). */
  whatsappNumber: string;
  /** Closing line under the grid. */
  footer: string;
}

/* ---------- Section 5 — Home Partners ---------- */

export type PartnerCategory =
  "airline" | "tour-operator" | "insurance" | "hotel" | "integration" | "local";

export interface Partner {
  id: string;
  /** Partner display name */
  name: string;
  /** Logo image path */
  logoSrc: string;
  /** Alt text for the logo */
  logoAlt: string;
  /** Category — used for grouping or filtering later */
  category: PartnerCategory;
  /** Optional website — makes logo clickable */
  website?: string;
}

export interface HomePartnersMetadata {
  id: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  /** Featured partners shown by default (8 recommended). */
  featured: Partner[];
  /** Additional partners revealed by "See all". */
  additional: Partner[];
  /** Total count displayed as "15+" etc. (computed or manual). */
  totalLabel: string;
  /** Labels for the toggle button. */
  expandLabel: string;
  collapseLabel: string;
  /** Small footer line. */
  footer: string;
}
