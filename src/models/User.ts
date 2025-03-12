import { DataTypes, Model } from "sequelize";
import database from "@lib/database.ts";
import {
  UserAttributes,
  UserCreationAttributes,
} from "@schemas/UserAttributes.ts";

const User = database.define<Model<UserAttributes, UserCreationAttributes>>(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);

export default User;
