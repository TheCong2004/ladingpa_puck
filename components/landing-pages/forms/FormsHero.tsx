import Link from "next/link";

interface FormsHeroProps {
  onOpenCreateModal: () => void;
}

export const FormsHero = ({ onOpenCreateModal }: FormsHeroProps) => {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-[#F4F1FF] p-6 md:p-8 lg:p-10">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-[42px] font-bold leading-tight text-neutral-900">Cấu hình Form</h1>

          <p className="max-w-xl text-[13px] leading-relaxed text-neutral-700">
            Với tính năng này, bạn có thể linh hoạt thay đổi trường, kiểu dữ liệu, yêu cầu và hiển
            thị của các biểu mẫu để tối ưu hóa trải nghiệm người dùng và thu thập thông tin một cách
            hiệu quả.
          </p>

          <div className="flex flex-wrap items-center gap-5 pt-2">
            <button
              onClick={onOpenCreateModal}
              className="rounded-xl bg-[#2F1AD7] px-6 py-3 text-[13px] font-bold text-white transition-all hover:opacity-95"
            >
              Tạo cấu hình ngay
            </button>

            <span className="text-[13px] text-neutral-800">Hoặc</span>

            <Link
              href="#"
              className="border-b border-indigo-500 pb-1 text-[13px] font-medium text-indigo-700 hover:text-indigo-800"
            >
              Xem hướng dẫn
            </Link>
          </div>
        </div>

        <div className="rounded-2xl bg-white/70 p-4">
          <div className="rounded-xl border border-neutral-200 bg-white p-3 shadow-sm">
            <div className="mb-3 h-6 w-32 rounded bg-neutral-100" />
            <div className="space-y-2">
              <div className="h-8 rounded bg-neutral-100" />
              <div className="h-8 rounded bg-neutral-100" />
              <div className="h-8 rounded bg-neutral-100" />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="h-20 rounded bg-indigo-50" />
              <div className="h-20 rounded bg-indigo-50" />
              <div className="h-20 rounded bg-indigo-50" />
              <div className="h-20 rounded bg-indigo-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
