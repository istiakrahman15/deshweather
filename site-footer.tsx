import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Providers } from "./providers";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const SITE_URL = "https://deshweather.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DeshWeather — Bangladesh's Weather, Beautifully Told",
    template: "%s · DeshWeather",
  },
  description:
    "Live weather, air quality, prayer times, rain radar, and cyclone tracking for Bangladesh — fast, accurate, and built for every district.",
  keywords: [
    "Bangladesh weather",
    "Dhaka weather",
    "prayer times Bangladesh",
    "AQI Bangladesh",
    "cyclone tracker Bay of Bengal",
    "rain radar Bangladesh",
  ],
  authors: [{ name: "Istiak Rahman", url: "https://github.com/istiakrahman15" }],
  creator: "Istiak Rahman",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "DeshWeather",
    title: "DeshWeather — Bangladesh's Weather, Beautifully Told",
    description:
      "Live weather, air quality, prayer times, rain radar, and cyclone tracking for Bangladesh.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "DeshWeather" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeshWeather — Bangladesh's Weather, Beautifully Told",
    description:
      "Live weather, air quality, prayer times, rain radar, and cyclone tracking for Bangladesh.",
    images: ["/og-image.png"],
    creator: "@Istiakrahman15",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EAFBF7" },
    { media: "(prefers-color-scheme: dark)", color: "#07090D" },
  ],
};

const THEME_INIT_SCRIPT = `
(function() {
  try {
    var stored = localStorage.getItem('deshweather-theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} font-body antialiased`}
      >
        <Providers>
          <div className="relative flex min-h-dvh flex-col">
            <SiteHeader />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
