import { regionalHubMetadata } from "@/data/tours";
import type { TourPackage } from "@/types/tours";

/* ---------- Helpers ---------- */

const buildWhatsAppLink = (
  whatsappNumber: string,
  pkg: TourPackage,
): string => {
  const message = [
    "Hello IANE's Travel Team 👋",
    "",
    `I'm interested in the "${pkg.name}" itinerary:`,
    `🗺 ${pkg.regions}`,
    `⏱ ${pkg.duration}`,
    "",
    "Could you share more details and a quote?",
  ].join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

/* ---------- Package Card ---------- */

const PackageCard = ({
  pkg,
  whatsappNumber,
  ctaLabel,
  CtaIcon,
}: {
  pkg: TourPackage;
  whatsappNumber: string;
  ctaLabel: string;
  CtaIcon: React.ComponentType<{ className?: string }>;
}) => {
  return (
    <article className="group flex flex-col bg-card border border-border/60 rounded-xl overflow-hidden transition-all duration-200 hover:border-primary/40 hover:shadow-md">
      {/* Image */}
      {pkg.image && (
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={pkg.image}
            alt={pkg.imageAlt ?? pkg.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}

      {/* Body */}
      <div className="flex flex-col gap-3 p-5 sm:p-6">
        {/* Name + regions */}
        <div className="flex flex-col gap-1">
          <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug">
            {pkg.name}
          </h3>
          <p className="text-xs font-semibold tracking-wider uppercase text-primary">
            {pkg.regions}
          </p>
        </div>

        {/* Duration */}
        <p className="text-sm text-muted-foreground">{pkg.duration}</p>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {pkg.description}
        </p>

        {/* Highlights */}
        {pkg.highlights.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 mt-1">
            {pkg.highlights.map((h) => {
              const HIcon = h.icon;
              return (
                <li
                  key={h.id}
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium text-foreground bg-muted px-2.5 py-1 rounded-full"
                >
                  {HIcon && <HIcon className="h-3 w-3 text-primary" />}
                  {h.label}
                </li>
              );
            })}
          </ul>
        )}

        {/* CTA */}
        <a
          href={buildWhatsAppLink(whatsappNumber, pkg)}
          target="_blank"
          rel="noopener,noreferrer"
          aria-label={`Request the ${pkg.name} itinerary on WhatsApp`}
          className="inline-flex items-center justify-center gap-2 mt-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-foreground text-background hover:bg-foreground/90 transition-colors"
        >
          <span>{ctaLabel}</span>
          <CtaIcon className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
};

/* ---------- Section ---------- */

export const RegionalHub = () => {
  const meta = regionalHubMetadata;
  const CtaIcon = meta.cardCta.icon;

  return (
    <section id={meta.id} className="relative w-full px-6 py-20 md:py-24">
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

        {/* Package grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {meta.packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              whatsappNumber={meta.whatsappNumber}
              ctaLabel={meta.cardCta.label}
              CtaIcon={CtaIcon}
            />
          ))}
        </div>

        {/* Footer note */}
        {meta.footer && (
          <p className="text-sm text-muted-foreground text-center max-w-xl mx-auto">
            {meta.footer}
          </p>
        )}
      </div>
    </section>
  );
};
