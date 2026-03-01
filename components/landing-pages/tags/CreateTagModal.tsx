"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { TAG_COLOR_OPTIONS } from "./tags_data";
import type { NewTagPayload, TagStatus } from "./tags_types";

interface CreateTagModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (payload: NewTagPayload) => void;
}

export const CreateTagModal = ({ isOpen, onClose, onCreate }: CreateTagModalProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState(TAG_COLOR_OPTIONS[0]);
  const [status, setStatus] = useState<TagStatus>("Đang hoạt động");

  const resetForm = () => {
    setName("");
    setDescription("");
    setColor(TAG_COLOR_OPTIONS[0]);
    setStatus("Đang hoạt động");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      return;
    }

    onCreate({
      name: name.trim(),
      description: description.trim() || "Tag được tạo thủ công",
      color,
      status,
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
          <h2 className="text-[13px] font-bold text-neutral-900">Tạo Tag mới</h2>
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
            <label className="font-bold text-neutral-800">Tên Tag</label>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="VD: Khách hàng tiềm năng"
              className="w-full rounded-xl border border-neutral-200 px-4 py-2.5 outline-none focus:border-indigo-300"
            />
          </div>

          <div className="space-y-2">
            <label className="font-bold text-neutral-800">Mô tả</label>
            <textarea
              rows={3}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="w-full rounded-xl border border-neutral-200 px-4 py-2.5 outline-none focus:border-indigo-300"
            />
          </div>

          <div className="space-y-2">
            <label className="font-bold text-neutral-800">Màu Tag</label>
            <div className="flex flex-wrap gap-2">
              {TAG_COLOR_OPTIONS.map((item) => (
                <button
                  key={item}
                  onClick={() => setColor(item)}
                  className={`rounded-lg px-3 py-2 text-[13px] ${item} ${color === item ? "ring-2 ring-indigo-300" : ""}`}
                >
                  Mẫu màu
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-bold text-neutral-800">Trạng thái</label>
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value as TagStatus)}
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 outline-none focus:border-indigo-300"
            >
              <option value="Đang hoạt động">Đang hoạt động</option>
              <option value="Tạm ẩn">Tạm ẩn</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 border-t border-neutral-200 px-5 py-4">
          <button onClick={handleClose} className="rounded-lg border border-neutral-300 px-4 py-2 text-[13px] font-bold text-neutral-700">
            Hủy
          </button>
          <button
            onClick={handleSubmit}
            disabled={!name.trim()}
            className="rounded-lg bg-[#2F1AD7] px-5 py-2 text-[13px] font-bold text-white disabled:opacity-40"
          >
            Tạo Tag
          </button>
        </div>
      </div>
    </div>
  );
};
