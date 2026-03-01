"use client";

import { useState } from "react";
import { Link2, Search, X } from "lucide-react";

type ProviderKey = "facebook" | "google" | "zalo" | "tiktok";

type LinkedProvider = {
  key: ProviderKey;
  name: string;
  description: string;
  account: string;
  connected: boolean;
};

const INITIAL_PROVIDERS: LinkedProvider[] = [
  {
    key: "facebook",
    name: "Facebook",
    description: "Kết nối Fanpage để đồng bộ tin nhắn và khách hàng.",
    account: "facebook.com/ryon.store",
    connected: true,
  },
  {
    key: "google",
    name: "Google",
    description: "Kết nối tài khoản Google để dùng đăng nhập và phân tích.",
    account: "tran26122003@gmail.com",
    connected: true,
  },
  {
    key: "zalo",
    name: "Zalo OA",
    description: "Kết nối Official Account để quản lý hội thoại từ Zalo.",
    account: "Chưa kết nối",
    connected: false,
  },
  {
    key: "tiktok",
    name: "TikTok",
    description: "Kết nối TikTok để đồng bộ nguồn lead từ quảng cáo.",
    account: "Chưa kết nối",
    connected: false,
  },
];

type IntegrationOption = {
  key: string;
  name: string;
  description: string;
  recommended?: boolean;
};

const INTEGRATION_OPTIONS: IntegrationOption[] = [
  {
    key: "email",
    name: "Email",
    description: "Tích hợp nhận thông báo đơn hàng, lead về email.",
  },
  {
    key: "google-sheets",
    name: "Google Sheets",
    description: "Lưu đơn hàng, dữ liệu từ form vào Google Sheets.",
  },
  {
    key: "automation",
    name: "Automation",
    description: "Liên kết với Automation tạo kịch bản chăm sóc khách hàng tự động.",
    recommended: true,
  },
  {
    key: "google-forms",
    name: "Google Forms",
    description: "Đồng bộ Google Forms với form từ Landing Page.",
  },
  {
    key: "ecommerce",
    name: "Ecommerce",
    description: "Đồng bộ dữ liệu đơn hàng, sản phẩm với Ecommerce.",
    recommended: true,
  },
  {
    key: "ladichat",
    name: "LadiChat",
    description: "Tích hợp livechat vào Landing Page sử dụng LadiChat.",
  },
  {
    key: "ladishare",
    name: "LadiShare",
    description: "Liên kết với LadiShare để thiết lập kịch bản tự động hóa.",
  },
  {
    key: "api",
    name: "API",
    description: "Tích hợp lưu data từ form về bên thứ 3 qua cổng API.",
  },
  {
    key: "mailchimp",
    name: "MailChimp",
    description: "Lưu data từ form trên Landing Page về MailChimp.",
  },
];

export default function LinkedAccountsPage() {
  const [providers, setProviders] = useState(INITIAL_PROVIDERS);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedIntegration, setSelectedIntegration] = useState("google-sheets");

  const toggleConnect = (key: ProviderKey) => {
    setProviders((prev) =>
      prev.map((item) => {
        if (item.key !== key) {
          return item;
        }

        if (!item.connected) {
          return item;
        }

        const nextConnected = !item.connected;

        return {
          ...item,
          connected: nextConnected,
          account: nextConnected ? `Đã kết nối ${item.name}` : "Chưa kết nối",
        };
      }),
    );
  };

  const filteredOptions = INTEGRATION_OPTIONS.filter((item) => {
    const keyword = searchKeyword.trim().toLowerCase();

    if (!keyword) {
      return true;
    }

    return (
      item.name.toLowerCase().includes(keyword) ||
      item.description.toLowerCase().includes(keyword)
    );
  });

  return (
    <>
      <div className="w-full px-4 py-5 sm:px-6 lg:px-12 xl:px-20">
        <div className="mx-auto w-full max-w-350">
          <div className="mb-5 flex flex-col gap-4 border-b border-neutral-100 pb-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h1 className="text-[30px] font-bold leading-tight text-neutral-900">Tài khoản liên kết</h1>
              <p className="mt-1 text-[14px] text-neutral-500">
                Quản lý các tài khoản tích hợp để đồng bộ dữ liệu và tính năng tự động.
              </p>
            </div>
            <div className="flex w-full flex-wrap items-center gap-2 lg:w-auto">
              <button
                onClick={() => setIsCreateOpen(true)}
                className="w-full rounded-lg bg-indigo-700 px-5 py-2.5 text-[14px] font-bold text-white hover:bg-indigo-800 sm:w-auto"
              >
                Tạo liên kết
              </button>
              <button className="w-full rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-[14px] font-bold text-neutral-700 hover:bg-neutral-50 sm:w-auto">
                Lưu thay đổi
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {providers.map((provider) => (
              <div key={provider.key} className="flex flex-col gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-lg bg-indigo-50 p-2 text-indigo-600">
                    <Link2 size={18} />
                  </div>
                  <div>
                    <p className="text-[16px] font-bold text-neutral-900">{provider.name}</p>
                    <p className="mt-0.5 text-[13px] text-neutral-500">{provider.description}</p>
                    <p className="mt-1 text-[13px] text-neutral-700">{provider.account}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => (provider.connected ? toggleConnect(provider.key) : setIsCreateOpen(true))}
                  className={`w-full rounded-lg px-4 py-2 text-[13px] font-semibold sm:w-auto ${
                    provider.connected
                      ? "border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50"
                      : "bg-indigo-700 text-white hover:bg-indigo-800"
                  }`}
                >
                  {provider.connected ? "Ngắt kết nối" : "Kết nối"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isCreateOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/35 px-4 py-6">
          <div className="flex min-h-full items-center justify-center">
            <div className="w-full max-w-210 overflow-hidden rounded-xl bg-white shadow-xl">
              <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
                <h2 className="text-[30px] font-bold text-neutral-900">Chọn loại tài khoản liên kết</h2>
                <button
                  type="button"
                  onClick={() => setIsCreateOpen(false)}
                  className="rounded-full p-1 text-neutral-400 hover:bg-neutral-100"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="border-b border-neutral-200 px-5 py-4">
                <div className="relative">
                  <Search className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                  <input
                    value={searchKeyword}
                    onChange={(event) => setSearchKeyword(event.target.value)}
                    placeholder="Tìm kiếm..."
                    className="h-10 w-full rounded-lg border border-neutral-300 bg-white px-3 pr-10 text-[14px] text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-indigo-300"
                  />
                </div>
              </div>

              <div className="max-h-130 overflow-y-auto px-5 py-4">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {filteredOptions.map((option) => {
                    const selected = selectedIntegration === option.key;

                    return (
                      <button
                        type="button"
                        key={option.key}
                        onClick={() => setSelectedIntegration(option.key)}
                        className={`rounded-xl border p-3 text-left transition-colors ${
                          selected
                            ? "border-indigo-700 bg-indigo-50"
                            : "border-neutral-200 bg-white hover:border-neutral-300"
                        }`}
                      >
                        <div className="mb-1 flex items-start justify-between gap-2">
                          <p className="text-[16px] font-bold text-neutral-900">{option.name}</p>
                          {option.recommended && (
                            <span className="rounded bg-red-500 px-2 py-0.5 text-[12px] font-semibold text-white">
                              Khuyên dùng
                            </span>
                          )}
                        </div>
                        <p className="text-[13px] text-neutral-500">{option.description}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-neutral-200 px-5 py-4">
                <button
                  type="button"
                  onClick={() => setIsCreateOpen(false)}
                  className="rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-[13px] font-semibold text-neutral-700 hover:bg-neutral-50"
                >
                  Hủy bỏ
                </button>
                <button className="rounded-lg bg-indigo-700 px-5 py-2.5 text-[13px] font-bold text-white hover:bg-indigo-800">
                  Tạo liên kết
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
