export interface Booking {
  id: string;
  propertyId: number;
  from: Date;
  to: Date;
  guestsAdults: number;
  guestChildren: number;
}

export interface Property {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  maxGuests: number;
}
