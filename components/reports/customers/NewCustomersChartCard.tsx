export const NewCustomersChartCard = () => {
  return (
    <div className="rounded-xl border border-neutral-200 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm md:p-5">
      <h2 className="text-[13px] font-extrabold text-neutral-900">Biểu đồ khách hàng mới</h2>
      <p className="mt-2 text-[13px] text-indigo-900/70">
        Thống kê nhanh số lượng khách hàng mới và tổng số khách hàng đang có
      </p>

      <div className="mt-4 h-[240px] rounded-lg border border-neutral-100 sm:h-[320px] md:h-[360px]">
        <div className="relative h-full w-full">
          <div className="absolute bottom-6 left-10 top-6 border-l border-neutral-600" />
          <div className="absolute bottom-6 left-10 right-6 border-t border-neutral-300" />
          <div className="absolute bottom-[44%] left-6 text-[13px] text-neutral-600">01/03</div>
          <div className="absolute bottom-4 right-[42%] text-[13px] text-neutral-600">0</div>
        </div>
      </div>
    </div>
  );
};
