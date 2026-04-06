"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { Marquee } from "@/components/ui/marquee";
import { DollarSign, Network, ShieldCheck } from "lucide-react";

const benefits = [
  { title: "Robot-as-a-Service", value: "$3,667", unit: "/mo per robot", icon: DollarSign, description: "Predictable monthly cost. Includes placement, staff training, location-specific customization, and ongoing service subscription." },
  { title: "Built-In Distribution", value: "500+", unit: "DSO offices", icon: Network, description: "Dr. Lewis operates inside a 500+ office DSO network. The infrastructure for scale already exists." },
  { title: "Zero Regulatory Friction", value: "0", unit: "barriers", icon: ShieldCheck, description: "The dental lab side is completely unregulated. The robot enters through lab work first — zero resistance from licensing boards." },
];

const marqueeItems = [
  "Prosthetic Fabrication", "AI Diagnostics", "Sterilization", "Inventory Management",
  "Patient Communication", "Insurance Documentation", "Facility Maintenance",
  "Staff Training", "Real-time Translation", "Supply Ordering",
];

export function DSOCase() {
  return (
    <section className="relative border-t border-apical-border bg-void px-6 py-28 lg:py-36 lg:px-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(139,139,168,0.3) 3px, rgba(139,139,168,0.3) 4px)" }} />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(0,212,200,0.03),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-[1100px]">
        <SectionHeader
          label="For DSOs"
          title="The business case writes itself."
          description="Replace the cost of hiring, training, and retaining lab technicians with a single subscription."
        />

        {/* Marquee ticker of capabilities */}
        <div className="mt-14 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s]">
            {marqueeItems.map((item) => (
              <span key={item} className="mx-4 inline-block rounded-full border border-apical-border bg-surface px-5 py-2 font-mono text-[11px] uppercase tracking-[2px] text-secondary">
                {item}
              </span>
            ))}
          </Marquee>
        </div>

        {/* Benefit cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {benefits.map((b, i) => (
            <BlurFade key={b.title} delay={0.1 + i * 0.1} inView>
              <MagicCard
                className="h-full rounded-xl border border-apical-border bg-surface p-8 shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
                gradientColor="rgba(0,212,200,0.06)"
                gradientSize={200}
              >
                <div className="relative z-10">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-apical-border bg-void text-cyan">
                    <b.icon size={18} strokeWidth={1.5} />
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-[2.5px] text-secondary">{b.title}</p>
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="font-display text-[40px] font-[800] leading-none tracking-[-1.5px] text-cyan">{b.value}</span>
                    <span className="font-mono text-[11px] uppercase tracking-[1px] text-secondary">{b.unit}</span>
                  </div>
                  <p className="mt-5 font-body text-[14px] leading-[1.75] text-subtext">{b.description}</p>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>

        {/* Scale projection */}
        <BlurFade delay={0.4} inView>
          <div className="mt-8 overflow-hidden rounded-xl border border-apical-border bg-surface p-10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-display text-[24px] font-semibold leading-[1.2] tracking-[-0.5px] text-primary-text">Scale projection</h3>
                <p className="mt-3 max-w-[480px] font-body text-[14px] leading-[1.75] text-subtext">
                  250 robots deployed at $3,667/month each. $11M+ projected annual revenue.
                  White-glove onboarding and continuous support at every location.
                </p>
              </div>
              <div className="shrink-0 text-right">
                <div className="font-display text-[52px] font-[800] leading-none tracking-[-2px] text-cyan drop-shadow-[0_0_20px_rgba(0,212,200,0.2)]">$11M+</div>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[2px] text-secondary">Annual Revenue Target</p>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
