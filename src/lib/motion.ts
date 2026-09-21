import type { Variants } from "framer-motion";

/** Standard viewport trigger — fires once, slightly before fully in view. */
export const viewportOnce = { once: true, amount: 0.2 } as const;

/** Fade up — the default entrance for headings, paragraphs, cards. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Container that staggers its children (use with fadeUp on children). */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

/** Slightly stronger rise — for hero headlines. */
export const heroRise: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
