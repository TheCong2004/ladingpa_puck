import type { DomainItem } from "./domains_types";

export const PROVIDER_OPTIONS = ["Cloudflare", "GoDaddy", "Namecheap", "Porkbun", "Khác"];

export const DEFAULT_DOMAINS: DomainItem[] = [
  {
    id: "domain-1",
    host: "demo.landinggo.vn",
    target: "landinggo-001.app",
    provider: "Cloudflare",
    createdAt: "10:22, 01/03/2026",
    status: "Đã xác thực",
  },
  {
    id: "domain-2",
    host: "sale.mybrand.vn",
    target: "landinggo-034.app",
    provider: "GoDaddy",
    createdAt: "11:08, 01/03/2026",
    status: "Chờ xác thực",
  },
  {
    id: "domain-3",
    host: "campaign.example.com",
    target: "landinggo-092.app",
    provider: "Namecheap",
    createdAt: "11:51, 01/03/2026",
    status: "Lỗi cấu hình",
  },
];
