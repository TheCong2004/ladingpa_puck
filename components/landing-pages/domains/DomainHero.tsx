interface DomainHeroProps {
  onOpenCreateModal: () => void;
}

export const DomainHero = ({ onOpenCreateModal }: DomainHeroProps) => {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-[#F4F1FF] p-6 md:p-8 lg:p-10">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-[42px] font-bold leading-tight text-neutral-900">Quản lý Tên miền</h1>

          <p className="max-w-xl text-[13px] leading-relaxed text-neutral-700">
            Kết nối tên miền riêng cho Landing Page của bạn, quản lý trạng thái xác thực và cấu hình
            DNS để triển khai chiến dịch nhanh chóng, ổn định.
          </p>

          <button
            onClick={onOpenCreateModal}
            className="rounded-xl bg-[#2F1AD7] px-6 py-3 text-[13px] font-bold text-white transition-all hover:opacity-95"
          >
            Thêm tên miền mới
          </button>
        </div>

        <div className="rounded-2xl bg-white/70 p-4">
          <div className="rounded-xl border border-neutral-200 bg-white p-3 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[13px] font-bold text-neutral-800">Tên miền đã kết nối</span>
              <span className="rounded-lg bg-indigo-50 px-2 py-1 text-[13px] font-bold text-indigo-700">3</span>
            </div>
            <div className="space-y-2">
              <div className="rounded bg-neutral-100 px-3 py-2 text-[13px] text-neutral-700">demo.landinggo.vn</div>
              <div className="rounded bg-neutral-100 px-3 py-2 text-[13px] text-neutral-700">sale.mybrand.vn</div>
              <div className="rounded bg-neutral-100 px-3 py-2 text-[13px] text-neutral-700">campaign.example.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
