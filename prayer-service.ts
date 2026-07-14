"use client";

import { useEffect } from "react";
import { MapPin, LocateFixed } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { WeatherIcon } from "@/components/weather/weather-icon";
import { useGeolocation } from "@/hooks/use-geolocation";
import { useWeather } from "@/hooks/use-weather";
import { getWeatherMeta } from "@/constants/weather-codes";
import { formatTemperature, formatHumidity, windDirectionToCompass, formatWindSpeed } from "@/utils/format";
import { DEFAULT_LOCATION } from "@/constants/districts";

export function HeroGlance() {
  const { coordinates, isCurrentLocation, isLoading, error, requestLocation } = useGeolocation();
  const { data, isPending, isError } = useWeather(coordinates.latitude, coordinates.longitude);

  useEffect(() => {
    requestLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const locationLabel = isCurrentLocation ? "Your location" : DEFAULT_LOCATION.name;

  return (
    <GlassCard padding="lg" className="w-full max-w-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-sm text-secondary">
          <MapPin size={14} aria-hidden="true" />
          <span>{locationLabel}</span>
        </div>
        <button
          type="button"
          onClick={requestLocation}
          disabled={isLoading}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-secondary transition-colors hover:text-monsoon-600 disabled:opacity-50 dark:hover:text-monsoon-300"
          aria-label="Use my current location"
        >
          <LocateFixed size={16} className={isLoading ? "animate-pulse-soft" : ""} />
        </button>
      </div>

      {isPending && (
        <div className="mt-6 space-y-3" role="status" aria-label="Loading weather">
          <div className="h-16 w-32 animate-pulse rounded-xl bg-black/5 dark:bg-white/5" />
          <div className="h-4 w-40 animate-pulse rounded-lg bg-black/5 dark:bg-white/5" />
        </div>
      )}

      {isError && (
        <p className="mt-6 text-sm text-secondary">
          Couldn't load live weather right now. Please try again shortly.
        </p>
      )}

      {data && (
        <>
          <div className="mt-4 flex items-center gap-4">
            <WeatherIcon
              code={data.current.weatherCode}
              isDay={data.current.isDay}
              size={64}
            />
            <div>
              <p className="font-display text-6xl font-semibold leading-none tracking-tight">
                {formatTemperature(data.current.temperature)}
              </p>
              <p className="mt-1 text-sm text-secondary">
                {getWeatherMeta(data.current.weatherCode).label} · Feels{" "}
                {formatTemperature(data.current.apparentTemperature)}
              </p>
            </div>
          </div>

          <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-4 text-center">
            <div>
              <dt className="text-xs text-secondary">Humidity</dt>
              <dd className="mt-1 font-medium">{formatHumidity(data.current.humidity)}</dd>
            </div>
            <div>
              <dt className="text-xs text-secondary">Wind</dt>
              <dd className="mt-1 font-medium">
                {windDirectionToCompass(data.current.windDirection)}{" "}
                {formatWindSpeed(data.current.windSpeed)}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-secondary">UV Index</dt>
              <dd className="mt-1 font-medium">{Math.round(data.current.uvIndex)}</dd>
            </div>
          </dl>
        </>
      )}

      {error && <p className="mt-3 text-xs text-secondary">{error}</p>}
    </GlassCard>
  );
}
