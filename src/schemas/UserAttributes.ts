import { Optional } from "sequelize";

// Define the full User attributes
export interface UserAttributes {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Define the attributes required for creation (excluding `id`, `createdAt` and `updatedAt`)
export interface UserCreationAttributes
  extends Optional<UserAttributes, "id" | "createdAt" | "updatedAt"> {}

export {};
