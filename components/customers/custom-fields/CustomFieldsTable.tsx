import { useState } from "react";
import { Ellipsis, List, TextCursorInput } from "lucide-react";
import { typeLabelMap } from "./data";
import type { CustomerFieldItem } from "./types";

interface CustomFieldsTableProps {
  items: CustomerFieldItem[];
  selectedIds: string[];
  allChecked: boolean;
  onToggleSelectAll: () => void;
  onToggleSelectOne: (id: string) => void;
  onEditField: (id: string) => void;
  onDeleteField: (id: string) => void;
}

const headerCellClass = "text-[13px] font-extrabold leading-none text-neutral-700";

export const CustomFieldsTable = ({
  items,
  selectedIds,
  allChecked,
  onToggleSelectAll,
  onToggleSelectOne,
  onEditField,
  onDeleteField,
}: CustomFieldsTableProps) => {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  const toggleMenu = (id: string) => {
    setActiveMenuId((prev) => (prev === id ? null : id));
  };

  const handleEdit = (id: string) => {
    setActiveMenuId(null);
    onEditField(id);
  };

  const handleDelete = (id: string) => {
    setActiveMenuId(null);
    onDeleteField(id);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200">
      <div className="hidden border-b border-neutral-200 bg-neutral-50 px-3 py-3 text-[13px] font-extrabold text-neutral-700 lg:grid lg:grid-cols-[40px_1.4fr_1.4fr_0.8fr_1.2fr_56px]">
        <span className="flex items-center justify-center">
          <input type="checkbox" checked={allChecked} onChange={onToggleSelectAll} className="h-4 w-4 rounded border border-neutral-300" />
        </span>
        <span className={headerCellClass}>Tên hiển thị</span>
        <span className={headerCellClass}>Tên trường</span>
        <span className={headerCellClass}>Kiểu dữ liệu</span>
        <span className={headerCellClass}>Mô tả</span>
        <span />
      </div>

      <div className="divide-y divide-neutral-200">
        {items.map((item) => (
          <div
            key={item.id}
            className="grid items-center px-3 py-4 text-[13px] text-neutral-700 lg:grid-cols-[40px_1.4fr_1.4fr_0.8fr_1.2fr_56px]"
          >
            <span className="mb-2 flex items-center justify-center lg:mb-0">
              <input
                type="checkbox"
                checked={selectedIds.includes(item.id)}
                onChange={() => onToggleSelectOne(item.id)}
                className="h-4 w-4 rounded border border-neutral-300"
              />
            </span>

            <p className="mb-2 lg:mb-0">{item.displayName}</p>

            <code className="mb-2 w-fit rounded-md bg-neutral-100 px-2.5 py-1 font-mono text-[13px] text-neutral-700 lg:mb-0">
              {item.fieldName}
            </code>

            <span className="mb-2 inline-flex w-fit items-center gap-2 text-[13px] text-neutral-800 lg:mb-0">
              {item.type === "list" ? <List size={16} /> : <TextCursorInput size={16} />}
              {typeLabelMap[item.type]}
            </span>

            <p className="mb-2 line-clamp-2 text-[13px] text-neutral-700 lg:mb-0">{item.description}</p>

            <div className="relative flex items-center justify-end">
              <button
                type="button"
                onClick={() => toggleMenu(item.id)}
                className="rounded-xl border border-neutral-200 p-2 text-neutral-500 hover:bg-neutral-50"
                aria-label="Tùy chọn"
              >
                <Ellipsis size={16} />
              </button>

              {activeMenuId === item.id && (
                <div className="absolute right-0 top-11 z-20 min-w-[128px] rounded-xl border border-neutral-200 bg-white p-1 shadow-lg">
                  <button
                    type="button"
                    onClick={() => handleEdit(item.id)}
                    className="w-full rounded-lg px-3 py-2 text-left text-[13px] text-neutral-700 hover:bg-neutral-50"
                  >
                    Chỉnh sửa
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    className="w-full rounded-lg px-3 py-2 text-left text-[13px] text-red-600 hover:bg-red-50"
                  >
                    Xóa
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
