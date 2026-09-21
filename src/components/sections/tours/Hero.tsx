import { toursHeroMetadata } from "@/data/tours";
import { fadeUp, heroRise, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";

export const ToursHero = () => {
  const {
    id,
    eyebrow,
    headline,
    subheadline,
    backgroundImage,
    backgroundImageAlt,
    ctas,
    trustLine,
  } = toursHeroMetadata;

  return (
    <section
      id={id}
      className="relative w-full min-h-[80vh] flex items-center justify-center px-6 py-20 md:py-28 overflow-hidden bg-slate-900"
    >
      <motion.span
        variants={fadeUp}
        className="absolute top-4 left-4 text-[10px] sm:text-xs font-bold tracking-[0.15em] text-app-text uppercase z-20 bg-accent px-2 py-1 rounded-full shadow-md shadow-foreground/40"
      >
        {eyebrow}
      </motion.span>
      <img
        src={backgroundImage}
        alt={backgroundImageAlt}
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover  select-none"
      />

      {/* Scrim — gradient overlay for legibility */}
      <div className="absolute inset-0 z-1 bg-primary-foreground/40" />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="w-full max-w-3xl mx-auto flex flex-col items-center text-center gap-6 z-2"
      >
        {/* Headline */}
        <motion.h1
          variants={heroRise}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight  text-app-text"
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={heroRise}
          className="text-base sm:text-lg  leading-relaxed max-w-xl text-card-foreground"
        >
          {subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={heroRise}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mt-2"
        >
          {ctas.map((cta) => {
            const Icon = cta.icon;
            const isPrimary = cta.variant === "primary";

            return (
              <a
                key={cta.id}
                href={cta.href}
                target={cta.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  cta.href.startsWith("http")
                    ? "noopener,noreferrer"
                    : undefined
                }
                aria-label={cta.ariaLabel}
                className={[
                  "inline-flex items-center justify-center gap-2",
                  "font-semibold text-sm sm:text-base",
                  "px-6 py-3 rounded-lg",
                  "transition-all duration-200",
                  "w-full sm:w-auto",
                  isPrimary
                    ? "bg-[#25D366] hover:bg-[#20bd5a] text-foreground shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/30"
                    : "bg-white/10 hover:bg-white/15 text-foreground border border-white/25 backdrop-blur-sm",
                ].join(" ")}
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>{cta.label}</span>
              </a>
            );
          })}
        </motion.div>

        {/* Trust line */}
        <p className="text-sm sm:text-md text-foreground/60 mt-2 max-w-md">
          {trustLine}
        </p>
      </motion.div>
    </section>
  );
};
