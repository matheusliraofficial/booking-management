import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { SelectRangeEventHandler } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import { Calendar } from "@/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import type { DatePickerProps } from "./DatePicker.types";

export const DatePicker = ({ className, value, onChange }: DatePickerProps) => (
  <div className={cn("grid gap-2", className)}>
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id="date"
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value?.from ? (
            value.to ? (
              <>
                {format(value.from, "LLL dd, y")} -{" "}
                {format(value.to, "LLL dd, y")}
              </>
            ) : (
              format(value.from, "LLL dd, y")
            )
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          initialFocus
          mode="range"
          selected={{ to: value?.from, from: value?.to }}
          onSelect={onChange as SelectRangeEventHandler}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  </div>
);
