interface NewCustomersDateRangeProps {
  fromDate: string;
  toDate: string;
  dateLabels: string[];
  onFromDateChange: (value: string) => void;
  onToDateChange: (value: string) => void;
}

export const NewCustomersDateRange = ({
  fromDate,
  toDate,
  dateLabels,
  onFromDateChange,
  onToDateChange,
}: NewCustomersDateRangeProps) => {
  const labels = dateLabels.slice(0, 30);
  const labelStep = labels.length > 18 ? 2 : 1;

  return (
    <div className="rounded-xl border border-neutral-200 p-4">
      <p className="mb-3 text-[13px] font-extrabold text-neutral-800">Báo cáo khách hàng mới</p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_18px_1fr] sm:items-center">
        <input
          type="date"
          value={fromDate}
          onChange={(event) => onFromDateChange(event.target.value)}
          className="h-10 rounded-lg border border-neutral-200 px-3 text-[13px] text-neutral-700 outline-none"
        />
        <span className="hidden text-center text-[13px] text-neutral-500 sm:block">-</span>
        <input
          type="date"
          value={toDate}
          onChange={(event) => onToDateChange(event.target.value)}
          className="h-10 rounded-lg border border-neutral-200 px-3 text-[13px] text-neutral-700 outline-none"
        />
      </div>

      <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200 bg-white p-3 sm:p-4 md:p-6">
        <div className="w-full">
          <div className="relative h-[300px] sm:h-[340px] md:h-[420px]">
            <div className="absolute left-4 right-8 top-8 border-t border-neutral-200 md:left-6 md:right-10 md:top-10" />
            <div className="absolute bottom-16 left-4 right-8 border-t border-neutral-700 md:bottom-20 md:left-6 md:right-10" />
            <div className="absolute bottom-16 left-4 right-8 border-t border-cyan-500 md:bottom-20 md:left-6 md:right-10" />

            <div className="absolute bottom-16 left-4 right-8 flex items-center justify-between md:bottom-20 md:left-6 md:right-10">
              {labels.map((label) => (
                <span key={label} className="h-2 w-2 rounded-full bg-cyan-500 md:h-2.5 md:w-2.5" />
              ))}
            </div>

            <div className="absolute bottom-[156px] left-1 text-[13px] leading-none text-neutral-500 sm:bottom-[178px] md:bottom-[218px]">
              0
            </div>

            <div className="absolute bottom-20 right-1 text-[13px] leading-none text-neutral-500 md:bottom-24 md:right-2">0</div>
            <p className="absolute bottom-[88px] right-0 rotate-90 text-[13px] text-neutral-500 sm:bottom-[96px] md:bottom-[120px]">
              Số khách hàng
            </p>

            {labels[0] ? (
              <div className="absolute left-4 top-[84px] hidden rounded-md border border-neutral-200 bg-white px-3 py-2 text-[13px] text-neutral-700 shadow-sm md:block">
                <p className="text-neutral-500">{labels[0]}</p>
                <p>
                  <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-cyan-500" />
                  Khách hàng mới: <span className="font-extrabold">0</span>
                </p>
              </div>
            ) : null}

            <div className="absolute bottom-0 left-4 right-8 flex items-start justify-between md:left-6 md:right-10">
              {labels.map((label, index) => {
                const shouldShow = index % labelStep === 0 || index === labels.length - 1;

                return (
                  <span
                    key={label}
                    className="origin-top-left -rotate-45 whitespace-nowrap text-[11px] text-neutral-600 sm:text-[12px] md:text-[13px]"
                  >
                    {shouldShow ? label : ""}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-[13px] text-neutral-700">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
            Khách hàng mới
          </div>
        </div>
      </div>
    </div>
  );
};
