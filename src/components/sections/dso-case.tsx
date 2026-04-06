"use client";

import { FadeIn, StaggerFadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/ui/section-header";

const benefits = [
  {
    title: "Robot-as-a-Service",
    value: "$3,667",
    unit: "/mo per robot",
    description:
      "Predictable monthly cost. Includes placement, staff training, location-specific customization, and ongoing service subscription.",
  },
  {
    title: "Built-In Distribution",
    value: "500+",
    unit: "DSO offices",
    description:
      "Dr. Lewis operates inside a 500+ office DSO network. The infrastructure for scale already exists.",
  },
  {
    title: "Zero Regulatory Friction",
    value: "0",
    unit: "barriers",
    description:
      "The dental lab side is completely unregulated. The robot enters through lab work first — zero resistance from licensing boards.",
  },
];

export function DSOCase() {
  return (
    <section className="relative border-t border-titanium-dark bg-void px-6 py-24 lg:py-32 overflow-hidden">
      {/* Subtle horizontal scan lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(154,154,176,0.3) 3px, rgba(154,154,176,0.3) 4px)",
        }}
      />
      {/* Top-center radial glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-160 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(154,154,176,0.04),transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-[1100px]">
        <SectionHeader
          label="For DSOs"
          title="The business case writes itself."
          description="Replace the cost of hiring, training, and retaining lab technicians with a single subscription. AI-backed diagnostics reduce insurance costs. Robotic precision eliminates rework."
        />

        <StaggerFadeIn className="mt-16 grid gap-4 md:grid-cols-3" stagger={0.1}>
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-lg border border-titanium-dark bg-deep-void p-8 transition-colors hover:border-titanium/40"
            >
              <p className="font-display text-[10px] font-semibold uppercase tracking-[2px] text-titanium">
                {b.title}
              </p>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-[36px] font-bold leading-[1.0] tracking-[-1px] text-white-pure">
                  {b.value}
                </span>
                <span className="font-display text-[11px] font-semibold uppercase tracking-[1px] text-titanium">
                  {b.unit}
                </span>
              </div>
              <p className="mt-4 font-body text-[14px] leading-[1.75] text-titanium-light">
                {b.description}
              </p>
            </div>
          ))}
        </StaggerFadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-8 rounded-lg border border-titanium-dark bg-deep-void p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-display text-[24px] font-semibold leading-[1.2] tracking-[-0.5px] text-white-pure">
                  Scale projection
                </h3>
                <p className="mt-2 font-body text-[14px] leading-[1.75] text-titanium-light">
                  250 robots deployed at $3,667/month each. $11M+ projected
                  annual revenue. White-glove onboarding and continuous support
                  at every location.
                </p>
              </div>
              <div className="shrink-0 text-right">
                <div className="font-display text-[44px] font-bold leading-[1.0] tracking-[-1.5px] text-white-pure">
                  $11M+
                </div>
                <p className="mt-1 font-display text-[10px] font-semibold uppercase tracking-[2px] text-titanium">
                  Annual Revenue Target
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
