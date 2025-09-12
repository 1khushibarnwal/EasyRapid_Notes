import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "../src/config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//middleware -> something which we send just before the "response"
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json()); //this middleware will parse JSON bodies: req.body
app.use(rateLimiter);

//actual work
app.use("/api/notes", notesRoutes); // prefix: "/api/notes"

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is listening to port", PORT);
  });
});
