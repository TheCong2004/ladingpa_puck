export const formatDate = (value: string) => {
  const date = new Date(value);
  return date.toLocaleDateString("vi-VN");
};

export const sortHeaderClass = "flex items-center gap-1 whitespace-nowrap text-left text-[13px] font-extrabold leading-none text-neutral-700";
