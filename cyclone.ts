export const API_ENDPOINTS = {
  openMeteoForecast: "https://api.open-meteo.com/v1/forecast",
  openMeteoAirQuality: "https://air-quality-api.open-meteo.com/v1/air-quality",
  nominatimSearch: "https://nominatim.openstreetmap.org/search",
  nominatimReverse: "https://nominatim.openstreetmap.org/reverse",
  alAdhanTimingsByCoordinates: "https://api.aladhan.com/v1/timings",
  alAdhanCalendarByCoordinates: "https://api.aladhan.com/v1/calendar",
  rainViewerMaps: "https://api.rainviewer.com/public/weather-maps.json",
} as const;

// AlAdhan calculation method: 1 = University of Islamic Sciences, Karachi — widely
// used across South Asia including Bangladesh.
export const AL_ADHAN_CALCULATION_METHOD = 1;

export const QUERY_STALE_TIME = {
  weather: 10 * 60 * 1000, // 10 minutes
  aqi: 15 * 60 * 1000, // 15 minutes
  prayer: 60 * 60 * 1000, // 1 hour
  radar: 5 * 60 * 1000, // 5 minutes
  geocoding: 24 * 60 * 60 * 1000, // 24 hours
} as const;
