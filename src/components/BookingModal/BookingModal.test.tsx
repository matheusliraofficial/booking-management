import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { BookingModal } from "./BookingModal";
import { Booking } from "@/types/booking-types";

const booking: Booking = {
  id: "1",
  propertyId: 1,
  from: new Date("2024-01-01"),
  to: new Date("2024-01-05"),
  guestsAdults: 1,
  guestChildren: 1,
};

describe("BookingModal", () => {
  it("renders the modal with correct title", () => {
    render(
      <BookingModal
        booking={booking}
        onDateChange={vi.fn()}
        onChange={vi.fn()}
        onConfirm={vi.fn()}
        onCancel={vi.fn()}
      />
    );

    const modalTitle = screen.getByText(/Create Booking/i);
    expect(modalTitle).toBeDefined();
  });

  it("calls onConfirm when Confirm button is clicked", () => {
    const onConfirm = vi.fn();

    render(
      <BookingModal
        booking={booking}
        onDateChange={vi.fn()}
        onChange={vi.fn()}
        onConfirm={onConfirm}
        onCancel={vi.fn()}
      />
    );

    const confirmButton = screen.getByRole("button", { name: /Confirm/i });
    fireEvent.click(confirmButton);

    expect(onConfirm).toHaveBeenCalled();
  });

  it("calls onCancel when Cancel button is clicked", () => {
    const onCancel = vi.fn();

    render(
      <BookingModal
        booking={booking}
        onDateChange={vi.fn()}
        onChange={vi.fn()}
        onConfirm={vi.fn()}
        onCancel={onCancel}
      />
    );

    const cancelButton = screen.getByRole("button", { name: /Cancel/i });
    fireEvent.click(cancelButton);

    expect(onCancel).toHaveBeenCalled();
  });

  it("should match snapshot", () => {
    const { container } = render(
      <BookingModal
        booking={booking}
        onDateChange={vi.fn()}
        onChange={vi.fn()}
        onConfirm={vi.fn()}
        onCancel={vi.fn()}
      />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          aria-labelledby="modal-title"
          aria-modal="true"
          class="relative z-10"
          role="dialog"
        >
          <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
          <div
            class="fixed inset-0 z-10 w-screen overflow-y-auto"
          >
            <div
              class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"
            >
              <div
                class="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-lg"
              >
                <div
                  class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
                >
                  <div
                    class="mt-3 text-center"
                  >
                    <h3
                      class="text-base font-semibold leading-6 text-gray-900 mb-5"
                      id="modal-title"
                    >
                      Create
                       Booking
                    </h3>
                    <div
                      class="flex gap-5"
                    >
                      <div
                        class="w-full"
                      >
                        <p
                          class="text-left"
                        >
                          Property
                        </p>
                        <input
                          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed"
                          disabled=""
                          type="text"
                          value="Property 1"
                        />
                      </div>
                      <div
                        class="w-4/12"
                      >
                        <p
                          class="text-left"
                        >
                          Adults
                        </p>
                        <button
                          aria-autocomplete="none"
                          aria-controls="radix-:r11:"
                          aria-expanded="false"
                          class="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-full"
                          data-state="closed"
                          dir="ltr"
                          role="combobox"
                          type="button"
                        >
                          <span
                            style="pointer-events: none;"
                          >
                            1
                          </span>
                          <svg
                            aria-hidden="true"
                            class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m6 9 6 6 6-6"
                            />
                          </svg>
                        </button>
                      </div>
                      <div
                        class="w-4/12"
                      >
                        <p
                          class="text-left"
                        >
                          Children
                        </p>
                        <button
                          aria-autocomplete="none"
                          aria-controls="radix-:r12:"
                          aria-expanded="false"
                          class="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-full"
                          data-state="closed"
                          dir="ltr"
                          role="combobox"
                          type="button"
                        >
                          <span
                            style="pointer-events: none;"
                          >
                            1
                          </span>
                          <svg
                            aria-hidden="true"
                            class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m6 9 6 6 6-6"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div
                      class="mt-2"
                    >
                      <p
                        class="text-left"
                      >
                        Select Date
                      </p>
                      <div
                        class="grid gap-2"
                      >
                        <button
                          aria-controls="radix-:r13:"
                          aria-expanded="false"
                          aria-haspopup="dialog"
                          class="inline-flex items-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full justify-start text-left font-normal"
                          data-state="closed"
                          id="date"
                          type="button"
                        >
                          <svg
                            class="lucide lucide-calendar mr-2 h-4 w-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 2v4"
                            />
                            <path
                              d="M16 2v4"
                            />
                            <rect
                              height="18"
                              rx="2"
                              width="18"
                              x="3"
                              y="4"
                            />
                            <path
                              d="M3 10h18"
                            />
                          </svg>
                          Dec 31, 2023
                           -
                           
                          Jan 04, 2024
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-gray-50 px-4 py-3 flex flex-col gap-3 lg:flex-row-reverse lg:justify-start"
                >
                  <button
                    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    type="button"
                  >
                    Confirm
                  </button>
                  <button
                    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
