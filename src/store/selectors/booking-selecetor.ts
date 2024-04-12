import { RootState } from "../";
import bookingAdapter from "../adapters/booking-adapter";

const bookingSelectors = bookingAdapter.getSelectors<RootState>(
  (state) => state.booking
);

export const selectAllBookings = bookingSelectors.selectAll;
export const selectBookingById = bookingSelectors.selectById;
