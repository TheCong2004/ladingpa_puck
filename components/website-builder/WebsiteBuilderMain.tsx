"use client";

import { useRouter } from "next/navigation";
import { WebsiteBuilderDetails } from "./WebsiteBuilderDetails";
import { WebsiteBuilderHero } from "./WebsiteBuilderHero";

export const WebsiteBuilderMain = () => {
  const router = useRouter();

  const handleCreateWebsite = () => {
    router.push("/website-builder/create");
  };

  return (
    <div className="w-full space-y-6 p-4 md:p-6 lg:p-8">
      <WebsiteBuilderHero onCreateWebsite={handleCreateWebsite} />
      <WebsiteBuilderDetails />
    </div>
  );
};
