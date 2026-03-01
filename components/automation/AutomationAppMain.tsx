"use client";

import { ArrowLeft, ArrowRight, CheckCircle2, Zap } from "lucide-react";

const automationBenefits = [
  "Nền tảng ổn định xuyên suốt 24/24",
  "Tốc độ truy cập chỉ dưới 1 giây với 300+ datacenter",
  "Livechat chuyên nghiệp 7 ngày/ tuần",
  "Kết nối 20+ kênh đối tác quốc tế và tại Việt Nam",
  "Nhanh chóng đồng bộ dữ liệu",
  "Thuận tiện để quản lý thông tin khách hàng",
  "Liên tục lắng nghe nhu cầu tích hợp mới",
  "Tương tác với khách hàng ở nhiều điểm chạm",
  "Nuôi dưỡng và kết nối với khách hàng lâu dài",
];

export const AutomationAppMain = () => {
  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <section className="space-y-8 rounded-2xl border border-neutral-200 bg-white p-4 md:p-6">
        <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-neutral-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-400">
            <ArrowLeft size={14} />
          </span>
          Danh sách ứng dụng
        </div>

        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-4">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <Zap size={34} />
              </span>
              <h1 className="text-4xl font-bold text-neutral-900">Automation</h1>
            </div>

            <p className="max-w-xl text-[13px] text-neutral-600">
              Thiết kế và triển khai các quy trình marketing để theo dõi và tích hợp hiệu quả.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-xl bg-indigo-700 px-6 py-3 text-[13px] font-bold text-white transition hover:opacity-95">
                Cài đặt ứng dụng
              </button>
              <button className="inline-flex items-center gap-2 text-[13px] font-medium text-neutral-700 hover:text-neutral-900">
                Hướng dẫn sử dụng <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-100 bg-gradient-to-r from-orange-50 to-neutral-50 p-6">
            <div className="h-[260px] rounded-2xl border border-neutral-200 bg-white/80" />
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-8">
          <h2 className="text-[13px] font-extrabold text-neutral-900">Automation - Tự động hoá tiếp thị đa kênh</h2>
          <p className="mt-3 max-w-4xl text-[13px] text-neutral-600">
            Là #1 nền tảng tiên phong về Marketing Automation. Tích hợp đa kênh giao tiếp và lưu trữ dữ liệu,
            nhanh chóng đồng bộ dữ liệu và thuận tiện để quản lý thông tin khách hàng.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.35fr_1fr]">
            <div className="rounded-2xl border border-neutral-100 bg-gradient-to-r from-orange-50 to-neutral-50 p-6">
              <div className="flex h-[340px] items-center justify-center rounded-2xl border border-neutral-200 bg-white/70 px-6">
                <div className="max-w-sm text-left">
                  <h3 className="text-6xl font-extrabold text-neutral-900">Automation</h3>
                  <p className="mt-4 text-[13px] text-neutral-600">Gửi tin tự động theo luồng kịch bản có sẵn</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {automationBenefits.map((benefit) => (
                <div key={benefit} className="inline-flex w-full items-start gap-3 rounded-lg p-1 text-[13px] text-neutral-700">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-green-500" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 space-y-8 text-[13px] text-neutral-700">
            <div>
              <h3 className="text-[13px] font-extrabold uppercase text-neutral-900">1. Tiếp cận khách hàng đúng nơi, đúng thời điểm</h3>
              <p className="mt-2 leading-8 text-neutral-600">
                Bạn không thể biết chính xác thời điểm nhu cầu khởi phát của khách để gửi đi thông tin về sản phẩm, ưu đãi phù hợp.
                Nhưng với marketing automation, mọi thứ hoàn toàn có thể. Bất kỳ khi nào khách hàng quan tâm đến sản phẩm
                đều nhận được lời nhắn, email tự động để đi theo đúng kịch bản mua hàng lý tưởng.
              </p>
            </div>

            <div>
              <h3 className="text-[13px] font-extrabold uppercase text-neutral-900">2. Tự động tạo chiến dịch marketing tự động đa kênh</h3>
              <div className="mt-2 space-y-1 leading-8 text-neutral-600">
                <p>- Theo dõi hiệu quả với bảng biểu trực quan, thống kê cụ thể từng mốc thời gian tùy chỉnh.</p>
                <p>- Quản lý thông tin khách hàng theo các trường, tag để dễ dàng chọn lọc khách hàng phù hợp.</p>
                <p>- Tạo kịch bản gửi tin nhắn, email, Zalo ZNS, Cuộc gọi tới khách hàng tiềm năng theo điều kiện thiết lập sẵn.</p>
                <p>- Trong đó có các trường thông tin cá nhân hóa cho từng khách hàng (tên, số điện thoại, email,...).</p>
                <p>- Gửi tin nhắn, email hàng loạt theo điều kiện thiết lập tùy chỉnh để duy trì tương tác.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
