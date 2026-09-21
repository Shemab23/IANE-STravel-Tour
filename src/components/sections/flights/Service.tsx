import { ArrowRight } from "lucide-react";
import { flightServicesMetadata } from "@/data/Flights";
import type { ServiceCard } from "@/types/flights";

const ServiceCardItem = ({ card }: { card: ServiceCard }) => {
  const Icon = card.icon;
  const isLink = Boolean(card.href);

  const inner = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
          <Icon className="h-5 w-5" />
        </span>

        {isLink && (
          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200 mt-3" />
        )}
      </div>

      <h3 className="text-base sm:text-lg font-bold text-foreground mt-4 leading-snug">
        {card.title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed mt-1.5">
        {card.description}
      </p>
    </>
  );

  const baseClasses =
    "group relative flex flex-col bg-card border border-border/60 rounded-xl p-5 sm:p-6 transition-all duration-200";

  if (isLink) {
    return (
      <a
        href={card.href}
        aria-label={card.ariaLabel ?? card.title}
        target={card.hrefType === "external" ? "_blank" : undefined}
        rel={card.hrefType === "external" ? "noopener,noreferrer" : undefined}
        className={`${baseClasses} hover:border-primary/40 hover:shadow-md cursor-pointer`}
      >
        {inner}
      </a>
    );
  }

  return <div className={baseClasses}>{inner}</div>;
};

export const FlightServices = () => {
  const meta = flightServicesMetadata;

  return (
    <section id={meta.id} className="relative w-full  px-6 py-20 md:py-24">
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-10">
        {/* Section header */}
        <div className="max-w-2xl flex flex-col gap-3">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.15em] text-primary uppercase">
            {meta.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            {meta.headline}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {meta.subheadline}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {meta.cards.map((card) => (
            <ServiceCardItem key={card.id} card={card} />
          ))}
        </div>

        {/* Footer note */}
        <p className="text-sm text-muted-foreground text-center max-w-xl mx-auto">
          {meta.footer}
        </p>
      </div>
    </section>
  );
};
