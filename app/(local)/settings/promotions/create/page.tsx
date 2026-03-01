"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CalendarDays, ChevronDown, ChevronLeft, CircleHelp } from "lucide-react";

export default function CreatePromotionPage() {
    const query = useSearchParams();
    const isProgramType = query.get("type") === "program";

    return (
        <div className="w-full px-4 py-5 sm:px-6 lg:px-12 xl:px-20">
            <div className="mx-auto w-full max-w-350">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2">
                        <Link
                            href="/settings/promotions"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-neutral-700 hover:bg-neutral-100"
                        >
                            <ChevronLeft size={18} />
                        </Link>
                        <h1 className="text-[20px] font-bold leading-tight text-neutral-900">
                            {isProgramType ? "Tạo chương trình khuyến mãi" : "Tạo khuyến mãi mới"}
                        </h1>
                    </div>

                    <button className="rounded-xl bg-indigo-700 px-5 py-2.5 text-[14px] font-bold text-white hover:bg-indigo-800">Tạo mới</button>
                </div>

                <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_320px]">
                    <div className="space-y-4 xl:w-80">
                        {isProgramType ? (
                            <section className="rounded-xl border border-neutral-200 bg-white p-4">
                                <h2 className="text-[22px] font-semibold text-neutral-900">Tiêu đề chương trình khuyến mãi</h2>

                                <div className="mt-4">
                                    <label className="mb-2 block text-[14px] font-semibold text-neutral-900">Tên chương trình khuyến mại</label>
                                    <input
                                        placeholder="e.g. CTKM T10"
                                        className="h-11 w-full rounded-lg border border-neutral-300 bg-white px-3 text-[14px] text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-indigo-300"
                                    />
                                </div>
                            </section>
                        ) : (
                            <>
                                <section className="rounded-xl border border-neutral-200 bg-white p-4">
                                    <h2 className="text-[22px] font-semibold text-neutral-900">Loại mã khuyến mãi</h2>

                                    <div className="mt-4">
                                        <label className="mb-2 block text-[14px] font-semibold text-neutral-900">Khuyến mại</label>
                                        <div className="relative">
                                            <select className="h-11 w-full appearance-none rounded-lg border border-neutral-300 bg-white px-3 pr-9 text-[14px] text-neutral-700 outline-none focus:border-indigo-300">
                                                <option>Giảm giá đơn hàng</option>
                                            </select>
                                            <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                                        </div>
                                    </div>

                                    <label className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-neutral-900">
                                        <input type="checkbox" className="h-4 w-4 rounded border border-neutral-300" />
                                        Áp dụng cùng với chương trình khuyến mại
                                    </label>

                                    <div className="mt-3 inline-flex items-center gap-2 text-[12px] text-neutral-500">
                                        <CircleHelp size={14} />
                                        Khuyến mãi sẽ áp dụng vào mã đơn hàng
                                    </div>
                                </section>

                                <section className="rounded-xl border border-neutral-200 bg-white p-4">
                                    <h2 className="text-[22px] font-semibold text-neutral-900">Hình thức tạo mã</h2>

                                    <div className="mt-4">
                                        <label className="mb-2 block text-[14px] font-semibold text-neutral-900">Hình thức tạo mã</label>
                                        <div className="relative">
                                            <select className="h-11 w-full appearance-none rounded-lg border border-neutral-300 bg-white px-3 pr-9 text-[14px] text-neutral-700 outline-none focus:border-indigo-300">
                                                <option>Tạo một mã</option>
                                            </select>
                                            <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <label className="mb-2 block text-[14px] font-semibold text-neutral-900">Mã khuyến mãi</label>
                                        <input
                                            placeholder="Nhập mã khuyến mãi"
                                            className="h-11 w-full rounded-lg border border-neutral-300 bg-white px-3 text-[14px] text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-indigo-300"
                                        />
                                    </div>
                                </section>
                            </>
                        )}

                        <section className="rounded-xl border border-neutral-200 bg-white p-4">
                            <h2 className="text-[22px] font-semibold text-neutral-900">Giảm giá</h2>

                            <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200">
                                <div className="grid grid-cols-2">
                                    <button type="button" className="h-9 bg-neutral-100 text-[14px] font-medium text-neutral-800">
                                        Phần trăm
                                    </button>
                                    <button type="button" className="h-9 bg-white text-[14px] font-semibold text-indigo-700">
                                        Số tiền
                                    </button>
                                </div>
                            </div>

                            <div className="relative mt-4">
                                <input className="h-11 w-full rounded-lg border border-neutral-300 bg-white px-3 pr-8 text-[14px] text-neutral-800 outline-none focus:border-indigo-300" />
                                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[14px] font-semibold text-neutral-500">đ</span>
                            </div>

                            <div className="mt-4">
                                <label className="mb-2 block text-[14px] font-semibold text-neutral-900">Áp dụng khuyến mãi cho</label>
                                <div className="relative">
                                    <select className="h-11 w-full appearance-none rounded-lg border border-neutral-300 bg-white px-3 pr-9 text-[14px] text-neutral-700 outline-none focus:border-indigo-300">
                                        <option>Toàn bộ đơn hàng</option>
                                    </select>
                                    <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                                </div>
                            </div>
                        </section>

                        {isProgramType ? (
                            <section className="rounded-xl border border-neutral-200 bg-white p-4">
                                <h2 className="text-[22px] font-semibold text-neutral-900">Yêu cầu tối thiểu</h2>
                                <div className="mt-4">
                                    <label className="mb-2 block text-[14px] font-semibold text-neutral-900">Yêu cầu</label>
                                    <div className="relative">
                                        <select className="h-11 w-full appearance-none rounded-lg border border-neutral-300 bg-white px-3 pr-9 text-[14px] text-neutral-700 outline-none focus:border-indigo-300">
                                            <option>Không yêu cầu</option>
                                        </select>
                                        <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                                    </div>
                                </div>
                            </section>
                        ) : (
                            <section className="rounded-xl border border-neutral-200 bg-white p-4">
                                <div>
                                    <label className="mb-2 block text-[14px] font-semibold text-neutral-900">Yêu cầu tối thiểu</label>
                                    <div className="relative">
                                        <select className="h-11 w-full appearance-none rounded-lg border border-neutral-300 bg-white px-3 pr-9 text-[14px] text-neutral-700 outline-none focus:border-indigo-300">
                                            <option>Yêu cầu</option>
                                        </select>
                                        <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label className="mb-2 block text-[14px] font-semibold text-neutral-900">Đối tượng áp dụng</label>
                                    <div className="relative">
                                        <select className="h-11 w-full appearance-none rounded-lg border border-neutral-300 bg-white px-3 pr-9 text-[14px] text-neutral-700 outline-none focus:border-indigo-300">
                                            <option>Đối tượng</option>
                                        </select>
                                        <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <p className="text-[14px] font-semibold text-neutral-900">Giới hạn sử dụng</p>

                                    <label className="mt-3 inline-flex items-center gap-2 text-[13px] text-neutral-800">
                                        <input type="checkbox" className="h-4 w-4 rounded border border-neutral-300" />
                                        Giới hạn số lần sử dụng
                                    </label>

                                    <label className="mt-3 inline-flex items-center gap-2 text-[13px] text-neutral-800">
                                        <input type="checkbox" className="h-4 w-4 rounded border border-neutral-300" />
                                        Giới hạn mỗi khách hàng chỉ được phép sử dụng mã này 1 lần
                                    </label>
                                </div>
                            </section>
                        )}

                        <section className="rounded-xl border border-neutral-200 bg-white p-4">
                            <h2 className="text-[22px] font-semibold text-neutral-900">Thời gian áp dụng</h2>

                            <div className="mt-4">
                                <label className="mb-2 block text-[14px] font-semibold text-neutral-900">Ngày bắt đầu</label>
                                <div className="relative">
                                    <input
                                        defaultValue={isProgramType ? "01-03-2026 20:54" : "01-03-2026 20:42"}
                                        className="h-11 w-full rounded-lg border border-neutral-300 bg-white px-3 pr-10 text-[14px] text-neutral-800 outline-none focus:border-indigo-300"
                                    />
                                    <CalendarDays size={15} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                                </div>
                            </div>

                            {isProgramType ? (
                                <label className="mt-3 inline-flex items-center gap-2 text-[13px] text-neutral-800">
                                    <input type="checkbox" className="h-4 w-4 rounded border border-neutral-300" />
                                    Chọn ngày hết hạn
                                </label>
                            ) : (
                                <div className="mt-3">
                                    <input
                                        placeholder="Chọn ngày hết hạn"
                                        className="h-11 w-full rounded-lg border border-neutral-300 bg-white px-3 text-[14px] text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-indigo-300"
                                    />
                                </div>
                            )}
                        </section>
                    </div>

                    <div className="space-y-4">
                        <section className="rounded-xl border border-neutral-200 bg-white p-4">
                            <h3 className="text-[20px] font-semibold text-neutral-900">
                                {isProgramType ? "Tổng quan chương trình khuyến mãi" : "Tổng quan khuyến mãi"}
                            </h3>
                            <div className="mt-4 space-y-2 text-[13px] text-neutral-500">
                                {isProgramType ? (
                                    <>
                                        <p>Tên chương trình:</p>
                                        <p>Hình thức:Chương trình khuyến mại</p>
                                        <p>Giảm giá theo:Số tiền</p>
                                    </>
                                ) : (
                                    <>
                                        <p>Mã khuyến mãi:</p>
                                        <p>Hình thức:Mã khuyến mại</p>
                                        <p>Loại khuyến mãi:Giảm giá đơn hàng</p>
                                        <p>Giảm giá theo:Số tiền</p>
                                    </>
                                )}
                            </div>
                        </section>

                        <section className="rounded-xl border border-neutral-200 bg-white p-4">
                            <h3 className="text-[20px] font-semibold text-neutral-900">Chi tiết khuyến mãi</h3>
                            <ul className="mt-4 list-disc space-y-2 pl-4 text-[13px] text-neutral-700">
                                {isProgramType ? (
                                    <>
                                        <li>Giảm 0 VND cho từng sản phẩm trong toàn bộ đơn hàng</li>
                                        <li>Áp dụng cho toàn bộ khách hàng</li>
                                        <li>Áp dụng từ 01/03/2026 20:54</li>
                                    </>
                                ) : (
                                    <>
                                        <li>Giảm 0 VND cho từng sản phẩm trong toàn bộ đơn hàng</li>
                                        <li>Áp dụng cho toàn bộ khách hàng</li>
                                        <li>Mỗi khách hàng được sử dụng 1 lần</li>
                                        <li>Áp dụng từ 01/03/2026 20:42</li>
                                    </>
                                )}
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
