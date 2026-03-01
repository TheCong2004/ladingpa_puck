"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Monitor,
  Clock,
  ArrowUpDown,
  HelpCircle,
  ChevronDown,
  Users,
  ChartLine,
  Database,
  Pause,
  FileUp,
  Trash2,
} from "lucide-react";
import { LANDING_DATA, STATUS_STYLES, type LandingStatus } from "./data";

interface DataTableProps {
  selectedMember?: string;
  selectedStatus?: "Tất cả" | LandingStatus;
}

export const DataTable = ({ selectedMember = "Tất cả", selectedStatus = "Tất cả" }: DataTableProps) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isActionOpen, setIsActionOpen] = useState(false);
  const actionRef = useRef<HTMLDivElement>(null);

  // Logic lọc dữ liệu theo thành viên + trạng thái
  const filteredData = useMemo(() => {
    return LANDING_DATA.filter((item) => {
      const matchMember = selectedMember === "Tất cả" || item.member === selectedMember;
      const matchStatus = selectedStatus === "Tất cả" || item.status === selectedStatus;
      return matchMember && matchStatus;
    });
  }, [selectedMember, selectedStatus]);

  const visibleIdsKey = useMemo(() => filteredData.map((item) => item.id).join("|"), [filteredData]);

  const selectedCount = selectedIds.length;

  const actionItems = useMemo(
    () => [
      { label: "Phân quyền", icon: Users, danger: false },
      { label: "Thống kê tổng", icon: ChartLine, danger: false },
      { label: "Thống kê trung bình", icon: ChartLine, danger: false },
      { label: "Dữ liệu backup", icon: Database, danger: false },
      { label: "Tạm dừng", icon: Pause, danger: false },
      { label: "Export .ladipage", icon: FileUp, danger: false },
      { label: "Xóa", icon: Trash2, danger: true },
    ],
    []
  );

  useEffect(() => {
    setSelectedIds((prev) => {
      const visibleIds = new Set(filteredData.map((item) => item.id));
      const next = prev.filter((id) => visibleIds.has(id));

      if (next.length === prev.length && next.every((id, index) => id === prev[index])) {
        return prev;
      }

      return next;
    });
  }, [visibleIdsKey, filteredData]);

  useEffect(() => {
    if (selectedCount === 0) {
      setIsActionOpen(false);
    }
  }, [selectedCount]);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!actionRef.current?.contains(event.target as Node)) {
        setIsActionOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const toggleRow = (id: string) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id]));
  };

  return (
    <div className="bg-white border border-neutral-100 rounded-xl shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead className="bg-neutral-50/50 border-b border-neutral-100">
          {/* Header bảng - 13px theo quy tắc text */}
          <tr className="text-[13px] font-bold tracking-tight">
            <th className="w-12 p-4"></th>
            <th className="p-4">
              {selectedCount > 0 ? (
                <div className="relative w-fit" ref={actionRef}>
                  <button
                    onClick={() => setIsActionOpen((prev) => !prev)}
                    className="flex min-w-[160px] items-center justify-between gap-3 rounded-xl border border-[#4F46E5] bg-white px-4 py-2 text-[13px] font-bold text-neutral-800"
                  >
                    Hành động
                    <ChevronDown size={16} className={`text-neutral-400 transition-transform ${isActionOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isActionOpen && (
                    <div className="absolute left-0 top-full z-20 mt-2 w-[265px] overflow-hidden rounded-2xl border border-neutral-200 bg-white p-2 shadow-lg">
                      {actionItems.map((action) => {
                        const Icon = action.icon;
                        return (
                          <button
                            key={action.label}
                            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] transition-all ${action.danger ? "text-red-500 hover:bg-red-50" : "text-neutral-700 hover:bg-neutral-50"}`}
                          >
                            <Icon size={18} />
                            <span>{action.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                "Landing Page"
              )}
            </th>
            <th className="p-4">Trạng thái</th>
            <th className="p-4">Thành viên</th> {/* Cột mới */}
            <th className="p-4">
              <div className="flex items-center gap-1">Truy cập <ArrowUpDown size={14} /></div>
            </th>
            <th className="p-4">
              <div className="flex items-center gap-1">Chuyển đổi <ArrowUpDown size={14} /></div>
            </th>
            <th className="p-4">
              <div className="flex items-center gap-1">Doanh thu <HelpCircle size={14} /></div>
            </th>
          </tr>
        </thead>
        
        <tbody className="divide-y divide-neutral-50">
          {filteredData.map((item) => (
            <tr key={item.id} className="hover:bg-neutral-50/50 transition-colors">
              <td className="p-4 text-center">
                <input
                  type="checkbox"
                  checked={selectedIds.includes(item.id)}
                  onChange={() => toggleRow(item.id)}
                  className="rounded border-neutral-300 accent-[#4F46E5]"
                />
              </td>
              {/* Tên trang - 13px Bold */}
              <td className="p-4">
                <span className="text-[13px] font-bold text-[#4F46E5] cursor-pointer hover:underline">
                  {item.name}
                </span>
              </td>
              <td className="p-4">
                <div className="flex flex-col gap-1">
                  <span className={`w-fit text-[13px] font-bold px-1.5 py-0.5 rounded ${STATUS_STYLES[item.status]}`}>
                    {item.status}
                  </span>
                  {/* Meta data - Giữ nguyên 13px */}
                  <div className="flex items-center gap-3 text-[13px] text-neutral-400">
                    <Monitor size={14} />
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{item.updatedAt}</span>
                    </div>
                  </div>
                </div>
              </td>
              {/* Thành viên - Hiển thị 13px */}
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 font-bold text-[10px]">
                    {item.member.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-[13px] text-neutral-600">{item.member}</span>
                </div>
              </td>
              {/* Số liệu - Giữ nguyên 13px */}
              <td className="p-4 text-[13px] font-bold text-neutral-700">{item.access}</td>
              <td className="p-4 text-[13px] font-bold text-neutral-700">{item.conversions}</td>
              <td className="p-4 text-[13px] font-bold text-neutral-700">{item.revenue}</td>
            </tr>
          ))}
          {filteredData.length === 0 && (
            <tr>
              <td colSpan={7} className="p-8 text-center text-[13px] text-neutral-400">
                Không có dữ liệu phù hợp với bộ lọc hiện tại.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};