export const sortHeaderClass = "flex items-center gap-1 whitespace-nowrap text-left text-[13px] font-extrabold leading-none text-neutral-700";

export const headerCellClass = "text-[13px] font-extrabold leading-none text-neutral-700";

export const formatDate = (value: string) => {
  const date = new Date(value);
  return date.toLocaleDateString("vi-VN");
};
