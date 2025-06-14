# Gocart

Gocart is a full-stack web application built with a modern React frontend and a Node.js/Express backend. The repository is organized as a monorepo with separate `client` and `server` directories.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Frontend (client)](#frontend-client)
- [Backend (server)](#backend-server)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [License](#license)

---

## Project Structure

```
GoCart/
├── server/                   # Backend API server
│   ├── config/                # Configuration files
│   │   ├── cloudinary.js      # Cloudinary configuration (for image uploads)
│   │   └── db.js              # Database connection setup (e.g., MongoDB)
        └── multer.js          # handle multipart/form-data
│   ├── controllers/           # Request handlers and business logic
│   │   ├── user.controller.js     # User authentication & account management
│   │   ├── cart.controller.js     # collection management
│   │   ├── order.controller.js    # Order controller
│   │   ├── product.controller.js  # Product controller
│   │   ├── seller.controller.js   # Seller controller
│   │   ├── address.controller.js  # user address controller
│   │   
│   ├── middleware/            # Custom middleware for request processing
│   │   ├── auth.Middleware.js        # Admin authentication checks
│   │   └── authSeller.middleware.js  # Seller authentication checks
│   ├── models/                # Mongoose models for MongoDB collections
│   │   ├── address.model.js     # Address user model
│   │   ├── order.model.js       # product order model
│   │   ├── product.model.js     # Product model
│   │   ├── user.model.js        # User model
│   │   
│   ├── routes/               # API endpoints
│   │   ├── address.route.js   # user address management routes
│   │   ├── cart.route.js      # Cart routes
│   │   ├── order.route.js     # Order routes
│   │   ├── product.route.js   # Product routes
│   │   ├── seller.route.js    # Seller routes
│   │   ├── user.route.js      # User authentication routes
│   │ 
│   ├── .env                  # Environment variables (DB connection, API keys, etc.)
│   ├── package.json           # Backend dependencies & scripts
│   └── server.js              # Main entry point for backend server
│
├── frontend/                  # React frontend (client application)
│   ├── src/
│   │   ├── assets/                # Static files: images, SVGs, etc.
│   │   ├── components/            # Reusable UI components
│   │   │   ├── seller/            # Seller page
│   │   │   ├── BestSeller.jsx     # Best seller compnent
│   │   │   ├── BottomBanner.jsx   # Banner component
│   │   │   ├── Categories.jsx     # Categories component
│   │   │   ├── Footer.jsx         # Footer component
│   │   │   ├── Loading.jsx        # Loading component
│   │   │   ├── Login.jsx          # Login page
│   │   │   ├── MainBanner.jsx     # Main component
│   │   │   ├── Navbar.jsx         # Navbar component
│   │   │   ├── NewsLetter.jsx     # News Letter component
│   │   │   └── ProductCard.jsx    # Product card component
│   │   ├── context/               # React Context providers for global state
│   │   │   ├── AppContext.jsx        # User authentication state
│   │   ├── pages/                  # Page-level components for routing
│   │   │   ├── seller/              # Admin dashboard/pages 
│   │   │   ├── AddAddress.jsx       # Add Address page
│   │   │   ├── AllProducts.jsx      # All Products page
│   │   │   ├── Cart.jsx             # Shopping cart page
│   │   │   ├── Contact.jsx          # Contact form page
│   │   │   ├── Home.jsx             # Homepage
│   │   │   ├── MyOrders.jsx         # User order page
│   │   │   ├── Products.jsx         # Product listing page
│   │   │   ├── ProductDetails.jsx   # Single product detail page
│   │   │   ├── Products.jsx         # Product listing page
│   │   ├── index.css                # Global and modular stylesheets
│   │   ├── App.jsx                # Main React component (routing, layout)
│   │   └── main.jsx               # React app entry point
│   ├── index.html                 # Main HTML file
│   ├── package.json               # Frontend dependencies & scripts
│   └── vite.config.js             # Vite build configuration
│
└── README.md                      # Project documentation and setup guide
```

---

## Features

- **Modern React Frontend:** Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/), supports hot module reloading, routing, state management, and Tailwind CSS styling.
- **Robust Backend:** REST API powered by Express, MongoDB for data storage (via Mongoose), JWT authentication, file uploads, and more.
- **Authentication & Security:** Uses JWT for authentication, bcrypt for password hashing, CORS configuration, and environment variable management with dotenv.
- **Cloudinary Integration:** Handles media upload and storage.
- **Developer Experience:** ESLint, TypeScript-ready, and development tools for both client and server.

---

## Frontend (client)

- Built with React 19 and Vite.
- Tailwind CSS for utility-first styling.
- Routing via `react-router-dom`.
- State management with React's built-in hooks.
- Animations via Framer Motion.
- Toast notifications with react-hot-toast.

**Key scripts in `client/package.json`:**
- `dev` – Start the development server.
- `build` – Build for production.
- `lint` – Lint the codebase.
- `preview` – Preview the production build.

See `client/README.md` for more details.

---

## Backend (server)

- Node.js with Express for REST APIs.
- MongoDB database via Mongoose.
- JWT for authentication.
- File uploads with Multer and Cloudinary.
- Secure password storage with bcrypt.
- Environment variables managed by dotenv.
- Nodemon for hot-reloading during development.

**Key scripts in `server/package.json`:**
- `start` – Run the server.
- `server` – Start the dev server with Nodemon.

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### Setup

1. **Clone the repository**
    ```bash
    git clone https://github.com/AdityaSrivastava20/Gocart.git
    cd Gocart
    ```

2. **Install dependencies**

    - **Client:**
      ```bash
      cd client
      npm install
      ```

    - **Server:**
      ```bash
      cd ../server
      npm install
      ```

3. **Environment Variables**

    - Create a `.env` file in the `server/` directory and add necessary configurations for database, JWT, and Cloudinary.

4. **Run the applications**

    - **Client:**
      ```bash
      npm run dev
      ```
    - **Server:**
      ```bash
      npm run server
      ```

---

## Scripts

**Client scripts:**
- `dev` – Start frontend in development mode
- `build` – Build frontend for production
- `lint` – Lint frontend code
- `preview` – Preview built frontend

**Server scripts:**
- `start` – Run backend
- `server` – Run backend in development with hot reload

---

## License

This project is licensed under the ISC License.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## Author

- [Aditya Srivastava](https://github.com/AdityaSrivastava20)
