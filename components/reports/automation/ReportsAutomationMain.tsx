"use client";

import { useMemo, useState } from "react";
import { ChannelTabs } from "./ChannelTabs";
import { fallbackXAxisLabels, channelTabs, summaryCards } from "./data";
import { NewCustomersDateRange } from "./NewCustomersDateRange";
import { SentCostChartCard } from "./SentCostChartCard";
import { SummaryCardsGrid } from "./SummaryCardsGrid";
import { buildDateRangeLabels } from "./utils";

export const ReportsAutomationMain = () => {
  const [activeTab, setActiveTab] = useState("Tổng quan");
  const [fromDate, setFromDate] = useState("2026-02-01");
  const [toDate, setToDate] = useState("2026-03-01");

  const xAxisLabels = useMemo(() => buildDateRangeLabels(fromDate, toDate), [fromDate, toDate]);
  const reportDateLabels = xAxisLabels.length > 0 ? xAxisLabels : fallbackXAxisLabels;

  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <section className="space-y-5 rounded-2xl border border-neutral-200 bg-white p-4 md:p-6">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Báo cáo Automation</h1>
          <p className="mt-2 text-[13px] text-neutral-600">
            Theo dõi và đo lường các hoạt động tương tác của khách hàng, hiệu quả các chiến dịch Automation đa kênh.
          </p>
        </div>

        <ChannelTabs tabs={channelTabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <SummaryCardsGrid cards={summaryCards} />

        <NewCustomersDateRange
          fromDate={fromDate}
          toDate={toDate}
          dateLabels={reportDateLabels}
          onFromDateChange={setFromDate}
          onToDateChange={setToDate}
        />

        <SentCostChartCard xAxisLabels={reportDateLabels} />
      </section>
    </div>
  );
};
