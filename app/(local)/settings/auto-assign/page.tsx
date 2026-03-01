"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type TabType = "percentage" | "advanced";

function ToggleSwitch({ checked, onToggle }: { checked: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`relative h-7 w-12 rounded-full transition-colors ${checked ? "bg-indigo-700" : "bg-neutral-200"}`}
      aria-pressed={checked}
      aria-label="Bật tắt Auto Assign"
    >
      <span
        className={`absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-white transition-all ${
          checked ? "left-6" : "left-1"
        }`}
      />
    </button>
  );
}

export default function AutoAssignPage() {
  const [enabled, setEnabled] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>("percentage");
  const [ruleType, setRuleType] = useState("all");

  return (
    <div className="w-full px-4 py-5 sm:px-6 lg:px-12 xl:px-16">
      <div className="mx-auto w-full max-w-350">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-[30px] font-bold leading-tight text-neutral-900">Auto Assign</h1>
              <ToggleSwitch checked={enabled} onToggle={() => setEnabled((prev) => !prev)} />
            </div>
            <p className="mt-2 text-[14px] text-neutral-500">
              Tự động chia đơn cho các thành viên trong tài khoản theo quy tắc
            </p>
          </div>

          <button className="w-full rounded-xl bg-indigo-700 px-7 py-3 text-[14px] font-bold text-white hover:bg-indigo-800 sm:w-auto">
            Lưu thay đổi
          </button>
        </div>

        <div className="mb-6 border-b border-neutral-200">
          <div className="flex flex-wrap items-center gap-4 sm:gap-8 lg:gap-10">
            <button
              type="button"
              onClick={() => setActiveTab("percentage")}
              className={`border-b-3 px-3 py-2 text-[14px] font-semibold transition-colors ${
                activeTab === "percentage"
                  ? "border-indigo-700 text-neutral-900"
                  : "border-transparent text-neutral-500"
              }`}
            >
              Tỉ lệ phần trăm
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("advanced")}
              className={`border-b-3 px-3 py-2 text-[14px] font-semibold transition-colors ${
                activeTab === "advanced"
                  ? "border-indigo-700 text-neutral-900"
                  : "border-transparent text-neutral-500"
              }`}
            >
              Tuỳ biến nâng cao
            </button>
          </div>
        </div>

        {activeTab === "percentage" ? (
          <div className="space-y-4 px-1 py-3 text-[14px] text-neutral-900">
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="radio"
                name="assign-rule"
                checked={ruleType === "all"}
                onChange={() => setRuleType("all")}
                className="h-5 w-5 border-neutral-300 text-indigo-700 focus:ring-indigo-300"
              />
              <span>Chia đều cho toàn bộ nhân viên</span>
            </label>

            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="radio"
                name="assign-rule"
                checked={ruleType === "percent"}
                onChange={() => setRuleType("percent")}
                className="h-5 w-5 border-neutral-300 text-indigo-700 focus:ring-indigo-300"
              />
              <span>Chia theo tỉ lệ phần trăm từng nhân viên</span>
            </label>
          </div>
        ) : (
          <div className="space-y-6 px-1 py-3">
            <div>
              <p className="mb-2 text-[14px] font-semibold text-neutral-900">Điều kiện khác</p>
              <div className="relative w-full sm:w-70">
                <select
                  defaultValue="Mặc định (Không chia)"
                  className="h-12 w-full appearance-none rounded-xl border border-neutral-300 bg-white px-4 pr-10 text-[14px] text-neutral-700 outline-none focus:border-indigo-300"
                >
                  <option>Mặc định (Không chia)</option>
                  <option>Chia theo sản phẩm</option>
                  <option>Chia theo khu vực</option>
                </select>
                <ChevronDown
                  size={18}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500"
                />
              </div>
            </div>

            <button className="rounded-xl border border-indigo-700 bg-white px-6 py-3 text-[14px] font-semibold text-indigo-700 hover:bg-indigo-50">
              Thêm nhóm điều kiện
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
