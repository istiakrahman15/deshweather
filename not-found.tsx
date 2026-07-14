import type { Metadata } from "next";
import { AnimatedSky } from "@/components/shared/animated-sky";
import { HeroGlance } from "@/components/home/hero-glance";
import { FeatureGrid } from "@/components/home/feature-grid";

export const metadata: Metadata = {
  title: "DeshWeather — Bangladesh's Weather, Beautifully Told",
};

export default function HomePage() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:pt-20">
        <AnimatedSky className="mx-4 rounded-[2.5rem] sm:mx-auto sm:max-w-6xl" />

        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-monsoon-500/10 px-3 py-1 text-xs font-medium text-monsoon-600 dark:text-monsoon-300">
              Built for Bangladesh, district by district
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Weather that reads
              <br className="hidden sm:block" /> the monsoon like a local.
            </h1>
            <p className="mt-5 text-base text-secondary sm:text-lg">
              Live forecasts, prayer times, air quality, rain radar, and cyclone
              tracking — all in one calm, glass-clear view.
            </p>
          </div>

          <HeroGlance />
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Everything the sky is doing
          </h2>
          <p className="mt-2 max-w-2xl text-secondary">
            Six views into today, built on free, open data — no sign-up, no
            backend, just the forecast.
          </p>
          <div className="mt-8">
            <FeatureGrid />
          </div>
        </div>
      </section>
    </div>
  );
}
