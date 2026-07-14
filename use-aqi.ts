import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: "sm" | "md" | "lg";
}

const PADDING_MAP = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function GlassCard({
  children,
  className,
  padding = "md",
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-panel relative rounded-3xl shadow-glass",
        PADDING_MAP[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
