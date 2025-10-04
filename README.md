# Leftover Food Donation Platform

A full-stack web application that connects food donors (individuals and restaurants) with those in need. Built using **MERN stack** with secure authentication and responsive UI.

## Demo

- Frontend (Vercel): [https://your-vercel-frontend.vercel.app](https://left-over-food-donation-git-main-rishimas-projects.vercel.app/)  
- Backend (Render): [https://leftoverfood-donation.onrender.com](https://leftoverfood-donation-1.onrender.com/)  

> Note: For CORS and access, the frontend URL must be allowed in the backend configuration.

---

## Features

- User registration & login with JWT authentication
- Role selection: Individual donor or Restaurant donor
- Responsive dashboard for donors
- Food donation management
- Password strength validation
- Remember me and logout functionality

---

## Tech Stack

- **Frontend:** React, React Router, Axios, React Icons, Tailwind CSS / Custom CSS  
- **Backend:** Node.js, Express.js, MongoDB, Mongoose  
- **Deployment:** Frontend on Vercel, Backend on Render

---

## Getting Started

### Prerequisites

- Node.js v18+  
- npm or yarn  
- MongoDB connection string  

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/food-donation.git
cd food-donation
Frontend setup:

bash
Copy code
cd client
npm install
npm start
Backend setup:

bash
Copy code
cd server
npm install
npm run dev
Make sure to add a .env file in the backend folder:

env
Copy code
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=https://your-vercel-frontend.vercel.app
CORS setup in backend (Express):

js
Copy code
import cors from "cors";

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));
API Endpoints
Auth
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login existing user

Donor
Method	Endpoint	Description
GET	/api/donor/home	Get donor dashboard data
POST	/api/donor/donate	Submit food donation

Usage
Open the frontend URL in your browser.

Register as a new user.

Login to access the donor dashboard.

Select your donor role (Individual / Restaurant) to start donating.

Contributing
Fork the repository

Create a new branch (git checkout -b feature/xyz)

Make your changes

Commit and push (git commit -m "Add xyz" && git push origin feature/xyz)

Create a Pull Request

yaml
Copy code

-






