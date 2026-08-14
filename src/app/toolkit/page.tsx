import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ToolkitGroup } from "@/components/ui/ToolkitGroup";
import { Wrench } from "lucide-react";

export default function ToolkitPage() {
  return (
    <div className="space-y-12 py-4">
      <PageHeader
        title="My Toolkit Universe"
        subtitle="Grouped inventory of programming languages, AI/ML frameworks, databases, developer environments, and cloud infrastructure."
        badge="Career"
        iconName="Wrench"
        accentColor="#38bdf8"
      />

      <ToolkitGroup />
    </div>
  );
}
