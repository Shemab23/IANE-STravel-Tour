import type { HomeDataType, Service } from "@/types/home";
import { RenderIcon } from "./RenderIcon";

export function ServiceCard({
  service,
  className = "",
}: {
  service: HomeDataType["service"][Service];
  className?: string;
}) {
  const [primary, ...rest] = service.CAT;

  return (
    <a
      href={service.href}
      className={`media-card group relative z-10 w-full px-6 pb-16 pt-32 sm:px-10 sm:pb-20 md:px-14 min-h-[86svh] items-end ${className}`}
    >
      <img
        src={service.image.src}
        alt={service.image.alt}
        className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--contrast) 15%, transparent) 0%, color-mix(in srgb, var(--contrast) 78%, transparent) 100%)",
        }}
      />

      <div className="max-w-2xl">
        <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
          {service.headline}
        </h2>

        <p className="mt-5 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
          {service.description}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          {primary && (
            <span
              className="inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-base font-medium text-white shadow-sm"
              style={{ backgroundColor: "var(--brand)" }}
            >
              {/* 2. Pass the component reference directly */}
              <RenderIcon icon={primary.icon} />
              {primary.label}
            </span>
          )}

          {rest.map((cta) => (
            <span
              key={cta.label}
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 text-base font-medium text-white/90"
            >
              {/* 3. Pass the component reference directly */}
              <RenderIcon icon={cta.icon} />
              {cta.label}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
