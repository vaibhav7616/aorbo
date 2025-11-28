
# AORBO TREKS - Developer Documentation

**Version:** 1.0.0
**Last Updated:** [Current Date]

---

## 1. Introduction

Welcome to the AORBO TREKS developer documentation. This document provides a complete technical overview of the web application, designed to help developers understand its architecture, get it running locally, and contribute effectively.

AORBO TREKS is a **React-based Single Page Application (SPA)** that serves as a discovery platform for trekking adventures in India. Its core feature is a dynamic, AI-powered search experience built using the **Google Gemini API**. The application is architected to simulate a multi-page website using a fast, state-based routing system, and it is styled with **Tailwind CSS** for a fully responsive, modern design.

## 2. Key Features

-   **AI-Powered Search**: Generates dynamic destination details and images using the Gemini API.
-   **Simulated Multi-Page Navigation**: A fast, state-based routing system provides a seamless user experience across Home, Explore, Trip Styles, Inspiration, and About pages.
-   **Comprehensive Trek Discovery**: Features filtering by tags, categories, and a text-based search on the "Explore" page.
-   **Responsive Design**: A mobile-first, utility-driven design using Tailwind CSS ensures a great experience on all devices.
-   **Performant Animations**: Scroll-triggered animations are implemented efficiently using the `IntersectionObserver` API.
-   **Static Data Management**: Trek information is decoupled from the UI and managed in a central data file, making content updates easy.

---

## 3. Technology Stack

-   **Frontend Framework**: **React 19** (loaded via CDN)
-   **Language**: **TypeScript**
-   **AI Integration**: **Google Gemini API** (`@google/genai` via CDN)
    -   `gemini-2.5-flash`: Used for generating structured JSON content for destination details.
    -   `gemini-2.5-flash-image`: Used for on-the-fly image generation for search queries.
-   **Styling**: **Tailwind CSS** (loaded via CDN with JIT compiler)
-   **Icons**: A custom library of SVG icons implemented as reusable React components.

---

## 4. Project Structure

The project follows a standard React component structure, organized for clarity and maintainability.

```
/
├── components/
│   ├── icons/
│   │   └── Icons.tsx           # Library of all SVG icons
│   ├── AboutPage.tsx           # "About Us" page component
│   ├── AppPromo.tsx            # Component for the mobile app promo section
│   ├── BlogSection.tsx         # Component for the blog/inspiration section
│   ├── ExplorePage.tsx         # "Explore Treks" page component
│   ├── FeaturedDestinations.tsx# Carousel of popular treks on the homepage
│   ├── Footer.tsx              # Site-wide footer
│   ├── ForOperators.tsx        # CTA section for trek operators
│   ├── Header.tsx              # Site-wide header with navigation
│   ├── Hero.tsx                # Homepage hero section with AI search bar
│   ├── HowItWorks.tsx          # "How It Works" section
│   ├── InspirationPage.tsx     # "Inspiration" page component
│   ├── Logo.tsx                # Reusable logo component
│   ├── PageHero.tsx            # Reusable hero component for sub-pages
│   ├── SearchResults.tsx       # Component to display AI search results
│   ├── Testimonials.tsx        # Component for user testimonials
│   ├── TripStyles.tsx          # "Trip Styles" section on the homepage
│   ├── TripStylesPage.tsx      # "Trip Styles" page component
│   └── WhyUs.tsx               # "Why Trek with Us?" section
├── data/
│   └── treks.ts                # Central data source for all trek information
├── App.tsx                     # Main application component (state management, routing)
├── index.html                  # The single HTML entry point for the SPA
├── index.tsx                   # React root renderer and global script setup
├── metadata.json               # Application metadata
└── README.md                   # This documentation file
```

---

## 5. Getting Started: Local Development

### Prerequisites

-   A modern web browser (e.g., Chrome, Firefox).
-   A local web server. A simple one can be run with Python or Node.js.
-   A valid **Google Gemini API Key**.

### Setup Instructions

1.  **Clone the Repository**:
    ```bash
    git clone <repository_url>
    cd aorbo-treks
    ```

2.  **Configure the API Key**:
    The application requires the Gemini API key to be available as `process.env.API_KEY`. To simulate this in a browser-only environment, add the following script tag to `index.html` inside the `<head>` tag, **before** the main `<script type="module">` tag.

    ```html
    <!-- index.html -->
    <head>
        ...
        <script>
            window.process = {
                env: {
                    API_KEY: 'YOUR_GEMINI_API_KEY_HERE'
                }
            };
        </script>
        ...
    </head>
    ```
    **IMPORTANT**: If you are using Git, add this local change to your `.gitignore` file to prevent committing your API key.

3.  **Run a Local Server**:
    From the project's root directory, start a simple web server.
    
    **Using Python 3**:
    ```bash
    python -m http.server 8000
    ```
    **Using Node.js (with `serve` package)**:
    ```bash
    npx serve .
    ```

4.  **Access the Application**:
    Open your browser and navigate to `http://localhost:8000` (or the port specified by your server).

---

## 6. Architecture and Core Logic

### 6.1. State Management & Routing (`App.tsx`)

The application's core logic resides in `App.tsx`. It manages two critical pieces of state:
1.  **`currentPage`**: Controls which "page" component is rendered. This is a simple form of client-side routing that avoids the complexity of a full routing library.
2.  **`searchResults`**: Holds the state of the AI search. When it's non-null, the `SearchResults` component is rendered instead of the current page content, effectively creating a modal search view.

The `navigateTo` function updates `currentPage` and is passed down to navigation components like `Header`.

### 6.2. AI Search Flow (`handleSearch` in `App.tsx`)

This function orchestrates the entire AI-powered search experience.

1.  **Initiation**: Triggered by the Hero search bar or by clicking a trek card.
2.  **Caching**: A simple `Map` acts as an in-memory cache. If a search term is already in the cache, the API call is skipped, and the cached result is served immediately.
3.  **Loading State**: Sets `isSearching` to `true`, which shows spinners and skeleton loaders in the UI.
4.  **Parallel API Calls**:
    -   **Text Generation**: A request is sent to `gemini-2.5-flash` with a detailed prompt and a `responseSchema`. Using a schema is critical as it forces the Gemini API to return a predictable, structured JSON object, making the response easy and safe to parse.
    -   **Image Generation**: If no image is passed to the function (i.e., it was a text search), a parallel request is sent to `gemini-2.5-flash-image` to generate a relevant destination photo.
5.  **Data Merging**: The AI-generated details are merged with static data from `data/treks.ts` (e.g., pricing for a specific trek) to create a comprehensive result.
6.  **UI Update**: The final combined result is stored in the `searchResults` state, and the `isSearching` flag is set to `false`. This triggers a re-render to display the `SearchResults` component with the fetched data.
7.  **Error Handling**: A `try...catch` block gracefully handles API failures (e.g., network errors, parsing failures) and updates the `searchError` state to display a user-friendly message.

### 6.3. Data (`data/treks.ts`)

This file acts as a local database for all static trek content.
-   **`Trek` Interface**: Provides strong typing for all trek objects, ensuring data consistency.
-   **Decoupled Content**: This structure allows content (descriptions, prices, tags) to be updated easily without modifying any React components.
-   **Tags System**: The `tags` array within each trek object is the foundation of the filtering system on the `ExplorePage`.

---

## 7. Component & Feature Breakdown

This section details the purpose and functionality of the primary user-facing components.

### 7.1. Why Trek with Us? (`WhyUs.tsx`)

-   **Purpose**: To build user trust and highlight the core value propositions of the AORBO TREKS platform.
-   **Functionality**: This is a static component that presents three key benefits: trusted local operators, unmatched variety of treks, and community support. It uses icons and concise descriptions to quickly convey brand strengths.

### 7.2. How It Works (`HowItWorks.tsx`)

-   **Purpose**: To clearly explain the user journey for both trekkers and trekking operators.
-   **Functionality**: The component is split into two columns. It uses a step-by-step visual guide with numbered icons to illustrate the process from discovery to booking (for trekkers) and from sign-up to getting bookings (for operators).

### 7.3. Your Adventure in Your Pocket (`AppPromo.tsx`)

-   **Purpose**: To serve as a strong call-to-action (CTA) to download the companion mobile app.
-   **Functionality**: This section visually showcases mockups of the app and lists its key features, such as seamless booking, direct chat with operators, and offline maps. It includes prominent links to the Apple App Store and Google Play Store.

### 7.4. Grow Your Trekking Business (`ForOperators.tsx`)

-   **Purpose**: A dedicated CTA section aimed at attracting trekking operators to the platform.
-   **Functionality**: It communicates the primary benefit for operators—reaching a global audience and growing their business. It contains a single, clear CTA button that directs them to a sign-up or information page.

### 7.5. Find Your Perfect Trip Style (`TripStyles.tsx` & `TripStylesPage.tsx`)

-   **Purpose**: To help users discover types of treks that match their interests and capabilities, guiding them toward the `ExplorePage`.
-   **Functionality**:
    -   `TripStyles.tsx`: A section on the homepage that introduces various trek categories (e.g., Weekend, Himalayan, Family).
    -   `TripStylesPage.tsx`: A full-page component that expands on these categories with descriptive cards, each linking to the `ExplorePage`.

### 7.6. Inspiration For Your Next Journey (`BlogSection.tsx` & `InspirationPage.tsx`)

-   **Purpose**: To inspire users and provide valuable content that aids in their decision-making process.
-   **Functionality**:
    -   `BlogSection.tsx`: A homepage component that previews recent blog posts or inspirational articles.
    -   `InspirationPage.tsx`: A full-page, magazine-style layout featuring articles, guides ("Top 10 Monsoon Treks"), featured destinations, and user testimonials (`Testimonials.tsx` component). This page is designed to spark wanderlust and drive engagement.

---

## 8. Styling and Animations

### 8.1. Tailwind CSS

The project uses a CDN-hosted version of Tailwind CSS. All custom configurations (colors, fonts, keyframes) are defined within a `<script>` tag in `index.html`. This setup is simple but less scalable than a configuration file in a bundled project.

-   **Primary Colors**: `brand-primary` (orange), `brand-dark` (dark gray), `brand-light` (light gray).
-   **Fonts**: `Poppins` for display text and `Inter` for sans-serif body text.

### 8.2. Scroll Animations

Animations are handled performantly using a single `IntersectionObserver` instance initialized in `index.tsx`.
1.  Elements to be animated have the `animate-on-scroll` class.
2.  The `IntersectionObserver` watches all these elements.
3.  When an element enters the viewport (`isIntersecting`), the observer adds the `is-visible` class to it.
4.  CSS transitions defined in `index.html`'s `<style>` tag handle the fade-in and slide-up effects based on the `is-visible` class.
5.  Once an element is visible, the observer stops watching it (`unobserve`) to save resources.

---

## 9. Deployment

This application is a fully static site and can be deployed to any static hosting provider.

### Steps for Deployment

1.  **Choose a Provider**: Services like **Netlify**, **Vercel**, or **GitHub Pages** are excellent choices.
2.  **Connect Your Repository**: Link your Git repository to the hosting provider.
3.  **Configure Build Settings**: Since there is no build step, these settings can usually be left blank or set to publish the root directory.
4.  **Set Environment Variables**: In your hosting provider's dashboard, you **must** set the `API_KEY` environment variable. The application's JavaScript will be able to access this if the provider injects it.
    -   **Variable Name**: `API_KEY`
    -   **Variable Value**: `Your_Gemini_API_Key`

The site will be deployed and live at the URL provided by your host.

---

## 10. Future Enhancements & Roadmap

This project is a strong foundation. The following are potential improvements for future development:

-   **Integrate a Build Tool**: Migrating to a build tool like **Vite** would provide significant benefits, including:
    -   Proper environment variable handling with `.env` files.
    -   Code bundling, minification, and tree-shaking.
    -   A dedicated `tailwind.config.js` file for better organization.
    -   Hot Module Replacement (HMR) for a better development experience.

-   **Implement Proper Routing**: Replace the current state-based routing with **React Router**. This would enable shareable URLs, browser history support, and a more robust navigation structure.

-   **Refactor State Management**: For more complex state, consider using a dedicated state management library like **Zustand** or **Redux Toolkit** to centralize state and reduce prop drilling.

-   **Abstract API Calls**: Move the Gemini API logic from `App.tsx` into a custom hook (e.g., `useGeminiSearch`) or a separate service file to improve code organization and reusability.
