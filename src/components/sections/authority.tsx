"use client";

import { FadeIn, StaggerFadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BorderBeam } from "@/components/ui/border-beam";

export function Authority() {
  return (
    <section className="relative border-t border-titanium-dark bg-deep-void px-6 py-24 lg:py-32 overflow-hidden">
      {/* Bottom-left corner glow */}
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-100 w-100 rounded-full bg-[radial-gradient(circle,rgba(154,154,176,0.05),transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-[1100px]">
        <SectionHeader
          label="The Authority"
          title={<>Dr. Ted Lewis<br /><span className="text-titanium-light">PhD, DMD</span></>}
        />

        {/* Bento Grid */}
        <StaggerFadeIn
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-3"
          stagger={0.08}
        >
          {/* ─ Bio (spans 2 cols, 2 rows) ─ */}
          <div className="rounded-lg border border-titanium-dark bg-void p-7 md:col-span-2 md:row-span-2">
            <p className="font-body text-[16px] leading-[1.8] text-titanium-light">
              Dr. Ted Lewis has spent 40 years mastering the art and science of
              prosthodontics. Now he&apos;s training Tesla&apos;s Optimus robot
              to perform with superhuman precision — starting with the dental
              laboratory.
            </p>
            <p className="mt-4 font-body text-[14px] leading-[1.75] text-titanium-light">
              With 800+ engineered instrument adaptations for robotic hands
              (patent filings in progress via USPTO) and IMU-based training
              methodology that captures human hand movements for robotic
              replication, Dr. Lewis is the only person bridging 40 years of
              clinical mastery with cutting-edge robotics integration.
            </p>
            <p className="mt-4 font-body text-[14px] leading-[1.75] text-titanium-light">
              He trains doctors and surgeons within a 500+ location DSO
              network, and has developed the first-person movement capture
              pipeline that turns decades of human expertise into robotic
              capability.
            </p>
          </div>

          {/* ─ Stat: 40+ Years ─ */}
          <div className="rounded-lg border border-titanium-dark bg-void p-6 flex flex-col justify-center">
            <div className="font-display text-[40px] font-bold leading-none tracking-[-1.5px]">
              <NumberTicker value={40} delay={0.4} />+
            </div>
            <p className="mt-2 font-display text-[10px] font-semibold uppercase tracking-[2px] text-titanium">
              Years in Prosthodontics
            </p>
          </div>

          {/* ─ Stat: 800+ Adaptations ─ */}
          <div className="rounded-lg border border-titanium-dark bg-void p-6 flex flex-col justify-center">
            <div className="font-display text-[40px] font-bold leading-none tracking-[-1.5px]">
              <NumberTicker value={800} delay={0.55} />+
            </div>
            <p className="mt-2 font-display text-[10px] font-semibold uppercase tracking-[2px] text-titanium">
              Engineered Adaptations
            </p>
          </div>

          {/* ─ Stat: 500+ DSO ─ */}
          <div className="rounded-lg border border-titanium-dark bg-void p-6 flex flex-col justify-center">
            <div className="font-display text-[40px] font-bold leading-none tracking-[-1.5px]">
              <NumberTicker value={500} delay={0.7} />+
            </div>
            <p className="mt-2 font-display text-[10px] font-semibold uppercase tracking-[2px] text-titanium">
              DSO Office Network
            </p>
          </div>

          {/* ─ Stat: 15+ Training ─ */}
          <div className="rounded-lg border border-titanium-dark bg-void p-6 flex flex-col justify-center">
            <div className="font-display text-[40px] font-bold leading-none tracking-[-1.5px]">
              <NumberTicker value={15} delay={0.85} />+
            </div>
            <p className="mt-2 font-display text-[10px] font-semibold uppercase tracking-[2px] text-titanium">
              Years Training Surgeons
            </p>
          </div>

          {/* ─ Video Placeholder (spans 2 cols) ─ */}
          <div className="flex aspect-video items-center justify-center rounded-lg border border-titanium-dark bg-void md:col-span-2">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-titanium-dark bg-deep-void">
                <svg className="ml-1 h-5 w-5 text-white-pure" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="mt-3 font-display text-[10px] font-semibold uppercase tracking-[2px] text-titanium">
                Demo Video Coming Soon
              </p>
            </div>
          </div>

          {/* ─ IMU Technology (spans 2 cols) ─ */}
          <div className="relative overflow-hidden rounded-lg border border-titanium-dark bg-void p-7 md:col-span-2">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[3px] text-white-pure">
              IMU Technology
            </p>
            <p className="mt-3 font-body text-[14px] leading-[1.75] text-titanium-light">
              Inertial Measurement Unit sensors capture Dr. Lewis&apos;s hand
              movements in real-time — transferred directly to Optimus for
              robotic replication. Camera/sensor fingertip technology. 64 degrees
              of freedom.
            </p>
            <BorderBeam
              size={100}
              duration={10}
              colorFrom="#9A9AB0"
              colorTo="#3A3A4E"
              borderWidth={1}
            />
          </div>
        </StaggerFadeIn>
      </div>
    </section>
  );
}
