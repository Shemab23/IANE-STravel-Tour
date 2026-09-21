import { couplesEscapesMetadata } from "@/data/tours";
import type { CouplesEscape } from "@/types/tours";

/* ---------- Helpers ---------- */

const buildWhatsAppLink = (
  whatsappNumber: string,
  escape: CouplesEscape,
): string => {
  const message = [
    "Hello IANE's Travel Team 👋",
    "",
    `We're interested in the "${escape.name}" escape:`,
    `📍 ${escape.location}`,
    `⏱ ${escape.duration}`,
    "",
    "Could you share more details and a quote?",
  ].join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

/* ---------- Escape Card ---------- */

const EscapeCard = ({
  escape,
  whatsappNumber,
  ctaLabel,
  CtaIcon,
}: {
  escape: CouplesEscape;
  whatsappNumber: string;
  ctaLabel: string;
  CtaIcon: React.ComponentType<{ className?: string }>;
}) => {
  const isFeatured = escape.featured === true;

  return (
    <article
      className={[
        "group relative flex flex-col overflow-hidden rounded-xl",
        "bg-card border border-border/60",
        "transition-all duration-200 hover:border-primary/40 hover:shadow-md",
        // Featured spans 2 columns on md+, and is taller
        isFeatured ? "md:col-span-2" : "",
      ].join(" ")}
    >
      {/* Image */}
      <div
        className={[
          "relative w-full overflow-hidden bg-muted",
          isFeatured ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/3]",
        ].join(" ")}
      >
        <img
          src={escape.image}
          alt={escape.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {/* Gradient scrim for legibility of overlay text (if any) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Location badge */}
        <span className="absolute top-3 left-3 inline-flex items-center text-[10px] font-bold tracking-wider uppercase text-white bg-black/40 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-full">
          {escape.location}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-5 sm:p-6">
        <div className="flex flex-col gap-1">
          <h3
            className={[
              "font-bold text-foreground leading-snug",
              isFeatured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl",
            ].join(" ")}
          >
            {escape.name}
          </h3>
          <p className="text-xs font-semibold tracking-wider uppercase text-primary">
            {escape.duration}
          </p>
        </div>

        <p
          className={[
            "text-muted-foreground leading-relaxed",
            isFeatured ? "text-sm sm:text-base" : "text-sm",
          ].join(" ")}
        >
          {escape.tagline}
        </p>

        {/* Inclusions */}
        {escape.inclusions && escape.inclusions.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 mt-1">
            {escape.inclusions.map((item) => (
              <li
                key={item}
                className="inline-flex items-center text-[11px] font-medium text-foreground bg-muted px-2.5 py-1 rounded-full"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <a
          href={buildWhatsAppLink(whatsappNumber, escape)}
          target="_blank"
          rel="noopener,noreferrer"
          aria-label={`Plan the ${escape.name} escape on WhatsApp`}
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

export const CouplesEscapes = () => {
  const meta = couplesEscapesMetadata;
  const CtaIcon = meta.cardCta.icon;

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

        {/* Escape grid — 2 cols on md+, featured spans both */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {meta.escapes.map((escape) => (
            <EscapeCard
              key={escape.id}
              escape={escape}
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
