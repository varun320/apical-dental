"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Clock, Target, GraduationCap } from "lucide-react";

const problems = [
  { value: 5, suffix: "yr", label: "Training Curve", icon: Clock, title: "5-Year Training Gap", description: "It takes 5 years to train a dental lab technician. Most leave for better pay before completing training." },
  { value: 3, display: "3/10", label: "Quality Standard", icon: Target, title: "Only 3/10 Meet Standard", description: "Only 3 out of 10 dental procedures meet the doctor's own quality standard. The precision gap is real." },
  { value: 0, suffix: "", label: "New Schools", icon: GraduationCap, title: "Zero New Schools", description: "No new schools teach the craft. The pipeline of skilled dental lab technicians has dried up entirely." },
];

export function Problem() {
  return (
    <section className="relative bg-void px-6 py-28 lg:py-36 lg:px-10 overflow-hidden">
      <div className="pointer-events-none absolute -top-48 right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,212,200,0.03),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-[900px]">
        {/* Centered header — Vite-style */}
        <SectionHeader
          label="The Crisis"
          title={<>The future of dental surgery<br />starts in the lab.</>}
          description="Dental lab technicians are retiring with no replacements. The industry faces a workforce crisis with no scalable solution — until now."
          center
        />

        {/* Feature cards — icon prominent, centered text */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {problems.map((p, i) => (
            <BlurFade key={p.label} delay={0.1 + i * 0.1} inView>
              <MagicCard
                className="h-full rounded-xl border border-apical-border bg-surface p-8 text-center shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
                gradientColor="rgba(0,212,200,0.08)"
                gradientSize={250}
              >
                <div className="relative z-10 flex flex-col items-center">
                  {/* Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-apical-border bg-void text-cyan shadow-[0_0_20px_rgba(0,212,200,0.08)]">
                    <p.icon size={24} strokeWidth={1.5} />
                  </div>

                  {/* Stat number */}
                  <div className="font-display text-[48px] font-[800] leading-none tracking-[-2px] text-primary-text">
                    {p.display ?? (<><NumberTicker value={p.value} delay={0.4 + i * 0.2} />{p.suffix}</>)}
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 font-display text-[16px] font-semibold tracking-[-0.3px] text-primary-text">
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 font-body text-[14px] leading-[1.75] text-subtext">
                    {p.description}
                  </p>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
