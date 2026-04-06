"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-void/80 backdrop-blur-xl border-b border-apical-border shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="/"
          className="font-display text-[15px] font-bold tracking-[3px] uppercase text-primary-text"
        >
          Apical Dental
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[2.5px] text-subtext transition-colors hover:text-primary-text"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href={siteConfig.cta.href}
          className="hidden rounded-lg bg-cyan px-5 py-2.5 text-[12px] font-bold tracking-wide text-void shadow-[0_0_20px_rgba(0,212,200,0.2)] transition-all hover:shadow-[0_0_30px_rgba(0,212,200,0.35)] md:block"
        >
          {siteConfig.cta.primary}
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-[1.5px] w-5 bg-primary-text transition-transform ${mobileOpen ? "translate-y-[4.5px] rotate-45" : ""}`} />
          <span className={`block h-[1.5px] w-5 bg-primary-text transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[1.5px] w-5 bg-primary-text transition-transform ${mobileOpen ? "-translate-y-[4.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-apical-border bg-void/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 font-mono text-[11px] uppercase tracking-[2.5px] text-subtext transition-colors hover:text-primary-text"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteConfig.cta.href}
              onClick={() => setMobileOpen(false)}
              className="mt-6 rounded-lg bg-cyan px-5 py-3 text-center text-[12px] font-bold tracking-wide text-void"
            >
              {siteConfig.cta.primary}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
