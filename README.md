# 🛒 GoCart

GoCart is a full-stack e-commerce grocery application with a modern frontend and robust backend. This repository contains both the client (frontend) and server (backend) in a monorepo structure.

## 📁 Project Structure

client/
├── public/ # Static assets
│ └── favicon.ico
│
├── src/ # Source files
│ ├── assets/ # Images and other static resources
│ ├── components/ # Reusable components (Navbar, ProductCard, Categories, NewsLetter, MainBanner, Login, Loading, Footer, BottomBanner, BestSeller ) / seller
│ ├── pages/ # Route-based pages (Home, Login, Cart, etc.)
│ ├── routes/ # Route configuration
│ ├── services/ # Axios or API utility files
│ ├── App.jsx # Main App component
│ └── main.jsx # Entry point
│
├── .env # Environment variables
├── index.html # Root HTML file
├── package.json # Project dependencies and scripts
└── vite.config.js # Vite configuration
│
├── server/ # Backend (Node.js/Express)
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── config/
│ ├── .env
│ ├── server.js / index.js
│ └── package.json
│
└── README.md


## 🌐 Working Routes

### Backend API Routes (`/server`)

| Method | Endpoint              | Description                  |
|--------|------------------------|------------------------------|
| GET    | `/api/products`        | Get all products             |
| GET    | `/api/products/:id`    | Get single product by ID     |
| POST   | `/api/products`        | Add new product (Seller only) |
| PUT    | `/api/products/:id`    | Update product (Seller only)  |
| DELETE | `/api/products/:id`    | Delete product (Seller only)  |
| POST   | `/api/auth/register`   | Register a new user          |
| POST   | `/api/auth/login`      | User login                   |
| GET    | `/api/user/profile`    | Get user profile             |
| POST   | `/api/cart`            | Add item to cart             |
| GET    | `/api/cart`            | Get user's cart              |
| DELETE | `/api/cart/:id`        | Remove item from cart        |

### Frontend Routes (`/client`)

| Route           | Description                |
|------------------|----------------------------|
| `/`              | Home page with products    |
| `/login`         | User login page            |
| `/register`      | User registration page     |
| `/products/:id`  | Product detail page        |
| `/cart`          | User shopping cart         |
| `/profile`       | User profile/dashboard     |
| `/seller`         | Seller dashboard    |

## 🛠️ Technologies Used

### Frontend:
- React (with Vite)
- React Router DOM
- Axios
- Tailwind CSS 

### Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for Authentication
- dotenv for config management

## 🚀 Getting Started

### Clone the repo
```bash
git clone https://github.com/AdityaSrivastava20/GoCart.git
cd GoCart

cd server
npm install
npm run server

cd client
npm install
npm run dev


License
This project is licensed under the MIT License.
