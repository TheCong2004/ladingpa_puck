export type TagStatus = "Đang hoạt động" | "Tạm ẩn";

export interface TagItem {
  id: string;
  name: string;
  description: string;
  color: string;
  usageCount: number;
  createdAt: string;
  status: TagStatus;
}

export interface NewTagPayload {
  name: string;
  description: string;
  color: string;
  status: TagStatus;
}
