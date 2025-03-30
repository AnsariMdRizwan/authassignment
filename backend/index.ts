import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import authRoutes from "./routes/authRoutes"; // Import authentication routes

dotenv.config();

const app: Application = express();
const prisma = new PrismaClient();
const PORT: number = Number(process.env.PORT) || 5000;

// Middleware
app.use(express.json()); // Parse JSON request body
app.use(cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true, // Allow cookies
  })); // Enable CORS

// Use authentication routes
app.use("/api/auth", authRoutes);

// Handle Prisma Disconnection on Server Exit
process.on("SIGINT", async () => {
  console.log("Shutting down gracefully...");
  await prisma.$disconnect();
  process.exit(0);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
