import type { MetadataRoute } from "next";

const SITE_URL = "https://deshweather.vercel.app";

const ROUTES = [
  "",
  "/weather",
  "/prayer",
  "/aqi",
  "/maps",
  "/analytics",
  "/cyclone",
  "/about",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
