import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import { dirname } from "path";

import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";

import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import { protectRoute } from "./middleware/protectRoute.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

console.log("✅ MONGO_URI from ENV_VARS:", ENV_VARS.MONGO_URI); // 🔍 Debug

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

// Static files in production
if (ENV_VARS.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
	});
}

// Start server
app.listen("https://movierecommendationsystem-finalyear.vercel.app/", () => {
  console.log("Server started...");
});

app.listen(ENV_VARS.PORT, () => {
	console.log(`🚀 Server started at http://localhost:${ENV_VARS.PORT}`);
	connectDB(); // ✅ Connect after server starts
});
