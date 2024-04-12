import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

import bookingAdapter from "../adapters/booking-adapter";
import type { Booking } from "../../types/booking-types";

const bookingSlice = createSlice({
  name: "booking",
  initialState: bookingAdapter.getInitialState(),
  reducers: {
    addBooking: {
      reducer(state, action: PayloadAction<Booking>) {
        bookingAdapter.addOne(state, action.payload);
      },
      prepare(data: Omit<Booking, "id">) {
        return { payload: { ...data, id: nanoid() } };
      },
    },
    removeBooking: bookingAdapter.removeOne,
    updateBooking: bookingAdapter.updateOne,
  },
});

export const { addBooking, removeBooking, updateBooking } =
  bookingSlice.actions;

export default bookingSlice.reducer;
