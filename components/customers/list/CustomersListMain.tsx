"use client";

import {
  CheckCircle2,
  ChevronDown,
  Filter,
  Search,
  PackageOpen,
} from "lucide-react";

export const CustomersListMain = () => {
  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <section className="rounded-2xl border border-neutral-200 bg-white p-4 md:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-bold text-neutral-900">Danh sách khách hàng</h1>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <button className="h-11 rounded-xl border border-neutral-200 px-4 text-[13px] font-semibold text-neutral-700 hover:bg-neutral-50">
              Nhập/Xuất dữ liệu
            </button>
            <button className="h-11 rounded-xl bg-[#2F1AD7] px-4 text-[13px] font-semibold text-white hover:opacity-95">
              Tạo khách hàng mới
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 lg:gap-4">
          <label className="flex h-11 items-center gap-2 rounded-xl border border-neutral-200 px-3 lg:col-span-9">
            <Search size={18} className="text-neutral-400" />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên, email hoặc số điện thoại"
              className="w-full bg-transparent text-[13px] text-neutral-700 outline-none placeholder:text-neutral-400"
            />
          </label>

          <button
            type="button"
            className="flex h-11 items-center justify-between rounded-xl border border-neutral-200 px-3 text-[13px] text-neutral-700 lg:col-span-3"
          >
            Công ty
            <ChevronDown size={16} className="text-neutral-400" />
          </button>

          <button
            type="button"
            className="flex h-11 items-center justify-center gap-2 rounded-xl bg-neutral-100 px-3 text-[13px] font-semibold text-neutral-700 lg:col-span-2"
          >
            Lọc nâng cao
            <Filter size={16} />
          </button>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-neutral-200">
          <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-50 px-3 py-3 text-[13px] font-semibold text-neutral-600">
            <CheckCircle2 size={16} className="text-green-600" />
            Xác thực email thành công 0/0 khách hàng
          </div>

          <div className="hidden border-b border-neutral-200 bg-neutral-50 px-3 py-3 text-[13px] font-extrabold text-neutral-700 lg:grid lg:grid-cols-[40px_1.2fr_1fr_1fr_1fr_1fr_1fr_1.1fr]">
            <span className="flex items-center justify-center">
              <input type="checkbox" className="h-4 w-4 rounded border border-neutral-300" />
            </span>
            <span>Họ tên</span>
            <span>Email</span>
            <span>Số điện thoại</span>
            <span>Công ty</span>
            <span>Ngày tạo</span>
            <span>Thời gian cập nhật</span>
            <span>Trạng thái Email</span>
          </div>

          <div className="grid grid-cols-2 gap-y-2 border-b border-neutral-200 bg-neutral-50 px-3 py-3 text-[13px] font-extrabold text-neutral-700 sm:grid-cols-3 lg:hidden">
            <span>Họ tên</span>
            <span>Email</span>
            <span>Số điện thoại</span>
            <span>Công ty</span>
            <span>Ngày tạo</span>
            <span className="col-span-2 sm:col-span-1">Trạng thái Email</span>
          </div>

          <div className="flex flex-col items-center justify-center px-4 py-12 md:py-16 lg:py-20">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 md:h-20 md:w-20">
              <PackageOpen size={38} strokeWidth={1.8} className="md:h-[42px] md:w-[42px]" />
            </div>
            <p className="text-center text-2xl font-semibold text-neutral-900 sm:text-3xl lg:text-[40px]">
              Mọi thứ liên quan đến khách hàng ở một nơi
            </p>
            <p className="mt-2 max-w-3xl text-center text-[13px] text-neutral-500">
              Quản lý thông tin chi tiết về khách hàng, xem lịch sử đơn hàng của khách hàng và nhóm khách hàng thành các phân khúc.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
