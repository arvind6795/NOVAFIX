# NovaFix - Fast Device Repair Service

Welcome to NovaFix, a modern web application for booking fast, on-site smartphone and laptop repairs within 60 minutes. Built with Next.js, this site features a responsive design, animated stats, and an accessible user interface.

## Features
- **Responsive Design**: Optimized for mobile and desktop (loads in <8s on 4G).
- **Services Section**: Highlights screen repair, battery replacement, and water damage fixes.
- **Pricing Table**: Displays clear repair costs.
- **FAQ Accordion**: Provides quick answers to common questions.
- **Booking Modal**: Allows users to submit repair requests.
- **Dark Mode**: Toggleable theme for user preference.
- **Accessibility**: 100% Lighthouse Accessibility score.

## Tech Stack
- **Next.js 14.2.6**: Server-side rendering and static site generation.
- **React 18**: Dynamic UI components.
- **Tailwind CSS 3.4.1**: Utility-first styling.
- **TypeScript 5**: Type safety.
- **Framer Motion 11.3.28**: Animations (e.g., count-up effect).
- **Radix UI**: Accessible dialog and accordion components.
- **Node.js 20.19.4**: Runtime environment.

## Tool Usage
- **Next.js 14.2.6**: Used in `src/app/layout.tsx` for page structure and `src/app/page.tsx` for routing and server-side rendering.
- **React 18**: Implemented in `src/app/page.tsx` for component-based UI (e.g., modal, services grid).
- **Tailwind CSS 3.4.1**: Applied in `src/app/globals.css` and `src/app/page.tsx` for responsive styling (e.g., `px-4 sm:px-6`).
- **TypeScript 5**: Used across `src/app/layout.tsx` and `src/app/page.tsx` for type definitions.
- **Framer Motion 11.3.28**: Utilized in `src/app/page.tsx` for animations (e.g., count-up effect).
- **Radix UI**: Employed in `src/app/page.tsx` for `Dialog` and `Accordion` components.
- **Node.js 20.19.4**: Runs the development server (`npm run dev`) and build process (`npm run build`).

## Acknowledgements
- **ChatGPT**: Assisted in designing the project structure, troubleshooting code, and optimizing performance and accessibility features.
- **GitHub**: Provided version control and repository hosting, enabling collaboration and deployment tracking.
- **Netlify**: Facilitated easy deployment and hosting, with continuous deployment from GitHub to a live URL.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/arvind6795/novafix.git
   cd novafix
2. **Install Dependencies:**:
      npm install
3. **Run Locally:**:
     npm run dev
## Deployment
Live URL: [https://novafix.netlify.app](https://novafix01.netlify.app/).
Deployed with Netlify: Uses .next as the publish directory.
Build Command: npm run build.
## Usage
Click "Book Repair Now" to open the modal and submit a repair request.
Toggle dark mode via the button in the header.
Explore services, pricing, and FAQs interactively.
