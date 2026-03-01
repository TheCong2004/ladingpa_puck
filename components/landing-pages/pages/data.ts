export type LandingStatus = "Đã xuất bản" | "Chưa xuất bản" | "Đã xóa" | "Chuyển hướng 301";

export interface LandingRow {
  id: string;
  name: string;
  status: LandingStatus;
  member: string;
  updatedAt: string;
  access: number;
  conversions: number;
  revenue: string;
}

export const LANDING_DATA = [
  {
    id: "1",
    name: "daotao",
    status: "Chưa xuất bản",
    member: "cong",
    updatedAt: "21:46, 27/02/2026",
    access: 0,
    conversions: 0,
    revenue: "0đ",
  },
  {
    id: "2",
    name: "summer-campaign",
    status: "Đã xuất bản",
    member: "admin",
    updatedAt: "09:15, 26/02/2026",
    access: 154,
    conversions: 12,
    revenue: "4.200.000đ",
  },
  {
    id: "3",
    name: "old-landing-v1",
    status: "Đã xóa",
    member: "cong",
    updatedAt: "18:02, 25/02/2026",
    access: 33,
    conversions: 1,
    revenue: "250.000đ",
  },
  {
    id: "4",
    name: "ads-redirect",
    status: "Chuyển hướng 301",
    member: "admin",
    updatedAt: "11:30, 24/02/2026",
    access: 91,
    conversions: 0,
    revenue: "0đ",
  },
] satisfies LandingRow[];

export const STATUS_STYLES: Record<LandingStatus, string> = {
  "Đã xuất bản": "bg-emerald-50 text-emerald-700",
  "Chưa xuất bản": "bg-amber-50 text-amber-700",
  "Đã xóa": "bg-rose-50 text-rose-700",
  "Chuyển hướng 301": "bg-indigo-50 text-indigo-700",
};

export const MEMBER_OPTIONS = ["Tất cả", ...Array.from(new Set(LANDING_DATA.map((item) => item.member)))];
