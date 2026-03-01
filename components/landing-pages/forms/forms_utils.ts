import type { IntegrationType, SavedFormConfig } from "./forms_types";

export const integrationDestinations: Record<IntegrationType, string[]> = {
  "Google Forms": ["Google Sheet ID", "Form Response ID", "Drive Folder ID"],
  API: ["API Endpoint", "API Key", "Webhook Secret"],
  Webhook: ["Webhook URL", "Fallback URL", "Custom Header Key"],
};

export const nowLabel = () => {
  const now = new Date();
  return now.toLocaleString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const buildNewConfig = (payload: {
  name: string;
  accountId: string;
  accountType: IntegrationType;
  accountTitle: string;
  fields: string[];
  successMessage: string;
  destinationKey: string;
}): SavedFormConfig => {
  return {
    id: `cfg-${Date.now()}`,
    name: payload.name,
    accountId: payload.accountId,
    accountType: payload.accountType,
    accountTitle: payload.accountTitle,
    fields: payload.fields,
    successMessage: payload.successMessage,
    destinationKey: payload.destinationKey,
    createdAt: nowLabel(),
    status: "Đang hoạt động",
  };
};
