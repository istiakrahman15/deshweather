# DeshWeather

Bangladesh-first weather platform — live weather, prayer times, air quality,
rain radar, analytics, and cyclone tracking, built entirely client-side on
free public APIs.

## Stack

Next.js 15 (App Router) · TypeScript (strict) · Tailwind CSS · Framer Motion ·
TanStack Query · React Leaflet · Recharts · Lucide React

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Architecture

```
app/            routes (Home, Weather, Prayer, AQI, Maps, Analytics, Cyclone, About)
components/     UI, organized by domain (weather/, prayer/, aqi/, maps/, ...)
hooks/          React Query hooks + browser APIs (geolocation, theme)
services/       all external API calls — never called directly from UI
types/          shared TypeScript domain types
lib/            cross-cutting utilities (query client, classname merge)
utils/          formatting, date/time, AQI classification helpers
constants/      API endpoints, weather code maps, district seed data
```

No backend, no database, no authentication — everything runs in the browser
against Open-Meteo, AlAdhan, Nominatim, and RainViewer.

## Build progress

- [x] Phase 1 — Foundation: project scaffold, design tokens, domain types,
      services, hooks, theme system, layout, homepage
- [ ] Phase 2 — Weather page (current, hourly, 7-day)
- [ ] Phase 3 — Prayer Times page
- [ ] Phase 4 — AQI page
- [ ] Phase 5 — Maps & Radar page
- [ ] Phase 6 — Analytics page
- [ ] Phase 7 — Cyclone Tracker page
- [ ] Phase 8 — About page + final SEO/performance polish

## Deployment

Push to GitHub, then import the repo on Vercel — no environment variables
required.
