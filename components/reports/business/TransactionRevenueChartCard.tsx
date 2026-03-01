interface TransactionRevenueChartCardProps {
  chartLabel: string;
}

export const TransactionRevenueChartCard = ({ chartLabel }: TransactionRevenueChartCardProps) => {
  return (
    <div className="rounded-xl border border-neutral-200 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm md:p-5">
      <h2 className="text-[13px] font-extrabold text-neutral-900">Doanh thu theo giao dịch</h2>
      <p className="mt-1 text-[13px] text-indigo-900/70">Thống kê doanh thu giao dịch theo ngày</p>

      <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200 bg-white p-3 sm:p-4 md:p-6">
        <div className="w-full">
          <div className="relative h-[300px] sm:h-[340px] md:h-[420px]">
            <div className="absolute left-6 right-6 top-4 space-y-[58px] sm:space-y-[66px] md:space-y-[82px]">
              {[4, 3, 2, 1].map((line) => (
                <div key={line} className="border-t border-neutral-200" />
              ))}
              <div className="border-t border-neutral-200" />
            </div>

            <div className="absolute bottom-16 left-6 right-6 border-t border-indigo-400 sm:bottom-18 md:bottom-20" />
            <div className="absolute bottom-16 left-6 right-6 border-t border-blue-400/80 sm:bottom-18 md:bottom-20" />

            <div className="absolute bottom-16 left-6 right-6 flex items-center justify-center sm:bottom-18 md:bottom-20">
              <span className="relative h-4 w-4 rounded-full bg-indigo-400/30">
                <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500" />
              </span>
            </div>

            <div className="absolute left-0 top-4 flex h-[236px] flex-col justify-between text-[13px] text-neutral-700 sm:h-[276px] md:h-[334px]">
              {[4, 3, 2, 1, 0].map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
            <p className="absolute left-0 top-[122px] -rotate-90 text-[13px] text-neutral-700 sm:top-[132px] md:top-[156px]">
              Số lượng
            </p>

            <div className="absolute right-0 top-4 flex h-[236px] flex-col justify-between text-[13px] text-neutral-500 sm:h-[276px] md:h-[334px]">
              {[1.2, 0.8, 0.4, 0].map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
            <p className="absolute right-0 top-[122px] rotate-90 text-[13px] text-neutral-500 sm:top-[132px] md:top-[156px]">
              Tổng doanh thu (VND)
            </p>

            <div className="absolute bottom-0 left-6 right-6 flex items-start justify-center">
              <span className="origin-top-left -rotate-45 whitespace-nowrap text-[13px] text-neutral-600">{chartLabel}</span>
            </div>

            <div className="absolute left-1/2 top-[56%] -translate-x-1/2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-[13px] text-neutral-700 shadow-sm">
              <div className="flex items-center justify-between gap-6">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" /> Số lượng giao dịch
                </span>
                <span>0</span>
              </div>
              <div className="mt-1 flex items-center justify-between gap-6">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-500" /> Tổng doanh thu
                </span>
                <span>0đ</span>
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-6 text-[13px] text-neutral-700">
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-indigo-500" /> Số lượng giao dịch
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-4 rounded-full bg-blue-500" /> Tổng doanh thu
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
