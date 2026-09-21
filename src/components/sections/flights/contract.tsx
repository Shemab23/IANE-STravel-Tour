import { ArrowUpRight, Clock } from "lucide-react";
import { flightContactMetadata } from "@/data/Flights";
import type { ContactChannel } from "@/types/flights";

const linkProps = (channel: ContactChannel) => {
  const isExternal =
    channel.hrefType === "external" || channel.hrefType === "maps";
  return {
    target: isExternal ? "_blank" : undefined,
    rel: isExternal ? "noopener,noreferrer" : undefined,
  };
};

const ContactCard = ({ channel }: { channel: ContactChannel }) => {
  const Icon = channel.icon;
  const isPrimary = channel.variant === "primary";

  const baseClasses =
    "group relative flex flex-col gap-3 rounded-xl p-5 sm:p-6 border transition-all duration-200";

  const variantClasses = isPrimary
    ? "bg-foreground text-background border-foreground hover:bg-foreground/90"
    : "bg-card text-foreground border-border/60 hover:border-primary/40 hover:shadow-md";

  const iconWrap = isPrimary
    ? "bg-background/15 text-background"
    : "bg-primary/10 text-primary";

  const labelColor = isPrimary ? "text-background/70" : "text-muted-foreground";
  const valueColor = isPrimary ? "text-background" : "text-foreground";
  const helperColor = isPrimary
    ? "text-background/60"
    : "text-muted-foreground";
  const arrowColor = isPrimary
    ? "text-background/60 group-hover:text-background"
    : "text-muted-foreground group-hover:text-primary";

  return (
    <a
      href={channel.href}
      aria-label={`${channel.label}: ${channel.value}`}
      {...linkProps(channel)}
      className={`${baseClasses} ${variantClasses} cursor-pointer`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`inline-flex items-center justify-center w-10 h-10 rounded-lg shrink-0 ${iconWrap}`}
        >
          <Icon className="h-5 w-5" />
        </span>

        <ArrowUpRight
          className={`h-4 w-4 mt-1 transition-all duration-200 ${arrowColor} group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
        />
      </div>

      <div className="flex flex-col gap-1">
        <span
          className={`text-[10px] sm:text-xs font-bold tracking-[0.12em] uppercase ${labelColor}`}
        >
          {channel.label}
        </span>
        <span
          className={`text-lg sm:text-xl font-bold leading-tight ${valueColor}`}
        >
          {channel.value}
        </span>
        {channel.helper && (
          <span className={`text-xs sm:text-sm mt-0.5 ${helperColor}`}>
            {channel.helper}
          </span>
        )}
      </div>
    </a>
  );
};

export const FlightContact = () => {
  const meta = flightContactMetadata;
  // const UrgencyIcon = meta.urgency.icon;

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

        {/* Urgency banner
        <div className="flex items-start sm:items-center gap-3 bg-amber-500/10 border border-amber-500/25 rounded-lg px-4 py-3">
          <UrgencyIcon className="h-4 w-4 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-sm font-medium text-amber-900 dark:text-amber-200">
            {meta.urgency.text}
          </p>
        </div> */}

        {/* Contact channels grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {meta.channels.map((channel) => (
            <ContactCard key={channel.id} channel={channel} />
          ))}
        </div>

        {/* Office hours + footer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 border-t border-border/60 pt-8">
          {/* Hours */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-bold tracking-wide uppercase text-foreground">
                {meta.hours.label}
              </h3>
            </div>

            <dl className="flex flex-col gap-2">
              {meta.hours.rows.map((row) => (
                <div
                  key={row.days}
                  className="flex items-center justify-between text-sm border-b border-border/40 pb-2 last:border-b-0"
                >
                  <dt className="text-muted-foreground">{row.days}</dt>
                  <dd className="font-semibold text-foreground">{row.hours}</dd>
                </div>
              ))}
            </dl>

            <p className="text-xs text-muted-foreground">
              {meta.hours.footnote}
            </p>
          </div>

          {/* Footer note */}
          <div className="flex items-start lg:items-end lg:justify-end">
            <p className="text-sm text-muted-foreground lg:text-right max-w-sm">
              {meta.footerNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
