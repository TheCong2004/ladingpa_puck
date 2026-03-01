import { CalendarDays, ChevronDown, Tag } from "lucide-react";

interface ReportFiltersProps {
  fromDate: string;
  toDate: string;
  selectedTag: string;
  tagOptions: string[];
  onFromDateChange: (value: string) => void;
  onToDateChange: (value: string) => void;
  onTagChange: (value: string) => void;
}

export const ReportFilters = ({
  fromDate,
  toDate,
  selectedTag,
  tagOptions,
  onFromDateChange,
  onToDateChange,
  onTagChange,
}: ReportFiltersProps) => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:max-w-[520px]">
      <div className="inline-flex h-10 items-center gap-2 rounded-lg border border-neutral-200 px-3 text-[13px] text-neutral-700">
        <CalendarDays size={16} />
        <input
          type="date"
          value={fromDate}
          onChange={(event) => onFromDateChange(event.target.value)}
          className="min-w-0 border-none bg-transparent text-[13px] outline-none"
        />
        <span>-</span>
        <input
          type="date"
          value={toDate}
          onChange={(event) => onToDateChange(event.target.value)}
          className="min-w-0 border-none bg-transparent text-[13px] outline-none"
        />
      </div>

      <label className="grid h-10 grid-cols-[auto_1fr_auto] items-center gap-2 rounded-lg border border-neutral-200 px-3 text-[12px] text-neutral-700">
        <span className="inline-flex items-center gap-2 whitespace-nowrap">
          <Tag size={16} />
          Chọn tag
        </span>
        <select
          value={selectedTag}
          onChange={(event) => onTagChange(event.target.value)}
          className="min-w-0 w-full border-none bg-transparent pl-3 text-right text-[13px] outline-none"
        >
          {tagOptions.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <ChevronDown size={16} />
      </label>
    </div>
  );
};
