import { ReactNode } from "react";
import { EcommerceStoresShell } from "@/components/ecommerce-stores/EcommerceStoresShell";

export default function EcommerceStoresLayout({ children }: { children: ReactNode }) {
  return <EcommerceStoresShell>{children}</EcommerceStoresShell>;
}
