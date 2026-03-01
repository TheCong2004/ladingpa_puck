"use client";

import { useMemo, useState } from "react";
import { Download, Search } from "lucide-react";
import { DataLeadsTable } from "./DataLeadsTable";
import { DEFAULT_ERROR_LEADS, DEFAULT_VALID_LEADS, PERIOD_OPTIONS } from "./leads_data";
import type { LeadItem, LeadsPeriod, LeadsTab } from "./leads_types";

const makeCsv = (rows: LeadItem[]) => {
  const header = ["Thời gian", "Họ và Tên", "Điện thoại", "Email", "URL"];
  const content = rows.map((item) => [item.createdAt, item.fullName, item.phone, item.email, item.url]);
  return [header, ...content]
    .map((row) => row.map((cell) => `\"${String(cell).replaceAll("\"", "\"\"")}\"`).join(","))
    .join("\n");
};

export const LeadsMain = () => {
  const [activeTab, setActiveTab] = useState<LeadsTab>("valid");
  const [keyword, setKeyword] = useState("");
  const [period, setPeriod] = useState<LeadsPeriod>("all");

  const source = activeTab === "valid" ? DEFAULT_VALID_LEADS : DEFAULT_ERROR_LEADS;

  const filteredItems = useMemo(() => {
    const normalized = keyword.trim().toLowerCase();

    let current = source;
    if (period === "7d") {
      current = source.slice(0, 7);
    } else if (period === "30d") {
      current = source.slice(0, 30);
    }

    if (!normalized) {
      return current;
    }

    return current.filter((item) => {
      return (
        item.fullName.toLowerCase().includes(normalized) ||
        item.phone.toLowerCase().includes(normalized) ||
        item.email.toLowerCase().includes(normalized) ||
        item.url.toLowerCase().includes(normalized)
      );
    });
  }, [keyword, period, source]);

  const handleExport = () => {
    const csv = makeCsv(filteredItems);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", activeTab === "valid" ? "data-leads.csv" : "data-loi.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <header className="mb-5">
        <h1 className="text-[42px] font-bold leading-tight text-neutral-900">Data Leads</h1>
        <p className="text-[13px] text-neutral-500">Quản lý data leads và data lỗi</p>
      </header>

      <div className="mb-4 border-b border-neutral-200">
        <div className="flex items-center gap-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab("valid")}
            className={`relative whitespace-nowrap pb-3 text-[13px] font-bold ${activeTab === "valid" ? "text-neutral-900" : "text-neutral-400"}`}
          >
            Danh sách Data Leads
            {activeTab === "valid" && <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-[#2F1AD7]" />}
          </button>

          <button
            onClick={() => setActiveTab("error")}
            className={`relative whitespace-nowrap pb-3 text-[13px] font-bold ${activeTab === "error" ? "text-neutral-900" : "text-neutral-400"}`}
          >
            Danh sách Data lỗi
            {activeTab === "error" && <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-[#2F1AD7]" />}
          </button>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,1fr)_280px_150px]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
          <input
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="Tìm kiếm"
            className="w-full rounded-xl border border-neutral-200 py-2.5 pl-10 pr-3 text-[13px] outline-none focus:border-indigo-300"
          />
        </div>

        <select
          value={period}
          onChange={(event) => setPeriod(event.target.value as LeadsPeriod)}
          className="rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-[13px] outline-none focus:border-indigo-300"
        >
          {PERIOD_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <button
          onClick={handleExport}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-[13px] font-bold text-neutral-800 hover:bg-neutral-50"
        >
          <Download size={16} /> Xuất excel
        </button>
      </div>

      <DataLeadsTable items={filteredItems} />
    </div>
  );
};
