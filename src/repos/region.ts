import Region from "@models/Region.ts";

/**
 * Retrieves all regions from the database.
 *
 * @returns {Promise<Region[]>} A promise that resolves to an array of Region objects.
 */
export const findRegions = () => Region.findAll();
