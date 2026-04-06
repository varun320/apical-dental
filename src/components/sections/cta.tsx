"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { BlurFade } from "@/components/ui/blur-fade";
import { FormInput, FormTextarea } from "@/components/ui/form-input";
import { Ripple } from "@/components/ui/ripple";

import { Send } from "lucide-react";
import { useState } from "react";

export function CTA() {
  const [formData, setFormData] = useState({
    name: "", email: "", organization: "", role: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); };

  const updateField = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <section className="relative border-t border-apical-border bg-surface px-6 py-28 lg:py-36 lg:px-10 overflow-hidden">
      <Ripple className="absolute inset-0 opacity-[0.8]" />
      {/* <RetroGrid className="absolute bottom-0 opacity-[0.02]" /> */}

      <div className="relative z-10 mx-auto max-w-[640px]">
        <SectionHeader
          label="Get in Touch"
          title="Partner with us."
          description="Whether you're from Tesla Robotics, a DSO corporation, or an independent practice — we'd like to start a conversation."
          center
        />

        <BlurFade delay={0.2} inView>
          <form onSubmit={handleSubmit} className="mt-14 flex flex-col gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <FormInput type="text" placeholder="Name" value={formData.name} onChange={updateField("name")} />
              <FormInput type="email" placeholder="Email" value={formData.email} onChange={updateField("email")} />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <FormInput type="text" placeholder="Organization" value={formData.organization} onChange={updateField("organization")} />
              <FormInput type="text" placeholder="Role" value={formData.role} onChange={updateField("role")} />
            </div>
            <FormTextarea placeholder="How can we help?" rows={5} value={formData.message} onChange={updateField("message")} />
            <button type="submit" className="mt-3 flex items-center justify-center gap-2.5 rounded-xl bg-cyan px-8 py-4.5 font-display text-[14px] font-bold tracking-[0.5px] text-void shadow-[0_0_30px_rgba(0,212,200,0.2)] transition-all hover:shadow-[0_0_50px_rgba(0,212,200,0.35)] hover:scale-[1.02]">
              Send Message <Send size={16} />
            </button>
          </form>
        </BlurFade>
      </div>
    </section>
  );
}
