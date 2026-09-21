# TOC - The Ola Collection

TOC - The Ola Collection is a responsive luxury lifestyle and fashion ecommerce storefront built with React, Vite, Tailwind CSS, React Router, and Firebase. The project presents a curated shopping experience for fashion pieces, room decor, accessories, scented candles, perfume atomizers, and other aesthetic products.

The application focuses on a refined storefront experience: editorial landing sections, category browsing, product search and sorting, detailed product pages, cart management, persistent local cart storage, and Firebase-backed product data.

## Project Overview

This project was created as a modern single-page ecommerce application for a curated retail brand. It combines a polished visual design system with practical shopping functionality, giving users the ability to browse products, inspect details, add items to a cart, and manage their selections before checkout.

The store is designed around a premium visual language: warm neutral colors, serif display typography, minimal layouts, large product imagery, and clean interaction states.

## Features

- Responsive React single-page application
- Home page with hero section, featured products, category previews, brand statement, and newsletter section
- Shop page with product grid, category filters, search, and sorting
- Product detail page with image, price, stock status, quantity selector, related products, and cart action
- Cart page with quantity updates, item removal, subtotal calculation, and localStorage persistence
- About page describing the brand story, values, and curation philosophy
- Contact page with customer care details and a client-side contact form success state
- Firebase Firestore integration for product data
- Firebase Auth service setup for future authentication features
- Product seeding helper for adding sample products to Firestore
- Tailwind CSS custom theme for the TOC brand system
- Vercel-ready configuration for client-side routing

## Tech Stack

| Area | Technology |
| --- | --- |
| Frontend | React 18 |
| Build Tool | Vite |
| Routing | React Router DOM |
| Styling | Tailwind CSS |
| State Management | React Context API and useReducer |
| Data Layer | Firebase Firestore |
| Auth Setup | Firebase Authentication |
| Persistence | Browser localStorage |
| Deployment | Vercel |

## Application Pages

| Route | Description |
| --- | --- |
| `/` | Landing page with hero, featured products, categories, and brand content |
| `/shop` | Full product catalogue with filtering, searching, and sorting |
| `/product/:id` | Product detail page for a selected item |
| `/cart` | Shopping cart and order summary |
| `/about` | Brand story and values |
| `/contact` | Contact details and enquiry form |

## Folder Structure

```text
toc-store/
+-- public/
|   +-- favicon.svg
+-- src/
|   +-- components/
|   |   +-- Footer.jsx
|   |   +-- Navbar.jsx
|   |   +-- ProductCard.jsx
|   |   +-- UI.jsx
|   +-- context/
|   |   +-- CartContext.jsx
|   +-- dev/
|   |   +-- seedProducts.js
|   +-- firebase/
|   |   +-- authService.js
|   |   +-- firebaseConfig.js
|   |   +-- products.js
|   +-- hooks/
|   |   +-- useProducts.js
|   +-- pages/
|   |   +-- About.jsx
|   |   +-- Cart.jsx
|   |   +-- Contact.jsx
|   |   +-- Home.jsx
|   |   +-- ProductDetail.jsx
|   |   +-- Shop.jsx
|   +-- utils/
|   |   +-- mockData.js
|   +-- App.jsx
|   +-- index.css
|   +-- main.jsx
+-- index.html
+-- package.json
+-- postcss.config.js
+-- tailwind.config.js
+-- vercel.json
+-- vite.config.js
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

Clone the repository, enter the project folder, and install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root and add your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

These values are used in `src/firebase/firebaseConfig.js` to connect the app to Firebase.

### Run Locally

Start the development server:

```bash
npm run dev
```

Vite will start the app locally, usually at:

```text
http://localhost:5173
```

## Firebase Setup

1. Create a Firebase project in the Firebase Console.
2. Register a web app and copy the Firebase config values.
3. Add those values to the `.env` file.
4. Enable Firestore Database.
5. Create a `products` collection.
6. Add product documents using the schema below.

### Product Schema

```json
{
  "name": "Product Name",
  "price": 15000,
  "category": "Room Decor",
  "image": "https://example.com/product-image.jpg",
  "description": "Product description.",
  "featured": true,
  "inStock": true,
  "createdAt": "Firestore server timestamp"
}
```

### Supported Categories

- Aesthetic Items
- Corporate Wear
- Sweatshirts
- Vintage Shirts
- Room Decor
- Perfume Atomizers
- Scented Candles
- Fancy Bottles
- Accessories

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint across the project |

## Deployment

The project includes a `vercel.json` file that rewrites all routes to `/`, allowing React Router routes to work correctly after deployment on Vercel.

To deploy:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the Firebase environment variables in the Vercel project settings.
4. Deploy the project.

## Design System

The visual identity is configured in `tailwind.config.js`.

- Primary serif: Cormorant Garamond
- Primary sans-serif: DM Sans
- Core palette: cream, linen, beige, sand, clay, taupe, brown, charcoal, black, and gold
- UI direction: minimal, editorial, premium, and product-focused

## What I Built

This project demonstrates a complete frontend e-commerce experience using React and Firebase. It includes reusable UI components, product listing and filtering logic, a fully functional shopping cart with persistent local storage, and a clean, responsive design system built with Tailwind CSS.

It also integrates Firebase Firestore for dynamic product data, with support for seeding, category filtering, and scalable structure for future backend features such as authentication, checkout, and order management.

## Future Improvements

- Add a checkout and payment flow
- Build an admin dashboard for product management
- Connect the contact form to an email or backend service
- Add user authentication flows
- Add order history and saved addresses
- Improve product image management with Firebase Storage
- Add automated tests for cart and product filtering behavior

## Author

Built as a client project for TOC - The Ola Collection, a curated fashion and lifestyle brand.
