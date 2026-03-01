export const TopStatsPanels = () => {
  return (
    <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
      <div className="rounded-xl border border-neutral-200 p-4">
        <p className="mb-3 text-[13px] font-extrabold text-neutral-800">Top sản phẩm bán chạy</p>
        <div className="grid grid-cols-3 border-b border-neutral-200 pb-2 text-[13px] font-extrabold text-neutral-700">
          <span>Tên sản phẩm</span>
          <span>Số lượng bán</span>
          <span>Doanh thu</span>
        </div>
        <div className="py-6 text-center text-[13px] text-neutral-500">Không có dữ liệu</div>
      </div>

      <div className="rounded-xl border border-neutral-200 p-4">
        <p className="mb-3 text-[13px] font-extrabold text-neutral-800">Top nhân viên bán hàng</p>
        <div className="flex h-28 items-center justify-center rounded-lg bg-neutral-50 text-[13px] text-neutral-500">
          Không có dữ liệu
        </div>
      </div>
    </div>
  );
};
