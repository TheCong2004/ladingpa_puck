export interface LeadItem {
  id: string;
  createdAt: string;
  fullName: string;
  phone: string;
  email: string;
  url: string;
}

export type LeadsTab = "valid" | "error";

export type LeadsPeriod = "all" | "7d" | "30d";
