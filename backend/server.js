import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js";

dotenv.config();
const app = express();

// ✅ CORS Configuration
app.use(
  cors({
    origin: "https://left-over-food-donation-git-main-rishimas-projects.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // optional if you use cookies
  })
);

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
