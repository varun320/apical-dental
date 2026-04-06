"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/ui/section-header";

const stages = [
  {
    phase: "Phase 01",
    title: "Dental Laboratory",
    status: "Active — Zero Barriers",
    description:
      "The dental lab is completely unregulated. No licensing boards. No regulatory friction. Optimus enters here — perfect from day one.",
    active: true,
  },
  {
    phase: "Phase 02",
    title: "Office Support",
    status: "Near-term",
    description:
      "Sterilization, inventory management, supply ordering with market-price research, patient communication, and facility maintenance.",
    active: false,
  },
  {
    phase: "Phase 03",
    title: "Surgical Assistance",
    status: "Mid-term",
    description:
      "AI-powered diagnostics, X-ray analysis with executive summaries, contraindication flagging, and real-time surgical support.",
    active: false,
  },
  {
    phase: "Phase 04",
    title: "Autonomous Operation",
    status: "Long-term Vision",
    description:
      "Full autonomous dental practice operation. From diagnosis to treatment to post-op. The ultimate convergence of human expertise and robotic precision.",
    active: false,
  },
];

export function StagedPath() {
  const lineRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    const container = timelineRef.current;
    if (!el || !container) return;

    gsap.set(el, { scaleY: 0, transformOrigin: "top" });

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top 70%",
      end: "bottom 50%",
      onUpdate: (self) => {
        gsap.set(el, { scaleY: self.progress });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <section className="relative border-t border-titanium-dark bg-void px-6 py-24 lg:py-32 overflow-hidden">
      {/* Vertical gradient fade into deep-void at bottom */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(13,13,28,0.5)_100%)]" />
      <div className="relative z-10 mx-auto max-w-[1100px]">
        <SectionHeader
          label="The Path"
          title="Staged entry. Zero resistance."
          description="The dental laboratory is the zero-resistance entry point. No regulatory barriers exist. From there, Optimus expands into every aspect of practice operation."
        />

        {/* Timeline */}
        <div ref={timelineRef} className="relative mt-16">
          {/* Vertical line — positioned at left edge of the dot column */}
          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-titanium-dark">
            <div ref={lineRef} className="h-full w-full bg-white-pure" />
          </div>

          <div className="flex flex-col gap-10">
            {stages.map((stage, i) => (
              <FadeIn key={stage.phase} delay={i * 0.1} direction="left" distance={30}>
                <div className="flex gap-6 items-start">
                  {/* Dot */}
                  <div className="relative z-10 mt-1.5 shrink-0">
                    <div
                      className={`h-[22px] w-[22px] rounded-full border-2 ${
                        stage.active
                          ? "border-white-pure bg-white-pure"
                          : "border-titanium-dark bg-void"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="pb-2">
                    <p className="font-display text-[11px] font-semibold uppercase tracking-[3px] text-titanium">
                      {stage.phase}
                    </p>
                    <h3 className="mt-1 font-display text-[24px] font-semibold leading-[1.2] tracking-[-0.5px] text-white-pure">
                      {stage.title}
                    </h3>
                    <span
                      className={`mt-1 inline-block font-display text-[10px] font-semibold uppercase tracking-[2px] ${
                        stage.active ? "text-white-pure" : "text-titanium"
                      }`}
                    >
                      {stage.status}
                    </span>
                    <p className="mt-2 max-w-[500px] font-body text-[14px] leading-[1.75] text-titanium-light">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
