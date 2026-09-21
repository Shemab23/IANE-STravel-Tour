import { MessageCircle, Phone } from "lucide-react";
import type { HomeHeroMetadata } from "@/types/home";

// IANE's primary contact
const WHATSAPP_NUMBER = "250783553278";
const PHONE_NUMBER = "+250 783 553 278";
const PHONE_TEL = "+250783553278";

export const homeHeroMetadata: HomeHeroMetadata = {
  id: "home-hero",
  eyebrow: "IANE'S TRAVEL & TOURS — KIGALI",
  headline: "Conquer the world with us.",
  subheadline:
    "Flights, tours, visas, hotels, insurance, and transfers — one team in Kigali, handling the whole journey from first message to safe return.",

  backgroundImage: "/images/home/hero.png",
  backgroundImageAlt:
    "Small aircraft flying over misty Virunga volcanic peaks at golden hour",

  ctas: [
    {
      id: "home-hero-whatsapp",
      label: "WhatsApp Us",
      icon: MessageCircle,
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hi IANE's Travel, I'd like to plan a trip.",
      )}`,
      variant: "primary",
      ariaLabel: "Start a WhatsApp chat with IANE's Travel",
    },
    {
      id: "home-hero-call",
      label: PHONE_NUMBER,
      icon: Phone,
      href: `tel:${PHONE_TEL}`,
      variant: "secondary",
      ariaLabel: `Call IANE's Travel at ${PHONE_NUMBER}`,
    },
  ],

  trustLine:
    "Rwanda · East Africa · International — no payment online, we confirm everything with you first.",
};

import type { HomePitchMetadata } from "@/types/home";

export const homePitchMetadata: HomePitchMetadata = {
  id: "home-pitch",
  eyebrow: "WELCOME",
  headline: "A travel desk in Kigali that handles the whole journey.",

  paragraphs: [
    "IANE's Travel & Tours is a young, Kigali-based travel agency — established in October 2024. We handle flights, tours, visas, hotels, insurance, and airport transfers as one connected service.",
    "No call centres, no scripts. You talk to the same team from your first message to your safe return.",
  ],

  facts: [
    { id: "fact-based", label: "Based in", value: "Kigali, Rwanda" },
    { id: "fact-established", label: "Established", value: "October 2024" },
    {
      id: "fact-coverage",
      label: "Coverage",
      value: "Rwanda · East Africa · Worldwide",
    },
    {
      id: "fact-services",
      label: "Services",
      value: "Flights · Tours · Visa · Hotels · Insurance · Transfers",
    },
  ],

  softCta: {
    text: "Prefer to skip ahead?",
    label: "Talk to us on WhatsApp",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      "Hi IANE's Travel, I'd like to know more about your services.",
    )}`,
  },
};

import type { HomeMainServicesMetadata } from "@/types/home";

export const homeMainServicesMetadata: HomeMainServicesMetadata = {
  id: "home-main-services",
  eyebrow: "WHAT WE DO",
  headline: "Two ways to start.",
  subheadline:
    "Book a flight, or plan a journey. Both handled end-to-end by our team in Kigali.",

  cards: [
    {
      id: "main-flights",
      href: "/flights",
      image: {
        src: "/images/flights/hero-bg.jpeg",
        alt: "Small aircraft flying over the Virunga volcanic mountain range at dawn",
      },
      category: "FLIGHTS",
      headline: "Your trip to East Africa, sorted.",
      description:
        "Regional and international fares from Kigali, on all major airlines — booked and coordinated by our team.",
      ctaLabel: "Explore Flights",
    },
    {
      id: "main-tours",
      href: "/tours",
      image: {
        src: "/images/tours/hero-bg.png",
        alt: "Volcano-view lodge villas overlooking the Virunga range at golden hour",
      },
      category: "TOURS",
      headline: "Journeys through Rwanda and East Africa.",
      description:
        "Multi-country itineraries, couples escapes, and scheduled group departures — designed around you.",
      ctaLabel: "Explore Tours",
    },
  ],
};

import { ShieldCheck, Hotel, Plane, Car } from "lucide-react";
import type { HomeOtherServicesMetadata } from "@/types/home";

export const homeOtherServicesMetadata: HomeOtherServicesMetadata = {
  id: "home-other-services",
  eyebrow: "ALSO HANDLED",
  headline: "The rest of the journey.",
  subheadline:
    "Everything around the flight and the tour — handled by the same team, on the same WhatsApp thread.",

  whatsappNumber: "250783553278",

  cards: [
    {
      id: "svc-visa",
      title: "Visa Assistance",
      description:
        "Document checklists, form review, and embassy appointment scheduling — guidance end-to-end.",
      icon: ShieldCheck,
      ctaLabel: "Enquire",
      whatsappPrompt:
        "Hi IANE's Travel, I'd like help with visa documents and appointments.",
    },
    {
      id: "svc-hotels",
      title: "Hotel Reservation",
      description:
        "Handpicked lodges, boutique stays, and city hotels — matched to your comfort and budget.",
      icon: Hotel,
      ctaLabel: "Enquire",
      whatsappPrompt: "Hi IANE's Travel, I'd like help booking a hotel.",
    },
    {
      id: "svc-insurance",
      title: "Travel Insurance",
      description:
        "Cover against medical emergencies, cancellations, and baggage delays — via Radiant and Sanlam Allianz.",
      icon: Plane,
      ctaLabel: "Enquire",
      whatsappPrompt:
        "Hi IANE's Travel, I'd like assistance with travel insurance.",
    },
    {
      id: "svc-transfers",
      title: "Airport Transfers",
      description:
        "Punctual Kigali airport pickups, hotel shuttles, and inter-city chauffeur service.",
      icon: Car,
      ctaLabel: "Enquire",
      whatsappPrompt:
        "Hi IANE's Travel, I'd like to arrange an airport transfer.",
    },
  ],

  footer:
    "Not sure which one you need? Just message us — we'll point you the right way.",
};

import type { HomePartnersMetadata } from "@/types/home";

export const homePartnersMetadata: HomePartnersMetadata = {
  id: "home-partners",
  eyebrow: "OUR NETWORK",
  headline: "Working with the right people.",
  subheadline:
    "Airlines, tour operators, insurers, and hotel groups — vetted partners we book with every week.",

  featured: [
    {
      id: "partner-rwandair",
      name: "RwandAir",
      logoSrc: "/images/home/partner/RwandaAIr.jpg",
      logoAlt: "RwandAir logo",
      category: "airline",
    },
    {
      id: "partner-qatar",
      name: "Qatar Airways",
      logoSrc: "/images/home/partner/QuatarAir.png",
      logoAlt: "Qatar Airways logo",
      category: "airline",
    },
    {
      id: "partner-ethiopian",
      name: "Ethiopian Airlines",
      logoSrc: "/images/home/partner/ethiopian.png",
      logoAlt: "Ethiopian Airlines logo",
      category: "airline",
    },
    {
      id: "partner-kenya",
      name: "Kenya Airways",
      logoSrc: "/images/home/partner/kenyaAir.jfif",
      logoAlt: "Kenya Airways logo",
      category: "airline",
    },
    {
      id: "partner-turkish",
      name: "Turkish Airlines",
      logoSrc: "/images/home/partner/turkishAir.png",
      logoAlt: "Turkish Airlines logo",
      category: "airline",
    },
    {
      id: "partner-radiant",
      name: "Radiant Insurance",
      logoSrc: "/images/home/partner/radiant.jfif",
      logoAlt: "Radiant Insurance logo",
      category: "insurance",
    },
  ],

  additional: [
    {
      id: "partner-sanlam",
      name: "Sanlam Allianz",
      logoSrc: "/images/home/partner/sanlam.png",
      logoAlt: "Sanlam Allianz logo",
      category: "insurance",
    },
    {
      id: "partner-marriott",
      name: "Marriott",
      logoSrc: "/images/home/partner/marriott.png",
      logoAlt: "Marriott logo",
      category: "hotel",
    },
    {
      id: "partner-brussels",
      name: "Brussels Airlines",
      logoSrc: "/images/home/partner/brussels.png",
      logoAlt: "Brussels Airlines logo",
      category: "airline",
    },
    {
      id: "partner-emirates",
      name: "Emirates",
      logoSrc: "/images/home/partner/emirate.png",
      logoAlt: "Emirates logo",
      category: "airline",
    },
    {
      id: "partner-radisson",
      name: "Radisson Blu",
      logoSrc: "/images/home/partner/radisson.png",
      logoAlt: "Radisson Blu logo",
      category: "hotel",
    },
    {
      id: "partner-serengeti",
      name: "Serengeti Under Canvas",
      logoSrc: "/images/home/partner/serengeti.png",
      logoAlt: "Serengeti Under Canvas logo",
      category: "tour-operator",
    },
    {
      id: "partner-volcanoes",
      name: "Volcanoes Safaris",
      logoSrc: "/images/home/partner/volcanoes.jfif",
      logoAlt: "Volcanoes Safaris logo",
      category: "tour-operator",
    },
    {
      id: "partner-amadeus",
      name: "Amadeus",
      logoSrc: "/images/home/partner/amadeus.png",
      logoAlt: "Amadeus logo",
      category: "integration",
    },
    {
      id: "partner-visitrwanda",
      name: "Visit Rwanda",
      logoSrc: "/images/home/partner/visitRwanda.png",
      logoAlt: "Visit Rwanda logo",
      category: "local",
    },
  ],

  totalLabel: "10+",
  expandLabel: "See all partners",
  collapseLabel: "Show fewer",
  footer: "Partnerships evolve — reach out if you'd like to work with us.",
};
