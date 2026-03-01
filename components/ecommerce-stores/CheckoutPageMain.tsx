"use client";

import { Package, Shirt } from "lucide-react";

export const CheckoutPageMain = () => {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 md:p-6">
      <div className="rounded-2xl bg-[#F4F4FB] p-4 md:p-8">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <h1 className="text-[35px] font-bold text-neutral-900">Trang thanh toán</h1>
            <p className="max-w-xl text-[13px] text-neutral-600">
              Tạo cấu hình thanh toán giúp khách hàng dễ dàng theo dõi thông tin và thanh toán sản phẩm.
            </p>

            <button className="rounded-xl bg-indigo-700 px-6 py-3 text-[13px] font-bold text-white transition hover:opacity-95">
              Thêm trang thanh toán
            </button>
          </div>

          <div className="rounded-2xl border border-neutral-100 bg-white/70 p-6">
            <div className="relative h-[250px] rounded-2xl border border-neutral-200 bg-white">
              <div className="absolute right-6 top-5 h-[190px] w-[58%] rounded-md border border-green-200 bg-green-50" />
              <div className="absolute bottom-4 left-4 h-[160px] w-[42%] rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-green-50 p-3 text-center">
                    <Shirt size={30} className="mx-auto text-green-300" />
                  </div>
                  <div className="rounded-lg bg-green-50 p-3 text-center">
                    <Package size={30} className="mx-auto text-green-300" />
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="h-2 rounded bg-neutral-100" />
                  <div className="h-2 w-4/5 rounded bg-neutral-100" />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="h-4 rounded-full bg-green-200" />
                  <div className="h-4 rounded-full bg-green-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
