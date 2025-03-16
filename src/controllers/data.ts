import { REGIONS, COUNTRIES } from "data/init-data.ts";
import Region from "@models/Region.ts";
import Country from "@models/Country.ts";
import { NextFunction, Request, Response } from "express";
import database from "@lib/database.ts";

/**
 * Initializes the data by bulk creating countries and regions.
 *
 * This function performs the following steps:
 * 1. Starts a new database transaction.
 * 2. Bulk creates countries using the `COUNTRIES` constant within the transaction.
 * 3. Bulk creates regions using the `REGIONS` constant within the transaction.
 * 4. Sends a 201 status code response upon successful completion.
 *
 * If an error occurs during any of these steps, the error is passed to the next middleware.
 *
 * @param _ - The request object (not used in this function).
 * @param res - The response object used to send the status code.
 * @param next - The next middleware function in the Express.js request-response cycle.
 *
 * @returns {Promise<void>} A promise that resolves when the data initialization is complete.
 */
export const seedData = async (
  _: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const transaction = await database.transaction();

  try {
    await database.sync({
      force: true,
    });

    await Region.bulkCreate(REGIONS, { transaction });

    await Country.bulkCreate(COUNTRIES, {
      transaction,
    });
    transaction.commit();

    res.sendStatus(201);
  } catch (error) {
    transaction.rollback();
    next(error);
  }
};
