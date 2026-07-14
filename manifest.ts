import Link from "next/link";
import { CloudOff } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
      <GlassCard padding="lg" className="w-full">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-monsoon-500/15 text-monsoon-500">
          <CloudOff size={26} aria-hidden="true" />
        </span>
        <h1 className="mt-5 font-display text-2xl font-semibold">
          This forecast doesn't exist
        </h1>
        <p className="mt-2 text-sm text-secondary">
          The page you're looking for drifted off, like a cloud with nowhere to
          be. Let's get you back to clearer skies.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-monsoon-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-monsoon-600"
        >
          Back to Home
        </Link>
      </GlassCard>
    </div>
  );
}
