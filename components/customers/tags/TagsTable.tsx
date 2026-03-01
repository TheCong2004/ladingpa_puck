import { ArrowUpDown, PackageOpen } from "lucide-react";
import type { CustomerTagItem } from "./types";
import { formatDate, headerCellClass, sortHeaderClass } from "./utils";

interface TagsTableProps {
  items: CustomerTagItem[];
  selectedIds: string[];
  allChecked: boolean;
  onToggleSelectAll: () => void;
  onToggleSelectOne: (id: string) => void;
  onToggleCreatedSort: () => void;
  onToggleUpdatedSort: () => void;
}

export const TagsTable = ({
  items,
  selectedIds,
  allChecked,
  onToggleSelectAll,
  onToggleSelectOne,
  onToggleCreatedSort,
  onToggleUpdatedSort,
}: TagsTableProps) => {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200">
      <div className="hidden border-b border-neutral-200 bg-neutral-50 px-3 py-3 text-[13px] font-extrabold text-neutral-700 lg:grid lg:grid-cols-[40px_1.8fr_0.8fr_1fr_1fr]">
        <span className="flex items-center justify-center">
          <input
            type="checkbox"
            checked={allChecked}
            onChange={onToggleSelectAll}
            className="h-4 w-4 rounded border border-neutral-300"
          />
        </span>
        <span className={headerCellClass}>Tên Tag</span>
        <span className={headerCellClass}>Số lượng</span>
        <button type="button" onClick={onToggleCreatedSort} className={sortHeaderClass}>
          Ngày tạo
          <ArrowUpDown size={14} />
        </button>
        <button type="button" onClick={onToggleUpdatedSort} className={sortHeaderClass}>
          Thời gian cập nhật
          <ArrowUpDown size={14} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-y-2 border-b border-neutral-200 bg-neutral-50 px-3 py-3 text-[13px] font-extrabold text-neutral-700 sm:grid-cols-3 lg:hidden">
        <span className={headerCellClass}>Tên Tag</span>
        <span className={headerCellClass}>Số lượng</span>
        <button type="button" onClick={onToggleCreatedSort} className={sortHeaderClass}>
          Ngày tạo
          <ArrowUpDown size={14} />
        </button>
        <button type="button" onClick={onToggleUpdatedSort} className={sortHeaderClass}>
          Thời gian cập nhật
          <ArrowUpDown size={14} />
        </button>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center px-4 py-12 md:py-16 lg:py-20">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 md:h-20 md:w-20">
            <PackageOpen size={38} strokeWidth={1.8} className="md:h-[42px] md:w-[42px]" />
          </div>
          <p className="text-center text-2xl font-semibold text-neutral-900 sm:text-3xl lg:text-[40px]">Bạn chưa có tag nào</p>
          <p className="mt-2 text-center text-[13px] text-neutral-500">Vui lòng tạo dữ liệu để tiếp tục sử dụng</p>
        </div>
      ) : (
        <div className="divide-y divide-neutral-200">
          {items.map((tagItem) => (
            <div
              key={tagItem.id}
              className="grid items-center px-3 py-4 text-[13px] text-neutral-700 lg:grid-cols-[40px_1.8fr_0.8fr_1fr_1fr]"
            >
              <span className="flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={selectedIds.includes(tagItem.id)}
                  onChange={() => onToggleSelectOne(tagItem.id)}
                  className="h-4 w-4 rounded border border-neutral-300"
                />
              </span>
              <span className="truncate">{tagItem.name}</span>
              <span>{tagItem.count}</span>
              <span>{formatDate(tagItem.createdAt)}</span>
              <span>{formatDate(tagItem.updatedAt)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
