import { ArrowUpRight, MessageCircle } from "lucide-react";
import { flightDestinationsMetadata } from "@/data/Flights";
import type { DestinationChip } from "@/types/flights";

const applyDestination = (
  briefSectionId: string,
  inputId: string,
  value: string,
) => {
  const section = document.getElementById(briefSectionId);
  const input = document.getElementById(inputId) as HTMLInputElement | null;

  if (input) {
    const setter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      "value",
    )?.set;

    setter?.call(input, value);
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.focus({ preventScroll: true });
  }

  section?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const DestinationChipButton = ({
  chip,
  briefSectionId,
  briefTargetInputId,
}: {
  chip: DestinationChip;
  briefSectionId: string;
  briefTargetInputId: string;
}) => {
  return (
    <button
      type="button"
      onClick={() =>
        applyDestination(briefSectionId, briefTargetInputId, chip.briefValue)
      }
      aria-label={`Start a brief for flights from Kigali to ${chip.label}`}
      className="group inline-flex items-center gap-2 bg-card border border-border/60 hover:border-primary/50 hover:bg-primary/5 rounded-full pl-4 pr-3 py-2 transition-all duration-200 cursor-pointer"
    >
      <span className="text-sm font-semibold text-foreground">
        {chip.label}
      </span>
      <span className="text-[10px] font-bold tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded-full group-hover:bg-primary/15 group-hover:text-primary transition-colors">
        {chip.code}
      </span>
    </button>
  );
};

export const FlightDestinations = () => {
  const meta = flightDestinationsMetadata;

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

        {/* Chip cloud */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {meta.destinations.map((chip) => (
            <DestinationChipButton
              key={chip.id}
              chip={chip}
              briefSectionId={meta.briefSectionId}
              briefTargetInputId={meta.briefTargetInputId}
            />
          ))}
        </div>

        {/* Footer — the single WhatsApp entry point in this section */}
        <div className="border-t border-border/60 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-muted-foreground">{meta.footer.text}</p>

          <a
            href={meta.footer.href}
            target="_blank"
            rel="noopener,noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:text-[#20bd5a] transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span>{meta.footer.ctaLabel}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
