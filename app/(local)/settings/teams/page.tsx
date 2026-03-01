"use client";

import { useState } from "react";
import { Search, UsersRound } from "lucide-react";
import { CreateTeamModal } from "@/components/settings/teams/CreateTeamModal";

export default function SettingsTeamsPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full px-8 py-6 lg:px-20">
        <div className="mx-auto w-full max-w-350">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h1 className="text-[24px] font-bold leading-tight text-neutral-900">Danh sách đội nhóm</h1>
            <button
              onClick={() => setIsOpen(true)}
              className="rounded-xl bg-indigo-700 px-6 py-3 text-[14px] font-bold text-white hover:bg-indigo-800"
            >
              Tạo đội nhóm
            </button>
          </div>

          <div className="mb-5 relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
            <input
              placeholder="Tìm kiếm"
              className="h-12 w-full rounded-xl border border-neutral-300 bg-white pl-11 pr-4 text-[14px] text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-indigo-300"
            />
          </div>

          <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
            <div className="grid grid-cols-[56px_2fr_1fr_1.3fr_1.5fr] items-center border-b border-neutral-200 px-2 py-4 text-[14px] font-bold text-neutral-900">
              <div className="flex justify-center">
                <input type="checkbox" className="h-5 w-5 rounded border border-neutral-300" />
              </div>
              <div>Tên đội nhóm</div>
              <div>Số thành viên</div>
              <div>Team Lead</div>
              <div>Thời gian cập nhật</div>
            </div>

            <div className="flex min-h-75 items-center justify-center">
              <UsersRound size={110} className="text-neutral-300" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>

      <CreateTeamModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
