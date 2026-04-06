"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { Cog, ScanSearch, SprayCan, PackageCheck, MessageSquare, Wrench } from "lucide-react";

const capabilities = [
  { icon: Cog, title: "Prosthetic Fabrication", description: "Surgical-grade dental prosthetics with superhuman precision. Every crown, bridge, and implant — perfect on delivery." },
  { icon: ScanSearch, title: "AI-Powered Diagnostics", description: "X-ray analysis with executive summaries. Contraindication flagging. Instant, comprehensive, actionable." },
  { icon: SprayCan, title: "Sterilization", description: "Automated sterilization protocols. Consistent, documented, and compliant — every single time." },
  { icon: PackageCheck, title: "Inventory Management", description: "Supply ordering with real-time market-price research. Automated procurement that eliminates stockouts." },
  { icon: MessageSquare, title: "Patient Communication", description: "Real-time language translation. Appointment coordination. Insurance documentation — handled seamlessly." },
  { icon: Wrench, title: "Facility Maintenance", description: "Equipment monitoring, maintenance scheduling, and facility operations. The robot manages everything." },
];

export function RobotScope() {
  return (
    <section className="relative border-t border-apical-border bg-surface px-6 py-28 lg:py-36 lg:px-10 overflow-hidden">
      <DotPattern
        width={24} height={24} cr={0.6}
        className={cn("absolute inset-0 text-apical-border/40", "mask-[radial-gradient(700px_circle_at_50%_50%,white,transparent)]")}
      />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,212,200,0.02),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-[1100px]">
        <SectionHeader
          label="Full Scope"
          title="One robot. Every role."
          description="Optimus assumes full practice automation — from fabrication to facility maintenance."
          center
        />

        {/* BlurFade staggered cards with MagicCard spotlight */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <BlurFade key={cap.title} delay={0.15 + i * 0.08} inView>
              <MagicCard
                className="h-full rounded-xl border border-apical-border bg-void p-7 shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
                gradientColor="rgba(0,212,200,0.06)"
                gradientSize={200}
              >
                <div className="relative z-10">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-apical-border bg-surface text-cyan">
                    <cap.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-body text-[18px] font-medium leading-[1.4] text-primary-text">{cap.title}</h3>
                  <p className="mt-3 font-body text-[14px] leading-[1.75] text-subtext">{cap.description}</p>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
