"use client";

import { useMemo, useState } from "react";
import { PlusCircle, Search, X } from "lucide-react";
import { DEFAULT_FORM_FIELDS, EXTRA_LINKED_ACCOUNT_TEMPLATE } from "./forms_data";
import type { FormConfigStep, LinkedAccount, SavedFormConfig } from "./forms_types";
import { buildNewConfig, integrationDestinations } from "./forms_utils";

interface CreateFormConfigModalProps {
  isOpen: boolean;
  linkedAccounts: LinkedAccount[];
  onClose: () => void;
  onCreateAccount: () => void;
  onSaveConfig: (newConfig: SavedFormConfig) => void;
}

const initialSuccessMessage = "Cảm ơn bạn đã gửi thông tin. Chúng tôi sẽ liên hệ trong thời gian sớm nhất.";

export const CreateFormConfigModal = ({
  isOpen,
  linkedAccounts,
  onClose,
  onCreateAccount,
  onSaveConfig,
}: CreateFormConfigModalProps) => {
  const [step, setStep] = useState<FormConfigStep>(1);
  const [keyword, setKeyword] = useState("");
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(null);

  const [configName, setConfigName] = useState("");
  const [destinationKey, setDestinationKey] = useState("");
  const [selectedFieldIds, setSelectedFieldIds] = useState<string[]>(["full_name", "phone"]);
  const [successMessage, setSuccessMessage] = useState(initialSuccessMessage);

  const selectedAccount = useMemo(
    () => linkedAccounts.find((item) => item.id === selectedAccountId) ?? null,
    [linkedAccounts, selectedAccountId]
  );

  const visibleAccounts = useMemo(() => {
    const normalized = keyword.trim().toLowerCase();
    if (!normalized) {
      return linkedAccounts;
    }

    return linkedAccounts.filter((item) => {
      return item.title.toLowerCase().includes(normalized) || item.type.toLowerCase().includes(normalized);
    });
  }, [keyword, linkedAccounts]);

  const destinationOptions = selectedAccount
    ? integrationDestinations[selectedAccount.type] ?? integrationDestinations[EXTRA_LINKED_ACCOUNT_TEMPLATE.type]
    : [];

  const canSubmit =
    step === 2 &&
    !!selectedAccount &&
    configName.trim().length > 0 &&
    destinationKey.trim().length > 0 &&
    selectedFieldIds.length > 0;

  const resetModalState = () => {
    setStep(1);
    setKeyword("");
    setSelectedAccountId(null);
    setConfigName("");
    setDestinationKey("");
    setSelectedFieldIds(["full_name", "phone"]);
    setSuccessMessage(initialSuccessMessage);
  };

  const handleClose = () => {
    resetModalState();
    onClose();
  };

  const handleSelectAccount = (accountId: string) => {
    const account = linkedAccounts.find((item) => item.id === accountId);
    setSelectedAccountId(accountId);
    setStep(2);
    if (account) {
      const firstDestination = integrationDestinations[account.type]?.[0] ?? "";
      setDestinationKey(firstDestination);
      setConfigName(`Form ${account.type}`);
    }
  };

  const toggleField = (fieldId: string) => {
    setSelectedFieldIds((prev) => {
      if (prev.includes(fieldId)) {
        return prev.filter((id) => id !== fieldId);
      }
      return [...prev, fieldId];
    });
  };

  const handleSave = () => {
    if (!selectedAccount || !canSubmit) {
      return;
    }

    onSaveConfig(
      buildNewConfig({
        name: configName.trim(),
        accountId: selectedAccount.id,
        accountType: selectedAccount.type,
        accountTitle: selectedAccount.title,
        fields: selectedFieldIds,
        successMessage: successMessage.trim(),
        destinationKey: destinationKey.trim(),
      })
    );

    handleClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/25 p-4" onClick={handleClose}>
      <div
        className="w-full max-w-[980px] max-h-[90vh] overflow-y-auto rounded-2xl border border-neutral-200 bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
          <h2 className="text-[13px] font-bold text-neutral-900">Tạo cấu hình Form</h2>

          <button
            onClick={handleClose}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 hover:text-neutral-700"
            aria-label="Đóng"
          >
            <X size={14} />
          </button>
        </div>

        <div className="p-5 md:p-7">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className={`text-[13px] font-bold ${step === 1 ? "text-[#2F1AD7]" : "text-neutral-500"}`}>
                Chọn tài khoản liên kết
              </p>
              <p className="mt-1 text-[13px] text-neutral-500">Chọn tài khoản liên kết ở bên dưới</p>
            </div>
            <div>
              <p className={`text-[13px] font-bold ${step === 2 ? "text-[#2F1AD7]" : "text-neutral-500"}`}>
                Điền cấu hình Form
              </p>
              <p className="mt-1 text-[13px] text-neutral-500">Tạo cấu hình Form với tài khoản liên kết đã chọn</p>
            </div>
          </div>

          <div className="relative mx-auto mt-6 h-0.5 w-full max-w-[620px] bg-neutral-200">
            <div
              className={`absolute -top-[9px] h-5 w-5 rounded-full border-2 border-white shadow-sm transition-all ${
                step === 1 ? "-left-0.5 bg-[#2F1AD7]" : "left-1/2 -translate-x-1/2 bg-[#2F1AD7]"
              }`}
            />
            <div className={`absolute -right-0.5 -top-[9px] h-5 w-5 rounded-full border-2 border-white ${step === 2 ? "bg-[#2F1AD7]" : "bg-neutral-200"}`} />
          </div>

          {step === 1 ? (
            <>
              <div className="relative mt-8">
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
                <input
                  value={keyword}
                  onChange={(event) => setKeyword(event.target.value)}
                  placeholder="Tìm kiếm..."
                  className="w-full rounded-xl border border-neutral-200 px-4 py-2.5 pr-11 text-[13px] text-neutral-800 outline-none focus:border-indigo-300"
                />
              </div>

              <div className="mt-6 hidden md:grid md:grid-cols-[minmax(0,1fr)_220px_90px] items-center border-b border-neutral-200 pb-3 text-[13px] font-bold text-neutral-700">
                <span>Tên tài khoản liên kết</span>
                <span>Loại tài khoản liên kết</span>
                <span></span>
              </div>

              <div>
                {visibleAccounts.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.id}
                      className="grid grid-cols-1 gap-3 border-b border-neutral-100 py-4 text-[13px] md:grid-cols-[minmax(0,1fr)_220px_90px] md:items-center md:gap-2"
                    >
                      <p className="text-neutral-700 md:pr-4">{item.title}</p>

                      <div className="flex items-center gap-2 text-neutral-700">
                        <span className="text-neutral-500 md:hidden">Loại:</span>
                        <Icon size={16} className="text-indigo-500" />
                        <span>{item.type}</span>
                      </div>

                      <button
                        onClick={() => handleSelectAccount(item.id)}
                        className="w-full md:w-auto rounded-lg border border-[#2F1AD7] px-4 py-2 text-[13px] font-bold text-[#2F1AD7] hover:bg-indigo-50"
                      >
                        Chọn
                      </button>
                    </div>
                  );
                })}

                {visibleAccounts.length === 0 && (
                  <div className="py-6 text-center text-[13px] text-neutral-500">Không tìm thấy tài khoản liên kết phù hợp.</div>
                )}
              </div>

              <div className="mt-6 space-y-2">
                <button
                  onClick={onCreateAccount}
                  className="flex items-center gap-2 text-[13px] font-bold text-[#2F1AD7] hover:opacity-90"
                >
                  <PlusCircle size={16} />
                  Tạo tài khoản liên kết
                </button>
                <p className="text-[13px] text-neutral-500">Tài khoản đã liên kết ({linkedAccounts.length}/3)</p>
              </div>
            </>
          ) : (
            <div className="mt-8 space-y-5 text-[13px]">
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-neutral-700">
                Đang cấu hình với tài khoản: <span className="font-bold">{selectedAccount?.type}</span>
              </div>

              <div className="space-y-2">
                <label className="font-bold text-neutral-800">Tên cấu hình</label>
                <input
                  value={configName}
                  onChange={(event) => setConfigName(event.target.value)}
                  placeholder="VD: Form thu lead chiến dịch tháng 3"
                  className="w-full rounded-xl border border-neutral-200 px-4 py-2.5 outline-none focus:border-indigo-300"
                />
              </div>

              <div className="space-y-2">
                <label className="font-bold text-neutral-800">Khóa kết nối</label>
                <select
                  value={destinationKey}
                  onChange={(event) => setDestinationKey(event.target.value)}
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 outline-none focus:border-indigo-300"
                >
                  {destinationOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <p className="font-bold text-neutral-800">Trường dữ liệu cần đồng bộ</p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {DEFAULT_FORM_FIELDS.map((field) => (
                    <label key={field.id} className="flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2">
                      <input
                        type="checkbox"
                        checked={selectedFieldIds.includes(field.id)}
                        onChange={() => toggleField(field.id)}
                        className="rounded border-neutral-300 accent-[#2F1AD7]"
                      />
                      <span>{field.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-bold text-neutral-800">Thông báo sau khi gửi form</label>
                <textarea
                  rows={3}
                  value={successMessage}
                  onChange={(event) => setSuccessMessage(event.target.value)}
                  className="w-full rounded-xl border border-neutral-200 px-4 py-2.5 outline-none focus:border-indigo-300"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="rounded-lg border border-neutral-300 px-4 py-2 text-[13px] font-bold text-neutral-700 hover:bg-neutral-50"
                >
                  Quay lại
                </button>

                <button
                  onClick={handleSave}
                  disabled={!canSubmit}
                  className="rounded-lg bg-[#2F1AD7] px-5 py-2 text-[13px] font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Lưu cấu hình
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
