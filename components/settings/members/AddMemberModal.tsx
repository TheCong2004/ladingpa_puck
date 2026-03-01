"use client";

import { useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";

type RoleKey = "landingPage" | "automation" | "sales" | "ladiWork" | "goals" | "customers";

const ROLE_LABELS: Record<RoleKey, string> = {
    landingPage: "Landing Page",
    automation: "Automation",
    sales: "Quản lý bán hàng",
    ladiWork: "LadiWork",
    goals: "Goals",
    customers: "Khách hàng",
};

const PERMISSIONS = [
    "Thêm khách hàng",
    "Sửa khách hàng",
    "Xóa khách hàng",
    "Xem danh sách khách hàng",
    "Nhập danh sách khách hàng",
    "Xuất danh sách khách hàng",
    "Công ty",
];

const ROLE_ROWS: Array<{ key: RoleKey; hasSelect: boolean }> = [
    { key: "landingPage", hasSelect: true },
    { key: "automation", hasSelect: true },
    { key: "sales", hasSelect: true },
    { key: "ladiWork", hasSelect: true },
    { key: "goals", hasSelect: true },
    { key: "customers", hasSelect: false },
];

function ToggleSwitch({ checked, onToggle }: { checked: boolean; onToggle: () => void }) {
    return (
        <button
            type="button"
            onClick={onToggle}
            className={`relative h-6 w-9 rounded-full transition-colors ${checked ? "bg-indigo-700" : "bg-neutral-200"}`}
            aria-pressed={checked}
        >
            <span
                className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white transition-all ${checked ? "left-4" : "left-1"
                    }`}
            />
        </button>
    );
}

interface AddMemberModalProps {
    open: boolean;
    onClose: () => void;
}

export function AddMemberModal({ open, onClose }: AddMemberModalProps) {
    const [roleEnabled, setRoleEnabled] = useState<Record<RoleKey, boolean>>({
        landingPage: true,
        automation: true,
        sales: false,
        ladiWork: false,
        goals: false,
        customers: true,
    });

    const [permissions, setPermissions] = useState<Record<string, boolean>>({
        "Thêm khách hàng": true,
        "Sửa khách hàng": true,
        "Xóa khách hàng": true,
        "Xem danh sách khách hàng": true,
        "Nhập danh sách khách hàng": true,
        "Xuất danh sách khách hàng": true,
        "Công ty": false,
    });

    if (!open) {
        return null;
    }

    const toggleRole = (key: RoleKey) => {
        setRoleEnabled((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const togglePermission = (permission: string) => {
        setPermissions((prev) => ({ ...prev, [permission]: !prev[permission] }));
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/35 px-4 py-6">
            <div className="flex min-h-full items-center justify-center">
                <div className="w-full max-w-150 overflow-hidden rounded-xl bg-white shadow-xl">
                    <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
                        <h2 className="text-[22px] font-bold text-neutral-900">Thêm thành viên mới</h2>
                        <button type="button" onClick={onClose} className="rounded-full p-1 text-neutral-500 hover:bg-neutral-100">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="space-y-5 px-5 py-5">
                        <div>
                                <label className="mb-2 block text-[13px] font-bold text-neutral-700">Email</label>
                            <input
                                placeholder="Nhập email thành viên"
                                    className="h-11 w-full rounded-lg border border-neutral-300 bg-white px-3 text-[13px] text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-indigo-300"
                            />
                        </div>

                        <div>
                                <p className="mb-2 text-[13px] font-bold text-neutral-700">Vai trò</p>
                            <div className="space-y-4">
                                {ROLE_ROWS.map((row) => {
                                    const enabled = roleEnabled[row.key];

                                    return (
                                        <div key={row.key} className="grid grid-cols-[1fr_320px] items-center gap-4">
                                            <div className="flex items-center gap-3">
                                                <ToggleSwitch checked={enabled} onToggle={() => toggleRole(row.key)} />
                                                <span className="text-[13px] text-neutral-900">{ROLE_LABELS[row.key]}</span>
                                            </div>

                                            {row.hasSelect ? (
                                                <div className="relative">
                                                    <select
                                                        disabled={!enabled}
                                                        defaultValue={enabled ? "Viewer" : "Chọn vai trò"}
                                                        className={`h-10 w-full appearance-none rounded-lg border px-3 pr-9 text-[13px] outline-none ${enabled
                                                                ? "border-neutral-300 bg-white text-neutral-900 focus:border-indigo-300"
                                                                : "border-neutral-200 bg-neutral-100 text-neutral-400"
                                                            }`}
                                                    >
                                                        <option>{enabled ? "Viewer" : "Chọn vai trò"}</option>
                                                        <option>Editor</option>
                                                        <option>Owner</option>
                                                    </select>
                                                    <ChevronDown
                                                        size={16}
                                                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"
                                                    />
                                                </div>
                                            ) : (
                                                <div />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div>
                                <p className="mb-2 text-[13px] text-neutral-500">Chia sẻ tài nguyên khách hàng</p>
                            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
                                <div className="grid grid-cols-3 gap-3">
                                    {PERMISSIONS.map((permission) => {
                                        const checked = permissions[permission];

                                        return (
                                            <label
                                                key={permission}
                                                    className="flex min-h-11 cursor-pointer items-start justify-between rounded-md bg-white px-3 py-2 text-[13px] text-neutral-700"
                                            >
                                                <span>{permission}</span>
                                                <input
                                                    type="checkbox"
                                                    checked={checked}
                                                    onChange={() => togglePermission(permission)}
                                                    className="peer sr-only"
                                                />
                                                <span
                                                    className={`ml-2 inline-flex h-4 w-4 items-center justify-center rounded border ${checked
                                                            ? "border-indigo-700 bg-indigo-700 text-white"
                                                            : "border-neutral-300 bg-white text-transparent"
                                                        }`}
                                                >
                                                    <Check size={12} />
                                                </span>
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-3 border-t border-neutral-200 px-5 py-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg border border-indigo-200 bg-white px-5 py-2.5 text-[13px] font-semibold text-neutral-700 hover:bg-neutral-50"
                        >
                            Hủy bỏ
                        </button>
                        <button className="rounded-lg bg-indigo-700 px-5 py-2.5 text-[13px] font-bold text-white hover:bg-indigo-800">
                            Thêm thành viên
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
