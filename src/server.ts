import express, { Request, Response } from "express";
import dotenv from "dotenv";
import router from "./Routes/route";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/", router);

// heath check
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server running",
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
