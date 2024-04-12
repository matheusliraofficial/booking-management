import { createEntityAdapter } from "@reduxjs/toolkit";
import type { Booking } from "../../types/booking-types";

const bookingAdapter = createEntityAdapter({
  selectId: (booking: Booking) => booking.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

export default bookingAdapter;
