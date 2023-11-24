type Product = {
  productName: string;
  price: number;
  quantity: number;
};

export type User = {
  userId: number;
  username: string;
  password?: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: Array<string>;
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders: Array<Product>;
};
