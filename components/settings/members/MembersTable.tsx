export function MembersTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
      <div className="overflow-x-auto">
      <div className="grid min-w-190 grid-cols-[56px_1.2fr_2fr_2fr_1.2fr] items-center border-b border-neutral-200 px-2 py-4 text-[14px] font-bold text-neutral-900">
        <div className="flex justify-center">
          <input type="checkbox" className="h-5 w-5 rounded border border-neutral-300" />
        </div>
        <div>Tên thành viên</div>
        <div>Email</div>
        <div>Vai trò</div>
        <div>Đội nhóm</div>
      </div>

      <div className="grid min-w-190 grid-cols-[56px_1.2fr_2fr_2fr_1.2fr] items-center px-2 py-5 text-[14px] text-neutral-900">
        <div />
        <div>Ryon</div>
        <div>tran26122003@gmail.com</div>
        <div className="flex items-center gap-2">
          Landing Page (Owner)
          <span className="rounded-full bg-neutral-100 px-3 py-0.5 text-[12px] font-semibold text-neutral-800">+3</span>
        </div>
        <div />
      </div>
      </div>
    </div>
  );
}
