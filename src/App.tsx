import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BookingModal } from "@/components/BookingModal";
import { BookingTable } from "@/components/BookingTable";
import { PropertyCard } from "@/components/PropertyCard";
import { availableProperties } from "@/mocks/available-properties";
import { useIsOverlapping, useToast } from "@/hooks";
import {
  addBooking,
  updateBooking,
  removeBooking,
} from "@/store/slices/booking-slice";
import { selectAllBookings } from "@/store/selectors/booking-selecetor";

import type { Booking, Property } from "@/types/booking-types";
import type { DateRangeType } from "@/types/date-types";
import { addDays } from "date-fns";

const App = () => {
  const dispatch = useDispatch();
  const [bookingSelected, setBookingSelected] = useState<Booking | null>(null);
  const bookings = useSelector(selectAllBookings);
  const { isOverlapping } = useIsOverlapping();
  const { toast } = useToast();

  const handleDelete = (id: string) => {
    dispatch(removeBooking(id));
  };

  const handleBooking = () => {
    if (bookingSelected) {
      const reachedMaxCapacity = (bookingSelected.guestChildren + bookingSelected.guestsAdults) > Number(availableProperties.find(property => property.id === bookingSelected.propertyId)?.maxGuests)
      const isOverlappingWith = isOverlapping(bookings, bookingSelected)
      if (isOverlappingWith) {
        toast({
          title: "Oops",
          description: "This booking overlaps with an existing booking.",
          variant: "destructive",
        });
      } else if (reachedMaxCapacity) {
        toast({
          title: "Oops",
          description: "Guests amount is greater than available slots.",
          variant: "destructive",
        });
      }

      if (isOverlappingWith || reachedMaxCapacity) return;

      if (bookingSelected.id) {
        dispatch(
          updateBooking({ id: bookingSelected.id, changes: bookingSelected })
        );
        toast({
          title: "Success",
          description: "Booking updated successfully!",
          variant: "success",
        });
      } else {
        dispatch(addBooking(bookingSelected));
        toast({
          title: "Success",
          description: "Booking created successfully!",
          variant: "success",
        });
      }

      setBookingSelected(null);
    }
  };

  const handleChange = (key: string, value: string | number | undefined) => {
    setBookingSelected((prevData: Booking | null) => ({
      ...prevData!,
      [key]: value,
    }));
  };

  const handleDateChange = (date: DateRangeType | undefined) => {
    setBookingSelected((prevData: Booking | null) => ({
      ...prevData!,
      ...date,
    }));
  };

  const toggleSelectedBooking = ({ id }: Property) => {
    setBookingSelected((prevData) =>
      prevData?.propertyId === id
        ? null
        : {
            id: "",
            propertyId: id,
            from: new Date(),
            to: addDays(new Date(), 3),
            guestsAdults: 0,
            guestChildren: 0,
          }
    );
  };

  return (
    <div className="App p-8">
      {bookingSelected && (
        <BookingModal
          mode={bookingSelected.id ? 'edit' : 'create'}
          booking={bookingSelected}
          onChange={handleChange}
          onDateChange={handleDateChange}
          onConfirm={handleBooking}
          onCancel={() => setBookingSelected(null)}
        />
      )}
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold my-5">Booking Management</h1>
        <div className="flex flex-col gap-5 lg:flex-row">
          {availableProperties.map((property) => (
            <PropertyCard
              key={property.id}
              isSelected={bookingSelected?.propertyId === property.id}
              onClick={() => toggleSelectedBooking(property)}
              {...property}
            />
          ))}
        </div>
        <div className="mt-5">
          <h4 className="text-2xl font-bold mt-8">My Bookings:</h4>
          <BookingTable
            bookings={bookings}
            properties={availableProperties}
            onDelete={handleDelete}
            onEdit={setBookingSelected}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
