export const CustomerStatsCard = () => {
  return (
    <div className="rounded-xl border border-neutral-200 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm md:p-5">
      <h2 className="text-[13px] font-extrabold text-neutral-900">Thống kê khách hàng</h2>
      <p className="mt-2 text-[13px] text-indigo-900/70">Danh sách thống kê khách hàng theo tags</p>

      <div className="mt-4 h-[240px] rounded-lg border border-neutral-100 sm:h-[320px] md:h-[360px]">
        <div className="relative h-full w-full">
          <div className="absolute bottom-6 left-10 top-6 border-l border-neutral-600" />
          <p className="absolute left-5 top-1/2 -translate-y-1/2 text-[13px] text-neutral-500">Không có dữ liệu</p>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[13px] text-neutral-600">0</div>
        </div>
      </div>
    </div>
  );
};
