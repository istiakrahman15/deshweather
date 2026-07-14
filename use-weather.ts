import Link from "next/link";
import { Github, Instagram, Send, Mail } from "lucide-react";

const SOCIAL_LINKS = [
  { href: "https://github.com/istiakrahman15", label: "GitHub", icon: Github },
  { href: "https://instagram.com/Istiakrahman_15", label: "Instagram", icon: Instagram },
  { href: "https://x.com/Istiakrahman15", label: "X", icon: XIcon },
  { href: "https://t.me/istiakrahman", label: "Telegram", icon: Send },
  { href: "mailto:bd.istiakrahman@gmail.com", label: "Email", icon: Mail },
];

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="px-4 pb-6 pt-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 rounded-2xl glass-panel px-6 py-6 text-center shadow-glass sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-secondary">
          Made with <span className="text-ember-500">❤</span> by{" "}
          <Link
            href="https://github.com/istiakrahman15"
            className="font-medium text-monsoon-600 hover:underline dark:text-monsoon-300"
          >
            Istiak Rahman
          </Link>
        </p>

        <div className="flex items-center gap-1">
          {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-secondary transition-colors hover:text-monsoon-600 dark:hover:text-monsoon-300"
            >
              <Icon size={18} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
