interface OrdersAllHeroProps {
  onCreateOrder: () => void;
}

export const OrdersAllHero = ({ onCreateOrder }: OrdersAllHeroProps) => {
  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <section className="rounded-2xl border border-neutral-200 bg-[#F4F1FF] p-6 md:p-8 lg:p-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h1 className="text-[42px] font-bold leading-tight text-neutral-900">Quản lý đơn hàng</h1>

            <p className="max-w-xl text-[13px] leading-relaxed text-neutral-700">
              Xem, cập nhật và xử lý tất cả đơn hàng chỉ trong một nơi duy nhất
            </p>

            <button
              onClick={onCreateOrder}
              className="rounded-xl bg-[#2F1AD7] px-6 py-3 text-[13px] font-bold text-white transition-all hover:opacity-95"
            >
              Tạo đơn hàng mới
            </button>
          </div>

          <div className="rounded-2xl bg-white/70 p-4">
            <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-lg bg-neutral-50 p-3">
                  <div className="h-10 w-10 rounded-lg bg-indigo-100" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-3/4 rounded bg-indigo-100" />
                    <div className="h-3 w-1/2 rounded bg-indigo-100" />
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-neutral-50 p-3">
                  <div className="h-10 w-10 rounded-lg bg-indigo-100" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-2/3 rounded bg-indigo-100" />
                    <div className="h-3 w-1/3 rounded bg-indigo-100" />
                  </div>
                </div>
                <div className="rounded-lg bg-neutral-50 p-3">
                  <div className="h-24 rounded bg-indigo-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
