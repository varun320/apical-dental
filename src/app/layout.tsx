import type { Metadata } from "next";
import { Syne, DM_Sans, IBM_Plex_Mono, Geist } from "next/font/google";
import { LenisProvider } from "@/lib/lenis";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apical Dental — Human Expertise. Robotic Precision.",
  description:
    "Pioneering the integration of Tesla's Optimus humanoid robot into dental laboratory procedures — delivering surgical-grade accuracy at unprecedented scale.",
  keywords: [
    "dental robotics",
    "Tesla Optimus",
    "dental lab automation",
    "prosthodontics",
    "humanoid robot dentistry",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", syne.variable, dmSans.variable, ibmPlexMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col bg-void text-primary">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
