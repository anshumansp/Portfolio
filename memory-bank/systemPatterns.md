# System Patterns

## System Architecture
The portfolio is built as a single-page application (SPA) using React and Vite as the build tool. It follows a component-based architecture with modular sections that make up the complete portfolio.

## Key Technical Decisions
- React as the frontend framework for component-based UI development
- Tailwind CSS for styling to ensure consistency and rapid development
- Vite for fast development experience and optimized builds
- React Three Fiber/Three.js for 3D elements and animations
- Responsive design approach using modern CSS techniques

## Design Patterns in Use
- Component composition for UI elements
- Container/presentation pattern for separating logic and presentation
- Custom hooks for reusable logic
- Context API for managing application state where needed
- Lazy loading for optimized performance

## Component Relationships
- Main App container that houses all sections
- Section components (Hero, About, Projects, Contact, etc.)
- Reusable UI components (Button, Card, Navigation, etc.)
- Layout components for structure and responsive behavior
- Animation components for visual effects 