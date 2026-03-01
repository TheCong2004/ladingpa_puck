"use client";

import { ArrowLeft, Globe, LayoutTemplate, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export const WebsiteBuilderCreateMain = () => {
  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <section className="space-y-6 rounded-2xl border border-neutral-200 bg-white p-4 md:p-6">
        <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-neutral-900">
          <Link
            href="/website-builder"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-500 hover:text-indigo-600"
          >
            <ArrowLeft size={14} />
          </Link>
          Tạo Website mới
        </div>

        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Khởi tạo Website</h1>
          <p className="mt-2 text-[13px] text-neutral-600">
            Thiết lập nhanh website bằng cách chọn template, đặt tên và gắn domain trước khi xuất bản.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.15fr_1fr]">
          <div className="space-y-4 rounded-xl border border-neutral-200 p-4">
            <h2 className="text-[13px] font-extrabold text-neutral-900">Thông tin cơ bản</h2>

            <label className="block space-y-1">
              <span className="text-[13px] text-neutral-700">Tên website</span>
              <input
                type="text"
                placeholder="Ví dụ: Website bán hàng tháng 3"
                className="h-10 w-full rounded-lg border border-neutral-200 px-3 text-[13px] text-neutral-700 outline-none"
              />
            </label>

            <label className="block space-y-1">
              <span className="text-[13px] text-neutral-700">Đường dẫn tạm</span>
              <div className="inline-flex h-10 w-full items-center rounded-lg border border-neutral-200 px-3 text-[13px] text-neutral-600">
                <LinkIcon size={14} className="mr-2 text-neutral-400" />
                your-brand.ladipage.vn
              </div>
            </label>

            <label className="block space-y-1">
              <span className="text-[13px] text-neutral-700">Mục tiêu website</span>
              <select className="h-10 w-full rounded-lg border border-neutral-200 px-3 text-[13px] text-neutral-700 outline-none">
                <option>Thu thập khách hàng tiềm năng</option>
                <option>Bán sản phẩm trực tuyến</option>
                <option>Giới thiệu doanh nghiệp</option>
              </select>
            </label>
          </div>

          <div className="space-y-4 rounded-xl border border-neutral-200 p-4">
            <h2 className="text-[13px] font-extrabold text-neutral-900">Chọn template</h2>

            <button className="group w-full rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-left transition hover:border-indigo-300">
              <div className="inline-flex items-center gap-2 text-indigo-700">
                <LayoutTemplate size={16} />
                <span className="text-[13px] font-semibold">Template kinh doanh tổng quát</span>
              </div>
              <p className="mt-2 text-[13px] text-neutral-600">Tối ưu chuyển đổi, phù hợp chạy quảng cáo và thu lead.</p>
            </button>

            <button className="group w-full rounded-xl border border-neutral-200 bg-white p-4 text-left transition hover:border-neutral-300">
              <div className="inline-flex items-center gap-2 text-neutral-800">
                <Globe size={16} />
                <span className="text-[13px] font-semibold">Template giới thiệu doanh nghiệp</span>
              </div>
              <p className="mt-2 text-[13px] text-neutral-600">Phù hợp giới thiệu sản phẩm/dịch vụ và thương hiệu.</p>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3 border-t border-neutral-200 pt-4">
          <Link
            href="/website-builder"
            className="rounded-lg border border-neutral-200 px-4 py-2 text-[13px] font-semibold text-neutral-700 hover:bg-neutral-50"
          >
            Huỷ
          </Link>
          <button className="rounded-lg bg-indigo-700 px-5 py-2 text-[13px] font-bold text-white hover:opacity-95">
            Tạo website
          </button>
        </div>
      </section>
    </div>
  );
};
