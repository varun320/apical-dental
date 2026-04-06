"use client";

import { StaggerFadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { BorderBeam } from "@/components/ui/border-beam";
import { NumberTicker } from "@/components/ui/number-ticker";

const problems = [
  {
    value: 5,
    suffix: "yr",
    label: "Training Curve",
    description:
      "It takes 5 years to train a dental lab technician. Most leave for better pay before completing training.",
  },
  {
    value: 3,
    display: "3/10",
    label: "Quality Standard",
    description:
      "Only 3 out of 10 dental procedures meet the doctor's own quality standard. The precision gap is real.",
  },
  {
    value: 0,
    suffix: "",
    label: "New Schools",
    description:
      "No new schools teach the craft. The pipeline of skilled dental lab technicians has dried up entirely.",
  },
];

export function Problem() {
  return (
    <section className="relative border-t border-titanium-dark bg-void px-6 py-24 lg:py-32 overflow-hidden">
      {/* Subtle top-right glow */}
      <div className="pointer-events-none absolute -top-50 -right-50 h-125 w-125 rounded-full bg-[radial-gradient(circle,rgba(154,154,176,0.04),transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-[1100px]">
        <SectionHeader
          label="The Crisis"
          title={<>The future of dental surgery<br />starts in the lab.</>}
          description="Dental lab technicians are retiring with no replacements. The industry faces a workforce crisis with no scalable solution — until now. Robotics is the only path forward."
        />

        <StaggerFadeIn className="mt-16 grid gap-4 md:grid-cols-3" stagger={0.12}>
          {problems.map((p, i) => (
            <div
              key={p.label}
              className="relative overflow-hidden rounded-lg border border-titanium-dark bg-deep-void p-8 transition-colors hover:border-titanium/40"
            >
              <div className="font-display text-[36px] font-bold leading-none tracking-[-1px] text-white-pure">
                {p.display ?? (
                  <>
                    <NumberTicker value={p.value} delay={0.5 + i * 0.2} />
                    {p.suffix}
                  </>
                )}
              </div>
              <p className="mt-2 font-display text-[10px] font-semibold uppercase tracking-[2px] text-titanium">
                {p.label}
              </p>
              <p className="mt-4 font-body text-[14px] leading-[1.75] text-titanium-light">
                {p.description}
              </p>
              {i === 0 && (
                <BorderBeam
                  size={80}
                  duration={8}
                  colorFrom="#9A9AB0"
                  colorTo="#3A3A4E"
                  borderWidth={1}
                />
              )}
            </div>
          ))}
        </StaggerFadeIn>
      </div>
    </section>
  );
}
