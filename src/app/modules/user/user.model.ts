import { Schema, model } from "mongoose";
import { User } from "./user.interface";
import bcrypt from "bcrypt";

const userSchema = new Schema<User>({
  userId: { type: Number },
  username: { type: String, unique: true },
  password: {
    type: String,
    set: (password: string) =>
      bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
  },
  fullName: {
    firstName: { type: String },
    lastName: { type: String },
  },
  age: { type: Number },
  email: { type: String, unique: true },
  isActive: { type: Boolean },
  hobbies: [String],
  address: {
    street: { type: String },
    city: { type: String },
    country: { type: String },
  },
  orders: [
    {
      _id: false,
      productName: { type: String },
      price: { type: Number },
      quantity: { type: Number },
    },
  ],
});

export const UserModel = model<User>("User", userSchema);
