"use client";

import { X } from "lucide-react";

interface CreateTeamModalProps {
    open: boolean;
    onClose: () => void;
}

export function CreateTeamModal({ open, onClose }: CreateTeamModalProps) {
    if (!open) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/35 px-4 py-6">
            <div className="flex min-h-full items-center justify-center">
                <div className="w-full max-w-155 overflow-hidden rounded-xl bg-white shadow-xl">
                    <div className="flex items-start justify-between border-b border-neutral-200 px-6 py-5">
                        <div>
                            <h2 className="text-[22px] font-bold leading-tight text-neutral-900">Tạo đội nhóm</h2>
                            <p className="mt-1 text-[13px] text-neutral-500">Hãy nhập thông tin bên dưới để tạo đội nhóm.</p>
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-full p-1 text-neutral-400 hover:bg-neutral-100"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="border-b border-neutral-200 px-6 py-6">
                        <label className="mb-2 block text-[13px] font-bold text-neutral-700">Tên đội nhóm</label>
                        <input
                            placeholder="Nhập tên đội nhóm"
                            className="h-11 w-full rounded-lg border border-indigo-300 bg-white px-3 text-[13px] text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-indigo-500"
                        />
                    </div>

                    <div className="flex items-center justify-end gap-3 px-6 py-5">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border border-indigo-200 bg-white px-6 py-2.5 text-[13px] font-semibold text-neutral-700 hover:bg-neutral-50"
                        >
                            Hủy bỏ
                        </button>
                        <button className="rounded-xl bg-indigo-700 px-6 py-2.5 text-[13px] font-bold text-white hover:bg-indigo-800">
                            Tạo đội nhóm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
