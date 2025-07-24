# Decision Log - NovaFix Project

## Stack Choices, Trade-offs, and Improvements

- **Stack Choices**:
  - Next.js 14.2.6 for serverless architecture and React 18 for dynamic UI.
  - Tailwind CSS 3.4.1 for responsive, modern styling.
  - TypeScript 5 for type safety.
  - Framer Motion 11.3.28 for animations (e.g., count-up).
  - `@radix-ui/react-dialog` and `@radix-ui/react-accordion` for accessible components.
  - `react-countup` for engaging stats.
  - Node.js 20.19.4 as runtime.

- **Trade-offs**:
  - Performance: 4s Fast 4G load meets <8s, but 68% Lighthouse score needs optimization (e.g., images, code splitting).
  - Accessibility: 100% Lighthouse score, though `sr-only` modal title is a visual compromise.
  - Form handling: Client-side avoids email complexity but limits backend scalability.

- **Improvements with More Time**:
  - Enhance performance with lazy-loaded components and image optimization for 90%+ Lighthouse score.
  - Integrate backend API (e.g., Next.js with Nodemailer) and database for email confirmations and lead storage, boosting user trust and data management while maintaining accessibility.
