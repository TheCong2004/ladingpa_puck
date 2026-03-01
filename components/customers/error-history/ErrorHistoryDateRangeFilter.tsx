"use client";

import { useState } from "react";

interface ErrorHistoryDateRangeFilterProps {
  onChange?: (payload: { from: string; to: string }) => void;
}

export const ErrorHistoryDateRangeFilter = ({ onChange }: ErrorHistoryDateRangeFilterProps) => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleFromChange = (value: string) => {
    setFromDate(value);
    onChange?.({ from: value, to: toDate });
  };

  const handleToChange = (value: string) => {
    setToDate(value);
    onChange?.({ from: fromDate, to: value });
  };

  return (
    <>
      <label className="relative flex h-11 items-center rounded-xl border border-neutral-200 px-3">
        <input
          type="datetime-local"
          value={fromDate}
          onChange={(event) => handleFromChange(event.target.value)}
          className="w-full bg-transparent text-[13px] text-neutral-700 outline-none"
        />
      </label>

      <span className="hidden text-center text-[13px] font-semibold text-neutral-700 xl:block">-</span>

      <label className="relative flex h-11 items-center rounded-xl border border-neutral-200 px-3">
        <input
          type="datetime-local"
          value={toDate}
          onChange={(event) => handleToChange(event.target.value)}
          className="w-full bg-transparent text-[13px] text-neutral-700 outline-none"
        />
      </label>
    </>
  );
};
