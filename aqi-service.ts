import Link from "next/link";
import {
  CloudSun,
  Compass,
  Wind,
  Map as MapIcon,
  LineChart,
  Waves,
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

const FEATURES = [
  {
    href: "/weather",
    icon: CloudSun,
    title: "Weather",
    description: "Hourly and 7-day forecasts, tuned for the monsoon.",
  },
  {
    href: "/prayer",
    icon: Compass,
    title: "Prayer Times",
    description: "Fajr to Isha, Hijri date, Sehri & Iftar countdowns.",
  },
  {
    href: "/aqi",
    icon: Wind,
    title: "Air Quality",
    description: "Real-time AQI, PM2.5, and health guidance.",
  },
  {
    href: "/maps",
    icon: MapIcon,
    title: "Maps & Radar",
    description: "Live rain radar over every district.",
  },
  {
    href: "/analytics",
    icon: LineChart,
    title: "Analytics",
    description: "Temperature, humidity, and pressure trends.",
  },
  {
    href: "/cyclone",
    icon: Waves,
    title: "Cyclone Tracker",
    description: "Bay of Bengal systems and safety guidance.",
  },
];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {FEATURES.map(({ href, icon: Icon, title, description }) => (
        <Link key={href} href={href} className="group block">
          <GlassCard
            padding="md"
            className="h-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-glass-lg"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-monsoon-500/15 text-monsoon-500">
              <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-secondary">{description}</p>
          </GlassCard>
        </Link>
      ))}
    </div>
  );
}
