export const buildDateRangeLabels = (from: string, to: string) => {
  const start = new Date(from);
  const end = new Date(to);

  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || start > end) {
    return [] as string[];
  }

  const labels: string[] = [];
  const cursor = new Date(start);

  while (cursor <= end) {
    const year = cursor.getFullYear();
    const month = String(cursor.getMonth() + 1).padStart(2, "0");
    const day = String(cursor.getDate()).padStart(2, "0");
    labels.push(`${year}/${month}/${day}`);
    cursor.setDate(cursor.getDate() + 1);
  }

  return labels;
};
