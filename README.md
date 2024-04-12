# React + TypeScript + Vite Project

This project leverages React, TypeScript, and Vite to provide a fast development environment with Hot Module Replacement (HMR). It also incorporates ESLint for code linting and Tailwind CSS for styling.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (Preferably the latest LTS version)
- Yarn (This project uses Yarn as the package manager)

## Installation

Follow these steps to get your development environment running:

1. **Clone the repository**:

   ```
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:

   ```
   cd booking-management
   ```

3. **Install the dependencies**:
   ```
   yarn install
   ```

## Running the Project

To run the project in the development mode, use the following command:

```
yarn dev
```

## Building the Project

To create a production build, run:

```
yarn build
```

This compiles the application into static files in the dist directory.

## Project Structure

This project is structured into several key directories within the `src` folder, each serving a specific purpose in the application's architecture:

- **/components**: Contains all React components used throughout the application. Each component is encapsulated to include its functionality and styles, facilitating reusability.

- **/mocks**: Holds mock data and simulations for testing purposes. This allows developers to work independently from backend services and ensures components can be tested in isolation.

- **/store**: Centralizes application state management using Redux. This includes the store configuration, reducers for handling state changes, and potentially middleware for side effects.

  - **/store/slices**: Contains "slices" of state management logic, each defining reducers and actions for a specific part of the application state. This approach helps in organizing the code related to state management in a modular and maintainable way.

  - **/store/selectors**: Includes selectors for retrieving specific slices of state. Selectors help in decoupling the state structure from the UI components and improve performance with memoization.

- **/types**: Stores all TypeScript type definitions, enhancing code reliability and maintainability by providing type safety.

- **/utils**: A utility belt for the application, containing functions that perform common tasks which can be leveraged across the project to maintain clean and efficient code.

- **App.tsx**: The root component that sets up the overall page structure and integrates major components.

- **main.tsx**: The entry point for the React application, setting up and rendering the initial React component tree into the DOM.

## Key Functions Description

### `isOverlapping` Function

#### Overview

The `isOverlapping` function is a critical utility in reservation systems, designed to prevent booking conflicts by determining if a new booking overlaps with any existing bookings for the same property.

#### Parameters

- `bookings: Booking[]`: An array of bookings already made, against which the new booking will be validated.
- `newBooking: Booking`: The booking attempt that needs validation.

#### Importance in a Booking System

- **Conflict Avoidance**: Ensures no two bookings can occur simultaneously for the same property, thereby avoiding scheduling conflicts.
- **Resource Optimization**: Maximizes resource utilization by preventing double bookings, ensuring each booking is properly scheduled without overlaps.
- **User Experience Enhancement**: Reduces user dissatisfaction and support tickets related to booking errors, improving trust and reliability in the booking platform.

## Testing

To run the tests configured for this project, use:

```
yarn test
```

### Test cases:

1. **Component Rendering:** Tests if components render without crashing.
2. **Props Handling:** Checks if components correctly handle props.
3. **Event Handling:** Verifies that events (e.g., button clicks) trigger the appropriate functionality.
