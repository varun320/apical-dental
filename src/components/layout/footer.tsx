import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-apical-border bg-void">
      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          <Link
            href="/"
            className="font-display text-[13px] font-semibold tracking-[3px] uppercase text-secondary"
          >
            Apical Dental
          </Link>

          <div className="flex gap-10">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[10px] uppercase tracking-[2px] text-muted transition-colors hover:text-primary-text"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-apical-border pt-10 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[2px] text-muted">
            &copy; {new Date().getFullYear()} Apical Dental. All rights reserved.
          </p>
          <p className="font-mono text-[9px] uppercase tracking-[1.5px] text-muted/40">
            The apex of the craft. In every sense.
          </p>
        </div>
      </div>
    </footer>
  );
}
