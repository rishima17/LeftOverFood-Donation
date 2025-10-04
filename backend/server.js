import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js";

dotenv.config();
const app = express();

// ✅ CORS Configuration
app.use(cors({
  origin: [
    "http://localhost:5173",  // your React (Vite) app
    "http://127.0.0.1:5173", // in case you open it via 127.0.0.1
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // allows cookies if you ever use them
}));

app.use(express.json());

// ✅ API Routes
app.use("/api/auth", authRoutes);

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// ✅ Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
