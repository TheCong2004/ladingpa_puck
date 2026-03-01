export const SuccessValueCard = () => {
  return (
    <div className="rounded-xl border border-neutral-200 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">
      <h2 className="text-[13px] font-extrabold text-neutral-900">Thống kê giá trị giao dịch thành công</h2>
      <p className="mt-1 text-[13px] text-indigo-900/70">Thống kê tổng giá trị giao dịch thành công và tổng giao dịch</p>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-neutral-50 p-3">
          <p className="text-[13px] text-neutral-600">Thành công</p>
          <p className="mt-1 text-xl font-bold text-neutral-900">0 đ/0 đ</p>
          <p className="text-[13px] text-neutral-500">doanh thu</p>
        </div>
        <div className="rounded-lg bg-neutral-50 p-3">
          <p className="text-[13px] text-neutral-600">Tổng doanh thu</p>
          <p className="mt-1 text-2xl font-bold text-neutral-900">0</p>
        </div>
      </div>
    </div>
  );
};
