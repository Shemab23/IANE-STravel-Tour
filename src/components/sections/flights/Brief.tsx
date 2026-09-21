import React, { useState } from "react";
import { Plane, Calendar, Users, Briefcase, Phone } from "lucide-react";
import { flightBriefMetadata } from "@/data/Flights";
import type { FlightSearchParams, TripType, CabinClass } from "@/types/flights";

const todayISO = () => new Date().toISOString().split("T")[0];

const formatLabel = (value: string) =>
  value.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

export const FlightBrief = () => {
  const meta = flightBriefMetadata;

  const [form, setForm] = useState<FlightSearchParams>(meta.defaults);
  const [error, setError] = useState<string | null>(null);

  const update = <K extends keyof FlightSearchParams>(
    field: K,
    value: FlightSearchParams[K],
  ) => {
    setForm((prev) => {
      const next = { ...prev, [field]: value };

      if (field === "tripType" && value === "one-way") next.returnDate = "";

      if (
        field === "departureDate" &&
        next.returnDate &&
        next.returnDate < (value as string)
      ) {
        next.returnDate = "";
      }

      return next;
    });
    if (error) setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.arrivalAirport.trim())
      return setError(meta.errors.missingDestination);
    if (!form.departureDate) return setError(meta.errors.missingDepartureDate);
    if (form.tripType === "round-trip" && !form.returnDate)
      return setError(meta.errors.missingReturnDate);
    if (form.tripType === "round-trip" && form.returnDate < form.departureDate)
      return setError(meta.errors.invalidReturnDate);

    const lines: string[] = [
      "Hello IANE's Travel Team 👋",
      "",
      "I'd like help arranging a flight. Here's a quick brief:",
      "------------------------------------------",
      `✈️ Trip Type: ${formatLabel(form.tripType)}`,
      `🛫 From: ${form.departureAirport}`,
      `🛬 To: ${form.arrivalAirport}`,
      `📅 Travel Window: ${form.departureDate}${
        form.tripType === "round-trip" && form.returnDate
          ? ` → ${form.returnDate}`
          : ""
      }`,
      `👥 Travelers: ${form.passengerCount}`,
      `🧳 Cabin: ${formatLabel(form.cabinClass)}`,
    ];

    if (form.notes.trim()) lines.push(`📝 Notes: ${form.notes.trim()}`);

    lines.push(
      "------------------------------------------",
      "No rush — happy to discuss options and pricing when you're free.",
    );

    const encoded = encodeURIComponent(lines.join("\n"));
    window.open(
      `https://wa.me/${meta.whatsappNumber}?text=${encoded}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section id={meta.id} className="relative w-full px-6 py-20 md:py-24">
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-8">
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

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="w-full bg-card border border-border/60 rounded-xl p-6 md:p-8 shadow-sm flex flex-col gap-6"
        >
          {/* Trip type */}
          <fieldset className="flex flex-wrap gap-6 border-b border-border/60 pb-4">
            <legend className="sr-only">Trip type</legend>
            {meta.tripTypeOptions.map((opt) => (
              <label
                key={opt.value}
                className="flex items-center gap-2 text-sm font-medium text-foreground cursor-pointer select-none"
              >
                <input
                  type="radio"
                  name="tripType"
                  value={opt.value}
                  checked={form.tripType === opt.value}
                  onChange={() => update("tripType", opt.value as TripType)}
                  className="accent-primary h-4 w-4"
                />
                {opt.label}
              </label>
            ))}
          </fieldset>

          {/* Route + dates */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* From (locked) */}
            <div className="md:col-span-4 flex flex-col gap-1.5">
              <label
                htmlFor="from"
                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5"
              >
                <Plane className="h-3 w-3" />
                {meta.fields.from.label}
              </label>
              <input
                id="from"
                type="text"
                // disabled
                // value={form.departureAirport}
                required
                placeholder={meta.fields.from.placeholder}
                value={form.departureAirport}
                onChange={(e) => update("departureAirport", e.target.value)}
                className="w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm font-medium text-foreground placeholder:text-muted-foreground/25 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* To */}
            <div className="md:col-span-4 flex flex-col gap-1.5">
              <label
                htmlFor="to"
                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5"
              >
                <Plane className="h-3 w-3 rotate-90 text-primary" />
                {meta.fields.to.label}
              </label>
              <input
                id="to"
                type="text"
                required
                placeholder={meta.fields.to.placeholder}
                value={form.arrivalAirport}
                onChange={(e) => update("arrivalAirport", e.target.value)}
                className="w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm font-medium text-foreground placeholder:text-muted-foreground/25 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Dates */}
            <div className="md:col-span-4 grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="departDate"
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5"
                >
                  <Calendar className="h-3 w-3" />
                  {meta.fields.departDate.label}
                </label>
                <input
                  id="departDate"
                  type="date"
                  required
                  min={todayISO()}
                  value={form.departureDate}
                  onChange={(e) => update("departureDate", e.target.value)}
                  className="w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm font-medium text-foreground/25 focus:outline-none focus:border-primary cursor-pointer"
                />
              </div>

              {form.tripType === "round-trip" && (
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="returnDate"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5"
                  >
                    <Calendar className="h-3 w-3" />
                    {meta.fields.returnDate.label}
                  </label>
                  <input
                    id="returnDate"
                    type="date"
                    required
                    min={form.departureDate || todayISO()}
                    value={form.returnDate}
                    onChange={(e) => update("returnDate", e.target.value)}
                    className="w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm font-medium text-foreground/25 focus:outline-none focus:border-primary cursor-pointer"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Travelers + Cabin */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border/60 pt-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="passengers"
                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5"
              >
                <Users className="h-3 w-3" />
                {meta.fields.passengers.label}
              </label>
              <select
                id="passengers"
                value={form.passengerCount}
                onChange={(e) =>
                  update("passengerCount", parseInt(e.target.value, 10))
                }
                className="w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm font-medium text-foreground/25 focus:outline-none focus:border-primary cursor-pointer"
              >
                {Array.from(
                  {
                    length:
                      meta.passengerRange.max - meta.passengerRange.min + 1,
                  },
                  (_, i) => meta.passengerRange.min + i,
                ).map((n) => (
                  <option key={n} value={n}>
                    {n} Traveler{n > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="cabin"
                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5"
              >
                <Briefcase className="h-3 w-3" />
                {meta.fields.cabin.label}
              </label>
              <select
                id="cabin"
                value={form.cabinClass}
                onChange={(e) =>
                  update("cabinClass", e.target.value as CabinClass)
                }
                className="w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm font-medium text-foreground/25 focus:outline-none focus:border-primary cursor-pointer"
              >
                {meta.cabinOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Notes */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="notes"
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              {meta.fields.notes.label}
            </label>
            <textarea
              id="notes"
              rows={2}
              placeholder={meta.fields.notes.placeholder}
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              className="w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm font-medium text-foreground placeholder:text-muted-foreground/25 focus:outline-none focus:border-primary resize-none"
            />
          </div>

          {/* Inline error */}
          {error && (
            <p role="alert" className="text-sm font-medium text-red-500">
              {error}
            </p>
          )}

          {/* Submit + helper */}
          <div className="flex flex-col gap-3 border-t border-border/60 pt-5">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base py-3 px-6 rounded-lg shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/30 transition-all duration-200"
            >
              <meta.submit.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>{meta.submit.label}</span>
            </button>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-muted-foreground">
              <span>{meta.submit.helper}</span>
              <a
                href={meta.hurryLink.href}
                className="inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>
                  {meta.hurryLink.text} {meta.hurryLink.label}
                </span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
