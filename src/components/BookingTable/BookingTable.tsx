import type { BookingTableProps } from "./BookingTable.types";

export const BookingTable = ({
  bookings,
  properties,
  onDelete,
  onEdit,
}: BookingTableProps) => {
  const getRoomName = (bookinpropertyId: number) =>
    properties.find((property) => property.id === bookinpropertyId)?.title ||
    "";

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl">
          <thead>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Property Name</th>
              <th className="py-3 px-4 text-left">Adults</th>
              <th className="py-3 px-4 text-left">Children</th>
              <th className="py-3 px-4 text-left">Start Date</th>
              <th className="py-3 px-4 text-left">End Date</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-blue-gray-900">
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-b border-blue-gray-200">
                <td className="py-3 px-4">{booking.id}</td>
                <td className="py-3 px-4">{getRoomName(booking.propertyId)}</td>
                <td className="py-3 px-4">{booking.guestsAdults}</td>
                <td className="py-3 px-4">{booking.guestChildren}</td>
                <td className="py-3 px-4">{booking.from?.toString()}</td>
                <td className="py-3 px-4">{booking.to?.toString()}</td>
                <td className="py-3 px-4">
                  <div className="flex gap-3">
                    <button onClick={() => onEdit(booking)}>
                      <strong>EDIT</strong>
                    </button>
                    <button onClick={() => onDelete(booking.id)}>
                      <strong>DELETE</strong>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
