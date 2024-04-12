import { Button } from "@/ui/button";
import { DatePicker } from "@/components/DatePicker";
import { Input } from "@/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { availableProperties } from "@/mocks/available-properties";
import type { BookingModalProps } from "./BookingModal.types";

export const BookingModal = ({
  booking,
  mode = "create",
  onChange,
  onDateChange,
  onConfirm,
  onCancel,
}: BookingModalProps) => {

  const property = availableProperties.find(
    (property) => property.id === booking.propertyId
  );

  const arrayOfSeats = Array.from({ length: property!.maxGuests }, (_, index) => (
    <SelectItem key={index} value={String(index + 1)}>
      {index + 1}
    </SelectItem>
  ));

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="mt-3 text-center">
                <h3
                  className="text-base font-semibold leading-6 text-gray-900 mb-5"
                  id="modal-title"
                >
                  {mode === "create" ? "Create" : "Edit"} Booking
                </h3>
                <div className="flex gap-5">
                  <div className="w-full">
                    <p className="text-left">Property</p>
                    <Input type="text" value={property?.title} disabled />
                  </div>
                  <div className="w-4/12">
                    <p className="text-left">Adults</p>
                    <Select
                      onValueChange={(value) => {
                        onChange("guestsAdults", Number(value))
                      }}
                      value={String(booking.guestsAdults)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select adults numbers" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {arrayOfSeats}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-4/12">
                    <p className="text-left">Children</p>
                    <Select
                      onValueChange={(value) => {
                        onChange("guestChildren", Number(value))
                      }}
                      value={String(booking.guestChildren)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue
                          placeholder="Select children number"
                        />
                      </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {arrayOfSeats}
                          </SelectGroup>
                        </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-left">Select Date</p>
                  <DatePicker
                    value={{ from: booking.from, to: booking.to }}
                    onChange={onDateChange}
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex flex-col gap-3 lg:flex-row-reverse lg:justify-start">
              <Button onClick={onConfirm} type="button" variant="default">
                Confirm
              </Button>
              <Button onClick={onCancel} type="button" variant="outline">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
