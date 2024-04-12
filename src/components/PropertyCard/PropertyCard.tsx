import { UserRound } from "lucide-react";
import { Button } from "@/ui/button";
import type { PropertyCardProps } from "./PropertyCard.types";

export const PropertyCard = ({
  title,
  description,
  maxGuests,
  imageSrc,
  isSelected,
  onClick,
}: PropertyCardProps) => (
  <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full">
    <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
      <img
        className="w-full h-full object-cover"
        src={imageSrc}
        alt="Property Image"
      />
    </div>
    <div className="p-6">
      <div>
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {description}
        </p>
      </div>
      <div className="flex gap-3 mt-3">
        <div className="flex gap-1">
          <UserRound /> {maxGuests} guests
        </div>
      </div>
      <div className="mt-5">
        <Button type="button" onClick={onClick}>
          {isSelected ? "Cancel Selection" : "Book"}
        </Button>
      </div>
    </div>
  </div>
);
