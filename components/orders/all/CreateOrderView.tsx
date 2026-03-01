import { ArrowLeft, Package, Search, UserRound } from "lucide-react";

interface CreateOrderViewProps {
  onBack: () => void;
}

export const CreateOrderView = ({ onBack }: CreateOrderViewProps) => {
  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-[13px] font-bold text-neutral-800 hover:text-neutral-900"
        >
          <ArrowLeft size={18} />
          <span className="text-[42px] leading-tight">Tạo đơn hàng</span>
        </button>

        <button className="rounded-xl bg-[#7D6DE3] px-5 py-3 text-[13px] font-bold text-white hover:opacity-95">
          Lưu đơn nháp
        </button>
      </div>

      <div className="mb-4 w-full max-w-[240px]">
        <select className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-[13px] outline-none focus:border-indigo-300">
          <option>Chọn nhân viên xử lý</option>
          <option>Admin</option>
          <option>Sale 1</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[2fr_1fr]">
        <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 text-[32px] font-bold text-neutral-900">Thông tin sản phẩm</h3>

          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
            <input
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full rounded-xl border border-neutral-200 py-2.5 pl-12 pr-4 text-[13px] outline-none focus:border-indigo-300"
            />
          </div>

          <div className="flex min-h-[210px] flex-col items-center justify-center rounded-xl border border-neutral-100 bg-neutral-50 text-center">
            <Package size={64} className="mb-4 text-neutral-700" />
            <p className="text-[13px] text-neutral-700">Chọn sản phẩm cho đơn hàng của bạn</p>
          </div>
        </section>

        <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 text-[32px] font-bold text-neutral-900">Thông tin khách hàng</h3>

          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
            <input
              placeholder="Tìm kiếm khách hàng..."
              className="w-full rounded-xl border border-neutral-200 py-2.5 pl-12 pr-4 text-[13px] outline-none focus:border-indigo-300"
            />
          </div>

          <div className="flex min-h-[210px] flex-col items-center justify-center rounded-xl border border-neutral-100 bg-neutral-50 text-center">
            <UserRound size={64} className="mb-4 text-neutral-700" />
            <p className="text-[13px] text-neutral-700">Chưa có thông tin khách hàng</p>
          </div>
        </section>

        <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h3 className="mb-5 text-[32px] font-bold text-neutral-900">Thanh toán</h3>

          <div className="space-y-3 text-[13px] text-neutral-800">
            <div className="flex items-center justify-between">
              <span>Tổng tiền</span>
              <span>0 đ</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Chỉnh sửa phí vận chuyển</span>
              <span>+ 0 đ</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Thêm khuyến mãi</span>
              <span>- 0 đ</span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-4 text-[13px] font-bold text-neutral-900">
            <span>Khách phải thanh toán</span>
            <span>0 đ</span>
          </div>
        </section>

        <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 text-[32px] font-bold text-neutral-900">Tag đơn hàng</h3>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
            <input
              placeholder="Tìm kiếm Tag..."
              className="w-full rounded-xl border border-neutral-200 py-2.5 pl-12 pr-4 text-[13px] outline-none focus:border-indigo-300"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
