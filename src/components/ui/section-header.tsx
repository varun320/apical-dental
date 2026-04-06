"use client";

import { FadeIn } from "@/components/animations/fade-in";

interface SectionHeaderProps {
  label: string;
  title: string | React.ReactNode;
  description?: string;
  center?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  center = false,
}: SectionHeaderProps) {
  const alignment = center ? "text-center" : "";

  return (
    <div className={alignment}>
      <FadeIn>
        <p className="font-mono text-[11px] font-normal uppercase tracking-[2.5px] text-muted">
          {label}
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="mt-5 font-display text-[clamp(24px,4vw,34px)] font-bold leading-[1.1] tracking-[-1px] text-primary-text">
          {title}
        </h2>
      </FadeIn>

      {description && (
        <FadeIn delay={0.2}>
          <p
            className={`mt-6 font-body text-[16px] leading-[1.8] text-subtext ${
              center ? "mx-auto max-w-[560px]" : "max-w-[600px]"
            }`}
          >
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
