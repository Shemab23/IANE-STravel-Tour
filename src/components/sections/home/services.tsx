import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { homeMainServicesMetadata } from "@/data/Home";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { MainServiceCard } from "@/types/home";

const MainServiceBlock = ({ card }: { card: MainServiceCard }) => {
  return (
    <motion.a
      variants={fadeUp}
      href={card.href}
      aria-label={`${card.ctaLabel} — ${card.headline}`}
      className="group relative flex flex-col justify-end overflow-hidden rounded-xl min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] px-6 sm:px-8 md:px-10 pb-10 sm:pb-12"
    >
      <img
        src={card.image.src}
        alt={card.image.alt}
        loading="lazy"
        className="absolute inset-0 -z-20 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />

      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,23,42,0.15) 0%, rgba(15,23,42,0.85) 100%)",
        }}
      />

      <div className="relative max-w-lg flex flex-col gap-3">
        <span className="text-[10px] sm:text-xs font-bold tracking-[0.15em] text-[#25D366] uppercase">
          {card.category}
        </span>

        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.08]">
          {card.headline}
        </h3>

        <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-md">
          {card.description}
        </p>

        <span className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-white">
          <span className="border-b border-white/40 pb-0.5 transition-colors group-hover:border-white">
            {card.ctaLabel}
          </span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </motion.a>
  );
};

export const HomeMainServices = () => {
  const meta = homeMainServicesMetadata;

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
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]"
          >
            {meta.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            {meta.subheadline}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {meta.cards.map((card) => (
            <MainServiceBlock key={card.id} card={card} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
