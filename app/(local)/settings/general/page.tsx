import RichTextEditor from "@/components/settings/RichTextEditor";

function SectionRow({
    label,
    description,
    children,
}: {
    label: string;
    description?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="grid grid-cols-1 gap-3 border-t border-neutral-100 py-4 lg:grid-cols-[280px_1fr] lg:gap-5">
            <div>
                <p className="text-[16px] font-bold text-neutral-900">{label}</p>
                {description && <p className="mt-1 text-[13px] leading-5 text-neutral-500">{description}</p>}
            </div>
            <div>{children}</div>
        </div>
    );
}

export default function SettingsGeneralPage() {
    return (
        <div className="mx-auto w-full max-w-350 px-4 py-5 sm:px-6 lg:px-12 xl:px-20">
            <div className="mb-5 flex flex-col gap-4 border-b border-neutral-100 pb-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                    <h1 className="text-[30px] font-bold leading-tight text-neutral-900">Cài đặt chung</h1>
                    <p className="mt-1 text-[14px] text-neutral-500">
                        Những thông tin cơ bản về cửa hàng và tài khoản của bạn được cài đặt ở đây
                    </p>
                </div>
                <button className="w-full rounded-lg bg-indigo-600 px-6 py-2.5 text-[14px] font-bold text-white hover:bg-indigo-700 sm:w-auto">
                    Cập nhật
                </button>
            </div>

            <SectionRow
                label="Tên tài khoản"
                description="Phần này sẽ được hiển thị làm tên tài khoản của bạn"
            >
                <input className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-[14px] text-neutral-900 outline-none focus:border-indigo-300" defaultValue="Ryon" />
            </SectionRow>

            <SectionRow label="Tên cửa hàng" description="Tên hiển thị trên trang cửa hàng của bạn.">
                <input className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-[14px] text-neutral-900 outline-none focus:border-indigo-300" defaultValue="Ryon" />
            </SectionRow>

            <SectionRow
                label="Địa chỉ cửa hàng"
                description="Thông tin địa chỉ sẽ hiển thị trên trang cửa hàng, hóa đơn bán hàng, và được sử dụng để tính phí vận chuyển khi thanh toán."
            >
                <div className="space-y-3">
                    <div>
                        <label className="mb-1 block text-[13px] font-medium text-neutral-500">Địa chỉ</label>
                        <input className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-[14px] text-neutral-900 outline-none focus:border-indigo-300" defaultValue="Địa chỉ mặc định" />
                    </div>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        <div>
                            <label className="mb-1 block text-[13px] font-medium text-neutral-500">Số điện thoại</label>
                            <input className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-[14px] text-neutral-900 outline-none focus:border-indigo-300" defaultValue="0829757417" />
                        </div>
                        <div>
                            <label className="mb-1 block text-[13px] font-medium text-neutral-500">Mã bưu điện</label>
                            <input className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-[14px] text-neutral-900 outline-none focus:border-indigo-300" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        <div>
                            <label className="mb-1 block text-[13px] font-medium text-neutral-500">Quốc gia/ Khu vực</label>
                            <select className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-[14px] text-neutral-900 outline-none focus:border-indigo-300" defaultValue="Việt Nam">
                                <option>Việt Nam</option>
                            </select>
                        </div>
                        <div>
                            <label className="mb-1 block text-[13px] font-medium text-neutral-500">Tỉnh/Thành Phố</label>
                            <select className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-[14px] text-neutral-900 outline-none focus:border-indigo-300" defaultValue="Hà Nội">
                                <option>Hà Nội</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        <div>
                            <label className="mb-1 block text-[13px] font-medium text-neutral-500">Quận huyện</label>
                            <select className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-[14px] text-neutral-900 outline-none focus:border-indigo-300" defaultValue="Quận Bắc Từ Liêm">
                                <option>Quận Bắc Từ Liêm</option>
                            </select>
                        </div>
                        <div>
                            <label className="mb-1 block text-[13px] font-medium text-neutral-500">Phường xã</label>
                            <select className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-[14px] text-neutral-900 outline-none focus:border-indigo-300" defaultValue="Phường Thượng Cát">
                                <option>Phường Thượng Cát</option>
                            </select>
                        </div>
                    </div>
                </div>
            </SectionRow>

            <SectionRow
                label="Tiêu chuẩn và định dạng"
                description="Các tiêu chuẩn và định dạng được sử dụng để tính toán những thứ như giá cả sản phẩm, trọng lượng và thời gian đặt đơn hàng..."
            >
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <div>
                        <label className="mb-1 block text-[13px] font-medium text-neutral-500">Múi giờ</label>
                        <select className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-[14px] text-neutral-900 outline-none focus:border-indigo-300" defaultValue="(GMT+07:00) Bangkok, Hanoi">
                            <option>(GMT+07:00) Bangkok, Hanoi</option>
                        </select>
                    </div>
                    <div>
                        <label className="mb-1 block text-[13px] font-medium text-neutral-500">Đơn vị tiền tệ</label>
                        <select className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-[14px] text-neutral-900 outline-none focus:border-indigo-300" defaultValue="đ">
                            <option>đ</option>
                        </select>
                    </div>
                    <div>
                        <label className="mb-1 block text-[13px] font-medium text-neutral-500">Đơn hàng bắt đầu bằng</label>
                        <input className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-[14px] text-neutral-900 outline-none focus:border-indigo-300" defaultValue="DH" />
                    </div>
                    <div>
                        <label className="mb-1 block text-[13px] font-medium text-neutral-500">Mã vé bắt đầu bằng</label>
                        <input className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-[14px] text-neutral-900 outline-none focus:border-indigo-300" defaultValue="#" />
                    </div>
                </div>
            </SectionRow>

            <SectionRow label="Ngôn ngữ" description="Toàn bộ trang sẽ được áp dụng ngôn ngữ này">
                <select className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-[14px] text-neutral-900 outline-none focus:border-indigo-300" defaultValue="Tiếng Việt">
                    <option>Tiếng Việt</option>
                    <option>English</option>
                </select>
            </SectionRow>

            <SectionRow
                label="Điều khoản sử dụng"
                description="Điều khoản dịch vụ là thỏa thuận pháp lý giữa nhà cung cấp dịch vụ và người muốn sử dụng dịch vụ."
            >
                <RichTextEditor defaultValue="Điều khoản dịch vụ là thỏa thuận pháp lý giữa nhà cung cấp dịch vụ và người muốn sử dụng dịch vụ." />
            </SectionRow>

            <SectionRow
                label="Chính sách bảo mật"
                description="Chính sách bảo mật là một tuyên bố giải thích cách thức công ty thu thập, xử lý, lưu trữ và bảo mật thông tin của khách hàng với cửa hàng."
            >
                <RichTextEditor defaultValue="Chính sách bảo mật là một tuyên bố giải thích cách thức công ty thu thập, xử lý, lưu trữ và bảo mật thông tin của khách hàng với cửa hàng." />
            </SectionRow>

            <SectionRow
                label="Chính sách hoàn tiền"
                description="Chính sách hoàn tiền là quy tắc với hoạt động hoàn lại tiền sau khi khách hàng mua một hoặc nhiều sản phẩm, dịch vụ của cửa hàng."
            >
                <RichTextEditor defaultValue="Chính sách hoàn tiền là quy tắc với hoạt động hoàn lại tiền sau khi khách hàng mua một hoặc nhiều sản phẩm, dịch vụ của cửa hàng." />
            </SectionRow>

            <SectionRow
                label="Thương hiệu"
                description="Những yếu tố thương hiệu được sử dụng phổ biến trên các kênh bán hàng."
            >
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    <div>
                        <p className="mb-2 text-[13px] font-medium text-neutral-500">Logo</p>
                        <div className="flex h-30 items-center justify-center rounded-lg border border-dashed border-neutral-300 bg-neutral-50 text-[13px] text-neutral-500">
                            Chưa có tệp
                        </div>
                    </div>
                    <div>
                        <p className="mb-2 text-[13px] font-medium text-neutral-500">Favicon</p>
                        <div className="flex h-30 items-center justify-center rounded-lg border border-dashed border-neutral-300 bg-neutral-50 text-[13px] text-neutral-500">
                            Chưa có tệp
                        </div>
                    </div>
                    <div>
                        <p className="mb-2 text-[13px] font-medium text-neutral-500">Banner</p>
                        <div className="flex h-30 items-center justify-center rounded-lg border border-dashed border-neutral-300 bg-neutral-50 text-[13px] text-neutral-500">
                            Chưa có tệp
                        </div>
                    </div>
                </div>
            </SectionRow>
        </div>
    );
}
