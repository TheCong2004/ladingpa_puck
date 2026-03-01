export const AccumulatedCustomersCard = () => {
  return (
    <div className="rounded-xl border border-neutral-200 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm md:p-5">
      <h2 className="text-[13px] font-extrabold text-neutral-900">Tích lũy khách hàng đến 01/03/2026</h2>
      <p className="mt-2 text-[13px] text-indigo-900/70">
        Thống kê nhanh số lượng khách hàng mới và tổng số khách hàng đang có
      </p>

      <div className="mt-4 h-[260px] rounded-lg border border-neutral-100 sm:h-[360px] md:h-[430px]">
        <div className="relative h-full w-full">
          <div className="absolute bottom-6 left-10 top-6 border-l border-neutral-600" />
          <div className="absolute bottom-6 left-10 right-6 border-t border-neutral-300" />
          <div className="absolute bottom-[48%] left-1 text-[13px] text-neutral-600">01/03</div>

          <div className="absolute bottom-6 left-1/2 top-6 border-l border-neutral-200" />
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500 ring-4 ring-sky-200" />

          <div className="absolute left-[55%] top-[42%] rounded-lg border border-neutral-200 bg-white px-3 py-2 text-[13px] text-neutral-700 shadow-sm">
            <p className="font-bold">01/03</p>
            <p>
              Tổng khách hàng: <span className="font-extrabold">0</span>
            </p>
          </div>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[13px] font-semibold text-neutral-600">
            Tổng khách hàng
          </div>
          <div className="absolute bottom-9 left-1/2 -translate-x-1/2 text-[13px] text-neutral-600">0</div>
        </div>
      </div>
    </div>
  );
};
