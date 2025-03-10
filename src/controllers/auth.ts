import { hash } from "bcrypt";
import User from "@models/User.ts";
import createError from "http-errors";
import { NextFunction, Request, Response } from "express";

export const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      throw createError.BadRequest("User credentials are missing");

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) throw createError.Unauthorized("Invalid Credentials");

    const hashedPassword = await hash(password, 12);

    if (!hashedPassword === user.dataValues.password)
      createError.Unauthorized("Invalid Credentials");
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};
