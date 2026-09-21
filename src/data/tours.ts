import {
  MessageCircle,
  Phone,
  Mountain,
  Compass,
  Users,
  ArrowUpRight,
} from "lucide-react";
import type {
  ToursHeroMetadata,
  CouplesEscapesMetadata,
  RegionalHubMetadata,
  GroupTravelMetadata,
} from "@/types/tours";

// TODO: replace with IANE's real numbers
const WHATSAPP_NUMBER = "250796584149";
const PHONE_NUMBER = "+250796584149";
const PHONE_TEL = "+250796584149";

export const toursHeroMetadata: ToursHeroMetadata = {
  id: "tours-hero",
  eyebrow: "IANE'S TOURS — RWANDA & EAST AFRICA",
  headline: "Journeys through Rwanda and East Africa.",
  subheadline:
    "Multi-country itineraries, private escapes, and scheduled group departures — designed and coordinated by our team on the ground in Kigali.",

  backgroundImage: "/images/tours/hero-bg.png",
  backgroundImageAlt:
    "Misty Virunga volcanoes at golden hour, seen from above the cloud line",

  ctas: [
    {
      id: "tours-hero-whatsapp",
      label: "Plan My Trip",
      icon: MessageCircle,
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hi IANE's Travel, I'd like help planning a tour.",
      )}`,
      variant: "primary",
      ariaLabel: "Start a WhatsApp chat to plan a tour",
    },
    {
      id: "tours-hero-call",
      label: PHONE_NUMBER,
      icon: Phone,
      href: `tel:${PHONE_TEL}`,
      variant: "secondary",
      ariaLabel: `Call IANE's Travel at ${PHONE_NUMBER}`,
    },
  ],

  trustLine:
    "No payment online — we design your itinerary with you first, on WhatsApp or by phone.",
};

export const regionalHubMetadata: RegionalHubMetadata = {
  id: "regional-hub",
  eyebrow: "REGIONAL HUB",
  headline: "Multi-country journeys, designed end-to-end.",
  subheadline:
    "Itineraries that cross borders within East Africa — Rwanda, Uganda, Tanzania, Kenya, and beyond. Each one coordinated by our team from the first message to the last transfer.",

  cardCta: {
    label: "Request This Itinerary",
    icon: ArrowUpRight,
  },

  whatsappNumber: WHATSAPP_NUMBER,

  packages: [
    {
      id: "pkg-virunga-serengeti",
      name: "Virunga & Serengeti",
      regions: "Rwanda · Tanzania",
      duration: "8 days / 7 nights",
      description:
        "Mountain gorillas in the Virungas, then the great migration on the Serengeti plains.",
      highlights: [
        { id: "h-gorilla", label: "Gorilla trekking", icon: Mountain },
        { id: "h-migration", label: "Great Migration", icon: Compass },
        { id: "h-private", label: "Private guide" },
      ],
      image: "/images/tours/gorila.jpeg",
      imageAlt: "Mountain gorilla in the Virunga rainforest",
    },
    {
      id: "pkg-great-lakes",
      name: "The Great Lakes",
      regions: "Rwanda · Uganda · Kenya",
      duration: "10 days / 9 nights",
      description:
        "Kivu, Bunyonyi, and Victoria — a slow crossing of East Africa's inland seas.",
      highlights: [
        { id: "h-lakes", label: "Lake Kivu", icon: Compass },
        { id: "h-boat", label: "Boat safaris" },
        { id: "h-community", label: "Community visits", icon: Users },
      ],
      image: "/images/tours/GreatLake.png",
      imageAlt: "Sunset over Lake Kivu",
    },
    {
      id: "pkg-rift-valley",
      name: "Rift Valley Traverse",
      regions: "Rwanda · Kenya",
      duration: "7 days / 6 nights",
      description:
        "From Kigali to the Maasai Mara, following the seam of the continent.",
      highlights: [
        { id: "h-mara", label: "Maasai Mara", icon: Compass },
        { id: "h-cultural", label: "Cultural visits" },
        { id: "h-4x4", label: "Private 4x4" },
      ],
      image: "/images/tours/savana.png",
      imageAlt: "Acacia trees on the Maasai Mara plains",
    },
  ],

  footer:
    "Every itinerary is customisable — dates, pace, lodges. Tell us what matters and we'll adapt.",
};

export const couplesEscapesMetadata: CouplesEscapesMetadata = {
  id: "couples-escapes",
  eyebrow: "COUPLES ESCAPES",
  headline: "For two, quietly arranged.",
  subheadline:
    "Honeymoons, anniversaries, and slow getaways — designed around privacy, pace, and the places you'll remember.",

  cardCta: {
    label: "Plan Our Escape",
    icon: ArrowUpRight,
  },

  whatsappNumber: WHATSAPP_NUMBER,

  escapes: [
    {
      id: "escape-kivu-honeymoon",
      name: "Lakeside Honeymoon",
      location: "Lake Kivu, Rwanda",
      duration: "5 nights",
      tagline:
        "Sunset boat rides, private dinners on the shore, and mornings with nowhere to be.",
      inclusions: ["Private lake cruise", "Couples spa", "Sunset dinner"],
      image: "/images/tours/honeyMoon.jpeg",
      imageAlt:
        "Wooden deck overlooking Lake Kivu at sunset with two chairs facing the water",
      featured: true,
    },
    {
      id: "escape-nyungwe-forest",
      name: "Forest Retreat",
      location: "Nyungwe, Rwanda",
      duration: "3 nights",
      tagline:
        "Canopy walks, chimpanzee tracking, and evenings by the fire in the rainforest.",
      inclusions: ["Canopy walk", "Chimp trek", "Forest lodge"],
      image: "/images/tours/Nyungwe.png",
      imageAlt: "Canopy walkway suspended in the Nyungwe rainforest",
    },
    {
      id: "escape-zanzibar",
      name: "Zanzibar Interlude",
      location: "Zanzibar, Tanzania",
      duration: "6 nights",
      tagline:
        "Stone Town mornings, turquoise afternoons, and dhow sails at golden hour.",
      inclusions: ["Beachfront stay", "Dhow sunset sail", "Spice tour"],
      image: "/images/tours/zanzibar.png",
      imageAlt:
        "Traditional wooden dhow sailing on turquoise water off Zanzibar at sunset",
    },
  ],

  footer:
    "Anniversary? Proposal? Tell us the occasion — we'll shape the details around it.",
};

export const groupTravelMetadata: GroupTravelMetadata = {
  id: "group-travel",
  eyebrow: "GROUP TRAVEL",
  headline: "Scheduled departures.",
  subheadline:
    "Fixed dates, shared groups, and itineraries we've run before. Join a departure — everything is arranged.",

  cardCta: {
    label: "Reserve a Seat",
    icon: ArrowUpRight,
  },

  waitlistLabel: "Waitlist only",
  almostFullLabel: "Almost full",
  almostFullThreshold: 4,

  whatsappNumber: WHATSAPP_NUMBER,

  departures: [
    {
      id: "dep-virunga-gorilla",
      name: "Virunga Gorilla Trek",
      destination: "Rwanda · Uganda",
      departureDate: "2026-03-14",
      returnDate: "2026-03-20",
      duration: "7 days / 6 nights",
      description:
        "Gorilla trekking in Volcanoes NP and Bwindi, with two nights on Lake Bunyonyi.",
      seatsAvailable: 6,
      groupSize: 10,
    },
    {
      id: "dep-serengeti-migration",
      name: "Serengeti Migration",
      destination: "Tanzania",
      departureDate: "2026-07-08",
      returnDate: "2026-07-15",
      duration: "8 days / 7 nights",
      description:
        "Northern Serengeti during the river crossings, with a night in the Ngorongoro Crater.",
      seatsAvailable: 3,
      groupSize: 12,
    },
    {
      id: "dep-nyungwe-primates",
      name: "Nyungwe Primates",
      destination: "Rwanda",
      departureDate: "2026-08-02",
      returnDate: "2026-08-06",
      duration: "5 days / 4 nights",
      description:
        "Chimpanzee tracking, canopy walks, and colobus monkeys in Nyungwe Forest.",
      seatsAvailable: 8,
      groupSize: 10,
    },
    {
      id: "dep-masai-mara",
      name: "Masai Mara Crossing",
      destination: "Kenya",
      departureDate: "2026-09-12",
      returnDate: "2026-09-18",
      duration: "7 days / 6 nights",
      description:
        "Maasai Mara in peak season, with a night at Lake Naivasha en route.",
      seatsAvailable: null,
      groupSize: 12,
      status: "waitlist",
    },
  ],

  footer:
    "Want the same trip on your own dates? Tell us — we run private versions too.",
};
