"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BorderBeam } from "@/components/ui/border-beam";
import { HyperText } from "@/components/ui/hyper-text";
import { Play, Cpu } from "lucide-react";

const stats = [
  { value: 40, suffix: "+", label: "Years Prosthodontics" },
  { value: 800, suffix: "+", label: "Engineered Adaptations" },
  { value: 500, suffix: "+", label: "DSO Office Network" },
  { value: 15, suffix: "+", label: "Years Training Surgeons" },
];

export function Authority() {
  return (
    <section className="relative bg-surface px-6 py-28 lg:py-36 lg:px-10 overflow-hidden">
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-100 w-100 rounded-full bg-[radial-gradient(circle,rgba(0,212,200,0.04),transparent_70%)]" />
      <div className="pointer-events-none absolute top-0 right-0 h-px w-75 bg-[linear-gradient(to_left,rgba(0,212,200,0.15),transparent)]" />

      <div className="relative z-10 mx-auto max-w-275">
        <SectionHeader
          label="The Authority"
          title={<>Dr. Ted Lewis <span className="text-secondary">PhD, DMD</span></>}
        />


        {/* Row 1: Bio + 2x2 Stats */}
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {/* Bio */}
          <BlurFade delay={0.1} inView>
            <MagicCard
              className="h-full rounded-xl border border-apical-border bg-void p-8 shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
              gradientColor="rgba(0,212,200,0.05)"
              gradientSize={300}
            >
              <div className="relative z-10">
                <p className="font-body text-[16px] leading-[1.8] text-subtext">
                  Dr. Ted Lewis has spent 40 years mastering the art and science of
                  prosthodontics. Now he&apos;s training Tesla&apos;s Optimus robot
                  to perform with superhuman precision — starting with the dental laboratory.
                </p>
                <p className="mt-5 font-body text-[14px] leading-[1.75] text-subtext">
                  With 800+ engineered instrument adaptations for robotic hands
                  (patent filings in progress via USPTO) and IMU-based training
                  methodology, Dr. Lewis is the only person bridging 40 years of
                  clinical mastery with cutting-edge robotics integration.
                </p>
                <p className="mt-5 font-body text-[14px] leading-[1.75] text-subtext">
                  He trains doctors and surgeons within a 500+ location DSO
                  network, and has developed the first-person movement capture
                  pipeline that turns decades of human expertise into robotic capability.
                </p>
              </div>
            </MagicCard>
          </BlurFade>

          {/* 2x2 Stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((cred, i) => (
              <BlurFade key={cred.label} delay={0.15 + i * 0.08} inView>
                <div className="h-full rounded-xl border border-apical-border bg-void p-7 flex flex-col justify-center shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
                  <div className="font-display text-[44px] font-extrabold leading-none tracking-[-1.5px]">
                    <NumberTicker value={cred.value} delay={0.4 + i * 0.15} />{cred.suffix}
                  </div>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[2.5px] text-secondary">{cred.label}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* Row 2: Video + IMU side by side */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {/* Video */}
          <BlurFade delay={0.5} inView>
            <div className="relative overflow-hidden rounded-xl border border-apical-border bg-void shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,212,200,0.06),transparent_60%)]" />
              <div className="relative flex aspect-video items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-apical-border bg-surface/80 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-transform hover:scale-110 cursor-pointer">
                  <Play size={22} className="ml-1 text-cyan" />
                </div>
                <p className="absolute bottom-5 left-6 font-mono text-[10px] uppercase tracking-[2px] text-secondary">Demo Video Coming Soon</p>
              </div>
            </div>
          </BlurFade>

          {/* IMU Technology */}
          <BlurFade delay={0.55} inView>
            <div className="relative h-full overflow-hidden rounded-xl border border-apical-border bg-void p-8 shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-cyan/30 bg-surface text-cyan">
                <Cpu size={20} strokeWidth={1.5} />
              </div>
              <HyperText className="font-display text-[13px] font-semibold uppercase tracking-[2px] text-cyan">
                IMU Technology
              </HyperText>
              <p className="mt-4 font-body text-[14px] leading-[1.75] text-subtext">
                Inertial Measurement Unit sensors capture Dr. Lewis&apos;s hand movements in real-time —
                transferred directly to Optimus for robotic replication. Camera/sensor fingertip technology.
                64 degrees of freedom.
              </p>
              <BorderBeam size={100} duration={10} colorFrom="#3B82F6" colorTo="#1A1A2E" borderWidth={1} />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
