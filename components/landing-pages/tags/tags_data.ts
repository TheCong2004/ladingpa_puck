import type { TagItem } from "./tags_types";

export const TAG_COLOR_OPTIONS = [
  "bg-indigo-100 text-indigo-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
  "bg-cyan-100 text-cyan-700",
];

export const DEFAULT_TAGS: TagItem[] = [
  {
    id: "tag-1",
    name: "Tag số 1",
    description: "Nhóm khách hàng quan tâm ưu đãi",
    color: TAG_COLOR_OPTIONS[0],
    usageCount: 12,
    createdAt: "09:15, 01/03/2026",
    status: "Đang hoạt động",
  },
  {
    id: "tag-2",
    name: "Tag số 2",
    description: "Lead từ chiến dịch remarketing",
    color: TAG_COLOR_OPTIONS[1],
    usageCount: 7,
    createdAt: "10:42, 01/03/2026",
    status: "Đang hoạt động",
  },
  {
    id: "tag-3",
    name: "Tag số 3",
    description: "Đăng ký webinar",
    color: TAG_COLOR_OPTIONS[2],
    usageCount: 3,
    createdAt: "11:26, 01/03/2026",
    status: "Tạm ẩn",
  },
];
