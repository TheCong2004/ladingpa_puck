"use client";

import { useState } from "react";
import { CreateFormConfigModal } from "./CreateFormConfigModal";
import { DEFAULT_LINKED_ACCOUNTS, EXTRA_LINKED_ACCOUNT_TEMPLATE } from "./forms_data";
import { FormsHero } from "./FormsHero";
import type { LinkedAccount, SavedFormConfig } from "./forms_types";

export const FormsMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [linkedAccounts, setLinkedAccounts] = useState<LinkedAccount[]>(DEFAULT_LINKED_ACCOUNTS);
  const [savedConfigs, setSavedConfigs] = useState<SavedFormConfig[]>([]);

  const handleCreateAccount = () => {
    setLinkedAccounts((prev) => {
      if (prev.length >= 3) {
        return prev;
      }

      const nextIndex = prev.length + 1;
      return [
        ...prev,
        {
          id: `custom-${Date.now()}`,
          title: `Tài khoản webhook tùy chỉnh #${nextIndex}`,
          ...EXTRA_LINKED_ACCOUNT_TEMPLATE,
        },
      ];
    });
  };

  const handleSaveConfig = (newConfig: SavedFormConfig) => {
    setSavedConfigs((prev) => [newConfig, ...prev]);
  };

  const handleDeleteConfig = (configId: string) => {
    setSavedConfigs((prev) => prev.filter((item) => item.id !== configId));
  };

  const handleToggleConfigStatus = (configId: string) => {
    setSavedConfigs((prev) =>
      prev.map((item) => {
        if (item.id !== configId) {
          return item;
        }

        return {
          ...item,
          status: item.status === "Đang hoạt động" ? "Tạm dừng" : "Đang hoạt động",
        };
      })
    );
  };

  return (
    <>
      <div className="w-full p-4 md:p-6 lg:p-8">
        <FormsHero onOpenCreateModal={() => setIsOpen(true)} />
      </div>

      <CreateFormConfigModal
        isOpen={isOpen}
        linkedAccounts={linkedAccounts}
        onClose={() => setIsOpen(false)}
        onCreateAccount={handleCreateAccount}
        onSaveConfig={handleSaveConfig}
      />
    </>
  );
};
