"use client";

import { useState } from "react";
import { ChartSectionsGrid } from "./ChartSectionsGrid";
import { DateRangeFilters } from "./DateRangeFilters";
import { metricCards, chartSections } from "./data";
import { MetricCardsGrid } from "./MetricCardsGrid";
import { TopStatsPanels } from "./TopStatsPanels";

export const ReportsEcommerceMain = () => {
  const [currentFrom, setCurrentFrom] = useState("2026-03-01");
  const [currentTo, setCurrentTo] = useState("2026-03-01");
  const [compareFrom, setCompareFrom] = useState("2026-02-28");
  const [compareTo, setCompareTo] = useState("2026-02-28");

  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <section className="space-y-5 rounded-2xl border border-neutral-200 bg-white p-4 md:p-6">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Báo cáo Ecommerce</h1>
          <p className="mt-2 text-[13px] text-neutral-600">
            Tổng quan về tình hình kinh doanh, bao gồm doanh thu, hiệu suất đơn hàng và phân bổ theo nguồn/sản phẩm.
          </p>
        </div>

        <DateRangeFilters
          currentFrom={currentFrom}
          currentTo={currentTo}
          compareFrom={compareFrom}
          compareTo={compareTo}
          onCurrentFromChange={setCurrentFrom}
          onCurrentToChange={setCurrentTo}
          onCompareFromChange={setCompareFrom}
          onCompareToChange={setCompareTo}
        />

        <MetricCardsGrid cards={metricCards} />

        <ChartSectionsGrid sections={chartSections} />

        <TopStatsPanels />
      </section>
    </div>
  );
};
