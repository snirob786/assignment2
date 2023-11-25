import Joi from "joi";

const userValidationSchema = Joi.object({
  userId: Joi.number(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  fullName: Joi.object({
    firstName: Joi.string().required().trim(),
    lastName: Joi.string().required().trim(),
  }).required(),
  age: Joi.number(),
  email: Joi.string().required().email(),
  isActive: Joi.boolean(),
  hobbies: Joi.array().items(Joi.string()),
  address: Joi.object({
    street: Joi.string(),
    city: Joi.string(),
    country: Joi.string(),
  }),
  orders: Joi.array().items(
    Joi.object({
      productName: Joi.string(),
      price: Joi.number(),
      quantity: Joi.number(),
    })
  ),
});

export default userValidationSchema;
