import { generateDateArray } from "@/lib/utils";
import type { Booking } from "../types/booking-types";

const useIsOverlapping = () => {
  const isOverlapping = (bookings: Booking[], newBooking: Booking): boolean => {
    if (!newBooking.from || !newBooking.to) return false;

    const newBookingfrom = new Date(newBooking.from);
    const newBookingto = new Date(newBooking.to);
    const newBookingDates = new Set(
      generateDateArray(newBookingfrom, newBookingto).map(
        (date) => date.toISOString().split("T")[0]
      )
    );

    for (const booking of bookings.filter(
      (booking) => booking.id !== newBooking.id
    )) {
      if (
        booking.from &&
        booking.to &&
        booking.propertyId === newBooking.propertyId
      ) {
        const from = new Date(booking.from);
        const to = new Date(booking.to);
        const existingBookingDates = generateDateArray(from, to);

        for (const date of existingBookingDates) {
          if (newBookingDates.has(date.toISOString().split("T")[0])) {
            return true;
          }
        }
      }
    }

    return false;
  };

  return { isOverlapping };
};

export { useIsOverlapping };
