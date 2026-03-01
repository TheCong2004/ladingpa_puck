"use client";

import { Search, Trash2 } from "lucide-react";
import type { TagItem } from "./tags_types";

interface TagsTableProps {
  items: TagItem[];
  keyword: string;
  onKeywordChange: (value: string) => void;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string) => void;
}

export const TagsTable = ({ items, keyword, onKeywordChange, onDelete, onToggleStatus }: TagsTableProps) => {
  return (
    <section className="mt-6 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      <div className="border-b border-neutral-200 p-4 md:p-5">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
          <input
            value={keyword}
            onChange={(event) => onKeywordChange(event.target.value)}
            placeholder="Tìm kiếm tag..."
            className="w-full rounded-xl border border-neutral-200 py-2.5 pl-10 pr-3 text-[13px] outline-none focus:border-indigo-300"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left text-[13px]">
          <thead className="bg-neutral-50 text-neutral-700">
            <tr>
              <th className="px-5 py-3 font-bold">Tên Tag</th>
              <th className="px-5 py-3 font-bold">Mô tả</th>
              <th className="px-5 py-3 font-bold">Sử dụng</th>
              <th className="px-5 py-3 font-bold">Trạng thái</th>
              <th className="px-5 py-3 font-bold">Tạo lúc</th>
              <th className="px-5 py-3 font-bold">Hành động</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t border-neutral-100">
                <td className="px-5 py-3">
                  <span className={`inline-flex rounded-lg px-2.5 py-1 font-bold ${item.color}`}>{item.name}</span>
                </td>
                <td className="px-5 py-3 text-neutral-700">{item.description}</td>
                <td className="px-5 py-3 text-neutral-700">{item.usageCount}</td>
                <td className="px-5 py-3">
                  <button
                    onClick={() => onToggleStatus(item.id)}
                    className={`rounded-lg px-2.5 py-1 font-bold ${
                      item.status === "Đang hoạt động" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {item.status}
                  </button>
                </td>
                <td className="px-5 py-3 text-neutral-500">{item.createdAt}</td>
                <td className="px-5 py-3">
                  <button
                    onClick={() => onDelete(item.id)}
                    className="rounded-lg border border-rose-200 p-2 text-rose-500 hover:bg-rose-50"
                    aria-label="Xóa tag"
                  >
                    <Trash2 size={15} />
                  </button>
                </td>
              </tr>
            ))}

            {items.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-10 text-center text-[13px] text-neutral-500">
                  Không có tag phù hợp với bộ lọc.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
