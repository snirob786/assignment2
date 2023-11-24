import { Schema, model } from "mongoose";
import { User } from "./user.interface";
import bcrypt from "bcrypt";

const userSchema = new Schema<User>({
  userId: { type: Number },
  username: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    set: (password: string) =>
      bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
  },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number },
  email: { type: String, required: true, unique: true },
  isActive: { type: Boolean },
  hobbies: [String],
  address: {
    street: { type: String },
    city: { type: String },
    country: { type: String },
  },
  orders: [
    {
      productName: { type: String },
      price: { type: Number },
      quantity: { type: Number },
    },
  ],
});

export const UserModel = model<User>("User", userSchema);
