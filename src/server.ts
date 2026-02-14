import express, { Request, Response } from "express";
import cors from "cors";
// import dotenv from "dotenv"; // optional, only for local dev
// import groupRoutes from "./routes/group.routes";
// import { errorHandler } from "./middleware/error.middleware";

// dotenv.config(); // optional for local dev

const app = express();

app.use(cors());
app.use(express.json());

// Minimal test route
app.get("/", (req: Request, res: Response) => {
  res.send("WORKING");
});

app.get("/test", (req: Request, res: Response) => {
  res.send("Server working");
});

// Example placeholder for your routes
// app.use("/api/groups", groupRoutes);

// Example placeholder for error handler
// app.use(errorHandler);

export default app;
