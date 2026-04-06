"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { Particles } from "@/components/ui/particles";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { RetroGrid } from "@/components/ui/retro-grid";
import { WordRotate } from "@/components/ui/word-rotate";
import { NumberTicker } from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.from(".hero-anim", {
        opacity: 0, y: 40, duration: 0.8, ease: "power3.out", stagger: 0.12,
      })
        .from(statsRef.current, {
          opacity: 0, y: 30, duration: 0.8, ease: "power3.out",
        }, "-=0.3");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-void px-6 pt-40 pb-28 lg:px-10"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,212,200,0.07),transparent)]" />
        <AnimatedGridPattern
          numSquares={30} maxOpacity={0.04} duration={5} repeatDelay={1}
          className={cn("absolute inset-0 h-full w-full blur-[1px]", "mask-[linear-gradient(to_bottom,white_0%,white_50%,transparent_100%)]")}
        />
        <Particles className="absolute inset-0 blur-[1px]" quantity={40} color="#4A4A6A" size={0.5} staticity={80} ease={100} />
      </div>

      {/* Retro grid at bottom */}
      <RetroGrid className="absolute bottom-0 opacity-[0.03]" />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 mx-auto flex max-w-[860px] flex-col items-center text-center">
        <p className="hero-anim mb-10 font-mono text-[11px] uppercase tracking-[2.5px] text-[#8B8BA8]">
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

      {/* Stats */}
      <div ref={statsRef} className="relative z-10 mt-auto w-full max-w-[960px] border-apical-border pt-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-[44px] font-[800] leading-none tracking-[-1.5px] text-primary-text">
                <NumberTicker value={stat.value} delay={0.8} />{stat.suffix}
              </div>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[2.5px] text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
