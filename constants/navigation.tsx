// constants/navigation.tsx
import React from "react";
import { 
  SquareStack, 
  Inbox, 
  Package, 
  Users, 
  BarChart3, 
  Settings, 
  Zap,
  Globe,
  ShoppingBag,
  Link2,
  PenTool,
  Database,
  Layout,
  Library,
  FormInput,
  Tag,
  ClipboardList,
  Clock3,
  Truck,
  SlidersHorizontal,
  Boxes,
  FolderTree,
  Star,
  Building2,
  UsersRound,
  CircleAlert
} from "lucide-react";

// --- INTERFACES ---
export interface SubItem {
  name: string;
  path: string;
  icon?: React.ReactElement<{ size?: number; strokeWidth?: number }>;
  children?: SubItem[];
}

export interface NavItem {
  name: string;
  icon: React.ReactElement<{ size?: number; strokeWidth?: number }>;
  path: string;
  active?: boolean;
  subItems?: SubItem[]; // Dùng để hiển thị ở cột menu thứ 2
}

export interface AppNavItem {
  name: string;
  icon: React.ReactElement<{ size?: number; strokeWidth?: number }>;
  color: string;
}

// --- MAIN NAVIGATION (Menu chính bên trái) ---
// Typography: Body 16px
export const MAIN_NAV: NavItem[] = [
  { 
    name: "Landing Pages", 
    icon: <SquareStack size={22} />, 
    path: "/Landing-Pages",
    active: true,
    subItems: [
      { name: "Pages", icon: <Layout size={20} />, path: "/landing-pages/pages" },
      { name: "Thư viện mẫu", icon: <Library size={20} />, path: "/landing-pages/templates" },
      { name: "Cấu hình Form", icon: <FormInput size={20} />, path: "/landing-pages/forms" },
      { name: "Tags", icon: <Tag size={20} />, path: "/landing-pages/tags" },
      { name: "Tên miền", icon: <Globe size={20} />, path: "/landing-pages/domains" },
      { name: "Data Leads", icon: <Database size={20} />, path: "/landing-pages/leads" },
    ]
  },
   { 
    name: "Đơn hàng", 
    icon:  <Inbox size={22} />, 
    path: "/orders",
    active: true,
    subItems: [
      { name: "Tất cả đơn hàng", icon: <ClipboardList size={20} />, path: "/orders/all" },
      { name: "Đơn chưa hoàn tất", icon: <Clock3 size={20} />, path: "/orders/pending" },
      { name: "Phiếu giao hàng", icon: <Truck size={20} />, path: "/orders/delivery-notes" },
      { name: "Quản lý Tag", icon: <Tag size={20} />, path: "/orders/tags" },
      { name: "Tên miền", icon: <Globe size={20} />, path: "/orders/domains" },
      { name: "Trường tùy chỉnh", icon: <SlidersHorizontal size={20} />, path: "/orders/custom-fields" },
    ]
  },
  {
    name: "Sản phẩm",
    icon: <Package size={22} />,
    path: "/products",
    active: true,
    subItems: [
      { name: "Sản phẩm", icon: <Package size={20} />, path: "/products/products" },
      { name: "Danh mục", icon: <FolderTree size={20} />, path: "/products/categories" },
      { name: "Tags", icon: <Tag size={20} />, path: "/products/tags" },
      { name: "Quản lý kho", icon: <Boxes size={20} />, path: "/products/inventory" },
      { name: "Quản lý đánh giá", icon: <Star size={20} />, path: "/products/reviews" },
      { name: "Trường tùy chỉnh", icon: <SlidersHorizontal size={20} />, path: "/products/custom-fields" },
    ]
  },
  {
    name: "Khách hàng",
    icon: <Users size={22} />,
    path: "/customers",
    active: true,
    subItems: [
      { name: "Danh sách", icon: <Users size={20} />, path: "/customers/list" },
      { name: "Công ty", icon: <Building2 size={20} />, path: "/customers/companies" },
      { name: "Segments", icon: <UsersRound size={20} />, path: "/customers/segments" },
      { name: "Quản lý Tag", icon: <Tag size={20} />, path: "/customers/tags" },
      { name: "Trường tuỳ chỉnh", icon: <SlidersHorizontal size={20} />, path: "/customers/custom-fields" },
      { name: "Lịch sử lỗi", icon: <CircleAlert size={20} />, path: "/customers/error-history" },
    ]
  },
  { name: "Báo cáo", icon: <BarChart3 size={22} />, path: "/reports" },
  { name: "Cài đặt", icon: <Settings size={22} />, path: "/settings",active: true,
    subItems: [
      { name: "Cài đặt chung", icon: <Settings size={20} />, path: "/settings/general" },
      {
        name: "Thành viên",
        icon: <Users size={20} />,
        path: "/settings/members",
        children: [
          { name: "Thành viên", path: "/settings/members" },
          { name: "Đội nhóm", path: "/settings/teams" },
        ],
      },
      { name: "Auto Assign", icon: <UsersRound size={20} />, path: "/settings/auto-assign" },
      {
        name: "Tích hợp",
        icon: <Link2 size={20} />,
        path: "/settings/integrations",
        children: [
          { name: "Tài khoản liên kết", path: "/settings/linked-accounts" },
          { name: "Mã tracking global", path: "/settings/global-tracking-code" },
        ],
      },
      { name: "Thanh toán", icon: <ShoppingBag size={20} />, path: "/settings/billing" },
      { name: "Cấu hình thanh toán", icon: <SlidersHorizontal size={20} />, path: "/settings/payment-configuration" },
      { name: "Khuyến mại", icon: <Tag size={20} />, path: "/settings/promotions" },
      { name: "Thông báo", icon: <Inbox size={20} />, path: "/settings/notifications" },
      { name: "Vận chuyển", icon: <Truck size={20} />, path: "/settings/shipping" },
      { name: "Lịch sử hoạt động", icon: <Clock3 size={20} />, path: "/settings/activity-history" },
      {
        name: "Bảo mật",
        icon: <CircleAlert size={20} />,
        path: "/settings/security",
        children: [
          { name: "Xác thực OTP", path: "/settings/otp-authentication" },
          { name: "Chặn spam đơn hàng", path: "/settings/order-spam-block" },
        ],
      },
      {
        name: "Webhooks & API",
        icon: <Globe size={20} />,
        path: "/settings/webhooks-api",
        children: [
          { name: "Webhooks", path: "/settings/webhooks" },
          { name: "API", path: "/settings/api" },
        ],
      },
      { name: "Quản lý tập tin", icon: <FolderTree size={20} />, path: "/settings/file-management" },
      { name: "Thông tin gói", icon: <Package size={20} />, path: "/settings/plan-info" },
    ] },
];

// --- APP NAVIGATION (Ứng dụng phía dưới) ---
// Typography: Caption 14px hoặc Body 16px tùy vị trí
export const APP_NAV: AppNavItem[] = [
  { name: "Automation", icon: <Zap size={20} />, color: "bg-orange-100 text-orange-600" },
  { name: "Website Builder", icon: <Globe size={20} />, color: "bg-stone-100 text-stone-600" },
  { name: "Ecommerce Stores", icon: <ShoppingBag size={20} />, color: "bg-green-100 text-green-600" },
  { name: "Short Links", icon: <Link2 size={20} />, color: "bg-red-100 text-red-600" },
  { name: "Blog", icon: <PenTool size={20} />, color: "bg-indigo-100 text-indigo-600" },
  { name: "Dynamic", icon: <Database size={20} />, color: "bg-blue-100 text-blue-600" },
];