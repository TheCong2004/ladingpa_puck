export const tabs = ["Tổng quan", "Phân tích khách hàng", "Thời gian mua hàng"];

export interface SegmentItem {
  name: string;
  color: string;
  value: number;
}

export const segmentItems: SegmentItem[] = [
  { name: "Facebook Subscribers", color: "bg-yellow-500", value: 0 },
  { name: "Zalo Subscribers", color: "bg-blue-500", value: 0 },
  { name: "SMS Subscribers", color: "bg-purple-700", value: 0 },
  { name: "Email Complaint Subscribers", color: "bg-gray-200 border border-gray-300", value: 0 },
  { name: "New Subscribers", color: "bg-pink-500", value: 0 },
  { name: "Email Subscribers", color: "bg-cyan-500", value: 0 },
];

export const tagOptions = [
  "Tất cả",
  "Facebook Subscribers",
  "Zalo Subscribers",
  "SMS Subscribers",
  "Email Subscribers",
  "New Subscribers",
];

export interface TopRevenueCustomer {
  name: string;
  email: string;
  phone: string;
  amount: number;
  tag: string;
  purchaseDate: string;
}

export const topRevenueCustomers: TopRevenueCustomer[] = [
  {
    name: "Nguyễn Minh Anh",
    email: "minhanh@gmail.com",
    phone: "0901123456",
    amount: 12500000,
    tag: "Facebook Subscribers",
    purchaseDate: "2026-03-01",
  },
  {
    name: "Trần Đức Huy",
    email: "duchuy@gmail.com",
    phone: "0902233445",
    amount: 8300000,
    tag: "Zalo Subscribers",
    purchaseDate: "2026-03-01",
  },
  {
    name: "Lê Bảo Ngọc",
    email: "baongoc@gmail.com",
    phone: "0909988776",
    amount: 7400000,
    tag: "SMS Subscribers",
    purchaseDate: "2026-02-28",
  },
  {
    name: "Phạm Gia Hân",
    email: "giahan@gmail.com",
    phone: "0933123456",
    amount: 5100000,
    tag: "Email Subscribers",
    purchaseDate: "2026-02-27",
  },
  {
    name: "Võ Nhật Quang",
    email: "nhatquang@gmail.com",
    phone: "0912345678",
    amount: 4600000,
    tag: "New Subscribers",
    purchaseDate: "2026-03-01",
  },
];
