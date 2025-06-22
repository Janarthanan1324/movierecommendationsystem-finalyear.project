import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ✅ Correct .env path
const envPath = path.resolve(__dirname, ".env");
dotenv.config({ path: envPath });

console.log("✅ .env loaded from:", envPath);
console.log("✅ MONGO_URI from .env:", process.env.MONGO_URI);

export const ENV_VARS = {
	MONGO_URI: process.env.MONGO_URI,
	PORT: process.env.PORT || 5000,
	JWT_SECRET: process.env.JWT_SECRET,
	NODE_ENV: process.env.NODE_ENV,
	TMDB_API_KEY: process.env.TMDB_API_KEY,
};
