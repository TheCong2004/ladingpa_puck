import { ArrowUpDown, CalendarDays, ChevronDown, Download, PackageOpen, Search } from "lucide-react";

export default function PromotionsPage() {
  return (
    <div className="w-full px-8 py-5 lg:px-20">
      <div className="mx-auto w-full max-w-350">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-[30px] font-bold leading-tight text-neutral-900">Khuyến mại</h1>
            <p className="mt-1 text-[14px] text-neutral-600">
              Cung cấp các ưu đãi giảm giá để thúc đẩy doanh số cửa hàng
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-2.5 text-[14px] font-semibold text-neutral-700 hover:bg-neutral-50">
              <Download size={16} />
              Xuất mã khuyến mại
            </button>
            <button className="rounded-xl bg-indigo-700 px-5 py-2.5 text-[14px] font-bold text-white hover:bg-indigo-800">
              Tạo khuyến mại mới
            </button>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-1 gap-3 xl:grid-cols-[1.5fr_1fr_0.8fr_0.6fr_0.6fr]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
            <input
              placeholder="Tìm kiếm"
              className="h-10 w-full rounded-lg border border-neutral-300 bg-white pl-9 pr-3 text-[14px] text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-indigo-300"
            />
          </div>

          <div className="relative">
            <CalendarDays className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
            <input
              placeholder="DD/MM/YYY  -  DD/MM/YYY"
              className="h-10 w-full rounded-lg border border-neutral-300 bg-white pl-9 pr-3 text-[14px] text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-indigo-300"
            />
          </div>

          <div className="relative">
            <select className="h-10 w-full appearance-none rounded-lg border border-neutral-300 bg-white px-3 pr-9 text-[14px] text-neutral-700 outline-none focus:border-indigo-300">
              <option>Hình thức khuyến mại</option>
              <option>Mã giảm giá</option>
              <option>Giảm theo đơn hàng</option>
            </select>
            <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          </div>

          <div className="relative">
            <select className="h-10 w-full appearance-none rounded-lg border border-neutral-300 bg-white px-3 pr-9 text-[14px] text-neutral-700 outline-none focus:border-indigo-300">
              <option>Trạng thái</option>
              <option>Đang hoạt động</option>
              <option>Tạm dừng</option>
            </select>
            <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          </div>

          <div className="relative">
            <select className="h-10 w-full appearance-none rounded-lg border border-neutral-300 bg-white px-3 pr-9 text-[14px] text-neutral-700 outline-none focus:border-indigo-300">
              <option>Sử dụng</option>
              <option>Đã dùng</option>
              <option>Chưa dùng</option>
            </select>
            <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
          <div className="grid grid-cols-[44px_1.4fr_1.3fr_0.9fr_0.9fr_1fr_1fr_1fr] items-center border-b border-neutral-200 px-3 py-3 text-[13px] font-bold text-neutral-900">
            <div className="flex justify-center">
              <input type="checkbox" className="h-4 w-4 rounded border border-neutral-300" />
            </div>
            <div className="inline-flex items-center gap-1">
              Mã khuyến mại
              <ArrowUpDown size={13} />
            </div>
            <div className="inline-flex items-center gap-1">
              Hình thức khuyến mại
              <ArrowUpDown size={13} />
            </div>
            <div>Trạng thái</div>
            <div>Đã được dùng</div>
            <div>Ngày bắt đầu</div>
            <div>Ngày kết thúc</div>
            <div>Người tạo</div>
          </div>

          <div className="flex min-h-110 flex-col items-center justify-center gap-3 px-4 py-10 text-center">
            <PackageOpen size={84} strokeWidth={1.5} className="text-neutral-300" />
            <p className="text-[24px] font-semibold text-neutral-900">Chưa có bản ghi nào</p>
            <p className="text-[14px] text-neutral-500">Vui lòng tạo dữ liệu để tiếp tục sử dụng</p>
          </div>
        </div>
      </div>
    </div>
  );
}
