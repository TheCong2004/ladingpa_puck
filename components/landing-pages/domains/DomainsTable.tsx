"use client";

import { Search, RefreshCcw, Trash2 } from "lucide-react";
import type { DomainItem } from "./domains_types";

interface DomainsTableProps {
  items: DomainItem[];
  keyword: string;
  onKeywordChange: (value: string) => void;
  onDelete: (id: string) => void;
  onRecheck: (id: string) => void;
}

export const DomainsTable = ({ items, keyword, onKeywordChange, onDelete, onRecheck }: DomainsTableProps) => {
  return (
    <section className="mt-6 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      <div className="border-b border-neutral-200 p-4 md:p-5">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
          <input
            value={keyword}
            onChange={(event) => onKeywordChange(event.target.value)}
            placeholder="Tìm kiếm tên miền..."
            className="w-full rounded-xl border border-neutral-200 py-2.5 pl-10 pr-3 text-[13px] outline-none focus:border-indigo-300"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[840px] border-collapse text-left text-[13px]">
          <thead className="bg-neutral-50 text-neutral-700">
            <tr>
              <th className="px-5 py-3 font-bold">Host name</th>
              <th className="px-5 py-3 font-bold">Tên miền đích</th>
              <th className="px-5 py-3 font-bold">Provider</th>
              <th className="px-5 py-3 font-bold">Trạng thái</th>
              <th className="px-5 py-3 font-bold">Tạo lúc</th>
              <th className="px-5 py-3 font-bold">Hành động</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t border-neutral-100">
                <td className="px-5 py-3 font-bold text-neutral-800">{item.host}</td>
                <td className="px-5 py-3 text-neutral-700">{item.target}</td>
                <td className="px-5 py-3 text-neutral-700">{item.provider}</td>
                <td className="px-5 py-3">
                  <span
                    className={`rounded-lg px-2.5 py-1 font-bold ${
                      item.status === "Đã xác thực"
                        ? "bg-emerald-50 text-emerald-700"
                        : item.status === "Chờ xác thực"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-rose-50 text-rose-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-neutral-500">{item.createdAt}</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onRecheck(item.id)}
                      className="rounded-lg border border-neutral-300 p-2 text-neutral-600 hover:bg-neutral-50"
                      aria-label="Kiểm tra lại"
                    >
                      <RefreshCcw size={15} />
                    </button>
                    <button
                      onClick={() => onDelete(item.id)}
                      className="rounded-lg border border-rose-200 p-2 text-rose-500 hover:bg-rose-50"
                      aria-label="Xóa domain"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {items.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-10 text-center text-[13px] text-neutral-500">
                  Không có tên miền phù hợp với bộ lọc.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
