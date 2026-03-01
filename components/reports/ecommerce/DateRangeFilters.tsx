interface DateRangeFiltersProps {
  currentFrom: string;
  currentTo: string;
  compareFrom: string;
  compareTo: string;
  onCurrentFromChange: (value: string) => void;
  onCurrentToChange: (value: string) => void;
  onCompareFromChange: (value: string) => void;
  onCompareToChange: (value: string) => void;
}

export const DateRangeFilters = ({
  currentFrom,
  currentTo,
  compareFrom,
  compareTo,
  onCurrentFromChange,
  onCurrentToChange,
  onCompareFromChange,
  onCompareToChange,
}: DateRangeFiltersProps) => {
  return (
    <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
      <div className="rounded-xl border border-neutral-200 p-3">
        <p className="mb-2 text-[13px] font-semibold text-neutral-700">Khoảng hiện tại</p>
        <div className="grid grid-cols-[1fr_18px_1fr] items-center gap-2">
          <input
            type="date"
            value={currentFrom}
            onChange={(event) => onCurrentFromChange(event.target.value)}
            className="h-10 rounded-lg border border-neutral-200 px-3 text-[13px] text-neutral-700 outline-none"
          />
          <span className="text-center text-[13px] text-neutral-500">-</span>
          <input
            type="date"
            value={currentTo}
            onChange={(event) => onCurrentToChange(event.target.value)}
            className="h-10 rounded-lg border border-neutral-200 px-3 text-[13px] text-neutral-700 outline-none"
          />
        </div>
      </div>

      <div className="rounded-xl border border-neutral-200 p-3">
        <p className="mb-2 text-[13px] font-semibold text-neutral-700">Khoảng so sánh</p>
        <div className="grid grid-cols-[1fr_18px_1fr] items-center gap-2">
          <input
            type="date"
            value={compareFrom}
            onChange={(event) => onCompareFromChange(event.target.value)}
            className="h-10 rounded-lg border border-neutral-200 px-3 text-[13px] text-neutral-700 outline-none"
          />
          <span className="text-center text-[13px] text-neutral-500">-</span>
          <input
            type="date"
            value={compareTo}
            onChange={(event) => onCompareToChange(event.target.value)}
            className="h-10 rounded-lg border border-neutral-200 px-3 text-[13px] text-neutral-700 outline-none"
          />
        </div>
      </div>
    </div>
  );
};
