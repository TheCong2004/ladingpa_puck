"use client";

import { useRouter } from "next/navigation";

export const StorePageMain = () => {
  const router = useRouter();

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 md:p-6">
      <div className="rounded-2xl bg-[#F4F4FB] p-4 md:p-8">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-neutral-900">Trang cửa hàng</h1>
            <p className="max-w-xl text-[13px] text-neutral-600">
              Xây dựng một cửa hàng trực tuyến. Cá nhân hóa thiết kế của bạn bằng các công cụ kéo thả giúp cửa hàng
              trực tuyến của bạn tỏa sáng.
            </p>

            <button
              type="button"
              onClick={() => router.push("/products/products")}
              className="rounded-xl bg-indigo-700 px-6 py-3 text-[13px] font-bold text-white transition hover:opacity-95"
            >
              Thêm trang cửa hàng
            </button>
          </div>

          <div className="rounded-2xl border border-neutral-100 bg-white/70 p-6">
            <div className="relative h-[250px] rounded-2xl border border-neutral-200 bg-white">
              <div className="absolute right-6 top-5 h-[190px] w-[58%] rounded-md border border-green-200 bg-green-50" />
              <div className="absolute bottom-6 left-4 h-[165px] w-[42%] rounded-2xl border border-neutral-200 bg-white shadow-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
