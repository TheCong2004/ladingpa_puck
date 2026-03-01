"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { FilterBar, type StatusFilter } from "./FilterBar";
import { DataTable } from "./DataTable";
import { MEMBER_OPTIONS } from "./data";


export const LandingPageMain = () => {
  const [selectedStatus, setSelectedStatus] = useState<StatusFilter>("Tất cả");
  const [selectedMember, setSelectedMember] = useState<string>("Tất cả");

  return (
    // w-full và p-8 để nội dung dính liền với Sidebar nhưng vẫn có khoảng thở bên trong
    <div className="w-full p-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
      
      {/* Header chính - H1 giữ nguyên 32px theo quy tắc tiêu đề */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="space-y-1">
          <h1 className="text-[28px] font-bold text-neutral-900 tracking-tight">
            Landing Pages
          </h1>
          {/* Cập nhật desc về 14px */}
          <p className="text-[13px] text-neutral-400 leading-relaxed max-w-xl">
            Quản lý danh sách Landing Page của bạn dễ dàng hơn với việc gắn Tag, 
            theo dõi hiệu suất và tối ưu hóa tỷ lệ chuyển đổi.
          </p>
        </div>
        
        {/* Nút tạo Landing Page - Chữ 14px font-bold */}
        <button className="h-fit bg-[#4F46E5] text-white px-6 py-3 rounded-xl text-[13px] font-bold shadow-lg shadow-indigo-100 hover:opacity-90 transition-all active:scale-95 flex items-center gap-2">
          <Plus size={18} />
          Tạo Landing Page
        </button>
      </div>

      {/* Khu vực chức năng chính - Các component con bên trong cũng cần đảm bảo 14px */}
      <div className="space-y-4">
        <FilterBar
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
          selectedMember={selectedMember}
          onMemberChange={setSelectedMember}
          memberOptions={MEMBER_OPTIONS}
        />
        <DataTable selectedStatus={selectedStatus} selectedMember={selectedMember} />
      </div>

      {/* Footer thông tin - Giữ vững 14px */}
      <div className="mt-8 flex items-center justify-between px-2">
        <span className="text-[13px] text-neutral-400 font-medium italic">
          Đang hiển thị 1 đến 1 của 1 bản ghi
        </span>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 text-[13px] border border-neutral-200 rounded-lg text-neutral-400 disabled:opacity-30" disabled>
            Trước
          </button>
          <button className="px-3 py-1.5 text-[13px] bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-lg font-bold">
            1
          </button>
          <button className="px-3 py-1.5 text-[13px] border border-neutral-200 rounded-lg text-neutral-400 disabled:opacity-30" disabled>
            Sau
          </button>
        </div>
      </div>
    </div>
  );
};