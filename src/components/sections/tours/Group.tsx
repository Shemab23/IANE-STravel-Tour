import { groupTravelMetadata } from "@/data/tours";
import type { GroupDeparture } from "@/types/tours";

/* ---------- Date formatting ---------- */

const formatDate = (iso: string): string =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const formatDateShort = (iso: string): string =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });

/* ---------- WhatsApp link ---------- */

const buildWhatsAppLink = (
  whatsappNumber: string,
  departure: GroupDeparture,
): string => {
  const message = [
    "Hello IANE's Travel Team 👋",
    "",
    `I'd like to reserve a seat on the "${departure.name}" departure:`,
    `📍 ${departure.destination}`,
    `📅 ${formatDate(departure.departureDate)} → ${formatDate(
      departure.returnDate,
    )}`,
    `⏱ ${departure.duration}`,
    "",
    "Could you confirm availability?",
  ].join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

/* ---------- Seat badge ---------- */

const SeatBadge = ({
  departure,
  almostFullThreshold,
  almostFullLabel,
  waitlistLabel,
}: {
  departure: GroupDeparture;
  almostFullThreshold: number;
  almostFullLabel: string;
  waitlistLabel: string;
}) => {
  const isWaitlist =
    departure.status === "waitlist" || departure.seatsAvailable === null;

  if (isWaitlist) {
    return (
      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-amber-700 dark:text-amber-400 bg-amber-500/10 border border-amber-500/25 px-2.5 py-1 rounded-full">
        {waitlistLabel}
      </span>
    );
  }

  const isAlmostFull =
    departure.seatsAvailable !== null &&
    departure.seatsAvailable <= almostFullThreshold;

  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border",
        isAlmostFull
          ? "text-red-700 dark:text-red-400 bg-red-500/10 border-red-500/25"
          : "text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25",
      ].join(" ")}
    >
      {isAlmostFull && <span>{almostFullLabel} · </span>}
      {departure.seatsAvailable} of {departure.groupSize} seats
    </span>
  );
};

/* ---------- Departure Row ---------- */

const DepartureRow = ({
  departure,
  whatsappNumber,
  ctaLabel,
  CtaIcon,
  almostFullThreshold,
  almostFullLabel,
  waitlistLabel,
}: {
  departure: GroupDeparture;
  whatsappNumber: string;
  ctaLabel: string;
  CtaIcon: React.ComponentType<{ className?: string }>;
  almostFullThreshold: number;
  almostFullLabel: string;
  waitlistLabel: string;
}) => {
  const isWaitlist =
    departure.status === "waitlist" || departure.seatsAvailable === null;

  return (
    <article className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-6 bg-card border border-border/60 rounded-xl p-5 sm:p-6 transition-all duration-200 hover:border-primary/40 hover:shadow-md">
      {/* Date block */}
      <div className="flex md:flex-col items-baseline md:items-center gap-2 md:gap-0 md:w-24 shrink-0 md:text-center">
        <span className="text-2xl sm:text-3xl font-extrabold text-foreground leading-none">
          {new Date(departure.departureDate + "T00:00:00").getDate()}
        </span>
        <span className="text-xs font-bold tracking-wider uppercase text-primary md:mt-0.5">
          {new Date(departure.departureDate + "T00:00:00").toLocaleDateString(
            "en-GB",
            { month: "short", year: "numeric" },
          )}
        </span>
      </div>

      {/* Divider (desktop only) */}
      <div className="hidden md:block w-px self-stretch bg-border/60" />

      {/* Main content */}
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug">
            {departure.name}
          </h3>
          <SeatBadge
            departure={departure}
            almostFullThreshold={almostFullThreshold}
            almostFullLabel={almostFullLabel}
            waitlistLabel={waitlistLabel}
          />
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span className="font-medium text-foreground/80">
            {departure.destination}
          </span>
          <span aria-hidden>·</span>
          <span>{departure.duration}</span>
          <span aria-hidden>·</span>
          <span>
            {formatDateShort(departure.departureDate)} →{" "}
            {formatDateShort(departure.returnDate)}
          </span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mt-1">
          {departure.description}
        </p>
      </div>

      {/* CTA */}
      <div className="md:w-48 shrink-0">
        <a
          href={buildWhatsAppLink(whatsappNumber, departure)}
          target="_blank"
          rel="noopener,noreferrer"
          aria-label={`Reserve a seat on the ${departure.name} departure`}
          className={[
            "inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors",
            isWaitlist
              ? "bg-muted text-foreground hover:bg-muted/80 border border-border"
              : "bg-foreground text-background hover:bg-foreground/90",
          ].join(" ")}
        >
          <span>{isWaitlist ? "Join Waitlist" : ctaLabel}</span>
          <CtaIcon className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
};

/* ---------- Section ---------- */

export const GroupTravel = () => {
  const meta = groupTravelMetadata;
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

        {/* Departures list */}
        <div className="flex flex-col gap-4">
          {meta.departures.map((departure) => (
            <DepartureRow
              key={departure.id}
              departure={departure}
              whatsappNumber={meta.whatsappNumber}
              ctaLabel={meta.cardCta.label}
              CtaIcon={CtaIcon}
              almostFullThreshold={meta.almostFullThreshold}
              almostFullLabel={meta.almostFullLabel}
              waitlistLabel={meta.waitlistLabel}
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
