import { Optional } from "sequelize";

export interface CountryAttributes {
  id: number;
  name: string;
}

export interface CountryCreationAttributes
  extends Optional<CountryAttributes, "id"> {}
