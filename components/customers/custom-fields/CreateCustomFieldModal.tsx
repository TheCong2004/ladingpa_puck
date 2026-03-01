import { X } from "lucide-react";
import type { FieldType } from "./types";

interface CreateCustomFieldModalProps {
  open: boolean;
  mode: "create" | "edit";
  displayName: string;
  fieldType: FieldType;
  description: string;
  onChangeDisplayName: (value: string) => void;
  onChangeFieldType: (value: FieldType) => void;
  onChangeDescription: (value: string) => void;
  onClose: () => void;
  onSave: () => void;
}

export const CreateCustomFieldModal = ({
  open,
  mode,
  displayName,
  fieldType,
  description,
  onChangeDisplayName,
  onChangeFieldType,
  onChangeDescription,
  onClose,
  onSave,
}: CreateCustomFieldModalProps) => {
  if (!open) {
    return null;
  }

  const title = mode === "edit" ? "Chỉnh sửa trường tùy chỉnh" : "Tạo trường tùy chỉnh";
  const submitLabel = mode === "edit" ? "Cập nhật" : "Lưu";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="w-full max-w-lg rounded-2xl border border-neutral-200 bg-white p-5 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-neutral-900">{title}</h2>
          <button type="button" onClick={onClose} className="rounded-lg p-1 text-neutral-500 hover:bg-neutral-100">
            <X size={18} />
          </button>
        </div>

        <div className="space-y-4">
          <label className="block text-[13px] font-semibold text-neutral-700">
            Tên hiển thị
            <input
              value={displayName}
              onChange={(event) => onChangeDisplayName(event.target.value)}
              placeholder="Nhập tên hiển thị"
              className="mt-1.5 h-11 w-full rounded-xl border border-neutral-200 px-3 text-[13px] outline-none focus:border-indigo-300"
            />
          </label>

          <label className="block text-[13px] font-semibold text-neutral-700">
            Kiểu dữ liệu
            <select
              value={fieldType}
              onChange={(event) => onChangeFieldType(event.target.value as FieldType)}
              className="mt-1.5 h-11 w-full rounded-xl border border-neutral-200 bg-white px-3 text-[13px] outline-none focus:border-indigo-300"
            >
              <option value="text">Dòng văn bản</option>
              <option value="list">Danh sách</option>
            </select>
          </label>

          <label className="block text-[13px] font-semibold text-neutral-700">
            Mô tả
            <textarea
              value={description}
              onChange={(event) => onChangeDescription(event.target.value)}
              rows={3}
              placeholder="Nhập mô tả"
              className="mt-1.5 w-full rounded-xl border border-neutral-200 px-3 py-2 text-[13px] outline-none focus:border-indigo-300"
            />
          </label>
        </div>

        <div className="mt-5 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="h-10 rounded-xl border border-neutral-200 px-4 text-[13px] font-semibold text-neutral-700 hover:bg-neutral-50"
          >
            Huỷ
          </button>
          <button
            type="button"
            onClick={onSave}
            className="h-10 rounded-xl bg-[#2F1AD7] px-4 text-[13px] font-semibold text-white hover:opacity-95"
          >
            {submitLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
