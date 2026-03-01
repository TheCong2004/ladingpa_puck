import { ChevronDown, Search } from "lucide-react";

interface MembersHeaderProps {
  onOpenAddMember: () => void;
}

export function MembersHeader({ onOpenAddMember }: MembersHeaderProps) {
  return (
    <>
      <div className="mb-6 flex items-center justify-between gap-4">
        <h1 className="text-[24px] font-bold leading-tight text-neutral-900">Danh sách thành viên</h1>
        <button
          onClick={onOpenAddMember}
          className="rounded-xl bg-indigo-700 px-6 py-3 text-[14px] font-bold text-white hover:bg-indigo-800"
        >
          Thêm thành viên
        </button>
      </div>

      <div className="mb-5 flex gap-4">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
          <input
            placeholder="Tìm kiếm"
            className="h-12 w-full rounded-xl border border-neutral-300 bg-white pl-11 pr-4 text-[14px] text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-indigo-300"
          />
        </div>
        <div className="relative">
          <select
            defaultValue="Tất cả"
            className="h-12 min-w-38.5 appearance-none rounded-xl border border-neutral-300 bg-white px-4 pr-10 text-[14px] font-medium text-neutral-600 outline-none focus:border-indigo-300"
          >
            <option>Tất cả</option>
            <option>Kích hoạt</option>
            <option>Vô hiệu hoá</option>
          </select>
          <ChevronDown size={18} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500" />
        </div>
      </div>
    </>
  );
}
