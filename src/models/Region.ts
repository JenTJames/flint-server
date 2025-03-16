import database from "@lib/database.ts";
import {
  RegionAttributes,
  RegionCreationAttributes,
} from "@schemas/RegionAttributes.ts";
import { DataTypes, Model } from "sequelize";

const Region = database.define<
  Model<RegionAttributes, RegionCreationAttributes>
>("regions", {
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
    unique: true,
  },
});

export default Region;
