import type { WeatherCode, WeatherCondition } from "@/types";

interface WeatherCodeMeta {
  condition: WeatherCondition;
  label: string;
  icon:
    | "sun"
    | "moon"
    | "cloud-sun"
    | "cloud-moon"
    | "cloud"
    | "clouds"
    | "fog"
    | "drizzle"
    | "rain"
    | "rain-heavy"
    | "sleet"
    | "snow"
    | "thunder"
    | "thunder-hail";
}

export const WEATHER_CODE_MAP: Record<WeatherCode, WeatherCodeMeta> = {
  0: { condition: "clear", label: "Clear sky", icon: "sun" },
  1: { condition: "mainly-clear", label: "Mainly clear", icon: "cloud-sun" },
  2: { condition: "partly-cloudy", label: "Partly cloudy", icon: "cloud-sun" },
  3: { condition: "overcast", label: "Overcast", icon: "clouds" },
  45: { condition: "fog", label: "Fog", icon: "fog" },
  48: { condition: "fog", label: "Depositing rime fog", icon: "fog" },
  51: { condition: "drizzle", label: "Light drizzle", icon: "drizzle" },
  53: { condition: "drizzle", label: "Drizzle", icon: "drizzle" },
  55: { condition: "drizzle", label: "Dense drizzle", icon: "drizzle" },
  56: { condition: "freezing-drizzle", label: "Freezing drizzle", icon: "drizzle" },
  57: { condition: "freezing-drizzle", label: "Dense freezing drizzle", icon: "drizzle" },
  61: { condition: "rain", label: "Light rain", icon: "rain" },
  63: { condition: "rain", label: "Rain", icon: "rain" },
  65: { condition: "rain", label: "Heavy rain", icon: "rain-heavy" },
  66: { condition: "freezing-rain", label: "Freezing rain", icon: "sleet" },
  67: { condition: "freezing-rain", label: "Heavy freezing rain", icon: "sleet" },
  71: { condition: "snow", label: "Light snow", icon: "snow" },
  73: { condition: "snow", label: "Snow", icon: "snow" },
  75: { condition: "snow", label: "Heavy snow", icon: "snow" },
  77: { condition: "snow-grains", label: "Snow grains", icon: "snow" },
  80: { condition: "rain-showers", label: "Light showers", icon: "rain" },
  81: { condition: "rain-showers", label: "Showers", icon: "rain" },
  82: { condition: "rain-showers", label: "Violent showers", icon: "rain-heavy" },
  85: { condition: "snow-showers", label: "Light snow showers", icon: "snow" },
  86: { condition: "snow-showers", label: "Heavy snow showers", icon: "snow" },
  95: { condition: "thunderstorm", label: "Thunderstorm", icon: "thunder" },
  96: { condition: "thunderstorm-hail", label: "Thunderstorm with hail", icon: "thunder-hail" },
  99: { condition: "thunderstorm-hail", label: "Severe thunderstorm with hail", icon: "thunder-hail" },
};

export function getWeatherMeta(code: WeatherCode): WeatherCodeMeta {
  return WEATHER_CODE_MAP[code] ?? WEATHER_CODE_MAP[3];
}
