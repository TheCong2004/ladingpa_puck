import { ReactNode } from "react";
import { EcommerceStoresSidebar } from "./EcommerceStoresSidebar";

export const EcommerceStoresShell = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-[220px_1fr]">
        <EcommerceStoresSidebar />
        {children}
      </section>
    </div>
  );
};
