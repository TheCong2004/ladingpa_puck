"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { PROVIDER_OPTIONS } from "./domains_data";
import type { NewDomainPayload } from "./domains_types";

interface CreateDomainModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (payload: NewDomainPayload) => void;
}

export const CreateDomainModal = ({ isOpen, onClose, onCreate }: CreateDomainModalProps) => {
  const [host, setHost] = useState("");
  const [target, setTarget] = useState("");
  const [provider, setProvider] = useState(PROVIDER_OPTIONS[0]);

  const reset = () => {
    setHost("");
    setTarget("");
    setProvider(PROVIDER_OPTIONS[0]);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleSubmit = () => {
    if (!host.trim() || !target.trim()) {
      return;
    }

    onCreate({
      host: host.trim(),
      target: target.trim(),
      provider,
    });

    handleClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/25 p-4" onClick={handleClose}>
      <div
        className="w-full max-w-[640px] rounded-2xl border border-neutral-200 bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
          <h2 className="text-[13px] font-bold text-neutral-900">Thêm tên miền mới</h2>
          <button
            onClick={handleClose}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-neutral-500"
            aria-label="Đóng"
          >
            <X size={14} />
          </button>
        </div>

        <div className="space-y-4 p-5 text-[13px]">
          <div className="space-y-2">
            <label className="font-bold text-neutral-800">Host name</label>
            <input
              value={host}
              onChange={(event) => setHost(event.target.value)}
              placeholder="VD: sale.mybrand.vn"
              className="w-full rounded-xl border border-neutral-200 px-4 py-2.5 outline-none focus:border-indigo-300"
            />
          </div>

          <div className="space-y-2">
            <label className="font-bold text-neutral-800">Tên miền đích</label>
            <input
              value={target}
              onChange={(event) => setTarget(event.target.value)}
              placeholder="VD: landinggo-123.app"
              className="w-full rounded-xl border border-neutral-200 px-4 py-2.5 outline-none focus:border-indigo-300"
            />
          </div>

          <div className="space-y-2">
            <label className="font-bold text-neutral-800">Nhà cung cấp DNS</label>
            <select
              value={provider}
              onChange={(event) => setProvider(event.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 outline-none focus:border-indigo-300"
            >
              {PROVIDER_OPTIONS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 border-t border-neutral-200 px-5 py-4">
          <button onClick={handleClose} className="rounded-lg border border-neutral-300 px-4 py-2 text-[13px] font-bold text-neutral-700">
            Hủy
          </button>
          <button
            onClick={handleSubmit}
            disabled={!host.trim() || !target.trim()}
            className="rounded-lg bg-[#2F1AD7] px-5 py-2 text-[13px] font-bold text-white disabled:opacity-40"
          >
            Thêm tên miền
          </button>
        </div>
      </div>
    </div>
  );
};
