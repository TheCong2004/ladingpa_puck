import { History } from "lucide-react";

interface SentCostChartCardProps {
  xAxisLabels: string[];
}

export const SentCostChartCard = ({ xAxisLabels }: SentCostChartCardProps) => {
  const labels = xAxisLabels.slice(0, 30);
  const labelStep = labels.length > 18 ? 2 : 1;

  return (
    <div className="rounded-xl border border-neutral-200 p-4">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[13px] font-extrabold text-neutral-800">Báo cáo tin đã gửi và chi tiêu</p>
        <button
          type="button"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-[13px] font-semibold text-neutral-700 sm:w-auto"
        >
          <History size={16} />
          Lịch sử giao dịch
        </button>
      </div>

      <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white p-3 sm:p-4 md:p-6">
        <div className="w-full">
          <div className="relative h-[300px] sm:h-[340px] md:h-[420px]">
            <div className="absolute left-6 right-6 top-4 space-y-[58px] sm:space-y-[66px] md:left-8 md:right-8 md:space-y-[82px]">
              {[5, 4, 3, 2, 1].map((line) => (
                <div key={line} className="border-t border-neutral-200" />
              ))}
            </div>

            <div className="absolute bottom-16 left-6 right-6 border-t border-orange-400 sm:bottom-18 md:bottom-20 md:left-8 md:right-8" />
            <div className="absolute bottom-16 left-6 right-6 border-t border-red-400/80 sm:bottom-18 md:bottom-20 md:left-8 md:right-8" />

            <div className="absolute bottom-16 left-6 right-6 flex items-center justify-between sm:bottom-18 md:bottom-20 md:left-8 md:right-8">
              {labels.map((label) => (
                <div key={label} className="relative h-3 w-3">
                  <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400" />
                  <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-red-500" />
                </div>
              ))}
            </div>

            <div className="absolute left-0 top-4 flex h-[236px] flex-col justify-between text-[12px] text-neutral-700 sm:h-[276px] md:h-[334px] md:text-[13px]">
              {[5, 4, 3, 2, 1, 0].map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
            <p className="absolute left-0 top-[116px] -rotate-90 text-[12px] text-neutral-700 sm:top-[126px] md:top-[148px] md:text-[13px]">
              Số tin
            </p>

            <div className="absolute right-0 top-4 flex h-[236px] flex-col justify-between text-[12px] text-neutral-500 sm:h-[276px] md:h-[334px] md:text-[13px]">
              {[5, 4, 3, 2, 1, 0].map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
            <p className="absolute right-0 top-[122px] rotate-90 text-[12px] text-neutral-500 sm:top-[132px] md:top-[156px] md:text-[13px]">
              Điểm
            </p>

            <div className="absolute bottom-0 left-6 right-6 flex items-start justify-between md:left-8 md:right-8">
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

          <div className="mt-3 flex flex-wrap items-center justify-center gap-5 text-[13px] text-neutral-700">
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-500" /> Tin gửi thành công
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600" /> Tin gửi thất bại
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-orange-400" /> Số điểm đã dùng
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rotate-45 bg-red-500" /> Số tiền
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
