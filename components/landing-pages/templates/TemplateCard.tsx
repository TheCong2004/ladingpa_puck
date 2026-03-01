"use client";
import React from "react";
import { Eye, MousePointer2, Monitor } from "lucide-react";

interface TemplateCardProps {
  name: string;
  category: string;
  image: string;
  demoUrl?: string;
  detailUrl?: string;
}

export const TemplateCard = ({ name, category, image, demoUrl, detailUrl }: TemplateCardProps) => {
  return (
    <div className="group relative bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer">
      
      {/* KHỐI ẢNH CUỘN TỰ ĐỘNG */}
      <div className="aspect-[3/4.2] bg-neutral-100 relative overflow-hidden">
        
        {/* Lớp phủ Hover - Hiện nút bấm */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 z-20">
          <button 
            onClick={() => window.open(demoUrl, "_blank")}
            className="flex items-center gap-2 bg-white text-neutral-900 px-5 py-2 rounded-full text-[13px] font-bold hover:scale-105 transition-transform"
          >
            <Monitor size={16} /> Xem Live
          </button>
          <a 
            href={detailUrl}
            className="flex items-center gap-2 bg-[#4F46E5] text-white px-5 py-2 rounded-full text-[13px] font-bold hover:bg-indigo-700 shadow-xl transition-all"
          >
            <Eye size={16} /> Chi tiết
          </a>
        </div>

        {/* Logic cuộn: Ảnh trượt từ top đến bottom */}
        <div className="w-full h-full overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            style={{
              // Vì ảnh của bạn rất dài, chúng ta cuộn lên -100% chiều cao và bù lại chiều cao khung nhìn
              "--scroll-dist": "calc(-100% + 400px)", 
            } as React.CSSProperties}
            className="w-full h-auto object-top transition-transform duration-[6s] linear will-change-transform group-hover:translate-y-[var(--scroll-dist)]" 
          />
        </div>
      </div>

      {/* Thông tin - Text 13px */}
      <div className="p-4 bg-white border-t border-neutral-50 relative z-10">
        <h4 className="text-[13px] font-bold text-neutral-800 truncate group-hover:text-indigo-600 transition-colors">
          {name}
        </h4>
        <p className="text-[11px] text-neutral-400 mt-1 uppercase font-black tracking-widest">
          {category}
        </p>
      </div>
    </div>
  );
};