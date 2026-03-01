import type { LeadItem } from "./leads_types";

export const DEFAULT_VALID_LEADS: LeadItem[] = [];

export const DEFAULT_ERROR_LEADS: LeadItem[] = [];

export const PERIOD_OPTIONS = [
  { value: "all", label: "Toàn thời gian" },
  { value: "7d", label: "7 ngày gần đây" },
  { value: "30d", label: "30 ngày gần đây" },
] as const;
