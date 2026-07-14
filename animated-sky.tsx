"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center px-4 text-center">
          <GlassCard padding="lg" className="w-full">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-ember-500/15 text-ember-500">
              <AlertTriangle size={26} aria-hidden="true" />
            </span>
            <h1 className="mt-5 font-display text-2xl font-semibold">
              Something went wrong
            </h1>
            <p className="mt-2 text-sm text-secondary">
              The forecast hit a snag on our end. Try again in a moment.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-monsoon-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-monsoon-600"
            >
              Try again
            </button>
          </GlassCard>
        </div>
      </body>
    </html>
  );
}
