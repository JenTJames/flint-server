import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Flint API",
            version: "1.0.0",
            url: "/api/v1",
            description: "API documentation for Flint",
        },
    },
    apis: ["./src/routes/*.ts"], // Scan routes for JSDoc comments
};

const swaggerSpec = swaggerJsdoc(options);

export function setupSwagger(app: Express) {
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
