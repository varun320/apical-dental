"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { RetroGrid } from "@/components/ui/retro-grid";
import { WordRotate } from "@/components/ui/word-rotate";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        opacity: 0, y: 40, duration: 0.8, ease: "power3.out", stagger: 0.12, delay: 0.3,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center overflow-hidden bg-void px-6 pt-36 pb-28 lg:px-10"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 blur-[3px] opacity-40">
        <AnimatedGridPattern
          numSquares={20} maxOpacity={0.1} duration={6} repeatDelay={2}
          className={cn( "mask-[linear-gradient(to_bottom,white_0%,white_40%,transparent_80%)]")}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-10%,rgba(0,212,200,0.04),transparent)]" />
      {/* Retro grid — subtle perspective grid at bottom */}
      <RetroGrid className="pointer-events-none absolute bottom-0 opacity-[0.03]" />
      {/* Bottom fade to next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-void to-transparent" />

      {/* Hero Text */}
      <div className="relative z-10 mx-auto flex max-w-[860px] flex-col items-center text-center">
        <p className="hero-anim mb-10 font-mono text-[11px] uppercase tracking-[2.5px] text-secondary">
          {siteConfig.tagline}
        </p>

        <h1 className="hero-anim font-display text-[clamp(38px,7vw,52px)] font-[800] leading-[1.0] tracking-[-2px]">
          <span className="block text-primary-text">Human expertise.</span>
          <span className="block text-cyan">
            <WordRotate
              words={["Robotic precision.", "Surgical accuracy.", "Infinite scale."]}
              duration={3000}
              className="inline-block text-cyan"
            />
          </span>
        </h1>

        <p className="hero-anim mt-10 max-w-[520px] font-body text-[16px] leading-[1.8] text-subtext">
          {siteConfig.description}
        </p>

        <div className="hero-anim mt-12 flex flex-wrap justify-center gap-5">
          <Link href="/technology" className="flex items-center gap-2.5 rounded-xl bg-cyan px-8 py-4 text-[13px] font-bold tracking-[0.5px] text-void shadow-[0_0_30px_rgba(0,212,200,0.2)] transition-all hover:shadow-[0_0_50px_rgba(0,212,200,0.35)] hover:scale-[1.02]">
            Explore the Technology <ArrowRight size={16} />
          </Link>
          <button className="flex items-center gap-2.5 rounded-xl border border-apical-border px-8 py-4 text-[13px] font-medium text-subtext transition-all hover:border-secondary hover:text-primary-text hover:bg-surface/50">
            <Play size={14} /> Watch Demo
          </button>
        </div>
      </div>

      {/* ── Demo Video Box (Linear-style) ── */}
      <div className="hero-anim relative z-10 mx-auto mt-20 w-full max-w-[1000px]">
        {/* Glow behind the box */}
        <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(0,212,200,0.06),transparent_70%)] blur-2xl" />

        {/* Browser chrome container */}
        <div className="relative overflow-hidden rounded-2xl border border-apical-border bg-surface shadow-[0_8px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(26,26,46,0.5)]">
          {/* Top bar — browser dots + URL */}
          <div className="flex items-center gap-2 border-b border-apical-border bg-void/60 px-5 py-3.5">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-apical-border" />
              <div className="h-3 w-3 rounded-full bg-apical-border" />
              <div className="h-3 w-3 rounded-full bg-apical-border" />
            </div>
            <div className="ml-3 flex-1">
              <div className="mx-auto max-w-[280px] rounded-md border border-apical-border bg-void px-4 py-1.5 text-center font-mono text-[11px] tracking-wide text-secondary">
                apicaldental.com
              </div>
            </div>
          </div>

          {/* Video area */}
          <div className="relative aspect-[16/9] bg-void">
            {/* Abstract grid/pattern as placeholder visual */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,46,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,46,0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,200,0.04),transparent_60%)]" />

            {/* Center play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-apical-border bg-surface/60 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.4)] transition-all hover:scale-110 hover:shadow-[0_0_50px_rgba(0,212,200,0.15)] cursor-pointer">
                <Play size={28} className="ml-1.5 text-cyan" />
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[2.5px] text-secondary">
                Watch the demo
              </p>
            </div>

            {/* Bottom overlay text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-void/80 to-transparent px-8 pb-6 pt-16">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-[15px] font-semibold text-primary-text">
                    Optimus in the dental lab
                  </p>
                  <p className="mt-1 font-body text-[13px] text-secondary">
                    800+ instrument adaptations. 40 years of expertise. One robot.
                  </p>
                </div>
                <div className="hidden sm:block rounded-lg border border-apical-border bg-surface/50 backdrop-blur-sm px-4 py-2 font-mono text-[10px] uppercase tracking-[2px] text-secondary">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>

          {/* Border beam effect */}
          <BorderBeam size={150} duration={12} colorFrom="#00D4C8" colorTo="#1A1A2E" borderWidth={1} />
        </div>
      </div>

    </section>
  );
}
