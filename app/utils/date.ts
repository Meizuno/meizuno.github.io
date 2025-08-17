const parseDate = (dateStr: string | null): Date | null => {
  if (!dateStr) return null;

  const parts = dateStr.split("-");
  if (parts.length < 2) return null;

  const year = Number(parts[0]);
  const month = Number(parts[1]);

  if (isNaN(year) || isNaN(month)) return null;

  return new Date(year, month - 1);
};

export const formatDate = (dateStr: string | null): string => {
  const date = parseDate(dateStr);
  if (!date) return "Present";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(date);
};

export const getDuration = (startStr: string, endStr: string | null): string => {
  const start = parseDate(startStr)!;
  const end = parseDate(endStr) ?? new Date();

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  const remMonths = months % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (remMonths > 0) parts.push(`${remMonths} mo${remMonths > 1 ? "s" : ""}`);

  return parts.join(" ") || "Less than a month";
};