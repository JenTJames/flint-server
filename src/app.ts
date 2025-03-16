import "module-alias/register";

import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import database from "@lib/database.ts";
import authRoutes from "@routes/auth.ts";
import dataRoutes from "@routes/data.ts";
import userRoutes from "@routes/user.ts";
import { setupSwagger } from "./swagger.ts";
import regionRoutes from "@routes/region.ts";
import { initAssociations } from "@models/association.ts";

dotenv.config();
initAssociations();

const app = express();
const contextPath = "/flint/api/v1";

app.use(cors());
app.use(bodyParser.json());

app.use(`${contextPath}/auth`, authRoutes);
app.use(`${contextPath}/data`, dataRoutes);
app.use(`${contextPath}/users`, userRoutes);
app.use(`${contextPath}/regions`, regionRoutes);

setupSwagger(app);

const PORT = process.env.APP_PORT || 8080;

app.listen(PORT, async () => {
  try {
    await database.authenticate();
    await database.sync();
    console.log(`
        

 _____ _     ___ _   _ _____   ____  _____ ______     _______ ____  
|  ___| |   |_ _| \ | |_   _| / ___|| ____|  _ \ \   / / ____|  _ \ 
| |_  | |    | ||  \| | | |   \___ \|  _| | |_) \ \ / /|  _| | |_) |
|  _| | |___ | || |\  | | |    ___) | |___|  _ < \ V / | |___|  _ < 
|_|   |_____|___|_| \_| |_|   |____/|_____|_| \_\ \_/  |_____|_| \_\


        `);
    console.info("Database connected...");
    console.info(`Flint API Server running on port ${PORT}`);
    console.info(`Swagger docs at http://localhost:8080/api/v1/docs`);
  } catch (error) {
    console.error("Could not connect to the database:", error);
  }
});
