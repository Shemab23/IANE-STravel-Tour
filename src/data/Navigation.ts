export interface NavLink {
  /** Optional route prefix. If missing, current route is assumed. */
  basePath?: string;
  /** Hash target within basePath, e.g. "#flight-brief". */
  hash?: string;
  /** External URL — takes precedence over basePath/hash. */
  href?: string;
  label: string;
  /** If true, link only renders when the user is on this route. */
  routeOnly?: boolean;
}

export interface NavRouteConfig {
  /** Path this config applies to, e.g. "/flights". */
  path: string;
  /** Links rendered in the desktop nav + mobile drawer. */
  links: NavLink[];
  /** Optional CTA shown at the far right (desktop only). */
  cta?: NavLink;
}

export const ROUTE_CONFIGS: NavRouteConfig[] = [
  // Home — minimal marketing nav
  {
    path: "/",
    links: [
      { label: "Welcome", hash: "#home-pitch" },
      { label: "services", hash: "#home-main-services" },
      { label: "More Service", hash: "#home-other-services" },
      { label: "Partners", hash: "#home-partners" },
    ],
  },

  // Flights — in-page anchors + sibling pages
  {
    path: "/flights",
    links: [
      { hash: "#flight-brief", label: "Get a Quote", routeOnly: true },
      { hash: "#flight-destinations", label: "Destinations", routeOnly: true },
      { hash: "#flight-contact", label: "Contact", routeOnly: true },
    ],
  },

  // Tours — in-page anchors + siblings
  {
    path: "/tours",
    links: [
      { hash: "#regional-hub", label: "Hub", routeOnly: true },
      { hash: "#couples-escapes", label: "Couples", routeOnly: true },
      { hash: "#group-travel", label: "Group-Travel", routeOnly: true },
    ],
  },
];

/** Falls back to this when no config matches the current route. */
export const DEFAULT_CONFIG = ROUTE_CONFIGS[0];
