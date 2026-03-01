import { SegmentItem } from "./data";

interface TopSegmentsCardProps {
  segmentItems: SegmentItem[];
}

export const TopSegmentsCard = ({ segmentItems }: TopSegmentsCardProps) => {
  return (
    <div className="rounded-xl border border-neutral-200 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm md:p-5">
      <h2 className="text-[13px] font-extrabold text-neutral-900">Top 10 phân đoạn khách hàng</h2>
      <p className="mt-2 text-[13px] text-indigo-900/70">Số lượng khách hàng theo Segment</p>

      <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex items-center justify-center rounded-lg border border-neutral-100 py-10">
          <div className="text-center">
            <p className="text-6xl font-bold text-black">6</p>
            <p className="mt-1 text-[13px] font-semibold text-neutral-800">Segment</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {segmentItems.map((item) => (
            <div key={item.name} className="flex items-center justify-between gap-3 text-[13px] text-indigo-950">
              <span className="inline-flex items-center gap-2">
                <span className={`h-3 w-3 rounded-sm ${item.color}`} />
                {item.name}
              </span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
