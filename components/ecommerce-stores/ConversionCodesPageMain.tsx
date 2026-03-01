"use client";

const trackingFields = [
  {
    label: "Facebook Pixel ID",
    placeholder: "Nhập Facebook Pixel ID",
  },
  {
    label: "Google Analytics Measurement ID",
    placeholder: "Nhập Google Analytics Measurement ID",
  },
  {
    label: "Google Ads Conversion ID",
    placeholder: "Nhập Google Ads Conversion ID",
  },
  {
    label: "Google Ads Conversion Label",
    placeholder: "Nhập Google Ads Conversion Label",
  },
  {
    label: "TikTok Pixel ID",
    placeholder: "Nhập TikTok Pixel ID",
  },
  {
    label: "Google Tag Manager ID",
    placeholder: "Nhập Google Tag Manager ID",
  },
];

export const ConversionCodesPageMain = () => {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 md:p-6">
      <div className="rounded-2xl bg-[#F4F4FB] p-4 md:p-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-[25px] font-semibold text-neutral-900">Mã chuyển đổi</h1>
            <p className="mt-3 max-w-2xl text-[13px] text-neutral-600">
              Cài đặt mã theo dõi chuyển đổi cho các nền tảng quảng cáo để đo lường hiệu quả chiến dịch chính xác hơn.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-4 md:p-6">
            <div className="flex justify-end">
              <button className="rounded-xl bg-indigo-700 px-5 py-2.5 text-[13px] font-bold text-white transition hover:opacity-95">
                Lưu thay đổi
              </button>
            </div>

            <div className="mt-5 space-y-4">
              {trackingFields.map((field) => (
                <div
                  key={field.label}
                  className="grid grid-cols-1 gap-2 rounded-xl border border-neutral-200 bg-white p-4 md:grid-cols-[260px_1fr] md:items-center"
                >
                  <label className="text-[13px] font-semibold text-neutral-700">{field.label}</label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className="h-10 w-full rounded-lg border border-neutral-200 bg-white px-3 text-[13px] text-neutral-700 outline-none placeholder:text-neutral-400 focus:border-indigo-500"
                  />
                </div>
              ))}

              <div className="rounded-xl border border-neutral-200 bg-white p-4">
                <p className="mb-3 text-[13px] font-semibold text-neutral-700">Javascript tùy chỉnh (trước thẻ đóng body)</p>
                <textarea
                  rows={4}
                  placeholder="Nhập đoạn mã Javascript"
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-[13px] text-neutral-700 outline-none placeholder:text-neutral-400 focus:border-indigo-500"
                />
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-4">
                <p className="mb-3 text-[13px] font-semibold text-neutral-700">CSS tùy chỉnh (trước thẻ đóng head)</p>
                <textarea
                  rows={4}
                  placeholder="Nhập đoạn mã CSS"
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-[13px] text-neutral-700 outline-none placeholder:text-neutral-400 focus:border-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
