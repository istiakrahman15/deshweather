"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, CloudSun } from "lucide-react";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { href: "/weather", label: "Weather" },
  { href: "/prayer", label: "Prayer" },
  { href: "/aqi", label: "AQI" },
  { href: "/maps", label: "Maps" },
  { href: "/analytics", label: "Analytics" },
  { href: "/cyclone", label: "Cyclone" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl glass-panel px-4 py-3 shadow-glass">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-monsoon-500/15 text-monsoon-500">
            <CloudSun size={18} strokeWidth={2.25} aria-hidden="true" />
          </span>
          DeshWeather
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-monsoon-500/15 text-monsoon-600 dark:text-monsoon-300"
                    : "text-secondary hover:text-monsoon-600 dark:hover:text-monsoon-300",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-secondary hover:text-monsoon-600 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl glass-panel p-3 shadow-glass lg:hidden"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-monsoon-500/15 text-monsoon-600 dark:text-monsoon-300"
                  : "text-secondary hover:text-monsoon-600",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
