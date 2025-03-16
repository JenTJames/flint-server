import { Router } from "express";
import { getRegions } from "@controllers/region.ts";

const router = Router();

/**
 * @openapi
 * /regions:
 *   get:
 *     summary: Gets all regions (Continents)
 *     servers:
 *       - url: /flint/api/v1
 *     description: Gets all regions (Continents).
 *     tags:
 *       - Region
 *     responses:
 *       200:
 *         description: The fetched regions
 *       500:
 *         description: Internal server error
 */
router.get("", getRegions);

export default router;
