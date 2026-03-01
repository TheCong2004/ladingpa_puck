export const sortHeaderClass = "flex items-center gap-1 whitespace-nowrap text-left text-[13px] font-extrabold leading-none text-neutral-700";

export const parseTimestamp = (value: string) => {
  const [timePart, datePart] = value.split(",").map((item) => item.trim());
  const [hour, minute] = timePart.split(":").map(Number);
  const [day, month, year] = datePart.split("/").map(Number);

  return new Date(year, month - 1, day, hour, minute).getTime();
};

export const currentTimestamp = () => {
  const now = new Date();
  const date = now.toLocaleDateString("vi-VN");
  const time = now.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit", hour12: false });
  return `${time}, ${date}`;
};
