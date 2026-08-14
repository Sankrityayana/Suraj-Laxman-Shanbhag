import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ExperienceTimeline } from "@/components/ui/ExperienceTimeline";
import { BriefcaseBusiness } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="space-y-12 py-4">
      <PageHeader
        title="Engineering Experience Journey"
        subtitle="Visual journey timeline highlighting hands-on engineering experiences, degree milestones, and key technical projects."
        badge="Career"
        iconName="BriefcaseBusiness"
        accentColor="#38bdf8"
      />

      {/* Primary Visual Timeline */}
      <ExperienceTimeline />
    </div>
  );
}
