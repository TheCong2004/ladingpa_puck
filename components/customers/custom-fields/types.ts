export type FieldType = "list" | "text";

export type FieldTypeFilter = "all" | FieldType;

export interface CustomerFieldItem {
  id: string;
  displayName: string;
  fieldName: string;
  type: FieldType;
  description: string;
}

export interface FieldTypeOption {
  label: string;
  value: FieldTypeFilter;
}
