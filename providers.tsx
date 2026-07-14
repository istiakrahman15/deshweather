import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DeshWeather — Bangladesh's Weather, Beautifully Told",
    short_name: "DeshWeather",
    description:
      "Live weather, air quality, prayer times, rain radar, and cyclone tracking for Bangladesh.",
    start_url: "/",
    display: "standalone",
    background_color: "#07090D",
    theme_color: "#0E7F67",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
