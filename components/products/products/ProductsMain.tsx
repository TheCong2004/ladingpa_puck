"use client";

import { ChevronDown, PackageOpen, Search } from "lucide-react";

export const ProductsMain = () => {
  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <div className="rounded-2xl border border-neutral-200 bg-white p-4 md:p-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-neutral-900">Sản phẩm</h1>
          <p className="text-[13px] text-neutral-500">
            Quản lý danh sách sản phẩm và thông tin bán hàng của cửa hàng.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:gap-4">
          <label className="flex h-11 items-center gap-2 rounded-xl border border-neutral-200 px-3 sm:col-span-2 lg:col-span-8">
            <Search size={18} className="text-neutral-400" />
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full bg-transparent text-[13px] text-neutral-700 outline-none placeholder:text-neutral-400"
            />
          </label>

          <button
            type="button"
            className="flex h-11 items-center justify-between rounded-xl border border-neutral-200 px-3 text-[13px] text-neutral-700 sm:col-span-1 lg:col-span-2"
          >
            Tất cả trạng thái
            <ChevronDown size={16} className="text-neutral-400" />
          </button>

          <button
            type="button"
            className="h-11 rounded-xl bg-[#2F1AD7] px-4 text-[13px] font-semibold text-white transition hover:opacity-95 sm:col-span-1 lg:col-span-2"
          >
            Thêm sản phẩm
          </button>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-neutral-200">
          <div className="hidden border-b border-neutral-200 bg-neutral-50 px-3 py-3 text-[13px] font-bold text-neutral-700 lg:grid lg:grid-cols-6">
            <span>Tên sản phẩm</span>
            <span>Danh mục</span>
            <span>SKU</span>
            <span>Tồn kho</span>
            <span>Trạng thái</span>
            <span className="text-right">Giá bán</span>
          </div>

          <div className="grid grid-cols-2 gap-y-2 border-b border-neutral-200 bg-neutral-50 px-3 py-3 text-[13px] font-bold text-neutral-700 sm:grid-cols-3 lg:hidden">
            <span>Tên sản phẩm</span>
            <span>Danh mục</span>
            <span>SKU</span>
            <span>Tồn kho</span>
            <span>Trạng thái</span>
            <span className="col-span-2 sm:col-span-1">Giá bán</span>
          </div>

          <div className="flex flex-col items-center justify-center px-4 py-12 md:py-16 lg:py-20">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 md:h-20 md:w-20">
              <PackageOpen size={38} strokeWidth={1.8} className="md:h-[42px] md:w-[42px]" />
            </div>

            <p className="text-center text-2xl font-semibold text-neutral-900 sm:text-3xl lg:text-[40px]">
              Chưa có sản phẩm nào
            </p>
            <p className="mt-2 max-w-2xl text-center text-[13px] text-neutral-500">
              Thêm sản phẩm đầu tiên để bắt đầu quản lý kho và bán hàng hiệu quả.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
