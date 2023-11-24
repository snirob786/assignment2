import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.get("/", userController.getUser);

router.post("/", userController.createUser);

export const userRouter = router;
