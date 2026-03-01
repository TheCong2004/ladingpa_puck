"use client";

import { CalendarDays, ChevronDown, PackageOpen, Search } from "lucide-react";

export const DeliveryNotesMain = () => {
  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <div className="rounded-2xl border border-neutral-200 bg-white p-4 md:p-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-neutral-900">Phiếu giao hàng</h1>
          <p className="text-[13px] text-neutral-500">
            Theo dõi và quản lý tất cả phiếu giao hàng của cửa hàng.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:gap-4">
          <label className="flex h-11 items-center gap-2 rounded-xl border border-neutral-200 px-3 sm:col-span-2 lg:col-span-6">
            <Search size={18} className="text-neutral-400" />
            <input
              type="text"
              placeholder="Tìm kiếm phiếu giao hàng..."
              className="w-full bg-transparent text-[13px] text-neutral-700 outline-none placeholder:text-neutral-400"
            />
          </label>

          <button
            type="button"
            className="flex h-11 items-center justify-between rounded-xl border border-neutral-200 px-3 text-[13px] text-neutral-500 sm:col-span-1 lg:col-span-4"
          >
            <span className="flex min-w-0 items-center gap-2 truncate">
              <CalendarDays size={16} className="text-neutral-400" />
              <span className="truncate">DD/MM/YYYY - DD/MM/YYYY</span>
            </span>
          </button>

          <button
            type="button"
            className="flex h-11 items-center justify-between rounded-xl border border-neutral-200 px-3 text-[13px] text-neutral-700 sm:col-span-1 lg:col-span-2"
          >
            Tất cả
            <ChevronDown size={16} className="text-neutral-400" />
          </button>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-neutral-200">
          <div className="hidden items-center border-b border-neutral-200 bg-neutral-50 px-3 py-3 text-[13px] font-extrabold text-neutral-700 lg:grid lg:grid-cols-8">
            <span className="flex justify-center">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border border-neutral-300 accent-[#2F1AD7]"
                aria-label="Chọn tất cả phiếu giao hàng"
              />
            </span>
            <span>Mã phiếu</span>
            <span>Khách hàng</span>
            <span>Số điện thoại</span>
            <span>Địa chỉ giao</span>
            <span>Ngày tạo</span>
            <span>Trạng thái</span>
            <span className="text-right">Giá trị</span>
          </div>

          <div className="grid grid-cols-2 gap-y-2 border-b border-neutral-200 bg-neutral-50 px-3 py-3 text-[13px] font-extrabold text-neutral-700 sm:grid-cols-3 lg:hidden">
            <span>Mã phiếu</span>
            <span>Khách hàng</span>
            <span>Số điện thoại</span>
            <span>Địa chỉ giao</span>
            <span>Ngày tạo</span>
            <span>Trạng thái</span>
            <span className="col-span-2 sm:col-span-3">Giá trị</span>
          </div>

          <div className="flex flex-col items-center justify-center px-4 py-12 md:py-16 lg:py-20">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 md:h-20 md:w-20">
              <PackageOpen size={38} strokeWidth={1.8} className="md:h-[42px] md:w-[42px]" />
            </div>

            <p className="text-center text-2xl font-semibold text-neutral-900 sm:text-3xl lg:text-[40px]">
              Chưa có phiếu giao hàng nào
            </p>
            <p className="mt-2 max-w-2xl text-center text-[13px] text-neutral-500">
              Các phiếu giao hàng mới sẽ xuất hiện tại đây để bạn tiện theo dõi và xử lý.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
