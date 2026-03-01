"use client";
import { Rocket } from "lucide-react";

export const TemplatesHeader = () => {
  return (
    // Header thiết kế theo phong cách 3 ô dính liền, padding p-0 để dính sát layout cha
    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 w-full animate-in fade-in duration-500">
      
      {/* Khối Tiêu đề */}
      <div className="space-y-1">
        {/* H1 giữ 32px theo quy tắc tiêu đề của bạn */}
        <h1 className="text-[32px] font-bold text-neutral-900 tracking-tight leading-none">
          Thư viện mẫu
        </h1>
        {/* Mô tả ép về 13px */}
        <p className="text-[13px] text-neutral-400 leading-relaxed max-w-2xl">
          Những thiết kế chuyên nghiệp, đã được chọn lọc từ những mẫu thiết kế tốt nhất.
        </p>
      </div>

      {/* Nút Hành động - Text 13px Bold */}
      <button className="h-fit flex items-center gap-2 bg-white border border-indigo-100 text-[#4F46E5] px-6 py-2.5 rounded-xl text-[13px] font-bold shadow-sm hover:bg-indigo-50 transition-all active:scale-95 shrink-0">
        <Rocket size={16} strokeWidth={2.5} />
        Khám phá Marketplace
      </button>
    </div>
  );
};