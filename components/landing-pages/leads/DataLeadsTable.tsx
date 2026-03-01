"use client";

import { PackageOpen } from "lucide-react";
import type { LeadItem } from "./leads_types";

interface DataLeadsTableProps {
  items: LeadItem[];
}

export const DataLeadsTable = ({ items }: DataLeadsTableProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-left text-[13px]">
          <thead className="border-b border-neutral-200 bg-neutral-50 text-neutral-700">
            <tr>
              <th className="w-12 px-4 py-3">
                <input type="checkbox" className="rounded border-neutral-300 accent-[#2F1AD7]" />
              </th>
              <th className="px-4 py-3 font-bold">Thời gian</th>
              <th className="px-4 py-3 font-bold">Họ và Tên</th>
              <th className="px-4 py-3 font-bold">Điện thoại</th>
              <th className="px-4 py-3 font-bold">Email</th>
              <th className="px-4 py-3 font-bold">URL</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t border-neutral-100">
                <td className="px-4 py-3">
                  <input type="checkbox" className="rounded border-neutral-300 accent-[#2F1AD7]" />
                </td>
                <td className="px-4 py-3 text-neutral-600">{item.createdAt}</td>
                <td className="px-4 py-3 font-bold text-neutral-800">{item.fullName}</td>
                <td className="px-4 py-3 text-neutral-700">{item.phone}</td>
                <td className="px-4 py-3 text-neutral-700">{item.email}</td>
                <td className="px-4 py-3 text-neutral-500">{item.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {items.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-4 px-6 py-14 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
            <PackageOpen size={34} />
          </div>
          <h3 className="text-[28px] font-bold text-neutral-800">Bạn chưa có dữ liệu nào</h3>
          <p className="text-[13px] text-neutral-500">Vui lòng tạo dữ liệu để tiếp tục sử dụng</p>
        </div>
      )}
    </div>
  );
};
