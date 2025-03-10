import express, { Router } from "express";
import { authenticateUser } from "@controllers/auth.ts";

const router = Router();

/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: Authenticate a user
 *     servers:
 *       - url: /flint/api/v1
 *     description: Validates user credentials and returns authentication status.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "securepassword123"
 *     responses:
 *       200:
 *         description: Authentication successful
 *       400:
 *         description: Missing credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "User credentials are missing"
 *       500:
 *         description: Internal server error
 */

router.post("/login", authenticateUser);

export default router;
