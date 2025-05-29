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
Gocart/
├── client/   # React + Vite frontend
├── server/   # Node.js + Express backend
├── .gitignore
├── README.md
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
