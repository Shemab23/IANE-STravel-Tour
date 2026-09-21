import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { homeOtherServicesMetadata } from "@/data/Home";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import type { OtherServiceCard } from "@/types/home";

const buildWhatsAppLink = (n: string, prompt: string) =>
  `https://wa.me/${n}?text=${encodeURIComponent(prompt)}`;

const ServiceRow = ({
  card,
  whatsappNumber,
}: {
  card: OtherServiceCard;
  whatsappNumber: string;
}) => {
  const Icon = card.icon;
  const href = buildWhatsAppLink(whatsappNumber, card.whatsappPrompt);

  return (
    <motion.a
      variants={fadeUp}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      href={href}
      target="_blank"
      rel="noopener,noreferrer"
      aria-label={`${card.title} — enquire on WhatsApp`}
      className="group flex flex-col gap-3 bg-card border border-border/60 rounded-xl p-5 sm:p-6 transition-colors duration-200 hover:border-primary/40 hover:shadow-md"
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
        <Icon className="h-5 w-5" />
      </span>

      <div className="flex flex-col gap-1.5 mt-1">
        <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
          {card.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {card.description}
        </p>
      </div>

      <span className="inline-flex items-center gap-1.5 mt-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
        <span>{card.ctaLabel}</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
    </motion.a>
  );
};

export const HomeOtherServices = () => {
  const meta = homeOtherServicesMetadata;

  return (
    <section id={meta.id} className="relative w-full  px-6 py-20 md:py-24">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {meta.cards.map((card) => (
            <ServiceRow
              key={card.id}
              card={card}
              whatsappNumber={meta.whatsappNumber}
            />
          ))}
        </div>

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
