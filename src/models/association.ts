import Region from "@models/Region.ts";
import Country from "@models/Country.ts";

export const initAssociations = () => {
  Region.hasMany(Country, {
    onDelete: "CASCADE",
    hooks: true,
  });

  Country.belongsTo(Region, {
    onDelete: "CASCADE",
  });
};
