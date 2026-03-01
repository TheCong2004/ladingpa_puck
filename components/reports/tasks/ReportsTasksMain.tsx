"use client";

import { useState } from "react";

const tabs = ["Tổng quan", "Hiệu suất", "Khối lượng"];

export const ReportsTasksMain = () => {
  const [activeTab, setActiveTab] = useState("Tổng quan");
  const [fromDate, setFromDate] = useState("2026-03-01");
  const [toDate, setToDate] = useState("2026-03-01");

  const showOverview = activeTab === "Tổng quan";
  const showPerformance = activeTab === "Hiệu suất";
  const showVolume = activeTab === "Khối lượng";

  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <section className="space-y-5 rounded-2xl border border-neutral-200 bg-white p-4 md:p-6">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Báo cáo công việc</h1>
          <p className="mt-2 text-[13px] text-neutral-600">
            Theo dõi toàn bộ tiến độ công việc, hiệu suất đội nhóm trong một nơi duy nhất, giúp bạn nhanh chóng nắm bắt tình hình và đưa ra quyết định kịp thời.
          </p>
        </div>

        <div className="border-b border-neutral-200">
          <div className="flex flex-wrap gap-6">
            {tabs.map((tab) => {
              const isActive = tab === activeTab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`border-b-2 pb-3 text-[13px] font-semibold transition ${
                    isActive
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-neutral-700 hover:text-neutral-900"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:max-w-[520px] lg:grid-cols-[1fr_18px_1fr] lg:items-center">
          <input
            type="date"
            value={fromDate}
            onChange={(event) => setFromDate(event.target.value)}
            className="h-10 rounded-lg border border-neutral-200 px-3 text-[13px] text-neutral-700 outline-none"
          />
          <span className="hidden text-center text-[13px] text-neutral-500 lg:block">-</span>
          <input
            type="date"
            value={toDate}
            onChange={(event) => setToDate(event.target.value)}
            className="h-10 rounded-lg border border-neutral-200 px-3 text-[13px] text-neutral-700 outline-none"
          />
        </div>

        {(showOverview || showVolume) && (
          <div className="rounded-xl border border-neutral-200 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm md:p-5">
            <h2 className="text-[13px] font-extrabold text-neutral-900">Tổng quan</h2>
            <p className="mt-1 text-[13px] text-indigo-900/70">Thống kê nhanh về hiệu suất và công việc trong quy trình</p>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-lg bg-neutral-50 p-3">
                <p className="text-[13px] text-neutral-600">Tổng công việc</p>
                <p className="mt-1 text-2xl font-bold text-neutral-900">0</p>
              </div>
              <div className="rounded-lg bg-neutral-50 p-3">
                <p className="text-[13px] text-neutral-600">Công việc đã hoàn thành</p>
                <p className="mt-1 text-2xl font-bold text-neutral-900">0</p>
              </div>
              <div className="rounded-lg bg-neutral-50 p-3">
                <p className="text-[13px] text-neutral-600">Công việc chưa hoàn thành</p>
                <p className="mt-1 text-2xl font-bold text-neutral-900">0</p>
              </div>
              <div className="rounded-lg bg-neutral-50 p-3">
                <p className="text-[13px] text-neutral-600">Công việc quá hạn</p>
                <p className="mt-1 text-2xl font-bold text-neutral-900">0</p>
              </div>
            </div>
          </div>
        )}

        {(showOverview || showPerformance) && (
          <div className="rounded-xl border border-neutral-200 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm md:p-5">
            <h2 className="text-[13px] font-extrabold text-neutral-900">Tiến độ hoàn thành công việc</h2>
            <p className="mt-1 text-[13px] text-indigo-900/70">
              Được đánh giá dựa trên tỷ lệ giữa công việc đã hoàn thành và tổng công việc
            </p>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-neutral-50 p-3">
                <p className="text-[13px] text-neutral-600">Đã hoàn thành</p>
                <p className="mt-1 text-xl font-bold text-neutral-900">0/0</p>
                <p className="text-[13px] text-neutral-500">công việc</p>
              </div>
              <div className="rounded-lg bg-neutral-50 p-3">
                <p className="text-[13px] text-neutral-600">Tổng tiến độ</p>
                <p className="mt-1 text-2xl font-bold text-neutral-900">0%</p>
              </div>
            </div>
          </div>
        )}

        {(showOverview || showVolume) && (
          <div className="rounded-xl border border-neutral-200 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm md:p-5">
            <h2 className="text-[13px] font-extrabold text-neutral-900">Thống kê công việc theo trạng thái</h2>
            <p className="mt-1 text-[13px] text-indigo-900/70">Thống kê nhanh về hiệu suất và công việc trong quy trình</p>

            <div className="mt-4 h-[260px] rounded-lg border border-neutral-100 sm:h-[320px] md:h-[360px]">
              <div className="relative h-full w-full">
                <div className="absolute bottom-6 left-10 top-6 border-l border-neutral-600" />
                <div className="absolute bottom-6 left-10 right-6 border-t border-neutral-300" />
                <p className="absolute left-5 top-1/2 -translate-y-1/2 text-[13px] text-neutral-500">Không có dữ liệu</p>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[13px] text-neutral-600">0</div>
              </div>
            </div>
          </div>
        )}

        {(showOverview || showPerformance) && (
          <div className="rounded-xl border border-neutral-200 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm md:p-5">
            <h2 className="text-[13px] font-extrabold text-neutral-900">Hiệu suất công việc theo nhân viên</h2>
            <p className="mt-1 text-[13px] text-indigo-900/70">Thống kê nhanh về hiệu suất và công việc trong quy trình</p>

            <div className="mt-4 overflow-x-auto rounded-lg border border-neutral-200">
              <table className="min-w-full text-[13px] text-neutral-700">
                <thead className="bg-neutral-50 text-neutral-800">
                  <tr>
                    <th className="px-4 py-3 text-left font-extrabold">Nhân viên</th>
                    <th className="px-4 py-3 text-right font-extrabold">Tổng công việc</th>
                    <th className="px-4 py-3 text-right font-extrabold">Đã hoàn thành</th>
                    <th className="px-4 py-3 text-right font-extrabold">Chưa hoàn thành</th>
                    <th className="px-4 py-3 text-right font-extrabold">Quá hạn</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-center text-neutral-500">
                      Chưa có dữ liệu
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="rounded-xl border border-neutral-200 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm md:p-5">
          <h2 className="text-[13px] font-extrabold text-neutral-900">Công việc quá hạn</h2>
          <p className="mt-1 text-[13px] text-indigo-900/70">
            Danh sách các công việc đang quá hạn so với hạn hoàn thành.
          </p>

          <div className="mt-4 overflow-x-auto rounded-lg border border-neutral-200">
            <table className="min-w-full text-[13px] text-neutral-700">
              <thead className="bg-neutral-50 text-neutral-800">
                <tr>
                  <th className="px-4 py-3 text-left font-extrabold">Tên công việc</th>
                  <th className="px-4 py-3 text-left font-extrabold">Người phụ trách</th>
                  <th className="px-4 py-3 text-left font-extrabold">Hạn hoàn thành</th>
                  <th className="px-4 py-3 text-left font-extrabold">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-neutral-500">
                    Không có dữ liệu
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
