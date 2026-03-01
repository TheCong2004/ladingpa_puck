import { Cloud, FileText, Webhook } from "lucide-react";
import type { FormFieldOption, LinkedAccount } from "./forms_types";

export const DEFAULT_LINKED_ACCOUNTS: LinkedAccount[] = [
  {
    id: "google-forms",
    title: "Đồng bộ Google Forms với form từ Landing Page.",
    type: "Google Forms",
    icon: FileText,
  },
  {
    id: "api",
    title: "Tích hợp lưu data từ form về bên thứ 3 qua cổng API.",
    type: "API",
    icon: Cloud,
  },
];

export const EXTRA_LINKED_ACCOUNT_TEMPLATE: Omit<LinkedAccount, "id" | "title"> = {
  type: "Webhook",
  icon: Webhook,
};

export const DEFAULT_FORM_FIELDS: FormFieldOption[] = [
  { id: "full_name", label: "Họ và tên" },
  { id: "phone", label: "Số điện thoại" },
  { id: "email", label: "Email" },
  { id: "note", label: "Ghi chú" },
];
