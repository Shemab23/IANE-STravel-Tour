import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { footerMetadata, type FooterLink } from "@/data/Footer";

const LinkItem = ({ link }: { link: FooterLink }) => {
  const className =
    "text-xs text-muted-foreground hover:text-foreground transition-colors";

  if (link.href) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener,noreferrer"
        className={className}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link to={link.to ?? "/"} className={className}>
      {link.label}
    </Link>
  );
};

export function Footer() {
  const meta = footerMetadata;
  const year = new Date().getFullYear();

  return (
    <footer className="w-full  border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Row 1: brand + contact + hours */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6 border-b border-border/40">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src={meta.brand.logoSrc}
              alt={meta.brand.logoAlt}
              className="h-8 w-8 rounded-md object-contain"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-foreground leading-tight">
                {meta.brand.name}
              </span>
              <span className="text-xs text-muted-foreground leading-tight mt-0.5">
                {meta.brand.tagline}
              </span>
            </div>
          </div>

          {/* Contact + hours */}
          <div className="flex flex-col gap-2 md:items-end">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {meta.contact.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener,noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon className="h-3.5 w-3.5 text-primary" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-primary" />
              {meta.hours}
            </span>
          </div>
        </div>

        {/* Row 2: copyright + legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>
            &copy; {year} {meta.legal.copyrightHolder}. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            {meta.legal.links.map((link) => (
              <LinkItem key={link.label} link={link} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
