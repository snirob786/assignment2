import { User } from "./user.interface";
import { UserModel } from "./user.model";

const createUser = async (user: User) => {
  const response = new UserModel(user);
  await response.save();
  const newResponse = response.toObject();
  delete newResponse.password;
  return newResponse;
};

const userList = async () => {
  const result = await UserModel.find().select({
    username: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
    _id: 0,
  });
  return result;
};

const getUser = async (userId: string) => {
  const result = await UserModel.findOne({ userId }).select({
    password: 0,
    _id: 0,
  });
  return result;
};

export const userService = {
  createUser,
  userList,
  getUser,
};
