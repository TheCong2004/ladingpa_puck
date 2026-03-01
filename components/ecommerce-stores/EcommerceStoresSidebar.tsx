"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CircleDollarSign, Globe, Store, WalletCards } from "lucide-react";
import { ecommerceStoreMenus } from "./data";

const icons = {
  store: Store,
  checkout: WalletCards,
  domain: Globe,
  conversion: CircleDollarSign,
};

export const EcommerceStoresSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-full rounded-xl border border-neutral-200 bg-white p-4 lg:w-[220px]">
      <h2 className="mb-4 text-[13px] font-extrabold text-neutral-900">Ecommerce Stores</h2>

      <div className="space-y-2">
        {ecommerceStoreMenus.map((menu) => {
          const Icon = icons[menu.icon];
          const isActive = pathname.startsWith(menu.path);

          return (
            <Link
              key={menu.path}
              href={menu.path}
              className={`inline-flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[13px] transition ${
                isActive
                  ? "bg-indigo-50 font-bold text-indigo-600"
                  : "text-neutral-700 hover:bg-neutral-50"
              }`}
            >
              <Icon size={16} className={isActive ? "text-indigo-600" : "text-neutral-400"} />
              {menu.label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};
