import { Optional } from "sequelize";

export interface RegionAttributes {
  id: number;
  name: string;
}

export interface RegionCreationAttributes
  extends Optional<RegionAttributes, "id"> {}
