import { CheckCircle2 } from "lucide-react";
import { websiteBuilderBenefits, websiteBuilderGuides } from "./data";

export const WebsiteBuilderDetails = () => {
  return (
    <section className="space-y-6 rounded-2xl border border-neutral-200 bg-white p-4 md:p-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="text-[13px] font-extrabold text-neutral-900">Website Builder - Tạo website nhanh chóng, hiệu quả</h2>
          <p className="mt-3 text-[13px] leading-7 text-neutral-600">
            Nền tảng hỗ trợ xây dựng website bằng thao tác kéo thả đơn giản, giúp đội ngũ marketing và kinh doanh
            triển khai landing page, trang bán hàng và microsite nhanh chóng mà vẫn đảm bảo trải nghiệm người dùng.
          </p>
        </div>

        <div className="space-y-2">
          {websiteBuilderBenefits.map((benefit) => (
            <div key={benefit} className="inline-flex w-full items-start gap-3 rounded-lg p-1 text-[13px] text-neutral-700">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-green-500" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[13px] font-extrabold uppercase text-neutral-900">Quy trình triển khai nhanh</h3>
        <div className="mt-2 space-y-1 leading-8 text-[13px] text-neutral-600">
          {websiteBuilderGuides.map((guide) => (
            <p key={guide}>- {guide}</p>
          ))}
        </div>
      </div>
    </section>
  );
};
