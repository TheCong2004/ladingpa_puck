"use client";

import { ChevronDown, Search } from "lucide-react";

export const DomainsPageMain = () => {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 md:p-6">
      <div className="rounded-2xl bg-[#F4F4FB] p-4 md:p-8">
        <div className="space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-3">
              <h1 className="text-[35px] font-bold text-neutral-900">Tên miền</h1>
              <p className="max-w-xl text-[13px] text-neutral-600">
                Quản lý danh sách tên miền đã liên kết với cửa hàng của bạn.
              </p>
            </div>

            <button className="rounded-xl bg-indigo-700 px-5 py-3 text-[13px] font-bold text-white transition hover:opacity-95">
              Tạo tên miền mới
            </button>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-4 md:p-5">
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative min-w-[240px] flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
                <input
                  type="text"
                  placeholder="Tìm kiếm tên miền"
                  className="h-10 w-full rounded-lg border border-neutral-200 bg-white pl-9 pr-3 text-[13px] text-neutral-700 outline-none placeholder:text-neutral-400 focus:border-indigo-500"
                />
              </div>

              <button className="inline-flex h-10 items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 text-[13px] text-neutral-700 transition hover:bg-neutral-50">
                Trạng thái
                <ChevronDown size={16} className="text-neutral-500" />
              </button>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200">
              <table className="w-full border-collapse text-left text-[13px]">
                <thead className="bg-neutral-50 text-neutral-500">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Tên miền</th>
                    <th className="px-4 py-3 font-semibold">Loại</th>
                    <th className="px-4 py-3 font-semibold">Ngày tạo</th>
                    <th className="px-4 py-3 font-semibold">Ngày cập nhật</th>
                    <th className="px-4 py-3 font-semibold">Trạng thái</th>
                    <th className="px-4 py-3 font-semibold">Thao tác</th>
                  </tr>
                </thead>
              </table>

              <div className="flex min-h-[180px] items-center justify-center bg-white px-4 text-center">
                <p className="text-[13px] text-neutral-500">Không có dữ liệu tên miền nào.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
