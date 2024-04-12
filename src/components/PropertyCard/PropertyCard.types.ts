import type { Property } from "@/types/booking-types";

export interface PropertyCardProps extends Omit<Property, "id"> {
  maxGuests: number;
  isSelected: boolean;
  onClick: () => void;
}
