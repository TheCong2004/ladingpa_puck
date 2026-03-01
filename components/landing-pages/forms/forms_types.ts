import type { LucideIcon } from "lucide-react";

export type FormConfigStep = 1 | 2;

export type IntegrationType = "Google Forms" | "API" | "Webhook";

export interface LinkedAccount {
  id: string;
  title: string;
  type: IntegrationType;
  icon: LucideIcon;
}

export interface FormFieldOption {
  id: string;
  label: string;
}

export interface SavedFormConfig {
  id: string;
  name: string;
  accountId: string;
  accountType: IntegrationType;
  accountTitle: string;
  fields: string[];
  successMessage: string;
  destinationKey: string;
  createdAt: string;
  status: "Đang hoạt động" | "Tạm dừng";
}
