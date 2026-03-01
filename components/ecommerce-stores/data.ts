export interface EcommerceStoreMenuItem {
  label: string;
  path: string;
  icon: "store" | "checkout" | "domain" | "conversion";
}

export const ecommerceStoreMenus: EcommerceStoreMenuItem[] = [
  { label: "Trang cửa hàng", path: "/ecommerce-stores/store-page", icon: "store" },
  { label: "Trang thanh toán", path: "/ecommerce-stores/checkout-page", icon: "checkout" },
  { label: "Tên miền", path: "/ecommerce-stores/domains", icon: "domain" },
  { label: "Mã chuyển đổi", path: "/ecommerce-stores/conversion-codes", icon: "conversion" },
];
