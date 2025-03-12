import { hash } from "bcrypt";
import { findUserByEmail } from "@repos/user.ts";
import User from "@models/User.ts";
import createError from "http-errors";
import { NextFunction, Request, Response } from "express";
import { UserAttributes } from "@schemas/UserAttributes.ts";

/**
 * Handles user creation by validating request body, checking for existing users,
 * hashing the password, and saving the new user in the database.
 *
 * @param {Request} req - The Express request object containing user details in the body.
 * @param {Response} res - The Express response object used to send back the created user.
 * @param {NextFunction} next - The Express next function for error handling.
 *
 * @throws {BadRequest} If required fields (`firstname`, `lastname`, `email`, `password`) are missing.
 * @throws {Conflict} If a user with the provided email already exists.
 *
 * @returns {Promise<void>} Responds with the created user object (excluding the password).
 */
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { firstname, lastname, email, password } = req.body;
  try {
    if (!firstname || !lastname || !email || !password)
      throw createError.BadRequest(
        "Mandatory fields in the request body are missing"
      );
    const existingUser = await findUserByEmail(email);
    if (existingUser) throw createError.Conflict("This email is already taken");

    const hashedPassword = await hashPassword(password);

    const user: UserAttributes = {
      firstname,
      lastname,
      email,
      password: hashedPassword,
    };

    const newUser = await User.create(user);

    res.status(201).send({ ...newUser.dataValues, password: undefined });
  } catch (error) {
    next(error);
  }
};

/**
 * Hashes a raw password using Bcrypt
 * @param rawPassword - The password to hash
 * @throws `Error` if rawPassword is falsy
 * @returns - The hashed password
 */
const hashPassword = async (rawPassword: string) => {
  if (!rawPassword) throw new Error("Password cannot be falsy");
  return await hash(rawPassword, 12);
};
