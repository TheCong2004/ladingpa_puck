"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { TAB_CATEGORY_GROUPS, WEBSITE_SAMPLES, type TemplateTab } from "./templates_data"; // Dữ liệu thực tế của bạn
import { TemplateCard } from "./TemplateCard";      // Component có hiệu ứng cuộn
import { TemplatesHeader } from "./templates_header"; // Header riêng biệt

export const TemplatesMain = () => {
  const [activeTab, setActiveTab] = useState<TemplateTab>("Giao diện mẫu");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const groupRef = useRef<HTMLDivElement>(null);

  const tabList: TemplateTab[] = ["Giao diện mẫu", "Mẫu thiết kế nổi bật", "Dịch vụ thiết kế"];
  const currentCategoryGroups = TAB_CATEGORY_GROUPS[activeTab];
  const groupEntries = Object.keys(currentCategoryGroups);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!groupRef.current?.contains(event.target as Node)) {
        setOpenGroup(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredTemplates = useMemo(() => {
    const tabFiltered = WEBSITE_SAMPLES.filter((item) => item.templateTab === activeTab);

    if (selectedCategory === "Tất cả") {
      return tabFiltered;
    }
    return tabFiltered.filter((item) => item.category === selectedCategory);
  }, [activeTab, selectedCategory]);

  return (
    <div className="w-full p-4 md:p-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      
      {/* 1. HEADER RIÊNG BIỆT (Tiêu đề 32px, Nút Rocket) */}
      <TemplatesHeader />

      {/* 2. PROMO BANNER (Landinggo Store - Hình 11) */}
      <div className="w-full mb-10 rounded-2xl bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#9333EA] flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-4 sm:px-10 py-4 sm:py-0 sm:h-28 text-white shadow-xl shadow-indigo-100/30 relative overflow-hidden group">
        <div className="z-10">
          <h2 className="text-[24px] font-black italic tracking-tighter group-hover:scale-105 transition-transform duration-500">
            Landinggo Store
          </h2>
          <p className="text-[13px] opacity-90 font-medium">Cửa hàng giao diện chính hãng LadiPage</p>
        </div>
        
        {/* Các Badge quà tặng */}
        <div className="hidden lg:flex gap-6 z-10">
          <div className="bg-emerald-400 text-white px-4 py-1.5 rounded-lg font-bold text-[12px] shadow-lg">
            Tặng quà 0đ
          </div>
          <div className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-lg font-bold text-[12px] border border-white/30">
            Voucher 100%
          </div>
        </div>

        <button className="bg-[#F97316] hover:bg-[#EA580C] px-8 py-3 rounded-xl font-bold text-[13px] z-10 shadow-lg active:scale-95 transition-all">
          Tôi muốn nhận 🎁
        </button>

        {/* Decor trang trí */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
      </div>

      {/* 3. TABS ĐIỀU HƯỚNG - Text 13px */}
      <div className="border-b border-neutral-100 mb-8 overflow-x-auto">
        <div className="flex gap-8 md:gap-12 min-w-max">
          {tabList.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSelectedCategory("Tất cả");
                setOpenGroup(null);
              }}
              className={`pb-4 text-[13px] font-bold transition-all relative whitespace-nowrap
                ${activeTab === tab ? "text-indigo-600" : "text-neutral-400 hover:text-neutral-900"}`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-full animate-in slide-in-from-left duration-300" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 4. SEARCH & FILTER BAR - Toàn bộ 13px */}
      <div className="flex flex-col gap-6 mb-10">
        <div className="relative flex flex-wrap items-center gap-4 md:gap-12 text-[13px] font-medium" ref={groupRef}>
          <button
            onClick={() => {
              setSelectedCategory("Tất cả");
              setOpenGroup(null);
            }}
            className={`transition-all ${selectedCategory === "Tất cả" ? "text-indigo-600 font-bold" : "text-neutral-700 hover:text-neutral-900"}`}
          >
            Tất cả
          </button>

          {groupEntries.map((group) => (
            <div key={group} className="relative">
              <button
                onClick={() => setOpenGroup((prev) => (prev === group ? null : group))}
                className={`flex items-center gap-2 transition-all ${openGroup === group ? "text-indigo-600" : "text-neutral-700 hover:text-neutral-900"}`}
              >
                {group}
                <ChevronDown size={14} className={`transition-transform ${openGroup === group ? "rotate-180" : ""}`} />
              </button>

              {openGroup === group && (
                <div className="absolute left-0 md:left-0 top-full z-20 mt-3 w-[calc(100vw-2rem)] max-w-[560px] rounded-2xl border border-neutral-200 bg-white p-4 md:p-6 shadow-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-3 md:gap-y-4">
                    {currentCategoryGroups[group].map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setOpenGroup(null);
                        }}
                        className={`text-left text-[13px] transition-all ${selectedCategory === category ? "text-indigo-600 font-bold" : "text-neutral-700 hover:text-neutral-900"}`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Ô tìm kiếm 13px */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
            <input 
              type="text" 
              placeholder="Tìm kiếm dự án chất lượng..." 
              className="w-full pl-12 pr-4 py-3 bg-white border border-neutral-200 rounded-2xl text-[13px] outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all shadow-sm" 
            />
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-white border border-neutral-200 rounded-2xl text-[13px] text-neutral-600 font-medium hover:bg-neutral-50 shadow-sm transition-all whitespace-nowrap">
              Tất cả <ChevronDown size={14} />
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-white border border-neutral-200 rounded-2xl text-[13px] text-neutral-600 font-medium hover:bg-neutral-50 shadow-sm transition-all whitespace-nowrap">
              Kiểu thiết kế <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* 5. GRID HIỂN THỊ MẪU WEBSITE (Dính liền Sidebar) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {filteredTemplates.map((item) => (
          <TemplateCard 
            key={item.id}
            name={item.title}
            category={item.category}
            image={item.image}

            demoUrl={item.demoUrl}
            detailUrl={item.detailUrl}
          />
        ))}
      </div>

      {/* 6. FOOTER - 13px Italic */}
      <div className="mt-16 flex justify-center">
        <button className="bg-white border border-neutral-200 px-12 py-3 rounded-xl text-neutral-900 text-[13px] font-bold hover:bg-neutral-50 shadow-sm transition-all active:scale-95">
          Xem thêm mẫu giao diện
        </button>
      </div>
    </div>
  );
};