import Region from "@models/Region.ts";
import Country from "@models/Country.ts";

export const initAssociations = () => {
  Region.hasMany(Country);

  Country.belongsTo(Region);
};
