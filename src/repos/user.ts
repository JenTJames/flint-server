import User from "@models/User.ts";
import { UserAttributes } from "@schemas/UserAttributes.ts";

/**
 * Finds a user by their email.
 * @param {string} email - The email of the user to find.
 * @returns {Promise<User | null>} A `User` object if found, otherwise `null`.
 * @throws {Error} If the email is falsy.
 */
export const findUserByEmail = (email: string) => {
  if (!email) throw new Error("Email cannot be falsy");
  return User.findOne({
    where: {
      email,
    },
  });
};

/**
 * Creates a new user
 * @param {UserAttributes} user - The user to create
 * @returns {Promise<UserAttributes>} The created`UserAttributes` object
 * @throws {Error} If the `user` is falsy or if the save fails
 */
export const createUser = (user: UserAttributes) => {
  if (!user) throw new Error("User cannot be falsy.");
  return User.create(user);
};
