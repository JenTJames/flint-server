import { compare } from "bcrypt";
import { findUserByEmail } from "@repos/user.ts";
import createError from "http-errors";
import { NextFunction, Request, Response } from "express";

/**
 * Authenticates a user by verifying the provided email and password.
 *
 * @param {Request} req - The Express request object containing user credentials in the body.
 * @param {Response} res - The Express response object used to send the authentication status.
 * @param {NextFunction} next - The Express next function for error handling.
 *
 * @throws {BadRequest} If email or password is missing from the request body.
 * @throws {Unauthorized} If the email does not exist or the password is incorrect.
 *
 * @returns {Promise<void>} Sends a 200 status code if authentication is successful.
 */
export const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      throw createError.BadRequest("User credentials are missing");

    const user = await findUserByEmail(email);

    if (!user) throw createError.Unauthorized("Invalid Credentials");

    const isValidPassword = await compare(password, user.dataValues.password);

    if (!isValidPassword) throw createError.Unauthorized("Invalid Credentials");
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};
