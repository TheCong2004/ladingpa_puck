import { X } from "lucide-react";

interface CreateCompanyModalProps {
  open: boolean;
  value: string;
  onChange: (value: string) => void;
  onClose: () => void;
  onSave: () => void;
}

export const CreateCompanyModal = ({ open, value, onChange, onClose, onSave }: CreateCompanyModalProps) => {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-5 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-neutral-900">Thêm công ty mới</h2>
          <button type="button" onClick={onClose} className="rounded-lg p-1 text-neutral-500 hover:bg-neutral-100">
            <X size={18} />
          </button>
        </div>

        <label className="mb-4 block text-[13px] font-semibold text-neutral-700">
          Tên công ty
          <input
            value={value}
            onChange={(event) => onChange(event.target.value)}
            type="text"
            placeholder="Nhập tên công ty"
            className="mt-1.5 h-11 w-full rounded-xl border border-neutral-200 px-3 text-[13px] outline-none focus:border-indigo-300"
          />
        </label>

        <div className="flex justify-end gap-2">
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
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};
