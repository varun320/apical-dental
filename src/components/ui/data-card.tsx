import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface DataCardProps {
  stat?: string;
  label?: string;
  title?: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
}

export function DataCard({
  stat,
  label,
  title,
  description,
  icon: Icon,
  className,
}: DataCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-apical-border bg-surface p-7",
        "shadow-[0_2px_20px_rgba(0,0,0,0.3)]",
        "transition-all duration-300 hover:border-muted/50 hover:shadow-[0_4px_30px_rgba(0,0,0,0.5)]",
        className
      )}
    >
      {Icon && (
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-apical-border bg-void text-cyan">
          <Icon size={20} strokeWidth={1.5} />
        </div>
      )}

      {stat && (
        <div className="font-display text-[44px] font-[800] leading-none tracking-[-1.5px] text-primary-text">
          {stat}
        </div>
      )}

      {label && (
        <p className={cn(
          "font-mono text-[11px] uppercase tracking-[2.5px] text-secondary",
          stat ? "mt-2" : ""
        )}>
          {label}
        </p>
      )}

      {title && (
        <h3 className="font-body text-[18px] font-medium leading-[1.4] text-primary-text">
          {title}
        </h3>
      )}

      <p className={cn(
        "font-body text-[14px] leading-[1.75] text-subtext",
        (title || stat || label) ? "mt-3" : ""
      )}>
        {description}
      </p>
    </div>
  );
}
