"use client";

import { useMemo, useState } from "react";
import { CreateDomainModal } from "./CreateDomainModal";
import { DEFAULT_DOMAINS } from "./domains_data";
import { DomainHero } from "./DomainHero";
import { DomainsTable } from "./DomainsTable";
import type { DomainItem, NewDomainPayload } from "./domains_types";

const nowLabel = () => {
  const now = new Date();
  return now.toLocaleString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const DomainsMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<DomainItem[]>(DEFAULT_DOMAINS);
  const [keyword, setKeyword] = useState("");

  const visibleItems = useMemo(() => {
    const normalized = keyword.trim().toLowerCase();
    if (!normalized) {
      return items;
    }

    return items.filter((item) => {
      return (
        item.host.toLowerCase().includes(normalized) ||
        item.target.toLowerCase().includes(normalized) ||
        item.provider.toLowerCase().includes(normalized) ||
        item.status.toLowerCase().includes(normalized)
      );
    });
  }, [items, keyword]);

  const handleCreateDomain = (payload: NewDomainPayload) => {
    const nextItem: DomainItem = {
      id: `domain-${Date.now()}`,
      host: payload.host,
      target: payload.target,
      provider: payload.provider,
      createdAt: nowLabel(),
      status: "Chờ xác thực",
    };

    setItems((prev) => [nextItem, ...prev]);
  };

  const handleDeleteDomain = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleRecheckDomain = (id: string) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) {
          return item;
        }

        if (item.status === "Lỗi cấu hình") {
          return { ...item, status: "Chờ xác thực" };
        }

        if (item.status === "Chờ xác thực") {
          return { ...item, status: "Đã xác thực" };
        }

        return item;
      })
    );
  };

  return (
    <>
      <div className="w-full p-4 md:p-6 lg:p-8">
        <DomainHero onOpenCreateModal={() => setIsOpen(true)} />

        <DomainsTable
          items={visibleItems}
          keyword={keyword}
          onKeywordChange={setKeyword}
          onDelete={handleDeleteDomain}
          onRecheck={handleRecheckDomain}
        />
      </div>

      <CreateDomainModal isOpen={isOpen} onClose={() => setIsOpen(false)} onCreate={handleCreateDomain} />
    </>
  );
};
