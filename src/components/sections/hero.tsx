"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { Particles } from "@/components/ui/particles";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { GeometricShapes } from "@/components/animations/geometric-shapes";
import { NumberTicker } from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const kickerRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from(kickerRef.current, {
        opacity: 0, y: 20, duration: 0.7, ease: "power3.out",
      })
        .from(
          headlineRef.current?.querySelectorAll(".headline-line") || [],
          { opacity: 0, y: 60, duration: 0.9, ease: "power3.out", stagger: 0.15 },
          "-=0.3"
        )
        .from(subRef.current, {
          opacity: 0, y: 30, duration: 0.7, ease: "power3.out",
        }, "-=0.4")
        .from(ctaRef.current, {
          opacity: 0, y: 20, duration: 0.6, ease: "power3.out",
        }, "-=0.3")
        .from(statsRef.current, {
          opacity: 0, y: 30, duration: 0.8, ease: "power3.out",
        }, "-=0.2");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-void px-6 pt-24 pb-20"
    >
      {/* ── Background Layers (blurred for readability) ── */}
      <div className="pointer-events-none absolute inset-0 blur-[2px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(154,154,176,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(26,26,42,0.4)_0%,transparent_50%)]" />
        <AnimatedGridPattern
          numSquares={40}
          maxOpacity={0.07}
          duration={4}
          repeatDelay={1}
          className={cn(
            "absolute inset-0 h-full w-full",
            "mask-[linear-gradient(to_bottom,white_0%,white_60%,transparent_100%)]"
          )}
        />
        <Particles
          className="absolute inset-0"
          quantity={60}
          color="#9A9AB0"
          size={0.4}
          staticity={60}
          ease={120}
        />
        <GeometricShapes />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto flex max-w-[800px] flex-col items-center text-center">
        {/* Kicker */}
        <p
          ref={kickerRef}
          className="mb-8 font-display text-[11px] font-semibold uppercase tracking-[3px] text-titanium"
        >
          {siteConfig.tagline}
        </p>

        {/* Headline with gradient */}
        <h1
          ref={headlineRef}
          className="font-display text-[clamp(36px,6vw,56px)] font-bold leading-[1.05] tracking-[-2px]"
        >
          <span className="headline-line block text-white-pure">
            Human Expertise.
          </span>
          <span className="headline-line block bg-linear-to-r from-white-pure via-titanium-light to-titanium bg-clip-text text-transparent">
            Robotic Precision.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subRef}
          className="mt-8 max-w-[580px] font-body text-[17px] leading-[1.7] text-titanium-light"
        >
          {siteConfig.description}
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="mt-10 flex gap-4">
          <Link
            href="/technology"
            className="relative overflow-hidden rounded-md bg-white-pure px-7 py-3.5 text-[12px] font-bold tracking-[0.5px] text-void transition-opacity hover:opacity-80"
          >
            Explore the Technology &rarr;
          </Link>
          <button className="rounded-md border border-titanium-dark px-7 py-3.5 text-[12px] font-medium tracking-[0.5px] text-titanium-light transition-all hover:border-titanium hover:text-white-pure">
            Watch Demo
          </button>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div
        ref={statsRef}
        className="relative z-10 mt-auto w-full max-w-[900px] border-t border-titanium-dark pt-10"
      >
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-[34px] font-bold leading-none tracking-[-1.5px] text-white-pure">
                <NumberTicker value={stat.value} delay={0.8} />
                {stat.suffix}
              </div>
              <p className="mt-2 font-display text-[10px] font-semibold uppercase tracking-[2px] text-titanium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
