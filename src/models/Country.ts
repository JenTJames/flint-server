import {
  CountryAttributes,
  CountryCreationAttributes,
} from "@schemas/CountryAttributes.ts";
import { Model, DataTypes } from "sequelize";

import database from "@lib/database.ts";

const Country = database.define<
  Model<CountryAttributes, CountryCreationAttributes>
>(
  "countries",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default Country;
