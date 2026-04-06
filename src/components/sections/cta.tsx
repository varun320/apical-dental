"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { FormInput, FormTextarea } from "@/components/ui/form-input";
import { Ripple } from "@/components/ui/ripple";
import { useState } from "react";

export function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const updateField = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <section className="relative border-t border-titanium-dark bg-deep-void px-6 py-24 lg:py-32 overflow-hidden">
      {/* Background ripple effect */}
      <Ripple className="absolute inset-0 opacity-[0.04]" />

      <div className="relative z-10 mx-auto max-w-[700px]">
        <SectionHeader
          label="Get in Touch"
          title="Partner with us."
          description="Whether you're from Tesla Robotics, a DSO corporation, or an independent practice — we'd like to start a conversation."
          center
        />

        <FadeIn delay={0.2}>
          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <FormInput
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={updateField("name")}
              />
              <FormInput
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={updateField("email")}
              />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <FormInput
                type="text"
                placeholder="Organization"
                value={formData.organization}
                onChange={updateField("organization")}
              />
              <FormInput
                type="text"
                placeholder="Role"
                value={formData.role}
                onChange={updateField("role")}
              />
            </div>
            <FormTextarea
              placeholder="How can we help?"
              rows={4}
              value={formData.message}
              onChange={updateField("message")}
            />
            <button
              type="submit"
              className="mt-2 rounded-md bg-white-pure px-8 py-4 font-display text-[14px] font-bold tracking-[0.5px] text-void transition-opacity hover:opacity-80"
            >
              Send Message
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
