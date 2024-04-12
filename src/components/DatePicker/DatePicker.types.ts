import type { DateRangeType } from "@/types/date-types";

export interface DatePickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value: DateRangeType | undefined;
  onChange: (date: DateRangeType) => void;
}
