import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";
import {
  ROUTE_CONFIGS,
  DEFAULT_CONFIG,
  type NavLink as NavLinkMeta,
} from "@/data/Navigation";

/* ---------- Helpers ---------- */

const resolveNavLink = (
  link: NavLinkMeta,
  currentPath: string,
): { kind: "external" | "route" | "hash"; to: string } => {
  if (link.href) return { kind: "external", to: link.href };

  const basePath = link.basePath ?? currentPath;

  if (link.hash) {
    const isSamePath = basePath === currentPath;
    return {
      kind: isSamePath ? "hash" : "route",
      to: `${basePath}${link.hash}`,
    };
  }

  return { kind: "route", to: basePath };
};

const scrollToHash = (hash: string) => {
  const id = hash.replace(/^#/, "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  }
};

/* ---------- Component ---------- */

export function Header() {
  const { theme, toggle } = useTheme();
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const config =
    ROUTE_CONFIGS.find((c) => c.path === pathname) ?? DEFAULT_CONFIG;

  const closeMobile = () => setMobileMenuOpen(false);

  const renderDesktopLink = (link: NavLinkMeta) => {
    const { kind, to } = resolveNavLink(link, pathname);

    if (kind === "external") {
      return (
        <a
          key={link.label}
          href={to}
          target="_blank"
          rel="noreferrer"
          className="text-md font-bold transition-colors hover:text-foreground text-muted-foreground"
        >
          {link.label}
        </a>
      );
    }

    if (kind === "hash") {
      return (
        <button
          key={link.label}
          type="button"
          onClick={() => scrollToHash(link.hash!)}
          className="text-md font-bold transition-colors hover:text-foreground text-muted-foreground cursor-pointer"
        >
          {link.label}
        </button>
      );
    }

    return (
      <NavLink
        key={link.label}
        to={to}
        className={({ isActive }) =>
          `text-sm font-medium transition-colors hover:text-foreground ${
            isActive ? "text-foreground" : "text-muted-foreground"
          }`
        }
      >
        {link.label}
      </NavLink>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-app-brand-bg/15  backdrop-blur-md border-b border-border/40">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Brand */}
        <Link
          to="/"
          onClick={closeMobile}
          className="flex items-center gap-2 font-mono font-semibold text-foreground"
        >
          <img
            src="/favicon.svg"
            alt="IANE's Travel & Tours"
            className="h-8 w-8 rounded-md object-contain"
          />
          <span className="hidden sm:inline">IANE'S TRAVEL & TOURS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {config.links.map(renderDesktopLink)}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {config.cta && (
            <a
              href={config.cta.href}
              target="_blank"
              rel="noreferrer"
              className="hidden md:block font-medium"
            >
              <Button variant="default" size="sm">
                {config.cta.label}
              </Button>
            </a>
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer — keyed on pathname so it resets on any route change */}
      {mobileMenuOpen && (
        <nav
          key={pathname}
          className="border-t border-border bg-background px-6 py-4 md:hidden flex flex-col gap-3"
        >
          {config.links.map((link) => {
            const { kind, to } = resolveNavLink(link, pathname);

            if (kind === "external") {
              return (
                <a
                  key={link.label}
                  href={to}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMobile}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </a>
              );
            }

            if (kind === "hash") {
              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => {
                    scrollToHash(link.hash!);
                    closeMobile();
                  }}
                  className="text-sm font-medium text-left text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </button>
              );
            }

            return (
              <NavLink
                key={link.label}
                to={to}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `text-md font-medium transition-colors hover:text-foreground ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            );
          })}

          {config.cta && (
            <a
              href={config.cta.href}
              target="_blank"
              rel="noreferrer"
              onClick={closeMobile}
              className="pt-2"
            >
              <Button variant="default" size="sm" className="w-full">
                {config.cta.label}
              </Button>
            </a>
          )}
        </nav>
      )}
    </header>
  );
}
