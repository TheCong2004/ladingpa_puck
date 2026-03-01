"use client";

import { useMemo, useState } from "react";
import { CircleHelp, X } from "lucide-react";

type FieldType = "text" | "textarea";

type ConfigField = {
  key: string;
  label: string;
  type?: FieldType;
  required?: boolean;
  defaultValue?: string;
};

type PaymentMethod = {
  key: string;
  name: string;
  subtitle: string;
  badge: string;
  enabled?: boolean;
  configFields: ConfigField[];
};

const PAYMENT_METHODS: PaymentMethod[] = [
  {
    key: "bank-transfer",
    name: "Chuyển khoản qua ngân hàng",
    subtitle: "Chuyển khoản qua ngân hàng",
    badge: "🏦",
    configFields: [
      { key: "account_name", label: "Tên tài khoản", required: true },
      { key: "account_number", label: "Số tài khoản", required: true },
      { key: "bank_name", label: "Tên ngân hàng", required: true },
      { key: "payment_note", label: "Hướng dẫn thanh toán", type: "textarea" },
    ],
  },
  {
    key: "cod",
    name: "Thanh toán khi giao hàng (COD)",
    subtitle: "Thanh toán khi nhận hàng",
    badge: "💵",
    enabled: true,
    configFields: [
      { key: "cod_title", label: "Tên phương thức thanh toán", required: true, defaultValue: "Thanh toán khi nhận hàng" },
      { key: "cod_note", label: "Mô tả", type: "textarea" },
    ],
  },
  {
    key: "vnpt-epay",
    name: "Thanh toán qua VNPT EPay",
    subtitle: "Thanh toán qua VNPT EPay",
    badge: "💳",
    configFields: [
      { key: "merchant_id", label: "Merchant ID", required: true },
      { key: "secret_key", label: "Secret Key", required: true },
      { key: "callback_url", label: "Callback URL", required: true },
    ],
  },
  {
    key: "zalopay",
    name: "Thanh toán qua ZaloPay",
    subtitle: "Thanh toán qua ví ZaloPay",
    badge: "🟦",
    configFields: [
      { key: "app_id", label: "App ID", required: true },
      { key: "key1", label: "Key 1", required: true },
      { key: "key2", label: "Key 2", required: true },
    ],
  },
  {
    key: "momo",
    name: "Thanh toán qua Momo",
    subtitle: "Thanh toán qua Momo",
    badge: "🟪",
    configFields: [
      { key: "payment_name", label: "Tên phương thức thanh toán", required: true, defaultValue: "Thanh toán qua Momo" },
      { key: "partner_code", label: "Partner Code", required: true },
      { key: "access_key", label: "Access Key", required: true },
      { key: "secret_key", label: "Secret Key", required: true },
      { key: "guide", label: "Hướng dẫn thanh toán", type: "textarea" },
    ],
  },
  {
    key: "vnpay",
    name: "Thanh toán qua VnPay",
    subtitle: "Thanh toán qua VnPay",
    badge: "🟥",
    configFields: [
      { key: "tmn_code", label: "TMN Code", required: true },
      { key: "hash_secret", label: "Hash Secret", required: true },
    ],
  },
  {
    key: "alepay",
    name: "Thanh toán qua AlePay",
    subtitle: "Thanh toán qua AlePay",
    badge: "🟨",
    configFields: [
      { key: "checksum_key", label: "Checksum Key", required: true },
      { key: "token_key", label: "Token Key", required: true },
    ],
  },
  {
    key: "shopeepay",
    name: "Thanh toán qua ShopeePay",
    subtitle: "Thanh toán qua ShopeePay",
    badge: "🟧",
    configFields: [
      { key: "partner_id", label: "Partner ID", required: true },
      { key: "partner_key", label: "Partner Key", required: true },
    ],
  },
  {
    key: "paypal",
    name: "Thanh toán qua PayPal",
    subtitle: "Thanh toán qua PayPal",
    badge: "🟦",
    configFields: [
      { key: "client_id", label: "Client ID", required: true },
      { key: "client_secret", label: "Client Secret", required: true },
    ],
  },
  {
    key: "stripe",
    name: "Thanh toán qua Stripe",
    subtitle: "Thanh toán qua Stripe",
    badge: "🟪",
    configFields: [
      { key: "publishable_key", label: "Publishable Key", required: true },
      { key: "secret_key", label: "Secret Key", required: true },
    ],
  },
  {
    key: "appota",
    name: "Thanh toán qua Appota",
    subtitle: "Thanh toán qua AppotaPay",
    badge: "🟩",
    configFields: [
      { key: "client_id", label: "Client ID", required: true },
      { key: "client_secret", label: "Client Secret", required: true },
    ],
  },
  {
    key: "finan",
    name: "Thanh toán qua Finan",
    subtitle: "Thanh toán qua Qr code",
    badge: "🟩",
    configFields: [
      { key: "store_id", label: "Store ID", required: true },
      { key: "api_key", label: "API Key", required: true },
    ],
  },
];

function PaymentSetupModal({
  method,
  onClose,
}: {
  method: PaymentMethod;
  onClose: () => void;
}) {
  const [formValues, setFormValues] = useState<Record<string, string>>(
    () =>
      method.configFields.reduce<Record<string, string>>((acc, field) => {
        acc[field.key] = field.defaultValue ?? "";
        return acc;
      }, {}),
  );

  const title = useMemo(() => {
    if (method.key === "momo") {
      return "Thiết lập phương thức thanh toán";
    }

    return `Thiết lập ${method.name}`;
  }, [method]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/35 px-4 py-6">
      <div className="flex min-h-full items-center justify-center">
        <div className="w-full max-w-140 overflow-hidden rounded-xl bg-white shadow-xl">
          <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="text-[18px]">{method.badge}</span>
              <h2 className="text-[22px] font-bold text-neutral-900">{title}</h2>
            </div>
            <button type="button" onClick={onClose} className="rounded-full p-1 text-neutral-500 hover:bg-neutral-100">
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4 border-b border-neutral-200 px-5 py-5">
            {method.configFields.map((field) => (
              <div key={field.key}>
                <label className="mb-2 flex items-center gap-2 text-[13px] font-bold text-neutral-800">
                  {field.label}
                  {field.label === "Hướng dẫn thanh toán" && <CircleHelp size={14} className="text-neutral-500" />}
                  {field.required && <span className="text-red-500">*</span>}
                </label>

                {field.type === "textarea" ? (
                  <textarea
                    value={formValues[field.key] ?? ""}
                    onChange={(event) =>
                      setFormValues((prev) => ({
                        ...prev,
                        [field.key]: event.target.value,
                      }))
                    }
                    className="min-h-26 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[13px] text-neutral-900 outline-none focus:border-indigo-300"
                  />
                ) : (
                  <input
                    value={formValues[field.key] ?? ""}
                    onChange={(event) =>
                      setFormValues((prev) => ({
                        ...prev,
                        [field.key]: event.target.value,
                      }))
                    }
                    className="h-10 w-full rounded-lg border border-neutral-300 bg-white px-3 text-[13px] text-neutral-900 outline-none focus:border-indigo-300"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-end gap-3 px-5 py-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-[13px] font-semibold text-neutral-700 hover:bg-neutral-50"
            >
              Hủy bỏ
            </button>
            <button className="rounded-lg bg-indigo-700 px-5 py-2.5 text-[13px] font-bold text-white hover:bg-indigo-800">
              Thiết lập
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BillingSettingsPage() {
  const [activeMethod, setActiveMethod] = useState<PaymentMethod | null>(null);

  return (
    <>
      <div className="w-full px-4 py-5 sm:px-6 lg:px-12 xl:px-20">
        <div className="mx-auto w-full max-w-350">
          <h1 className="mb-5 text-[30px] font-bold text-neutral-900">Phương thức thanh toán</h1>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {PAYMENT_METHODS.map((method) => (
              <div key={method.key} className="rounded-xl border border-neutral-200 bg-white p-3">
                <div className="flex flex-col gap-3 border-b border-neutral-100 pb-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 rounded-md bg-neutral-100 px-2 py-1 text-[14px]">{method.badge}</span>
                    <div>
                      <p className="text-[16px] font-bold text-neutral-900">{method.name}</p>
                    </div>
                  </div>

                  {method.key === "cod" && method.enabled ? (
                    <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:justify-end">
                      <button
                        type="button"
                        onClick={() => setActiveMethod(method)}
                        className="text-[13px] font-semibold text-indigo-600"
                      >
                        Chi tiết
                      </button>
                      <button className="rounded-lg bg-red-500 px-3 py-1.5 text-[13px] font-bold text-white hover:bg-red-600">
                        Vô hiệu hoá
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveMethod(method)}
                      className="w-full rounded-lg bg-indigo-700 px-4 py-1.5 text-[13px] font-bold text-white hover:bg-indigo-800 sm:w-auto"
                    >
                      Thiết lập
                    </button>
                  )}
                </div>

                <p className="pt-3 text-[13px] text-neutral-700">{method.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeMethod && <PaymentSetupModal method={activeMethod} onClose={() => setActiveMethod(null)} />}
    </>
  );
}
