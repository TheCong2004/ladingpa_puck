"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpDown, CalendarDays, ChevronDown, Download, PackageOpen, Search, Ticket, TicketPercent } from "lucide-react";
import Link from "next/link";

export default function PromotionsPage() {
  const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);
  const createMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (createMenuRef.current && !createMenuRef.current.contains(event.target as Node)) {
        setIsCreateMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full px-4 py-5 sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto w-full max-w-350">
        <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="text-[30px] font-bold leading-tight text-neutral-900">Khuyến mại</h1>
            <p className="mt-1 text-[14px] text-neutral-600">
              Cung cấp các ưu đãi giảm giá để thúc đẩy doanh số cửa hàng
            </p>
          </div>

          <div className="flex w-full flex-wrap items-center gap-2 lg:w-auto lg:justify-end lg:gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-[14px] font-semibold text-neutral-700 hover:bg-neutral-50 lg:px-5">
              <Download size={16} />
              Xuất mã khuyến mại
            </button>

            <div className="relative" ref={createMenuRef}>
              <button
                type="button"
                onClick={() => setIsCreateMenuOpen((prev) => !prev)}
                className="rounded-xl bg-indigo-700 px-5 py-2.5 text-[14px] font-bold text-white hover:bg-indigo-800"
              >
                Tạo khuyến mại mới
              </button>

              {isCreateMenuOpen ? (
                <div className="absolute right-0 top-[calc(100%+8px)] z-20 w-[min(24rem,calc(100vw-2rem))] rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:w-100 sm:p-5">
                  <Link
                    href="/settings/promotions/create?type=code"
                    onClick={() => setIsCreateMenuOpen(false)}
                    className="flex w-full items-start gap-3 rounded-lg px-2 py-2 text-left hover:bg-neutral-50"
                  >
                    <Ticket size={20} className="mt-0.5 text-neutral-400" />
                    <span>
                      <span className="block text-[15px] font-semibold leading-tight text-neutral-900">Tạo mã khuyến mại</span>
                      <span className="mt-1 block text-[13px] text-neutral-600">
                        Khách hàng nhận khuyến mại bằng cách nhập mã khi thanh toán.
                      </span>
                    </span>
                  </Link>

                  <Link
                    href="/settings/promotions/create?type=program"
                    onClick={() => setIsCreateMenuOpen(false)}
                    className="mt-2 flex w-full items-start gap-3 rounded-lg px-2 py-2 text-left hover:bg-neutral-50"
                  >
                    <TicketPercent size={20} className="mt-0.5 text-neutral-400" />
                    <span>
                      <span className="block text-[15px] font-semibold leading-tight text-neutral-900">Tạo chương trình khuyến mại</span>
                      <span className="mt-1 block text-[13px] text-neutral-600">
                        Khách hàng nhận khuyến mại tự động khi đáp ứng đủ điều kiện nhận hàng.
                      </span>
                    </span>
                  </Link>
                </div>
              ) : null}
            </div>
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
          <div className="overflow-x-auto">
            <div className="grid min-w-230 grid-cols-[44px_1.4fr_1.3fr_0.9fr_0.9fr_1fr_1fr_1fr] items-center border-b border-neutral-200 px-3 py-3 text-[13px] font-bold text-neutral-900">
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
