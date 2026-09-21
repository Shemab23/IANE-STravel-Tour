import type { LucideIcon } from "lucide-react";

export interface HeroCTA {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
  variant: "primary" | "secondary";
  ariaLabel: string;
}

export interface FlightHeroMetadata {
  id: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  ctas: HeroCTA[];
  trustLine: string;
}

export type TripType = "round-trip" | "one-way";

export const CabinClass = {
  Economy: "economy",
  PremiumEconomy: "premium-economy",
  Business: "business",
  First: "first",
} as const;

export type CabinClass = (typeof CabinClass)[keyof typeof CabinClass];

export interface FlightSearchParams {
  tripType: TripType;
  departureAirport: string;
  arrivalAirport: string;
  departureDate: string;
  returnDate: string;
  passengerCount: number;
  cabinClass: CabinClass;
  notes: string;
}

export interface OptionMeta<T extends string> {
  value: T;
  label: string;
}

/** A labelled form field's copy. */
export interface FormFieldCopy {
  label: string;
  placeholder?: string;
  helper?: string;
}

/** Section 2 metadata — everything the Quick Brief needs to render. */
export interface FlightBriefMetadata {
  id: string;
  eyebrow: string;
  headline: string;
  subheadline: string;

  /** Default form values, applied on mount. */
  defaults: FlightSearchParams;

  /** Trip type radio options, in display order. */
  tripTypeOptions: OptionMeta<TripType>[];

  /** Cabin class dropdown options, in display order. */
  cabinOptions: OptionMeta<CabinClass>[];

  /** Per-field labels & placeholders. */
  fields: {
    from: FormFieldCopy;
    to: FormFieldCopy;
    departDate: FormFieldCopy;
    returnDate: FormFieldCopy;
    passengers: FormFieldCopy;
    cabin: FormFieldCopy;
    notes: FormFieldCopy;
  };

  /** Passenger count selector range, inclusive. */
  passengerRange: { min: number; max: number };

  /** Primary submit CTA. */
  submit: {
    label: string;
    icon: LucideIcon;
    helper: string;
  };

  /** Small escape link under the form. */
  hurryLink: {
    text: string; // "In a hurry?"
    label: string; // "Call us: +250 …"
    href: string; // "tel:+250…"
  };

  /** Validation messages keyed by rule. */
  errors: {
    missingDestination: string;
    missingDepartureDate: string;
    missingReturnDate: string;
    invalidReturnDate: string;
  };

  /** WhatsApp number in wa.me format (digits only). */
  whatsappNumber: string;
}

export interface ServiceCard {
  /** Stable id for keys and analytics */
  id: string;
  /** Card title (short, scannable) */
  title: string;
  /** One-line description (max ~90 chars) */
  description: string;
  /** Lucide icon component */
  icon: LucideIcon;
  /**
   * Where the card leads.
   * - If `href` is present, the whole card becomes a link.
   * - `hrefType` tells the component how to render it:
   *     "anchor"   → same-page jump (e.g. "#airport-pickup")
   *     "external" → opens in new tab (e.g. WhatsApp)
   */
  href?: string;
  hrefType?: "anchor" | "external";
  /** Screen-reader / accessibility label. Falls back to title. */
  ariaLabel?: string;
}

/**
 * Metadata shape for Section 3 — "What We Handle".
 */
export interface FlightServicesMetadata {
  id: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  /** Ordered list of service cards. Order = display order. */
  cards: ServiceCard[];
  /** Small closing line under the grid. */
  footer: string;
}

/* ---------- Section 4 ---------- */

/**
 * A single destination chip that pre-fills the "Where To?" field
 * in Section 2 (Quick Brief) and scrolls the user up to it.
 */
export interface DestinationChip {
  /** Stable id for keys */
  id: string;
  /** City label shown on the chip */
  label: string;
  /** Airport / country code shown as a small suffix (e.g. "NBO") */
  code: string;
  /**
   * Value written into the Quick Brief "arrivalAirport" field.
   * Kept separate from `label` so chips read short but the brief is descriptive.
   */
  briefValue: string;
  /** Optional region tag — used for grouping or future filtering */
  region: "regional" | "international";
}

/**
 * Metadata shape for Section 4 — "Popular From Kigali".
 */
export interface FlightDestinationsMetadata {
  id: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  /** Ordered list of destination chips. */
  destinations: DestinationChip[];
  /** The id of the section to scroll to when a chip is tapped. */
  briefSectionId: string;
  /** The DOM id of the "Where To?" input in Section 2. */
  briefTargetInputId: string;
  /** Closing line under the grid — the ONLY item here that opens WhatsApp. */
  footer: {
    text: string;
    ctaLabel: string;
    href: string;
  };
}

/* ---------- Section 5 ---------- */

/**
 * A contact channel card — phone, WhatsApp, or in-person visit.
 */
export interface ContactChannel {
  /** Stable id for keys */
  id: string;
  /** Channel label (e.g., "Call us", "WhatsApp", "Visit us") */
  label: string;
  /** The primary content — phone number, WhatsApp handle, or address */
  value: string;
  /** Optional small helper line under the value */
  helper?: string;
  /** Lucide icon */
  icon: LucideIcon;
  /** Where the card links to (tel:, wa.me, maps URL) */
  href: string;
  /** How to open the link */
  hrefType: "tel" | "external" | "maps";
  /** Visual treatment — one card can be "primary" for hierarchy */
  variant: "primary" | "default";
}

/**
 * Office-hours row.
 */
export interface OfficeHour {
  days: string;
  hours: string;
}

/**
 * Metadata shape for Section 5 — Contact & Urgent.
 */
export interface FlightContactMetadata {
  id: string;
  eyebrow: string;
  headline: string;
  subheadline: string;

  /** The urgency banner shown above the contact cards. */
  urgency: {
    icon: LucideIcon;
    text: string;
  };

  /** Ordered contact cards. First should be the primary channel. */
  channels: ContactChannel[];

  /** Office hours table. */
  hours: {
    label: string;
    rows: OfficeHour[];
    footnote: string;
  };

  /** Small footer line about emergency policy. */
  footerNote: string;
}
