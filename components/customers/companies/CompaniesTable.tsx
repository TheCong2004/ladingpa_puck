import { ArrowUpDown } from "lucide-react";
import type { CompanyItem } from "./types";
import { formatDate, sortHeaderClass } from "./utils";

interface CompaniesTableProps {
  items: CompanyItem[];
  selectedIds: string[];
  allChecked: boolean;
  onToggleSelectAll: () => void;
  onToggleSelectOne: (id: string) => void;
  onToggleCreatedSort: () => void;
  onToggleUpdatedSort: () => void;
}

export const CompaniesTable = ({
  items,
  selectedIds,
  allChecked,
  onToggleSelectAll,
  onToggleSelectOne,
  onToggleCreatedSort,
  onToggleUpdatedSort,
}: CompaniesTableProps) => {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200">
      <div className="hidden border-b border-neutral-200 bg-neutral-50 px-3 py-3 text-[13px] font-extrabold text-neutral-700 lg:grid lg:grid-cols-[40px_1.8fr_1fr_1fr]">
        <span className="flex items-center justify-center">
          <input
            type="checkbox"
            checked={allChecked}
            onChange={onToggleSelectAll}
            className="h-4 w-4 rounded border border-neutral-300"
          />
        </span>
        <span>Tên công ty</span>
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
        <span>Tên công ty</span>
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
        <div className="px-5 py-8 text-[13px] text-neutral-500">Đang hiển thị 1 đến 0 của 0 bản ghi</div>
      ) : (
        <div className="divide-y divide-neutral-200">
          {items.map((company) => (
            <div
              key={company.id}
              className="grid items-center px-3 py-3 text-[13px] text-neutral-700 lg:grid-cols-[40px_1.8fr_1fr_1fr]"
            >
              <span className="flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={selectedIds.includes(company.id)}
                  onChange={() => onToggleSelectOne(company.id)}
                  className="h-4 w-4 rounded border border-neutral-300"
                />
              </span>
              <span className="truncate">{company.name}</span>
              <span>{formatDate(company.createdAt)}</span>
              <span>{formatDate(company.updatedAt)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
