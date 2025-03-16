import { Router } from "express";
import { createUser } from "@controllers/user.ts";

const router = Router();

/**
 * @openapi
 * /users:
 *   post:
 *     summary: Create a user
 *     servers:
 *       - url: /flint/api/v1
 *     description: Creates a new user.
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstname
 *               - lastname
 *               - email
 *               - password
 *             properties:
 *               firstname:
 *                 type: string
 *                 format: firstname
 *                 example: "Jane"
 *               lastname:
 *                 type: string
 *                 format: lastname
 *                 example: "Doe"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "securepassword123"
 *     responses:
 *       201:
 *         description: User creation successful
 *       400:
 *         description: Missing mandatory fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Mandatory user details are missing"
 *       500:
 *         description: Internal server error
 */
router.post("", createUser);

export default router;
