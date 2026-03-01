import { ArrowLeft, Globe } from "lucide-react";

interface WebsiteBuilderHeroProps {
  onCreateWebsite: () => void;
}

export const WebsiteBuilderHero = ({ onCreateWebsite }: WebsiteBuilderHeroProps) => {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-[#F2F2FC] p-4 md:p-6">
      <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-neutral-900">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-400">
          <ArrowLeft size={14} />
        </span>
        Danh sách ứng dụng
      </div>

      <div className="mt-6 grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_1.25fr]">
        <div className="space-y-5 px-2">
          <div className="inline-flex items-center gap-4">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-indigo-600">
              <Globe size={32} />
            </span>
            <h1 className="text-5xl font-bold text-neutral-900">Website Builder</h1>
          </div>

          <p className="max-w-lg text-[13px] text-neutral-600">
            Giúp người dùng dễ dàng tạo ra trang web chuyên nghiệp và hiệu quả cho doanh nghiệp.
          </p>

          <button
            type="button"
            onClick={onCreateWebsite}
            className="rounded-xl bg-indigo-700 px-6 py-3 text-[13px] font-bold text-white transition hover:opacity-95"
          >
            Tạo Website ngay
          </button>
        </div>

        <div className="rounded-2xl border border-neutral-100 bg-white/50 p-6">
          <div className="relative h-[260px] rounded-2xl border border-neutral-200 bg-white">
            <div className="absolute right-6 top-6 h-[150px] w-[58%] rounded-lg border border-indigo-100 bg-indigo-50" />
            <div className="absolute bottom-8 left-4 h-[140px] w-[46%] rounded-2xl border border-neutral-200 bg-white shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};
