import type { CustomerFieldItem, FieldTypeOption, FieldType } from "./types";

export const typeOptions: FieldTypeOption[] = [
  { label: "Tất cả kiểu dữ liệu", value: "all" },
  { label: "Dòng văn bản", value: "text" },
  { label: "Danh sách", value: "list" },
];

export const typeLabelMap: Record<FieldType, string> = {
  list: "Danh sách",
  text: "Dòng văn bản",
};

export const initialFields: CustomerFieldItem[] = [
  {
    id: "cf-1",
    displayName: "Last Order Product Variant IDs",
    fieldName: "last_order_product_variant_ids",
    type: "list",
    description: "Danh sách ID biến thể sản phẩm trong đơn hàng gần đây nhất mà hệ thống nhận được dữ liệu",
  },
  {
    id: "cf-2",
    displayName: "Last Order Tracking Code",
    fieldName: "last_order_tracking_code",
    type: "text",
    description: "Mã theo dõi đơn hàng gần đây nhất mà hệ thống nhận được dữ liệu",
  },
  {
    id: "cf-3",
    displayName: "Last Order Payment Status",
    fieldName: "last_order_payment_status",
    type: "text",
    description: "Trạng thái thanh toán đơn hàng gần đây nhất mà hệ thống nhận được dữ liệu",
  },
  {
    id: "cf-4",
    displayName: "Last Order Payment Method",
    fieldName: "last_order_payment_method",
    type: "text",
    description: "Phương thức thanh toán của đơn hàng gần đây nhất mà hệ thống nhận được dữ liệu",
  },
];
