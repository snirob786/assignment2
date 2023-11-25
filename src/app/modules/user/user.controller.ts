import { Request, Response } from "express";
import { userService } from "./user.service";
import userValidationSchema from "./user.validate";

const createUser = async (req: Request, res: Response) => {
  const user = req.body;
  const { error } = userValidationSchema.validate(user);
  try {
    const result = await userService.createUser(user);
    return res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      success: true,
      message: "User creation found error!",
      error: error ? error.details : err,
    });
  }
};

const userList = async (req: Request, res: Response) => {
  try {
    const result = await userService.userList();
    return res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "User fetching found error!",
      error: error,
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const result = await userService.getUser(userId);
    if (!result) {
      return res.status(500).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
    return res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "User fetching found error!",
      error: error,
    });
  }
};

const updateUserByUserId = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const user = req.body;
  try {
    const result = await userService.updateUserByUserId(userId, user);
    if (!result) {
      return res.status(500).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
    return res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "User fetching found error!",
      error: error,
    });
  }
};

const deleteUserByUserId = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const result = await userService.deleteUserByUserId(userId);
    if (!result) {
      return res.status(500).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
    return res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: null,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "User fetching found error!",
      error: error,
    });
  }
};

const updateOrdersByUserId = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const orders = req.body;
  try {
    const userData = await userService.getUser(userId);
    if (!userData) {
      return res.status(500).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }

    userData.orders = [...userData.orders, ...orders];

    const result = await userService.updateUserByUserId(userId, userData);
    if (!result) {
      return res.status(500).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
    return res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: null,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "User fetching found error!",
      error: error,
    });
  }
};

const getOrdersByUserId = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const result = await userService.getOrdersByUserId(userId);
    if (!result) {
      return res.status(500).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
    return res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "User fetching found error!",
      error: error,
    });
  }
};

const getTotalByUserId = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const result = await userService.getOrdersByUserId(userId);
    if (!result) {
      return res.status(500).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }

    const totalPrice = result.orders.reduce(
      (accumulator: number, currentValue) => accumulator + currentValue.price,
      0
    );
    return res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: totalPrice.toFixed(2),
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "User fetching found error!",
      error: error,
    });
  }
};

export const userController = {
  createUser,
  userList,
  getUser,
  updateUserByUserId,
  deleteUserByUserId,
  updateOrdersByUserId,
  getOrdersByUserId,
  getTotalByUserId,
};
