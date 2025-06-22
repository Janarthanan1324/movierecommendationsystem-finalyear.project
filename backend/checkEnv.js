import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const envPath = path.resolve(__dirname, "config", ".env");
const result = dotenv.config({ path: envPath });

console.log("dotenv load result:", result);
console.log("MONGO_URI =", process.env.MONGO_URI);
