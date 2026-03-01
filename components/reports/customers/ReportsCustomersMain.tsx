"use client";

import { useMemo, useState } from "react";
import { AccumulatedCustomersCard } from "./AccumulatedCustomersCard";
import { CustomerStatsCard } from "./CustomerStatsCard";
import { NewCustomersChartCard } from "./NewCustomersChartCard";
import { ReportFilters } from "./ReportFilters";
import { ReportTabs } from "./ReportTabs";
import { segmentItems, tabs, tagOptions, topRevenueCustomers } from "./data";
import { TopRevenueCustomersCard } from "./TopRevenueCustomersCard";
import { TopSegmentsCard } from "./TopSegmentsCard";

export const ReportsCustomersMain = () => {
  const [activeTab, setActiveTab] = useState("Tổng quan");
  const [fromDate, setFromDate] = useState("2026-03-01");
  const [toDate, setToDate] = useState("2026-03-01");
  const [selectedTag, setSelectedTag] = useState("Tất cả");

  const filteredTopRevenueCustomers = useMemo(() => {
    const start = fromDate <= toDate ? fromDate : toDate;
    const end = fromDate <= toDate ? toDate : fromDate;

    return topRevenueCustomers
      .filter((customer) => selectedTag === "Tất cả" || customer.tag === selectedTag)
      .filter((customer) => customer.purchaseDate >= start && customer.purchaseDate <= end)
      .slice(0, 10);
  }, [fromDate, selectedTag, toDate]);

  const showOverview = activeTab === "Tổng quan";
  const showCustomerAnalysis = activeTab === "Phân tích khách hàng";
  const showPurchaseTimeline = activeTab === "Thời gian mua hàng";

  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <section className="space-y-5 rounded-2xl border border-neutral-200 bg-white p-4 md:p-6">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Báo cáo khách hàng</h1>
          <p className="mt-2 text-[13px] text-neutral-600">
            Theo dõi tổng hợp dữ liệu về hành vi, đặc điểm và giá trị của khách hàng, giúp doanh nghiệp hiểu rõ nhu cầu và tối ưu chiến lược kinh doanh.
          </p>
        </div>

        <ReportTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <ReportFilters
          fromDate={fromDate}
          toDate={toDate}
          selectedTag={selectedTag}
          tagOptions={tagOptions}
          onFromDateChange={setFromDate}
          onToDateChange={setToDate}
          onTagChange={setSelectedTag}
        />

        {(showOverview || showPurchaseTimeline) && <NewCustomersChartCard />}
        {(showOverview || showPurchaseTimeline) && <AccumulatedCustomersCard />}
        {(showOverview || showCustomerAnalysis) && <TopSegmentsCard segmentItems={segmentItems} />}
        {(showOverview || showCustomerAnalysis) && <CustomerStatsCard />}
        <TopRevenueCustomersCard customers={filteredTopRevenueCustomers} />
      </section>
    </div>
  );
};
