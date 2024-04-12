import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const generateDateArray = (
  from: Date,
  to: Date
): Array<Date | never> => {
  const dates: Array<Date | never> = [];
  const currentDate = new Date(from.getTime());

  while (currentDate <= to) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};
