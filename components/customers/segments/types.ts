export type SortDirection = "asc" | "desc";

export interface SegmentItem {
  id: string;
  name: string;
  customers: number;
  createdAt: string;
  updatedAt: string;
}
