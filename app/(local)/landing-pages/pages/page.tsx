'use client';
import { LandingPageMain } from "@/components/landing-pages/pages/LandingPageMain";

export default function LandingPagesPage() {
  return (
    <div className="w-full">
      {/* Component chính chứa Header, FilterBar và DataTable */}
      <LandingPageMain />
    </div>
  );
}