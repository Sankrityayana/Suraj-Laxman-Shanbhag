import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/ui/ContactForm";
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="space-y-12 py-4">
      <PageHeader
        title="Contact & Collaboration"
        subtitle="Get in touch for engineering roles, technical collaboration, AI/ML inquiries, or project builds."
        badge="Career"
        iconName="Mail"
        accentColor="#38bdf8"
      />

      <ContactForm />
    </div>
  );
}
