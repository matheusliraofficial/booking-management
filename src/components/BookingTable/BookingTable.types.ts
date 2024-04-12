import type { Booking, Property } from "../../types/booking-types";

export interface BookingTableProps {
  /**
   * The bookings list
   */
  bookings: Booking[];

  /**
   * The properties list
   */
  properties: Property[];

  /**
   * the onDelete callback
   */
  onDelete: (id: string) => void;

  /**
   * the onEdit callback
   */
  onEdit: (id: Booking) => void;
}