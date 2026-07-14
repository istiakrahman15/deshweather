"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

function getSkyPhase(): "dawn" | "day" | "dusk" | "night" {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 7) return "dawn";
  if (hour >= 7 && hour < 17) return "day";
  if (hour >= 17 && hour < 19) return "dusk";
  return "night";
}

const PHASE_GRADIENTS: Record<string, string> = {
  dawn: "from-ember-300/40 via-sky-dawn/30 to-transparent",
  day: "from-sky-day/25 via-monsoon-200/20 to-transparent",
  dusk: "from-ember-500/30 via-sky-dusk/30 to-transparent",
  night: "from-sky-night/50 via-monsoon-900/20 to-transparent",
};

export function AnimatedSky({ className }: { className?: string }) {
  const [phase, setPhase] = useState<"dawn" | "day" | "dusk" | "night">("day");

  useEffect(() => {
    setPhase(getSkyPhase());
    const interval = setInterval(() => setPhase(getSkyPhase()), 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b transition-colors duration-[3000ms]",
          PHASE_GRADIENTS[phase],
        )}
      />

      {/* Drifting monsoon cloud band */}
      <svg
        className="absolute -left-1/4 top-8 h-40 w-[150%] animate-drift opacity-40 dark:opacity-25"
        viewBox="0 0 800 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,120 Q100,60 220,100 T440,90 T660,110 T900,80 V200 H0 Z"
          fill="url(#cloudGradient)"
        />
        <defs>
          <linearGradient id="cloudGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.5" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Ambient floating orb — echoes a rain droplet / monsoon motif */}
      <div className="absolute right-[8%] top-16 h-24 w-24 animate-float-slow rounded-full bg-monsoon-400/20 blur-2xl sm:h-40 sm:w-40" />
      <div className="absolute left-[12%] top-32 h-16 w-16 animate-float-slow rounded-full bg-ember-400/15 blur-2xl [animation-delay:1.5s] sm:h-28 sm:w-28" />
    </div>
  );
}
