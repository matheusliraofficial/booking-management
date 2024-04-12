import { render, screen, fireEvent } from "@testing-library/react";
import { test, describe, expect, vi } from "vitest";

import { PropertyCard } from "./PropertyCard";

const propertyMock = {
  title: "Sample Property",
  description: "This is a sample property description",
  imageSrc: "sample-image.jpg",
  isSelected: false,
  onClick: vi.fn(),
  maxGuests: 4,
};

describe("PropertyCard Component", () => {
  test("renders property details correctly", () => {
    render(<PropertyCard {...propertyMock} />);

    expect(screen.getByText("Sample Property")).toBeDefined();
    expect(
      screen.getByText("This is a sample property description")
    ).toBeDefined();
    expect(screen.getByRole("button")).toBeDefined();
  });

  test("calls onClick handler when button is clicked", () => {
    render(<PropertyCard {...propertyMock} />);
    fireEvent.click(screen.getByText("Book"));
    expect(propertyMock.onClick).toHaveBeenCalledTimes(1);
  });

  test('displays "Cancel Selection" when isSelected is true', () => {
    const selectedPropertyMock = { ...propertyMock, isSelected: true };
    render(<PropertyCard {...selectedPropertyMock} />);
    expect(screen.getByText("Cancel Selection")).toBeDefined();
  });

  test('displays "Book" when isSelected is false', () => {
    render(<PropertyCard {...propertyMock} />);
    expect(screen.getByText("Book")).toBeDefined();
  });

  test("should match snapshot", () => {
    render(<PropertyCard {...propertyMock} />);
    const card = screen.getByText("Book");
    expect(card).toMatchInlineSnapshot(`
      <button
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        type="button"
      >
        Book
      </button>
    `);
  });
});
