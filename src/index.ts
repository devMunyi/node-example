import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";

const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("Hello World!!! 🙌");
});

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  return res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));