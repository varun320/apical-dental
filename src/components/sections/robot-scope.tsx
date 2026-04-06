"use client";

import { StaggerFadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { DataCard } from "@/components/ui/data-card";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    icon: "01",
    title: "Prosthetic Fabrication",
    description:
      "Surgical-grade dental prosthetics manufactured with superhuman precision. Every crown, bridge, and implant — perfect on delivery.",
  },
  {
    icon: "02",
    title: "AI-Powered Diagnostics",
    description:
      "X-ray analysis with executive summaries for the doctor. Contraindication flagging. Instant, comprehensive, actionable.",
  },
  {
    icon: "03",
    title: "Sterilization",
    description:
      "Automated instrument sterilization protocols. Consistent, documented, and compliant — every single time.",
  },
  {
    icon: "04",
    title: "Inventory Management",
    description:
      "Supply ordering with real-time market-price research. Automated procurement that saves money and eliminates stockouts.",
  },
  {
    icon: "05",
    title: "Patient Communication",
    description:
      "Real-time language translation. Appointment coordination. Insurance documentation — handled seamlessly.",
  },
  {
    icon: "06",
    title: "Facility Maintenance",
    description:
      "Equipment monitoring, maintenance scheduling, and facility operations. The robot manages the physical environment.",
  },
];

export function RobotScope() {
  return (
    <section className="relative border-t border-titanium-dark bg-deep-void px-6 py-24 lg:py-32 overflow-hidden">
      {/* Subtle dot pattern background */}
      <DotPattern
        width={24}
        height={24}
        cr={0.8}
        className={cn(
          "absolute inset-0 text-titanium-dark/50",
          "mask-[radial-gradient(600px_circle_at_50%_50%,white,transparent)]"
        )}
      />

      <div className="relative z-10 mx-auto max-w-[1100px]">
        <SectionHeader
          label="Full Scope"
          title="One robot. Every role."
          description="Optimus doesn't just handle lab work. It assumes full practice automation — from fabrication to facility maintenance. In-office placement, staff training, location-specific customization, and ongoing service subscription included."
        />

        <StaggerFadeIn
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {capabilities.map((cap) => (
            <DataCard
              key={cap.title}
              icon={cap.icon}
              title={cap.title}
              description={cap.description}
              className="bg-void"
            />
          ))}
        </StaggerFadeIn>
      </div>
    </section>
  );
}
