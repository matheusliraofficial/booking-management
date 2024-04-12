import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { BookingTable } from "./BookingTable";
import type { Booking } from "@/types/booking-types";
import type { Property } from "@/types/booking-types";

const bookings: Booking[] = [
  {
    id: "1",
    propertyId: 101,
    from: new Date("2024-01-01"),
    to: new Date("2024-01-05"),
    guestChildren: 1,
    guestsAdults: 1,
  },
  {
    id: "2",
    propertyId: 102,
    from: new Date("2024-01-06"),
    to: new Date("2024-01-10"),
    guestChildren: 1,
    guestsAdults: 1,
  },
];

const properties: Property[] = [
  {
    id: 101,
    title: "Beach House",
    description: "A cozy room with a view",
    imageSrc: "https://source.unsplash.com/1600x900/?house",
    maxGuests: 3,
  },
  {
    id: 102,
    title: "Mountain Cabin",
    description: "A cozy room with a view",
    imageSrc: "https://source.unsplash.com/1600x900/?house",
    maxGuests: 3,
  },
];

const onDelete = vi.fn();
const onEdit = vi.fn();

describe("BookingTable Component", () => {
  it("renders correctly with given bookings and properties", () => {
    render(
      <BookingTable
        bookings={bookings}
        properties={properties}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    );
    expect(screen.getByText("Beach House")).toBeDefined();
    expect(screen.getByText("Mountain Cabin")).toBeDefined();
  });

  it("calls onEdit when edit button is clicked", () => {
    render(
      <BookingTable
        bookings={bookings}
        properties={properties}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    );
    const editButtons = screen.getAllByText("EDIT");
    fireEvent.click(editButtons[0]);
    expect(onEdit).toHaveBeenCalledWith(bookings[0]);
  });

  it("calls onDelete when delete button is clicked", () => {
    render(
      <BookingTable
        bookings={bookings}
        properties={properties}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    );
    const deleteButtons = screen.getAllByText("DELETE");
    fireEvent.click(deleteButtons[0]);
    expect(onDelete).toHaveBeenCalledWith("1");
  });

  it("should match snapshot", () => {
    render(
      <BookingTable
        bookings={bookings}
        properties={properties}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    );

    const table = screen.getByRole("table");
    expect(table).toMatchInlineSnapshot(`
      <table
        class="min-w-full bg-white shadow-md rounded-xl"
      >
        <thead>
          <tr
            class="bg-blue-gray-100 text-gray-700"
          >
            <th
              class="py-3 px-4 text-left"
            >
              ID
            </th>
            <th
              class="py-3 px-4 text-left"
            >
              Property Name
            </th>
            <th
              class="py-3 px-4 text-left"
            >
              Adults
            </th>
            <th
              class="py-3 px-4 text-left"
            >
              Children
            </th>
            <th
              class="py-3 px-4 text-left"
            >
              Start Date
            </th>
            <th
              class="py-3 px-4 text-left"
            >
              End Date
            </th>
            <th
              class="py-3 px-4 text-left"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody
          class="text-blue-gray-900"
        >
          <tr
            class="border-b border-blue-gray-200"
          >
            <td
              class="py-3 px-4"
            >
              1
            </td>
            <td
              class="py-3 px-4"
            >
              Beach House
            </td>
            <td
              class="py-3 px-4"
            >
              1
            </td>
            <td
              class="py-3 px-4"
            >
              1
            </td>
            <td
              class="py-3 px-4"
            >
              Sun Dec 31 2023 21:00:00 GMT-0300 (Brasilia Standard Time)
            </td>
            <td
              class="py-3 px-4"
            >
              Thu Jan 04 2024 21:00:00 GMT-0300 (Brasilia Standard Time)
            </td>
            <td
              class="py-3 px-4"
            >
              <div
                class="flex gap-3"
              >
                <button>
                  <strong>
                    EDIT
                  </strong>
                </button>
                <button>
                  <strong>
                    DELETE
                  </strong>
                </button>
              </div>
            </td>
          </tr>
          <tr
            class="border-b border-blue-gray-200"
          >
            <td
              class="py-3 px-4"
            >
              2
            </td>
            <td
              class="py-3 px-4"
            >
              Mountain Cabin
            </td>
            <td
              class="py-3 px-4"
            >
              1
            </td>
            <td
              class="py-3 px-4"
            >
              1
            </td>
            <td
              class="py-3 px-4"
            >
              Fri Jan 05 2024 21:00:00 GMT-0300 (Brasilia Standard Time)
            </td>
            <td
              class="py-3 px-4"
            >
              Tue Jan 09 2024 21:00:00 GMT-0300 (Brasilia Standard Time)
            </td>
            <td
              class="py-3 px-4"
            >
              <div
                class="flex gap-3"
              >
                <button>
                  <strong>
                    EDIT
                  </strong>
                </button>
                <button>
                  <strong>
                    DELETE
                  </strong>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    `);
  });
});
