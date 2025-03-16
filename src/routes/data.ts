import { Router } from "express";
import { seedData } from "@controllers/data.ts";

const router = Router();

/**
 * @openapi
 * /data/seed:
 *   post:
 *     summary: Initializes the data in the tables
 *     servers:
 *       - url: /flint/api/v1
 *     description: Drops all tables in the database and recreates them. After that, the default static data is initialized.
 *     tags:
 *       - Data
 *     responses:
 *       201:
 *         description: Data seed successful
 *       500:
 *         description: Internal server error
 */
router.post("/seed", seedData);

export default router;
