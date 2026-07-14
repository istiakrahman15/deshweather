@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-display: "Clash Display", "Cal Sans", ui-sans-serif, system-ui, sans-serif;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  --glass-bg: rgba(255, 255, 255, 0.55);
  --glass-border: rgba(255, 255, 255, 0.6);
  --page-bg-from: #eef4f2;
  --page-bg-to: #dcece6;
  --text-primary: #0A1410;
  --text-secondary: rgba(10, 20, 16, 0.62);
}

.dark {
  --glass-bg: rgba(16, 22, 26, 0.45);
  --glass-border: rgba(255, 255, 255, 0.08);
  --page-bg-from: #060a10;
  --page-bg-to: #0a1a16;
  --text-primary: #F3FBF8;
  --text-secondary: rgba(243, 251, 248, 0.64);
}

* {
  border-color: var(--glass-border);
}

html {
  scroll-behavior: smooth;
}

body {
  color: var(--text-primary);
  background: radial-gradient(
      120% 120% at 10% 0%,
      var(--page-bg-to) 0%,
      var(--page-bg-from) 55%
    ),
    var(--page-bg-from);
  min-height: 100dvh;
  font-family: var(--font-body);
  overflow-x: hidden;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: var(--glass-border);
  border-radius: 999px;
}

.glass-panel {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
}

.text-secondary {
  color: var(--text-secondary);
}

/* Visible focus ring for keyboard navigation, WCAG-compliant */
:focus-visible {
  outline: 2px solid #2CBB99;
  outline-offset: 3px;
  border-radius: 4px;
}
