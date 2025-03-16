import { NextFunction, Request, Response } from "express";
import { findRegions } from "@repos/region.ts";

/**
 * Retrieves a list of regions from the database and sends them in the response.
 *
 * @param _ - The request object (not used in this function).
 * @param res - The response object used to send the list of regions.
 * @param next - The next middleware function in the stack, used to handle errors.
 *
 * @returns A promise that resolves to sending the list of regions with a 200 status code.
 *
 * @throws Will call the next middleware with an error if the database query fails.
 */
export const getRegions = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const regions = await findRegions();
    res.status(200).send(regions);
  } catch (error) {
    next(error);
  }
};
