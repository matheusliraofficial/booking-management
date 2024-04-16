import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./slices/booking-slice";

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
