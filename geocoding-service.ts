import {
  Sun,
  Moon,
  CloudSun,
  CloudMoon,
  Cloud,
  Cloudy,
  CloudFog,
  CloudDrizzle,
  CloudRain,
  CloudRainWind,
  CloudSnow,
  CloudLightning,
  Zap,
} from "lucide-react";
import { getWeatherMeta } from "@/constants/weather-codes";
import type { WeatherCode } from "@/types";
import { cn } from "@/lib/cn";

interface WeatherIconProps {
  code: WeatherCode;
  isDay: boolean;
  size?: number;
  className?: string;
}

export function WeatherIcon({ code, isDay, size = 24, className }: WeatherIconProps) {
  const { icon } = getWeatherMeta(code);

  const iconMap = {
    sun: isDay ? Sun : Moon,
    moon: Moon,
    "cloud-sun": isDay ? CloudSun : CloudMoon,
    "cloud-moon": CloudMoon,
    cloud: Cloud,
    clouds: Cloudy,
    fog: CloudFog,
    drizzle: CloudDrizzle,
    rain: CloudRain,
    "rain-heavy": CloudRainWind,
    sleet: CloudRainWind,
    snow: CloudSnow,
    "thunder": CloudLightning,
    "thunder-hail": Zap,
  } as const;

  const Icon = iconMap[icon];

  return (
    <Icon
      size={size}
      strokeWidth={1.75}
      className={cn(
        icon === "sun" && isDay && "text-ember-400",
        icon === "sun" && !isDay && "text-monsoon-200",
        (icon === "rain" || icon === "rain-heavy" || icon === "drizzle") && "text-sky-day",
        (icon === "thunder" || icon === "thunder-hail") && "text-ember-500",
        className,
      )}
      aria-hidden="true"
    />
  );
}
