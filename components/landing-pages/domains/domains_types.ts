export type DomainStatus = "Đã xác thực" | "Chờ xác thực" | "Lỗi cấu hình";

export interface DomainItem {
  id: string;
  host: string;
  target: string;
  provider: string;
  createdAt: string;
  status: DomainStatus;
}

export interface NewDomainPayload {
  host: string;
  target: string;
  provider: string;
}
