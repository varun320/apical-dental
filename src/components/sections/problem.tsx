"use client";

import { StaggerFadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Clock, Target, GraduationCap } from "lucide-react";

const problems = [
  { value: 5, suffix: "yr", label: "Training Curve", icon: Clock, description: "It takes 5 years to train a dental lab technician. Most leave for better pay before completing training." },
  { value: 3, display: "3/10", label: "Quality Standard", icon: Target, description: "Only 3 out of 10 dental procedures meet the doctor's own quality standard. The precision gap is real." },
  { value: 0, suffix: "", label: "New Schools", icon: GraduationCap, description: "No new schools teach the craft. The pipeline of skilled dental lab technicians has dried up entirely." },
];

export function Problem() {
  return (
    <section className="relative border-t border-apical-border bg-void px-6 py-28 lg:py-36 lg:px-10 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1100px]">
        <SectionHeader
          label="The Crisis"
          title={<>The future of dental surgery<br />starts in the lab.</>}
          description="Dental lab technicians are retiring with no replacements. The industry faces a workforce crisis with no scalable solution — until now."
        />

        {/* MagicCards with spotlight hover */}
        <StaggerFadeIn className="mt-20 grid gap-5 md:grid-cols-3" stagger={0.12}>
          {problems.map((p, i) => (
            <MagicCard
              key={p.label}
              className="relative overflow-hidden rounded-xl border border-apical-border bg-surface p-8 shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
              gradientColor="rgba(0,212,200,0.08)"
              gradientSize={250}
            >
              <div className="relative z-10">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-apical-border bg-void text-cyan">
                  <p.icon size={20} strokeWidth={1.5} />
                </div>
                <div className="font-display text-[44px] font-[800] leading-none tracking-[-1.5px] text-primary-text">
                  {p.display ?? (<><NumberTicker value={p.value} delay={0.5 + i * 0.2} />{p.suffix}</>)}
                </div>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[2.5px] text-secondary">{p.label}</p>
                <p className="mt-4 font-body text-[14px] leading-[1.75] text-subtext">{p.description}</p>
              </div>
            </MagicCard>
          ))}
        </StaggerFadeIn>
      </div>
    </section>
  );
}
