import {
  MessageCircle,
  Phone,
  Send,
  Plane,
  Users,
  Helicopter,
  Car,
  ShieldCheck,
  FileText,
  MapPin,
  AlertCircle,
} from "lucide-react";
import {
  type FlightHeroMetadata,
  CabinClass,
  type FlightBriefMetadata,
  type FlightServicesMetadata,
  type FlightContactMetadata,
} from "@/types/flights";

const WHATSAPP_NUMBER = "250796584149";
const PHONE_NUMBER = "+250796584149";
const PHONE_TEL = "+250796584149";

const MAPS_URL = "https://maps.google.com/?q=Kigali,Rwanda"; // replace with precise pin

export const flightHeroMetadata: FlightHeroMetadata = {
  id: "flight-hero",
  eyebrow: "IANE'S TRAVEL DESK — KIGALI",
  headline: "Muraho, let's plan your flight.",
  subheadline:
    "We book flights from Kigali — regional and international. Tell us what you need, we handle the rest.",
  backgroundImage: "/images/flights/hero-bg.jpeg",
  backgroundImageAlt:
    "Aircraft wing over East African mountain terrain at golden hour",
  ctas: [
    {
      id: "hero-whatsapp",
      label: "WhatsApp Us",
      icon: MessageCircle,
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hi IANE's Travel, I'd like help with a flight.",
      )}`,
      variant: "primary",
      ariaLabel: "Start a WhatsApp chat with IANE's Travel",
    },
    {
      id: "hero-call",
      label: PHONE_NUMBER,
      icon: Phone,
      href: `tel:${PHONE_TEL}`,
      variant: "secondary",
      ariaLabel: `Call IANE's Travel at ${PHONE_NUMBER}`,
    },
  ],
  trustLine:
    "No payment online — we confirm everything with you first on WhatsApp or by phone.",
};

export const flightBriefMetadata: FlightBriefMetadata = {
  id: "flight-brief",
  eyebrow: "QUICK BRIEF",
  headline: "Tell us your trip in 30 seconds.",
  subheadline:
    "Fill what you know, skip what you don't. You'll see the message before it sends — edit anything you like.",

  defaults: {
    tripType: "round-trip",
    departureAirport: "",
    arrivalAirport: "",
    departureDate: "",
    returnDate: "",
    passengerCount: 1,
    cabinClass: CabinClass.Economy,
    notes: "",
  },

  tripTypeOptions: [
    { value: "round-trip", label: "Round Trip" },
    { value: "one-way", label: "One Way" },
  ],

  cabinOptions: [
    { value: CabinClass.Economy, label: "Economy" },
    { value: CabinClass.PremiumEconomy, label: "Premium Economy" },
    { value: CabinClass.Business, label: "Business" },
    { value: CabinClass.First, label: "First" },
  ],

  fields: {
    from: {
      label: "Departing From",
      placeholder: "Kigali (KGL) — International Airport",
    },
    to: {
      label: "Where To?",
      placeholder: "City, country, or airport — wherever you're headed",
    },
    departDate: {
      label: "Depart",
    },
    returnDate: {
      label: "Return",
    },
    passengers: {
      label: "Travelers",
    },
    cabin: {
      label: "Cabin",
    },
    notes: {
      label: "Anything else we should know? (optional)",
      placeholder:
        "Flexible on dates? Prefer a specific airline? Traveling with kids or extra baggage?",
    },
  },

  passengerRange: { min: 1, max: 9 },

  submit: {
    label: "Send My Brief on WhatsApp",
    icon: Send,
    helper: "We'll open WhatsApp with your message ready — edit or send as-is.",
  },

  hurryLink: {
    text: "In a hurry?",
    label: `Call us: ${PHONE_NUMBER}`,
    href: `tel:${PHONE_TEL}`,
  },

  errors: {
    missingDestination: "Let us know where you're headed.",
    missingDepartureDate:
      "Please share a rough travel date so we can check options.",
    missingReturnDate: "Please add a rough return date (flexibility is fine).",
    invalidReturnDate: "Return date can't be before your departure date.",
  },

  whatsappNumber: WHATSAPP_NUMBER,
};

export const flightServicesMetadata: FlightServicesMetadata = {
  id: "flight-services",
  eyebrow: "WHAT WE HANDLE",
  headline: "More than a ticket.",
  subheadline:
    "One desk for everything that makes a trip work — before, during, and after the flight.",

  cards: [
    {
      id: "svc-ticketing",
      title: "Flight Ticketing",
      description:
        "Regional and international fares from Kigali, on all major airlines.",
      icon: Plane,
    },
    {
      id: "svc-groups",
      title: "Groups & Corporate",
      description:
        "Seat blocks for teams, conferences, and families — invoiced and coordinated.",
      icon: Users,
    },
    {
      id: "svc-charters",
      title: "Private Charters",
      description:
        "When commercial routes don't fit — we arrange the aircraft around you.",
      icon: Helicopter,
    },
    {
      id: "svc-pickup",
      title: "Airport Pickup",
      description:
        "Vetted drivers meeting you on arrival. No haggling, no surprises.",
      icon: Car,
      href: "#",
      hrefType: "anchor",
      ariaLabel: "Jump to the airport pickup section",
    },
    {
      id: "svc-insurance",
      title: "Travel Insurance",
      description:
        "Medical, baggage, and trip-cancellation cover arranged in minutes.",
      icon: ShieldCheck,
      href: "#",
      hrefType: "anchor",
      ariaLabel: "Jump to the travel insurance section",
    },
    {
      id: "svc-visa",
      title: "Visa & Documents",
      description:
        "Guidance on visa requirements and the paperwork that goes with them.",
      icon: FileText,
      href: "#",
      hrefType: "anchor",
      ariaLabel: "Jump to the visa and documents section",
    },
  ],

  footer:
    "Need something not listed? Just ask — we'll tell you honestly if we can help.",
};

import type { FlightDestinationsMetadata } from "@/types/flights";

export const flightDestinationsMetadata: FlightDestinationsMetadata = {
  id: "flight-destinations",
  eyebrow: "POPULAR FROM KIGALI",
  headline: "Where are you headed?",
  subheadline:
    "Tap a destination to start your brief — or scroll down if you'd rather talk to us first.",

  briefSectionId: "flight-brief",
  briefTargetInputId: "to",

  destinations: [
    // Regional
    {
      id: "dest-nbo",
      label: "Nairobi",
      code: "NBO",
      briefValue: "Nairobi (NBO)",
      region: "regional",
    },
    {
      id: "dest-dar",
      label: "Dar es Salaam",
      code: "DAR",
      briefValue: "Dar es Salaam (DAR)",
      region: "regional",
    },
    {
      id: "dest-ebb",
      label: "Entebbe",
      code: "EBB",
      briefValue: "Entebbe (EBB)",
      region: "regional",
    },
    {
      id: "dest-add",
      label: "Addis Ababa",
      code: "ADD",
      briefValue: "Addis Ababa (ADD)",
      region: "regional",
    },
    {
      id: "dest-jnb",
      label: "Johannesburg",
      code: "JNB",
      briefValue: "Johannesburg (JNB)",
      region: "regional",
    },
    {
      id: "dest-bjm",
      label: "Bujumbura",
      code: "BJM",
      briefValue: "Bujumbura (BJM)",
      region: "regional",
    },

    // International
    {
      id: "dest-doh",
      label: "Doha",
      code: "DOH",
      briefValue: "Doha (DOH)",
      region: "international",
    },
    {
      id: "dest-dxb",
      label: "Dubai",
      code: "DXB",
      briefValue: "Dubai (DXB)",
      region: "international",
    },
    {
      id: "dest-ist",
      label: "Istanbul",
      code: "IST",
      briefValue: "Istanbul (IST)",
      region: "international",
    },
    {
      id: "dest-can",
      label: "Guangzhou",
      code: "CAN",
      briefValue: "Guangzhou (CAN)",
      region: "international",
    },
    {
      id: "dest-bru",
      label: "Brussels",
      code: "BRU",
      briefValue: "Brussels (BRU)",
      region: "international",
    },
    {
      id: "dest-lhr",
      label: "London",
      code: "LHR",
      briefValue: "London (LHR)",
      region: "international",
    },
    {
      id: "dest-ams",
      label: "Amsterdam",
      code: "AMS",
      briefValue: "Amsterdam (AMS)",
      region: "international",
    },
    {
      id: "dest-cai",
      label: "Cairo",
      code: "CAI",
      briefValue: "Cairo (CAI)",
      region: "international",
    },
  ],

  footer: {
    text: "Don't see your destination? We book anywhere — just ask.",
    ctaLabel: "Ask on WhatsApp",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      "Hi IANE's Travel, I'd like to ask about flights from Kigali to a destination not listed on your site.",
    )}`,
  },
};

export const flightContactMetadata: FlightContactMetadata = {
  id: "flight-contact",
  eyebrow: "TALK TO US DIRECTLY",
  headline: "In a hurry? We pick up.",
  subheadline:
    "Last-minute, disrupted, or emergency travel? Skip the form. Call or message — a real person on the ground in Kigali will answer.",

  urgency: {
    icon: AlertCircle,
    text: "Emergency or same-day travel — call first, don't wait on a form.",
  },

  channels: [
    {
      id: "channel-phone",
      label: "Call us",
      value: PHONE_NUMBER,
      helper: "Fastest for urgent bookings",
      icon: Phone,
      href: `tel:${PHONE_TEL}`,
      hrefType: "tel",
      variant: "primary",
    },
    {
      id: "channel-whatsapp",
      label: "WhatsApp",
      value: "Start a chat",
      helper: "Send details, get a reply during office hours",
      icon: MessageCircle,
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hi IANE's Travel, I need help with a flight.",
      )}`,
      hrefType: "external",
      variant: "default",
    },
    {
      id: "channel-office",
      label: "Visit us",
      value: "Kigali, Rwanda",
      helper: "Walk-ins welcome during office hours",
      icon: MapPin,
      href: MAPS_URL,
      hrefType: "maps",
      variant: "default",
    },
  ],

  hours: {
    label: "Office hours",
    rows: [
      { days: "Monday – Friday", hours: "08:00 – 18:00" },
      { days: "Saturday", hours: "09:00 – 15:00" },
      { days: "Sunday", hours: "Closed" },
    ],
    footnote: "Times in CAT (Kigali). Public-holiday hours may differ.",
  },

  footerNote:
    "Outside office hours? Leave a WhatsApp message — we'll reply first thing.",
};
