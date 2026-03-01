import React from "react";
import { Image as ImageIcon, Video, MoreHorizontal, ThumbsUp, MessageSquare, Share2, Plus } from "lucide-react";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      
      {/* CỘT TRÁI: NEWSFEED (8 CỘT) */}
      <div className="lg:col-span-8 space-y-6">
        {/* Card đăng bài - H3: 20px */}
        <div className="rounded-xl border border-neutral-100 bg-white p-6 shadow-sm">
          <div className="flex gap-4">
            <div className="h-12 w-12 shrink-0 rounded-full bg-neutral-100">
              <img src="https://i.pravatar.cc/150?u=me" className="rounded-full" />
            </div>
            <input 
              type="text" 
              placeholder="Võ Thế Công ơi, bạn muốn chia sẻ gì không?" 
              className="flex-1 rounded-full bg-neutral-50 px-6 text-[16px] outline-none"
            />
          </div>
          <div className="mt-4 flex gap-8 border-t border-neutral-50 pt-4">
            <button className="flex items-center gap-2 text-[14px] font-bold text-neutral-500 hover:text-primary">
              <span className="text-green-500"><ImageIcon size={20} /></span> Bài viết
            </button>
            <button className="flex items-center gap-2 text-[14px] font-bold text-neutral-500 hover:text-primary">
              <span className="text-indigo-500"><Video size={20} /></span> Ảnh/Video
            </button>
          </div>
        </div>

        {/* Bài viết mẫu - Body: 16px */}
        <div className="rounded-xl border border-neutral-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-3">
              <div className="h-11 w-11 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">A</div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[16px] font-bold">Admin</span>
                  <span className="rounded bg-red-500 px-2 py-0.5 text-[10px] text-white font-bold uppercase">Admin</span>
                </div>
                <p className="text-[12px] text-neutral-400">1 năm trước</p>
              </div>
            </div>
            <MoreHorizontal className="text-neutral-400 cursor-pointer" />
          </div>
          <p className="text-[16px] leading-[1.6] text-neutral-800">
            ❓ MONA.Software đã triển khai thành công hệ thống quản lý đào tạo chuyên sâu, giúp tối ưu hóa quy trình xét duyệt hồ sơ cho học viên... <span className="text-primary font-bold cursor-pointer">Hiện thêm</span>
          </p>
          <div className="mt-4 h-[300px] w-full rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-300 italic">
            [Ảnh nội dung bài viết]
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-neutral-50 pt-4">
            <div className="flex gap-6">
              <button className="flex items-center gap-2 text-[14px] font-bold text-neutral-500"><ThumbsUp size={18}/> Thích</button>
              <button className="flex items-center gap-2 text-[14px] font-bold text-neutral-500"><MessageSquare size={18}/> Bình luận</button>
            </div>
            <Share2 size={18} className="text-neutral-400" />
          </div>
        </div>
      </div>

      {/* CỘT PHẢI: DANH SÁCH NHÓM (4 CỘT) */}
      <div className="lg:col-span-4">
        <div className="rounded-xl border border-neutral-100 bg-white p-6 shadow-sm sticky top-28">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[20px] font-bold">Danh sách nhóm</h3>
            <button className="flex items-center gap-1 rounded-lg bg-[#4F46E5] px-3 py-1.5 text-[12px] font-bold text-white hover:opacity-90 transition-all">
              <Plus size={14} /> Thêm nhóm
            </button>
          </div>
          <div className="space-y-4">
            {[
              { name: "DE-30.10.2025", count: "7 thành viên" },
              { name: "21321", count: "7 thành viên" },
              { name: "CB1 - IELTS 0 - 2.5", count: "22 thành viên" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-50 cursor-pointer transition-all">
                <div className="h-10 w-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-400 font-bold">G</div>
                <div className="flex-1 overflow-hidden">
                  <p className="truncate text-[14px] font-bold text-neutral-900">{item.name}</p>
                  <p className="text-[12px] text-neutral-400">{item.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}