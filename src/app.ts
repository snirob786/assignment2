import express, { Request, Response } from "express";
import cors from "cors";
import { userRouter } from "./app/modules/user/user.route";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("This is a backend of assignment 2");
});

export default app;
