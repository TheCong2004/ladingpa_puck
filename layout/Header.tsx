"use client";
import React from "react";
import { Search, Plus, Moon, Bell, ChevronDown, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 flex h-20 w-full items-center justify-between border-b border-neutral-100 bg-white/80 px-8 backdrop-blur-md">
      {/* 1. Thanh tìm kiếm - Caption: 14px */}
      <div className="relative flex w-full max-w-[400px] items-center">
        <Search className="absolute left-4 text-neutral-400" size={18} />
        <input
          type="text"
          placeholder="Tìm kiếm học viên, khóa học..."
          className="w-full rounded-xl border border-neutral-100 bg-neutral-50 py-2.5 pl-12 pr-4 text-[14px] outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
        />
        <kbd className="absolute right-4 hidden rounded border border-neutral-200 bg-white px-1.5 py-0.5 text-[10px] font-bold text-neutral-400 lg:block">
          ⌘ K
        </kbd>
      </div>

      {/* 2. Actions & User Profile */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 rounded-xl bg-[#4F46E5] px-5 py-2.5 text-[14px] font-bold text-white shadow-lg shadow-indigo-100 hover:opacity-90">
          <Plus size={18} />
          Tạo lead
        </button>

        <div className="flex items-center gap-2 rounded-xl border border-neutral-100 bg-neutral-50 px-4 py-2 text-[14px] font-medium text-neutral-600">
          <MapPin size={16} />
          CS2 - Bình Thạnh HCM
        </div>

        <div className="flex items-center gap-2 border-l border-neutral-200 pl-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-50">
            <Moon size={20} />
          </button>
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-50">
            <Bell size={20} />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
          </button>
          
          <div className="ml-2 flex items-center gap-3 cursor-pointer">
            <div className="h-10 w-10 rounded-full bg-indigo-600 p-0.5 shadow-md">
               <img src="https://i.pravatar.cc/150?u=admin" className="h-full w-full rounded-full border-2 border-white object-cover" />
            </div>
            <div className="hidden lg:block">
              <p className="text-[14px] font-bold text-neutral-900">Admin</p>
            </div>
            <ChevronDown size={16} className="text-neutral-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;