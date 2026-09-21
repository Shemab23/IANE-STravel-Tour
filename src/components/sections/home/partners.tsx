import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { homePartnersMetadata } from "@/data/Home";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { Partner } from "@/types/home";

const PartnerLogo = ({
  partner,
  index,
}: {
  partner: Partner;
  index: number;
}) => {
  const image = (
    <img
      src={partner.logoSrc}
      alt={partner.logoAlt}
      loading="lazy"
      className="w-full h-full object-contain p-2"
    />
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.03,
      }}
      className="aspect-square"
    >
      {partner.website ? (
        <a
          href={partner.website}
          target="_blank"
          rel="noopener,noreferrer"
          aria-label={`Visit ${partner.name}`}
          className="block w-full h-full"
        >
          {image}
        </a>
      ) : (
        image
      )}
    </motion.div>
  );
};

export const HomePartners = () => {
  const meta = homePartnersMetadata;
  const [expanded, setExpanded] = useState(false);
  const visible = expanded
    ? [...meta.featured, ...meta.additional]
    : meta.featured;
  const hasMore = meta.additional.length > 0;

  return (
    <section id={meta.id} className="relative w-full px-6 py-20 md:py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="w-full max-w-5xl mx-auto flex flex-col gap-10"
      >
        <div className="max-w-2xl flex flex-col gap-3">
          <motion.span
            variants={fadeUp}
            className="text-[10px] sm:text-xs font-bold tracking-[0.15em] text-primary uppercase"
          >
            {meta.eyebrow}
          </motion.span>
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 flex-wrap"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              {meta.headline}
            </h2>
            <span className="text-xs font-bold tracking-wider uppercase text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
              {meta.totalLabel}
            </span>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            {meta.subheadline}
          </motion.p>
        </div>

        <motion.div
          layout
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((partner, i) => (
              <PartnerLogo key={partner.id} partner={partner} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {hasMore && (
          <div className="flex justify-center -mt-2">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <span>{expanded ? meta.collapseLabel : meta.expandLabel}</span>
              {expanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          </div>
        )}

        {meta.footer && (
          <motion.p
            variants={fadeUp}
            className="text-sm text-muted-foreground text-center max-w-xl mx-auto"
          >
            {meta.footer}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};
