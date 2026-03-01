"use client";

import { useMemo, useState } from "react";
import { BusinessDateRangeFilter } from "./BusinessDateRangeFilter";
import { BusinessTabs } from "./BusinessTabs";
import { RevenueSummaryCard } from "./RevenueSummaryCard";
import { SuccessRateCard } from "./SuccessRateCard";
import { SuccessValueCard } from "./SuccessValueCard";
import { tabs } from "./data";
import { TransactionRevenueChartCard } from "./TransactionRevenueChartCard";
import { TransactionSummaryCard } from "./TransactionSummaryCard";

export const ReportsBusinessMain = () => {
  const [activeTab, setActiveTab] = useState("Tổng quan");
  const [fromDate, setFromDate] = useState("2026-03-01");
  const [toDate, setToDate] = useState("2026-03-01");

  const chartLabel = useMemo(() => {
    const [year, month, day] = toDate.split("-");
    return year && month && day ? `${year}-${month}-${day}` : "2026-03-01";
  }, [toDate]);

  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <section className="space-y-5 rounded-2xl border border-neutral-200 bg-white p-4 md:p-6">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Báo cáo kinh doanh</h1>
          <p className="mt-2 text-[13px] text-neutral-600">
            Theo dõi toàn bộ tiến độ giao dịch, hiệu suất đội nhóm và kết quả kinh doanh trong một nơi duy nhất, giúp bạn nhanh chóng nắm bắt tình hình và đưa ra quyết định kịp thời.
          </p>
        </div>

        <BusinessTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <BusinessDateRangeFilter
          fromDate={fromDate}
          toDate={toDate}
          onFromDateChange={setFromDate}
          onToDateChange={setToDate}
        />

        {(activeTab === "Tổng quan" || activeTab === "Hiệu suất") && (
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <TransactionSummaryCard />
            <SuccessRateCard />
            <RevenueSummaryCard />
            <SuccessValueCard />
          </div>
        )}

        <TransactionRevenueChartCard chartLabel={chartLabel} />
      </section>
    </div>
  );
};
