import type { LucideIcon } from "lucide-react";
import { MapPin, MessageCircle, Phone } from "lucide-react";

/* ---------- Types ---------- */

export interface FooterLink {
  label: string;
  to?: string;
  href?: string;
}

export interface FooterContactItem {
  id: string;
  icon: LucideIcon;
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterMetadata {
  brand: {
    logoSrc: string;
    logoAlt: string;
    name: string;
    tagline: string;
  };
  contact: FooterContactItem[];
  /** Single short line describing operating hours. */
  hours: string;
  legal: {
    copyrightHolder: string;
    links: FooterLink[];
  };
}

/* ---------- Data ---------- */

const WHATSAPP_NUMBER = "250796584149";
const PHONE_DISPLAY = "+250 796 584 149";
const PHONE_TEL = "+250796584149";
const MAPS_URL = "https://maps.google.com/?q=Kigali,Rwanda";

export const footerMetadata: FooterMetadata = {
  brand: {
    logoSrc: "/favicon.svg",
    logoAlt: "IANE's Travel & Tours",
    name: "IANE's Travel & Tours",
    tagline:
      "Flights, tours, and travel assistance — handled by humans in Kigali.",
  },

  contact: [
    {
      id: "contact-phone",
      icon: Phone,
      label: PHONE_DISPLAY,
      href: `tel:${PHONE_TEL}`,
    },
    {
      id: "contact-whatsapp",
      icon: MessageCircle,
      label: "WhatsApp",
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      external: true,
    },
    {
      id: "contact-office",
      icon: MapPin,
      label: "Kigali, Rwanda",
      href: MAPS_URL,
      external: true,
    },
  ],

  hours: "Mon–Fri 8:00–18:00 · Sat 9:00–15:00 · Sun closed",

  legal: {
    copyrightHolder: "IANE's Travel & Tours",
    links: [
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
    ],
  },
};
