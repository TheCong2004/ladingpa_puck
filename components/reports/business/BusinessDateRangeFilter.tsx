interface BusinessDateRangeFilterProps {
  fromDate: string;
  toDate: string;
  onFromDateChange: (value: string) => void;
  onToDateChange: (value: string) => void;
}

export const BusinessDateRangeFilter = ({
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
}: BusinessDateRangeFilterProps) => {
  return (
    <div className="grid grid-cols-1 gap-3 lg:max-w-[520px] lg:grid-cols-[1fr_18px_1fr] lg:items-center">
      <input
        type="date"
        value={fromDate}
        onChange={(event) => onFromDateChange(event.target.value)}
        className="h-10 rounded-lg border border-neutral-200 px-3 text-[13px] text-neutral-700 outline-none"
      />
      <span className="hidden text-center text-[13px] text-neutral-500 lg:block">-</span>
      <input
        type="date"
        value={toDate}
        onChange={(event) => onToDateChange(event.target.value)}
        className="h-10 rounded-lg border border-neutral-200 px-3 text-[13px] text-neutral-700 outline-none"
      />
    </div>
  );
};
