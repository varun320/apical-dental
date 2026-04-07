"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SectionHeader } from "@/components/ui/section-header";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { FlaskConical, Headset, Stethoscope, Bot } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Stage {
  phase: string;
  title: string;
  status: string;
  description: string;
  active: boolean;
  icon: LucideIcon;
}

const stages: Stage[] = [
  { phase: "Phase 01", title: "Dental Laboratory", status: "Active — Zero Barriers", description: "The dental lab is completely unregulated. No licensing boards. No regulatory friction. Optimus enters here — perfect from day one.", active: true, icon: FlaskConical },
  { phase: "Phase 02", title: "Office Support", status: "Near-term", description: "Sterilization, inventory management, supply ordering, patient communication, and facility maintenance.", active: false, icon: Headset },
  { phase: "Phase 03", title: "Surgical Assistance", status: "Mid-term", description: "AI-powered diagnostics, X-ray analysis with executive summaries, contraindication flagging, and real-time surgical support.", active: false, icon: Stethoscope },
  { phase: "Phase 04", title: "Autonomous Operation", status: "Long-term Vision", description: "Full autonomous dental practice operation. From diagnosis to treatment to post-op.", active: false, icon: Bot },
];

export function StagedPath() {
  const progressRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = progressRef.current;
    const container = containerRef.current;
    if (!el || !container) return;
    gsap.set(el, { scaleX: 0, transformOrigin: "left" });
    const trigger = ScrollTrigger.create({
      trigger: container, start: "top 70%", end: "bottom 60%",
      onUpdate: (self) => { gsap.set(el, { scaleX: self.progress }); },
    });
    return () => trigger.kill();
  }, []);

  return (
    <section className="relative  bg-void px-6 py-28 lg:py-36 lg:px-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(13,13,28,0.5)_100%)]" />
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-px bg-[linear-gradient(to_bottom,transparent,rgba(59,130,246,0.1)_50%,transparent)]" />

      <div className="relative z-10 mx-auto max-w-[1100px]">
        <SectionHeader
          label="The Path"
          title="Staged entry. Zero resistance."
          description="The dental laboratory is the zero-resistance entry point. From there, Optimus expands into every aspect of practice operation."
        />

        {/* Horizontal progress bar */}
        <div ref={containerRef} className="mt-16">
          <div className="relative mb-10 h-px w-full bg-apical-border">
            <div ref={progressRef} className="h-full w-full bg-cyan shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
            {/* Step dots */}
            <div className="absolute -top-[5px] left-0 flex w-full justify-between">
              {stages.map((s, i) => (
                <div key={i} className={`h-[10px] w-[10px] rounded-full border-2 ${s.active ? "border-cyan bg-cyan shadow-[0_0_10px_rgba(59,130,246,0.5)]" : "border-apical-border bg-void"}`} />
              ))}
            </div>
          </div>

          {/* Cards in a row */}
          <div className="grid gap-5 md:grid-cols-4">
            {stages.map((stage, i) => (
              <BlurFade key={stage.phase} delay={0.1 + i * 0.1} inView>
                <MagicCard
                  className={`h-full rounded-xl border p-7 shadow-[0_2px_20px_rgba(0,0,0,0.3)] ${
                    stage.active ? "border-cyan/30 bg-surface" : "border-apical-border bg-surface"
                  }`}
                  gradientColor={stage.active ? "rgba(59,130,246,0.08)" : "rgba(200,200,220,0.04)"}
                  gradientSize={200}
                >
                  <div className="relative z-10">
                    <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg border bg-void ${stage.active ? "border-cyan/30 text-cyan" : "border-apical-border text-secondary"}`}>
                      <stage.icon size={18} strokeWidth={1.5} />
                    </div>
                    <p className="font-mono text-[11px] uppercase tracking-[2.5px] text-secondary">{stage.phase}</p>
                    <h3 className="mt-2 font-display text-[18px] font-semibold leading-[1.2] tracking-[-0.5px] text-primary-text">{stage.title}</h3>
                    <span className={`mt-1 inline-block font-mono text-[10px] uppercase tracking-[2px] ${stage.active ? "text-cyan" : "text-secondary"}`}>{stage.status}</span>
                    <p className="mt-3 font-body text-[13px] leading-[1.75] text-subtext">{stage.description}</p>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
