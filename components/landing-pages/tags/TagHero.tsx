interface TagHeroProps {
  onOpenCreateModal: () => void;
}

export const TagHero = ({ onOpenCreateModal }: TagHeroProps) => {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-[#F4F1FF] p-6 md:p-8 lg:p-10">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-[42px] font-bold leading-tight text-neutral-900">Quản lý Tag</h1>

          <p className="max-w-xl text-[13px] leading-relaxed text-neutral-700">
            Với tính năng này, bạn dễ dàng gắn Tags vào các trang và dễ dàng tìm kiếm chúng qua
            hệ thống danh mục được tổ chức một cách rõ ràng và tiện lợi.
          </p>

          <button
            onClick={onOpenCreateModal}
            className="rounded-xl bg-[#2F1AD7] px-6 py-3 text-[13px] font-bold text-white transition-all hover:opacity-95"
          >
            Tạo Tag mới
          </button>
        </div>

        <div className="rounded-2xl bg-white/70 p-4">
          <div className="rounded-xl border border-neutral-200 bg-white p-3 shadow-sm">
            <div className="mb-3 flex items-center justify-end">
              <span className="rounded-lg border border-indigo-200 px-2 py-1 text-[13px] font-bold text-indigo-700">
                Quản lý Tags
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between rounded bg-neutral-100 px-3 py-2">
                <span className="rounded bg-indigo-100 px-2 py-1 text-[13px] text-indigo-700">Tag số 1</span>
                <span className="text-[13px] text-neutral-400">...</span>
              </div>
              <div className="flex items-center justify-between rounded bg-neutral-100 px-3 py-2">
                <span className="rounded bg-emerald-100 px-2 py-1 text-[13px] text-emerald-700">Tag số 2</span>
                <span className="text-[13px] text-neutral-400">...</span>
              </div>
              <div className="flex items-center justify-between rounded bg-neutral-100 px-3 py-2">
                <span className="rounded bg-amber-100 px-2 py-1 text-[13px] text-amber-700">Tag số 3</span>
                <span className="text-[13px] text-neutral-400">...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
