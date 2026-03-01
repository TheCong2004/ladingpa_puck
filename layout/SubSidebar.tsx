"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Thêm hook để nhận diện đường dẫn hiện tại
import { ChevronLeft, ChevronRight, Plus, Search } from "lucide-react";
import { useSidebar } from "../context/SidebarContext";

export const SubSidebar = ({ title, items }: { title: string, items: any[] }) => {
  const { isSubOpen, setIsSubOpen } = useSidebar();
  const pathname = usePathname(); // Lấy URL hiện tại trên thanh trình duyệt
  const isCustomerListPage = pathname.toLowerCase().startsWith("/customers/list");

  const customerSegments = [
    "New Subscribers",
    "SMS Subscribers",
    "Email Subscribers",
    "Zalo Subscribers",
    "Facebook Subscribers",
    "Email Complaint Subscribers",
  ];

  return (
    <aside className={`relative h-screen bg-[#F9FAFB] border-r border-neutral-100 flex flex-col shrink-0 transition-all duration-300 ${isSubOpen ? "w-[224px]" : "w-[72px]"}`}>
      
      {/* Nút Toggle Cột 2 (Dính liền vách ngăn) */}
      <button 
        onClick={() => setIsSubOpen(!isSubOpen)}
        className="absolute -right-3 top-1/2 -translate-y-1/2 z-50 flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm hover:text-indigo-600 transition-all"
      >
        {isSubOpen ? <ChevronLeft size={12} /> : <ChevronRight size={12} />}
      </button>

      {/* Tiêu đề vùng - H3: 18px */}
      {isSubOpen ? (
        <div className="p-5 pb-3">
          <h3 className="text-[18px] font-bold text-neutral-900">{title}</h3>
        </div>
      ) : (
        <div className="px-4 pt-5 pb-3">
          <div className="h-px w-full bg-neutral-200" />
        </div>
      )}

      {/* Nội dung Danh sách - Text 13px */}
      <nav className="flex-1 px-2 space-y-0.5">
        {items.map((item: any) => {
          // Kiểm tra xem mục này có đang được chọn không
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center rounded-xl py-2.5 transition-all duration-200
                ${isSubOpen ? "gap-3 px-4" : "justify-center px-0"}
                ${isActive 
                 ? "bg-indigo-50 text-indigo-600 font-bold shadow-sm" 
                      : "text-neutral-900 hover:bg-neutral-50 "
                }`}
            >
              <span className={`shrink-0 ${isActive ? "text-indigo-600" : "text-neutral-400"}`}>
                {React.cloneElement(item.icon, { size: 18, strokeWidth: isActive ? 2.5 : 2 })}
              </span>
              
              {isSubOpen && (
                <span className="text-[13px] leading-none truncate tracking-tight">
                  {item.name}
                </span>
              )}
            </Link>
          );
        })}
        
        {/* Lọc theo Segments - Text 13px */}
        {isSubOpen && isCustomerListPage && (
          <div className="mt-8 px-4 pt-6 border-t border-neutral-100/50 text-[13px]">
            <p className="font-bold text-neutral-900 mb-4 flex justify-between items-center uppercase tracking-wide">
              Lọc theo Segments <Search size={16} className="cursor-pointer text-neutral-400" />
            </p>
            <div className="space-y-1.5">
              {customerSegments.map((segment) => (
                <button
                  key={segment}
                  className="w-full rounded-lg px-2 py-1.5 text-left text-[13px] text-neutral-700 hover:bg-neutral-50"
                >
                  {segment}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Lọc theo Tags - Text 13px */}
        {isSubOpen ? (
          <div className="mt-8 px-4 pt-6 border-t border-neutral-100/50 text-[13px]">
            <p className="font-bold text-neutral-900 mb-4 flex justify-between items-center">
              Lọc theo Tags <Plus size={16} className="cursor-pointer text-neutral-400" />
            </p>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-2.5 text-neutral-400" size={14} />
              <input 
                type="text" 
                placeholder="Tìm kiếm" 
                className="w-full pl-9 pr-3 py-1.5 bg-white border border-neutral-200 rounded-lg text-[13px] outline-none focus:border-indigo-300" 
              />
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold w-full text-[13px] shadow-sm active:scale-95 transition-transform">
              Tất cả
            </button>
          </div>
        ) : (
          <div className="mt-8 px-4 pt-6 border-t border-neutral-100/50">
            <button className="w-full flex items-center justify-center rounded-lg border border-neutral-200 bg-white py-1.5 text-neutral-400 hover:text-indigo-600 transition-all">
              <Plus size={16} />
            </button>
          </div>
        )}
      </nav>
    </aside>
  );
};