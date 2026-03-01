"use client";

import { useMemo, useState } from "react";
import { ChevronRight, Plus, Trash2 } from "lucide-react";

type NotificationItem = {
  key: string;
  title: string;
  description: string;
};

function Toggle({ checked, onToggle }: { checked: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`relative h-5 w-9 rounded-full transition-colors ${checked ? "bg-indigo-700" : "bg-neutral-300"}`}
      aria-pressed={checked}
    >
      <span
        className={`absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-white transition-all ${
          checked ? "left-4.5" : "left-1"
        }`}
      />
    </button>
  );
}

function SectionRow({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 border-t border-neutral-200 py-4 lg:grid-cols-[200px_1fr] lg:gap-6">
      <div>
        <h2 className="text-[15px] font-bold text-neutral-900">{title}</h2>
        <p className="mt-1 text-[12px] leading-5 text-neutral-500">{description}</p>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default function NotificationsPage() {
  const customerNotifications = useMemo<NotificationItem[]>(
    () => [
      {
        key: "paid-product",
        title: "Mua sản phẩm thành công",
        description: "Gửi khi khách hàng tạo đơn hàng mua sản phẩm vật lý qua trang thanh toán của sản phẩm vật lý.",
      },
      {
        key: "paid-service",
        title: "Mua dịch vụ thành công",
        description: "Gửi khi khách hàng tạo đơn hàng dịch vụ, sản phẩm số qua trang thanh toán của sản phẩm dịch vụ.",
      },
      {
        key: "ticket-paid",
        title: "Mua vé thành công",
        description: "Gửi khi khách hàng tạo đơn hàng mua vé sự kiện qua trang thanh toán của sản phẩm sự kiện.",
      },
      {
        key: "order-created",
        title: "Tạo đơn hàng thành công",
        description: "Gửi khi khách hàng đặt hàng thành công.",
      },
      {
        key: "order-completed",
        title: "Hoàn tất đơn hàng",
        description: "Gửi cho khi khách hàng hoàn tất các bước đặt hàng, và thanh toán.",
      },
      {
        key: "delivery",
        title: "Thông báo giao hàng",
        description: "Gửi cho khách hàng khi đơn hàng được xác nhận vận chuyển.",
      },
      {
        key: "payment-confirmed",
        title: "Xác nhận thanh toán thành công",
        description: "Gửi cho khách hàng khi đơn hàng xác nhận thanh toán thành công.",
      },
      {
        key: "order-cancelled",
        title: "Thông báo huỷ đơn hàng",
        description: "Gửi cho khách hàng khi đơn hàng bị huỷ.",
      },
      {
        key: "event-info",
        title: "Thông tin các vé sự kiện",
        description: "Gửi cho khách hàng đặt đơn hàng khi đơn hàng mua sự kiện thanh toán thành công.",
      },
      {
        key: "checkin-qr",
        title: "Qr checkin",
        description: "Gửi cho khách hàng được điền trong thông tin vé khi đơn hàng mua sự kiện thanh toán thành công.",
      },
      {
        key: "service-info",
        title: "Thông tin mã dịch vụ",
        description: "Gửi cho khách hàng khi đơn hàng mua dịch vụ thanh toán thành công và dịch vụ có tạo mã.",
      },
      {
        key: "product-code",
        title: "Thông tin mã sản phẩm số",
        description: "Gửi cho khách hàng khi đơn hàng mua sản phẩm số thanh toán thành công và sản phẩm số có tạo mã.",
      },
      {
        key: "shop-order",
        title: "Thông báo cho chủ shop",
        description: "Gửi mail cho các email của chủ shop khi có đơn hàng mới.",
      },
      {
        key: "assigned-staff",
        title: "Thông báo cho nhân viên khi được Assign đơn hàng",
        description: "Gửi cho nhân viên khi nhân viên đó được Assign đơn hàng.",
      },
    ],
    [],
  );

  const [emailEnabled, setEmailEnabled] = useState(true);
  const [notificationStates, setNotificationStates] = useState<Record<string, boolean>>(
    () =>
      customerNotifications.reduce<Record<string, boolean>>((accumulator, item) => {
        accumulator[item.key] = true;
        return accumulator;
      }, {}),
  );

  const printTemplates = [
    {
      title: "Đơn hàng",
      description: "Phiếu xuất đơn hàng bao gồm các thông tin về sản phẩm, hóa đơn và các thông tin chi tiết về đơn hàng đó",
    },
    {
      title: "Phiếu giao hàng",
      description:
        "Phiếu giao hàng bao gồm các thông tin về địa chỉ vận chuyển, phí vận chuyển và các thông tin về người nhận và đơn vị vận chuyển.",
    },
  ];

  return (
    <div className="w-full px-4 py-5 sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto w-full max-w-350">
        <h1 className="mb-3 text-[28px] font-bold leading-tight text-neutral-900">Thông báo</h1>

        <SectionRow title="Tài khoản email" description="Danh sách các email được sử dụng để nhận thông báo của chủ shop.">
          <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
            <div className="grid grid-cols-[1fr_120px_44px] items-center border-b border-neutral-200 px-3 py-3 text-[12px] font-bold text-neutral-800">
              <div>Email</div>
              <div>Trạng thái</div>
              <div />
            </div>

            <div className="grid grid-cols-[1fr_120px_44px] items-center px-3 py-3 text-[13px] text-neutral-800">
              <div className="truncate">tran26122003@gmail.com</div>
              <div>
                <Toggle checked={emailEnabled} onToggle={() => setEmailEnabled((previous) => !previous)} />
              </div>
              <button type="button" className="inline-flex items-center justify-center text-red-500 hover:text-red-600">
                <Trash2 size={14} />
              </button>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-1 px-3 pb-3 text-[12px] font-medium text-indigo-700 hover:text-indigo-800"
            >
              <Plus size={14} />
              Tạo email mới
            </button>
          </div>
        </SectionRow>

        <SectionRow title="Mẫu Email" description="Những mẫu email này sẽ được tự động gửi đến chủ shop hoặc khách hàng khi cấu hình.">
          <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
            <div className="border-b border-neutral-200 px-3 py-3 text-[13px] font-bold text-neutral-900">Thông báo gửi cho khách hàng</div>
            <div>
              {customerNotifications.map((item) => (
                <div key={item.key} className="flex items-start justify-between gap-3 border-b border-neutral-100 px-3 py-2.5 last:border-b-0">
                  <div className="pr-2">
                    <p className="text-[13px] font-semibold text-indigo-800">{item.title}</p>
                    <p className="mt-1 text-[11px] leading-5 text-neutral-500">{item.description}</p>
                  </div>
                  <div className="pt-1">
                    <Toggle
                      checked={notificationStates[item.key]}
                      onToggle={() =>
                        setNotificationStates((previous) => ({
                          ...previous,
                          [item.key]: !previous[item.key],
                        }))
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionRow>

        <SectionRow title="Mẫu in" description="Chỉnh sửa nội dung mẫu in cho đơn hàng và phiếu giao hàng.">
          <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
            <div className="border-b border-neutral-200 px-3 py-3 text-[13px] font-bold text-neutral-900">Mẫu in</div>
            {printTemplates.map((template) => (
              <button
                key={template.title}
                type="button"
                className="flex w-full items-center justify-between gap-3 border-b border-neutral-100 px-3 py-3 text-left last:border-b-0 hover:bg-neutral-50"
              >
                <div>
                  <p className="text-[13px] font-semibold text-indigo-800">{template.title}</p>
                  <p className="mt-1 text-[11px] leading-5 text-neutral-500">{template.description}</p>
                </div>
                <ChevronRight size={16} className="shrink-0 text-neutral-400" />
              </button>
            ))}
          </div>
        </SectionRow>
      </div>
    </div>
  );
}
