import type { Booking } from "@/types/booking-types";
import type { DateRangeType } from "@/types/date-types";

export interface BookingModalProps {
  /**
   * The booking object
   */
  booking: Booking;

  /**
   * The button variation
   */
  mode?: "create" | "edit";

  /**
   * The on onChange anoter values callback
   */
  onChange: (key: string, value: string | number | undefined) => void;

  /**
   * The on onChange date callback
   */
  onDateChange: (date: DateRangeType) => void;

  /**
   * The onConfirm callback
   */
  onConfirm: () => void;

  /**
   * The onCancel callback
   */
  onCancel: () => void;
}
