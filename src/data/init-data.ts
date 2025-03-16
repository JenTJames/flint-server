import { CountryCreationAttributes } from "@schemas/CountryAttributes.ts";
import { RegionCreationAttributes } from "@schemas/RegionAttributes.ts";

export const REGIONS: RegionCreationAttributes[] = [
  { id: 1, name: "Africa" },
  { id: 2, name: "Antarctica" },
  { id: 3, name: "Asia" },
  { id: 4, name: "Europe" },
  { id: 5, name: "North America" },
  { id: 6, name: "Oceania" },
  { id: 7, name: "South America" },
] as const;

export const COUNTRIES = [
  // Africa
  { id: 1, name: "Algeria", regionId: 1 },
  { id: 2, name: "Egypt", regionId: 1 },
  { id: 3, name: "Ethiopia", regionId: 1 },
  { id: 4, name: "Kenya", regionId: 1 },
  { id: 5, name: "Nigeria", regionId: 1 },
  { id: 6, name: "South Africa", regionId: 1 },

  { id: 7, name: "Antarctica", regionId: 2 },

  // Asia
  { id: 8, name: "China", regionId: 3 },
  { id: 9, name: "India", regionId: 3 },
  { id: 10, name: "Indonesia", regionId: 3 },
  { id: 11, name: "Iran", regionId: 3 },
  { id: 12, name: "Israel", regionId: 3 },
  { id: 13, name: "Japan", regionId: 3 },
  { id: 14, name: "Pakistan", regionId: 3 },
  { id: 15, name: "Philippines", regionId: 3 },
  { id: 16, name: "Saudi Arabia", regionId: 3 },
  { id: 17, name: "South Korea", regionId: 3 },
  { id: 18, name: "Thailand", regionId: 3 },
  { id: 19, name: "Turkey", regionId: 3 },
  { id: 20, name: "Vietnam", regionId: 3 },

  // Europe
  { id: 21, name: "France", regionId: 4 },
  { id: 22, name: "Germany", regionId: 4 },
  { id: 23, name: "Italy", regionId: 4 },
  { id: 24, name: "Netherlands", regionId: 4 },
  { id: 25, name: "Poland", regionId: 4 },
  { id: 26, name: "Russia", regionId: 4 },
  { id: 27, name: "Spain", regionId: 4 },
  { id: 28, name: "Sweden", regionId: 4 },
  { id: 29, name: "Switzerland", regionId: 4 },
  { id: 30, name: "United Kingdom", regionId: 4 },

  // North America
  { id: 31, name: "Canada", regionId: 5 },
  { id: 32, name: "Cuba", regionId: 5 },
  { id: 33, name: "Mexico", regionId: 5 },
  { id: 34, name: "United States", regionId: 5 },

  // Oceania
  { id: 35, name: "Australia", regionId: 6 },
  { id: 36, name: "Fiji", regionId: 6 },
  { id: 37, name: "New Zealand", regionId: 6 },
  { id: 38, name: "Papua New Guinea", regionId: 6 },

  // South America
  { id: 39, name: "Argentina", regionId: 7 },
  { id: 40, name: "Brazil", regionId: 7 },
  { id: 41, name: "Chile", regionId: 7 },
  { id: 42, name: "Colombia", regionId: 7 },
  { id: 43, name: "Peru", regionId: 7 },
  { id: 44, name: "Venezuela", regionId: 7 },
] as const;
