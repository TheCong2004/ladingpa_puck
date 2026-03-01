"use client";

import { ArrowUpDown, PackageOpen, Search } from "lucide-react";
import { ErrorHistoryDateRangeFilter } from "./ErrorHistoryDateRangeFilter";

const headerCellClass = "text-[13px] font-extrabold leading-none text-neutral-700";
const sortHeaderClass = "inline-flex items-center gap-1 whitespace-nowrap text-[13px] font-extrabold leading-none text-neutral-700";

export const CustomersErrorHistoryMain = () => {
  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <section className="rounded-2xl border border-neutral-200 bg-white p-4 md:p-6">
        <h1 className="mb-5 text-3xl font-bold text-neutral-900">Lịch sử lỗi</h1>

        <div className="mb-6 grid grid-cols-1 gap-3 xl:grid-cols-[minmax(0,1fr)_1fr_16px_1fr] xl:items-center">
          <label className="flex h-11 items-center gap-2 rounded-xl border border-neutral-200 px-3">
            <Search size={18} className="text-neutral-400" />
            <input
              type="text"
              placeholder="Tìm kiếm theo mã lỗi, thông tin khách hàng hoặc nội dung lỗi"
              className="w-full bg-transparent text-[13px] text-neutral-700 outline-none placeholder:text-neutral-400"
            />
          </label>

          <ErrorHistoryDateRangeFilter />
        </div>

        <div className="overflow-hidden rounded-xl border border-neutral-200">
          <div className="hidden border-b border-neutral-200 bg-neutral-50 px-3 py-3 lg:grid lg:grid-cols-[1fr_0.8fr_1.6fr_1.2fr_2fr]">
            <button type="button" className={sortHeaderClass}>
              Thời gian
              <ArrowUpDown size={14} />
            </button>
            <span className={headerCellClass}>Mã lỗi</span>
            <span className={headerCellClass}>Khách hàng</span>
            <span className={headerCellClass}>Loại hành động</span>
            <span className={headerCellClass}>Nội dung lỗi</span>
          </div>

          <div className="grid grid-cols-2 gap-y-2 border-b border-neutral-200 bg-neutral-50 px-3 py-3 lg:hidden">
            <span className={headerCellClass}>Thời gian</span>
            <span className={headerCellClass}>Mã lỗi</span>
            <span className={headerCellClass}>Khách hàng</span>
            <span className={headerCellClass}>Loại hành động</span>
            <span className={headerCellClass}>Nội dung lỗi</span>
          </div>

          <div className="flex flex-col items-center justify-center px-4 py-12 md:py-16 lg:py-20">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 md:h-20 md:w-20">
              <PackageOpen size={38} strokeWidth={1.8} className="md:h-[42px] md:w-[42px]" />
            </div>
            <p className="text-center text-2xl font-semibold text-neutral-900 sm:text-3xl lg:text-[40px]">Hiện tại bạn chưa có lỗi nào.</p>
            <p className="mt-2 text-center text-[13px] text-neutral-500">Vui lòng tạo dữ liệu để tiếp tục sử dụng</p>
          </div>
        </div>
      </section>
    </div>
  );
};
