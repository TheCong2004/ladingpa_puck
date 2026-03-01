import { TemplatesMain } from "@/components/landing-pages/templates/TemplatesMain";

// Thiết lập metadata cho trang (Tùy chọn)
export const metadata = {
  title: "Thư viện mẫu - LadiPage Clone",
  description: "Khám phá kho giao diện Landing Page chuyên nghiệp",
};

export default function TemplatesPage() {
  return (
    <div className="w-full bg-white text-[13px]">
      {/* Component chính chứa Banner, Filter và Grid mẫu */}
      <TemplatesMain />
    </div>
  );
}