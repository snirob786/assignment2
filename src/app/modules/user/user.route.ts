import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

// Get methods for the api/users route
router.get("/", userController.userList);
router.get("/:userId", userController.getUser);
router.get("/:userId/orders", userController.getOrdersByUserId);
router.get("/:userId/orders/total-price", userController.getTotalByUserId);

// Post methods for the api/users route
router.post("/", userController.createUser);

router.put("/:userId", userController.updateUserByUserId);
router.put("/:userId/orders", userController.updateOrdersByUserId);

router.delete("/:userId", userController.deleteUserByUserId);

export const userRouter = router;
